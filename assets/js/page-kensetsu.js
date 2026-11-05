// page-kensetsu.js — baca buku Kensetsu: daftar bab, pembaca, search, tap kata, rangkuman AI.
// Data: KENSETSU (assets/kensetsu-data.js). Kamus: KAMUS_ALL (kamus-core.js). AI: callAI (ai-settings.js).
const KS_WORDS_KEY = 'nihongo_ks_words';   // hasil "Tanya AI" per kata, disimpan lokal
const KS_SUM_KEY = 'nihongo_ks_sum';       // cache rangkuman AI
let KS_JUMP = null;                        // index paragraf yang dilompati setelah buka sub-bab dari search
let KS_LEX = null, KS_LEX_MAX = 2, KS_CACHE = null;

const KS_SECS = [];
KENSETSU.chapters.forEach(ch => ch.sections.forEach((s, i) => KS_SECS.push({ ...s, ch, idx: i })));
function ksSec(id) { return KS_SECS.find(s => s.id === id) || null; }
// halaman asli buku: penanda ['pb', N] di data → KS_PAGES[N-1] = {n, items:[{sec, idx:[indeks blok], head}]}
const KS_PAGES = [], KS_BLOCKPAGE = {};
let KS_CUR = 0;
(function ksPaginate() {
  let cur = null;
  KS_SECS.forEach(sec => {
    let first = true;
    sec.b.forEach((b, i) => {
      if (b[0] === 'pb') { cur = { n: b[1], items: [] }; KS_PAGES.push(cur); return; }
      if (!cur) { cur = { n: 1, items: [] }; KS_PAGES.push(cur); }
      let it = cur.items[cur.items.length - 1];
      if (!it || it.sec !== sec) { it = { sec, idx: [], head: first }; cur.items.push(it); }
      it.idx.push(i); KS_BLOCKPAGE[sec.id + '_' + i] = cur.n;
      if (first) { sec.startPage = cur.n; first = false; }
    });
  });
  KS_PAGES.forEach((pg, k) => { if (pg.n !== k + 1) console.warn('Nomor halaman Kensetsu tidak urut di', pg.n); });
})();
function ksPageOf(id, i) { return KS_BLOCKPAGE[id + '_' + i]; }
function ksEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function ksPlain(s) { return String(s).replace(/([\u4e00-\u9fff々]+)\{[^}]*\}/g, '$1'); }
function ksLoad(key) { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { return {}; } }
function ksSave(key, o) { try { localStorage.setItem(key, JSON.stringify(o)); } catch (e) {} }

// ─── kamus: surface → entri, dibangun sekali dari KAMUS_ALL ───
const KS_KANJI = /[\u4e00-\u9fff々]/, KS_KATA = /[\u30a0-\u30ffー]/, KS_HIRA_ONLY = /^[\u3040-\u309fー]+$/;
function ksAddSurface(map, s, i) {
  s = (s || '').replace(/【な】|（な）|\(na\)|[~〜\s]/gi, '');
  if (!s) return;
  const hasK = KS_KANJI.test(s);
  if (KS_HIRA_ONLY.test(s) ? s.length < 4 : s.length < 2) return;   // buang kata terlalu pendek (partikel, dll)
  if (!hasK && !KS_KATA.test(s) && !KS_HIRA_ONLY.test(s)) return;
  if (!map.has(s)) map.set(s, i);
}
function ksBuildLex() {
  if (KS_LEX) return;
  buildKamusIndex();
  KS_LEX = new Map();
  KAMUS_ALL.forEach((w, i) => {
    if (!['Kotoba', 'Kata Kerja', 'Kata Sifat', 'Counter'].includes(w.source)) return;
    (w.kanji || '').split(/[／/]/).forEach(k => ksAddSurface(KS_LEX, k, i));
    if (!w.kanji || KS_KATA.test(w.kana)) (w.kana || '').split(/[／/]/).forEach(k => ksAddSurface(KS_LEX, k, i));
    if (w.source === 'Kata Kerja') {
      // bentuk berimbuhan (行われ-, 進め-, ...): pakai batang kanji-nya
      const stem = (w.masu && w.masu.kanji ? w.masu.kanji : '').replace(/ます$/, '');
      if (stem.length >= 2 && KS_KANJI.test(stem)) ksAddSurface(KS_LEX, stem, i);
    }
  });
  KS_LEX.forEach((_, k) => { if (k.length > KS_LEX_MAX) KS_LEX_MAX = Math.min(k.length, 14); });
}
function ksCache() { return KS_CACHE || (KS_CACHE = ksLoad(KS_WORDS_KEY)); }

function ksMatchAt(t, i) {
  for (let L = Math.min(KS_LEX_MAX, t.length - i); L >= 2; L--) {
    const sub = t.substr(i, L);
    if (ksCache()[sub]) return { len: L, c: sub };
    if (KS_LEX.has(sub)) return { len: L, i: KS_LEX.get(sub) };
  }
  return null;
}
// ─── furigana: "漢字{よみ}" → teks polos + anotasi {s,e,r} (posisi di teks polos) ───
function ksParse(t) {
  let plain = '', ann = [], last = 0, m;
  const re = /([\u4e00-\u9fff々]+)\{([^}]*)\}/g;
  while ((m = re.exec(t))) {
    plain += t.slice(last, m.index);
    ann.push({ s: plain.length, e: plain.length + m[1].length, r: m[2] });
    plain += m[1]; last = re.lastIndex;
  }
  return { plain: plain + t.slice(last), ann };
}
// teks polos → daftar token: w (ada di kamus), c (hasil Tanya AI), u (belum ada), p (huruf biasa)
function ksTokens(t) {
  const out = [], isWordCh = ch => KS_KANJI.test(ch) || KS_KATA.test(ch);
  let i = 0;
  while (i < t.length) {
    const m = ksMatchAt(t, i);
    if (m) { out.push(m.c ? { s: i, e: i + m.len, k: 'c' } : { s: i, e: i + m.len, k: 'w', i: m.i }); i += m.len; continue; }
    if (isWordCh(t[i])) {
      let j = i + 1;
      while (j < t.length && isWordCh(t[j]) && !ksMatchAt(t, j)) j++;
      out.push({ s: i, e: j, k: j - i >= 2 ? 'u' : 'p' }); i = j; continue;
    }
    out.push({ s: i, e: i + 1, k: 'p' }); i++;
  }
  return out;
}
// batas token tidak boleh memotong satu blok furigana: token yang menyentuh blok seperti itu digabung
function ksMergeRuby(tokens, ann, t) {
  let changed = true;
  while (changed) {
    changed = false;
    for (const a of ann) {
      const hit = tokens.filter(k => k.s < a.e && k.e > a.s);
      if (hit.length > 1 && hit.some(k => (k.s > a.s && k.s < a.e) || (k.e > a.s && k.e < a.e))) {
        const s = Math.min(...hit.map(k => k.s)), e = Math.max(...hit.map(k => k.e));
        const merged = { s, e, k: e - s >= 2 ? 'u' : 'p' };
        tokens = tokens.filter(k => !(k.s >= s && k.e <= e));
        tokens.push(merged); tokens.sort((x, y) => x.s - y.s); changed = true; break;
      }
    }
  }
  return tokens;
}
function ksInner(t, s, e, ann) {
  let out = '', i = s;
  ann.filter(a => a.s >= s && a.e <= e).forEach(a => {
    out += ksEsc(t.slice(i, a.s)) + `<ruby>${ksEsc(t.slice(a.s, a.e))}<rt>${ksEsc(a.r)}</rt></ruby>`; i = a.e;
  });
  return out + ksEsc(t.slice(i, e));
}
// teks (dengan furigana opsional) → HTML: ruby + kata bisa di-tap
function ksRender(raw) {
  const { plain: t, ann } = ksParse(raw);
  const toks = ksMergeRuby(ksTokens(t), ann, t);
  return toks.map(k => {
    const inner = ksInner(t, k.s, k.e, ann), txt = ksEsc(t.slice(k.s, k.e));
    if (k.k === 'w') return `<span class="ks-w" data-i="${k.i}">${inner}</span>`;
    if (k.k === 'c') return `<span class="ks-w ks-c" data-u="${txt}">${inner}</span>`;
    if (k.k === 'u') return `<span class="ks-u" data-u="${txt}">${inner}</span>`;
    return inner;
  }).join('');
}
// judul: ruby saja, tanpa tap kata
function ksRb(raw) { const { plain: t, ann } = ksParse(raw); return ksInner(t, 0, t.length, ann); }

// ─── daftar isi (目次) ───
function ksList() {
  const el = document.getElementById('ksList');
  el.innerHTML = '<div class="ks-toc">' + KENSETSU.chapters.map(ch => `
    <section class="ks-ch">
      <div class="ks-ch-head">
        <div class="ks-ch-no">第${ch.n}章</div>
        <div class="ks-ch-t">${ksRb(ch.title)}</div>
        <button class="ks-btn ks-btn-sm" onclick="ksSummarizeChapter(${ch.n})">✦ Rangkum bab</button>
      </div>
      <div class="ks-sum" id="ksChSum${ch.n}" hidden></div>
      ${KS_SECS.filter(x => x.ch === ch && !x.nohead).map(s => `
        <a class="ks-row ks-d${s.id.split('.').length}" href="#p${s.startPage}">
          <span class="ks-row-n">${s.id}</span>
          <span class="ks-row-t">${ksRb(s.t)}</span>
          <span class="ks-row-dots"></span>
          <span class="ks-row-p">${s.startPage}</span>
        </a>`).join('')}
    </section>`).join('') + '</div>';
}

// ─── preferensi baca: furigana, terjemahan semua, ukuran huruf ───
function ksPref(k, d) { try { const v = localStorage.getItem('nihongo_ks_' + k); return v === null ? d : v; } catch (e) { return d; } }
function ksSetPref(k, v) { try { localStorage.setItem('nihongo_ks_' + k, v); } catch (e) {} }
function ksApplyPrefs() {
  const furi = ksPref('furi', '1') !== '0', mode = ksMode(), fs = parseInt(ksPref('fs', '0')) || 0;
  ['ksRead', 'ksHome'].forEach(id => { const e = document.getElementById(id); if (e) e.classList.toggle('nofuri', !furi); });
  const body = document.getElementById('ksBody');
  if (body) { body.classList.toggle('show-all', mode === 'dua'); body.classList.toggle('mode-id', mode === 'id'); }
  document.querySelectorAll('#ksSeg button').forEach(b => b.setAttribute('aria-pressed', b.dataset.m === mode));
  const rd = document.getElementById('ksRead'); if (rd) rd.style.setProperty('--ks-fs', (1 + fs * 0.1).toFixed(2));
  const sf = document.getElementById('ksSwFuri'), fv = document.getElementById('ksFsVal');
  if (sf) sf.setAttribute('aria-pressed', furi);
  if (fv) fv.textContent = Math.round((1 + fs * 0.1) * 100) + '%';
}
// mode bahasa: jp = Jepang saja · dua = Jepang + terjemahan di bawahnya · id = teks Jepang diganti terjemahan Indonesia
function ksMode() { const m = ksPref('mode', ksPref('alltr', '0') === '1' ? 'dua' : 'jp'); return ['jp', 'dua', 'id'].includes(m) ? m : 'jp'; }
function ksSetMode(m) { ksSetPref('mode', m); ksApplyPrefs(); }
function ksTogglePref(k) { ksSetPref(k, ksPref(k, k === 'furi' ? '1' : '0') === '1' ? '0' : '1'); ksApplyPrefs(); }
function ksStepFont(d) { ksSetPref('fs', Math.max(-2, Math.min(5, (parseInt(ksPref('fs', '0')) || 0) + d))); ksApplyPrefs(); }
function ksToggleTools(e) { if (e) e.stopPropagation(); const p = document.getElementById('ksPop'); if (p) p.hidden = !p.hidden; }
document.addEventListener('click', e => { const p = document.getElementById('ksPop'); if (p && !p.hidden && !e.target.closest('.ks-tools')) p.hidden = true; });

// ─── pembaca (halaman buku) ───
function ksBlock(b, key) {
  const [type, jp, id] = b;
  if (type === 'tbl') {
    return `<div class="ks-tbl-wrap"><table class="ks-tbl">${jp.map((r, ri) => '<tr>' + r.map(c => (ri === 0 ? `<th>${ksRender(c)}</th>` : `<td>${ksRender(c)}</td>`)).join('') + '</tr>').join('')}</table></div>`;
  }
  if (type === 'pb') return '';
  if (type === 'f') return `<div class="ks-fig"><span class="ks-fig-l">図</span>${ksRender(jp)}</div>`;
  const tr = id ? `<div class="ks-tr">${ksEsc(id)}</div>` : `<div class="ks-tr ks-tr-empty">Belum diterjemahkan</div>`;
  return `<div class="ks-b ks-${type === 'pc' ? 'p ks-pc' : type}${id ? '' : ' ks-notr'}" id="${key}">
    <div class="ks-jp">${type === 'li' ? '<span class="ks-dot">・</span>' : ''}${ksRender(jp)}</div>
    <button class="ks-yaku${id ? ' has' : ''}" aria-label="Terjemahan" title="Terjemahan / Jepang" onclick="this.parentNode.classList.toggle('open')"><span class="y1">訳</span><span class="y2">日</span></button>
    ${tr}
  </div>`;
}
function ksPageLabel(pg) { const sc = pg.items[0].sec; return sc.id + ' ' + ksPlain(sc.t); }
function ksPageText(pg) { return pg.items.map(it => ksBlocksText(it.idx.map(i => it.sec.b[i]))).join('\n'); }
function ksReadPage(n) {
  const pg = KS_PAGES[n - 1], el = document.getElementById('ksRead');
  if (!pg) { location.hash = ''; return; }
  KS_CUR = n;
  const prev = KS_PAGES[n - 2], next = KS_PAGES[n];
  const sumCached = ksLoad(KS_SUM_KEY)[ksSumKey('pg' + n, ksPageText(pg))];
  const first = pg.items[0].sec;
  const hasOpen = pg.items.some(it => it.head && it.sec.idx === 0);
  const content = pg.items.map(it => {
    const sc = it.sec; let h = '';
    if (it.head && sc.idx === 0) h += `<div class="ks-chopen"><span>第${sc.ch.n}章</span><b>${ksRb(sc.ch.title)}</b></div>`;
    if (it.head && !sc.nohead) h += `<h2 class="ks-h2${sc.id.split('.').length > 2 ? ' ks-h2-s' : ''}"><span class="ks-h2-n">${sc.id}</span><span class="ks-h2-t">${ksRb(sc.t)}</span></h2>`;
    return h + it.idx.map(i => ksBlock(sc.b[i], 'ksb_' + sc.id + '_' + i)).join('');
  }).join('');
  el.innerHTML = `
    <div class="ks-tools">
      <a class="ks-ibtn" href="#" aria-label="Kembali ke daftar isi" title="Daftar isi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></a>
      <select class="ks-pgsel" aria-label="Pilih halaman" onchange="ksGoPage(this.value)">${KS_PAGES.map(p => `<option value="${p.n}"${p.n === n ? ' selected' : ''}>Hal. ${p.n} / ${KS_PAGES.length}</option>`).join('')}</select>
      <button class="ks-btn" onclick="ksSummarizePage()">✦ Rangkum</button>
      <button class="ks-ibtn" aria-label="Pengaturan baca" title="Tampilan" onclick="ksToggleTools(event)"><span class="ks-aa">Aa</span></button>
      <div class="ks-pop" id="ksPop" hidden>
        <div class="ks-pop-row"><span>Furigana</span><button class="ks-sw" id="ksSwFuri" aria-pressed="true" onclick="ksTogglePref('furi')"></button></div>
        <div class="ks-pop-row ks-pop-col"><span>Bahasa bacaan</span><div class="ks-seg" id="ksSeg"><button data-m="jp" onclick="ksSetMode('jp')">日本語</button><button data-m="dua" onclick="ksSetMode('dua')">Dua-duanya</button><button data-m="id" onclick="ksSetMode('id')">Indonesia</button></div></div>
        <div class="ks-pop-row"><span>Ukuran huruf</span><span class="ks-step"><button onclick="ksStepFont(-1)" aria-label="Kecilkan">A−</button><b id="ksFsVal">100%</b><button onclick="ksStepFont(1)" aria-label="Besarkan">A+</button></span></div>
      </div>
    </div>
    <article class="ks-page">
      ${hasOpen ? '' : `<div class="ks-run"><span>第${first.ch.n}章 ${ksRb(first.ch.title)}</span></div>`}
      <div class="ks-sum" id="ksSecSum" ${sumCached ? '' : 'hidden'}>${sumCached ? ksSumHtml(sumCached) : ''}</div>
      <div class="ks-body" id="ksBody">${content}</div>
      <div class="ks-folio">${n}</div>
    </article>
    <nav class="ks-nav">
      ${prev ? `<a class="ks-navcard" href="#p${n - 1}"><small>← Sebelumnya</small><span>Hal. ${n - 1} · ${ksEsc(ksPageLabel(prev))}</span></a>` : '<span></span>'}
      ${next ? `<a class="ks-navcard ks-navcard-r" href="#p${n + 1}"><small>Berikutnya →</small><span>Hal. ${n + 1} · ${ksEsc(ksPageLabel(next))}</span></a>` : '<span></span>'}
    </nav>`;
  ksApplyPrefs();
  document.getElementById('ksBody').onclick = ksWordClick;
  // geser kiri/kanan = halaman berikutnya/sebelumnya
  // (pinch-zoom / dua jari / sedang di-zoom TIDAK dihitung sebagai geser halaman)
  const art = el.querySelector('.ks-page'); let sx = 0, sy = 0, ok = false;
  const zoomed = () => window.visualViewport && window.visualViewport.scale > 1.02;
  art.addEventListener('touchstart', e => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; ok = e.touches.length === 1 && !zoomed() && !e.target.closest('.ks-tbl-wrap'); }, { passive: true });
  art.addEventListener('touchmove', e => { if (e.touches.length > 1) ok = false; }, { passive: true });
  art.addEventListener('touchend', e => {
    if (!ok || zoomed()) return; const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Math.abs(dx) > 70 && Math.abs(dy) < 45 && Math.abs(dx) > Math.abs(dy) * 2) ksGoPage(KS_CUR + (dx < 0 ? 1 : -1));
  }, { passive: true });
  if (KS_JUMP !== null) {
    const t = document.getElementById(KS_JUMP);
    KS_JUMP = null;
    if (t) { t.scrollIntoView({ block: 'center' }); t.classList.add('flash'); setTimeout(() => t.classList.remove('flash'), 1800); return; }
  }
  window.scrollTo(0, 0);
}
function ksGoPage(n) { n = parseInt(n); if (n >= 1 && n <= KS_PAGES.length) location.hash = '#p' + n; }
document.addEventListener('keydown', e => {
  if (!KS_CUR || document.getElementById('ksRead').hidden || /INPUT|TEXTAREA|SELECT/.test((e.target.tagName || ''))) return;
  if (document.querySelector('.fs-overlay.show, .kamus-overlay.show')) return;
  if (e.key === 'ArrowRight') ksGoPage(KS_CUR + 1); else if (e.key === 'ArrowLeft') ksGoPage(KS_CUR - 1);
});

// ─── routing via hash ───
function ksRoute() {
  const raw = decodeURIComponent(location.hash.replace(/^#/, ''));
  const m = raw.match(/^p(\d+)$/);
  let n = m ? parseInt(m[1]) : (ksSec(raw) ? ksSec(raw).startPage : 0);
  const show = n >= 1 && n <= KS_PAGES.length;
  if (!m && show) history.replaceState(null, '', '#p' + n);   // tautan lama #1.5.1 → #p4
  document.getElementById('ksHome').hidden = show;
  document.getElementById('ksRead').hidden = !show;
  if (show) ksReadPage(n); else { KS_CUR = 0; ksSearch(); }
}
function ksOpen(id, paraIdx) {
  const has = paraIdx !== undefined && paraIdx !== null;
  const n = has ? ksPageOf(id, paraIdx) : ksSec(id).startPage;
  KS_JUMP = has ? 'ksb_' + id + '_' + paraIdx : null;
  if (location.hash === '#p' + n) ksRoute(); else location.hash = '#p' + n;
}

// ─── search: jp (tanpa furigana) + terjemahan + judul sub-bab, dengan filter (komponen filter-sheet) ───
let KS_SEARCH_T = null, KS_FS = null;
const KS_TYPE_LABEL = { p: 'Paragraf', h: 'Judul kecil', li: 'Butir', f: 'Keterangan gambar' };
function ksFilterState() { return KS_FS ? KS_FS.getState() : { where: [], ch: [], types: [] }; }
function ksFlat(s) { return String(s).toLowerCase().replace(/\s+/g, ''); }
function ksHits(q, f) {
  const where = f.where.length ? f.where : ['jp', 'id', 'judul'];
  const hits = [];
  KS_SECS.forEach(s => {
    if (f.ch.length && !f.ch.includes(String(s.ch.n))) return;
    if (q && where.includes('judul') && !f.types.length && ksFlat(s.id + ksPlain(s.t)).includes(q)) hits.push({ s, i: null, txt: s.id + ' ' + ksPlain(s.t), kind: 'judul' });
    s.b.forEach((b, i) => {
      if (b[0] === 'tbl' || b[0] === 'pb') return;
      if (f.types.length && !f.types.includes(b[0] === 'pc' ? 'p' : b[0])) return;
      if (!q) { hits.push({ s, i, txt: ksPlain(b[1]), kind: 'JP' }); return; }   // tanpa kata kunci: tampilkan blok yang lolos filter
      if (where.includes('jp') && ksFlat(ksPlain(b[1])).includes(q)) hits.push({ s, i, txt: ksPlain(b[1]), kind: 'JP' });
      if (where.includes('id') && b[2] && ksFlat(b[2]).includes(q)) hits.push({ s, i, txt: b[2], kind: 'ID' });
    });
  });
  return hits;
}
function ksQuery() { return ksFlat(document.getElementById('ksQ').value || ''); }
function ksOnSearch() { clearTimeout(KS_SEARCH_T); KS_SEARCH_T = setTimeout(ksSearch, 160); }
function ksInitFilter() {
  const chs = KENSETSU.chapters;
  KS_FS = createFilterSheet({
    title: 'Filter',
    groups: [
      { key: 'where', label: 'CARI DI', type: 'multi', options: [{ v: 'jp', t: 'Teks Jepang' }, { v: 'id', t: 'Terjemahan' }, { v: 'judul', t: 'Judul' }], hint: 'Kosong = cari di semuanya.' },
      { key: 'ch', label: 'BAB', type: 'multi', options: chs.map(c => ({ v: String(c.n), t: 'Bab ' + c.n })) },
      { key: 'types', label: 'JENIS BAGIAN', type: 'multi', options: Object.keys(KS_TYPE_LABEL).map(k => ({ v: k, t: KS_TYPE_LABEL[k] })), hint: 'Memilih jenis bagian menyembunyikan hasil dari judul sub-bab.' }
    ],
    count: st => ksHits(ksQuery(), st).length,
    onApply: () => { ksSearch(); ksFilterBadge(); }
  });
  ksFilterBadge();
}
function ksFilterBadge() {
  const n = KS_FS ? KS_FS.activeCount() : 0, b = document.getElementById('ksFilterBtn');
  if (b) b.innerHTML = 'Filter' + (n ? ` <span class="fs-badge">${n}</span>` : '');
}
function ksSearch() {
  const raw = (document.getElementById('ksQ').value || '').trim(), q = ksQuery(), f = ksFilterState();
  const box = document.getElementById('ksResults'), list = document.getElementById('ksList');
  const active = KS_FS && KS_FS.activeCount() > 0;
  if (!q && !active) { box.innerHTML = ''; list.hidden = false; return; }
  list.hidden = true;
  const hits = ksHits(q, f);
  if (!hits.length) { box.innerHTML = '<div class="ks-empty">Tidak ada hasil.</div>'; return; }
  const re = raw ? new RegExp(ksEsc(raw).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi') : null;
  box.innerHTML = `<div class="ks-count">${hits.length} hasil${hits.length > 50 ? ' (50 pertama)' : ''}</div>` + hits.slice(0, 50).map(h => {
    const snip = h.txt;
    let p = raw ? snip.toLowerCase().indexOf(raw.toLowerCase()) : 0;
    if (p < 0) p = 0;
    const a = Math.max(0, p - 24), b = Math.min(snip.length, p + (raw ? raw.length : 0) + 40);
    const e = ksEsc(snip.slice(a, b));
    return `<div class="ks-hit" onclick="ksOpen('${h.s.id}'${h.i === null ? '' : ',' + h.i})">
      <div class="ks-hit-h"><b>${h.s.id}</b> ${ksEsc(ksPlain(h.s.t))} · hal. ${h.i === null ? h.s.startPage : ksPageOf(h.s.id, h.i)} <span class="kcat">${h.kind}</span></div>
      <div class="ks-hit-t">${a > 0 ? '…' : ''}${re ? e.replace(re, m => '<mark>' + m + '</mark>') : e}${b < snip.length ? '…' : ''}</div>
    </div>`;
  }).join('');
}

// ─── popup kata ───
function ksSheetEl() {
  let ov = document.getElementById('ksOverlay');
  if (ov) return ov;
  ov = document.createElement('div');
  ov.id = 'ksOverlay'; ov.className = 'kamus-overlay';
  ov.innerHTML = `<div class="kamus-sheet"><div class="kamus-sheet-close"><button onclick="ksCloseSheet()">✕</button></div>
    <div class="kamus-sheet-body" id="ksSheetBody"></div></div>`;
  document.body.appendChild(ov);
  ov.addEventListener('click', e => { if (e.target === ov) ksCloseSheet(); });
  return ov;
}
function ksCloseSheet() { const ov = document.getElementById('ksOverlay'); if (ov) ov.classList.remove('show'); }
function ksWordClick(e) {
  const w = e.target.closest('.ks-w, .ks-u');
  if (!w) return;
  ksBuildLex();
  const blk = w.closest('.ks-b');
  const ctx = blk ? blk.querySelector('.ks-jp').textContent : '';
  if (w.dataset.i !== undefined) { openKamusSheet(KAMUS_ALL[parseInt(w.dataset.i)]); return; }
  ksOpenUnknown(w.dataset.u, ctx);
}
function ksOpenUnknown(word, ctx) {
  const ov = ksSheetEl(), body = document.getElementById('ksSheetBody');
  const c = ksCache()[word];
  body.dataset.word = word; body.dataset.ctx = ctx || '';
  body.innerHTML = `<div class="ks-sheet-lbl">${c ? 'HASIL AI · TERSIMPAN' : 'BELUM ADA DI KAMUS'}</div>
    <div class="ks-word">${ksEsc(word)}</div>
    <div id="ksSheetRes">${c ? ksWordResHtml(c) : '<div class="ks-muted">Ketuk <b>Tanya AI</b> untuk cara baca dan artinya.</div>'}</div>
    <div class="ks-sheet-act">
      <button class="ks-btn" id="ksAskBtn" onclick="ksAskWord()">✦ ${c ? 'Tanya ulang' : 'Tanya AI'}</button>
      ${c ? '<button class="ks-btn" onclick="ksForgetWord()">Hapus</button>' : ''}
    </div>`;
  ov.classList.add('show');
}
function ksWordResHtml(c) {
  return `<div class="ks-yomi">${ksEsc(c.yomi || '')}</div><div class="kamus-sheet-arti">${ksEsc(c.arti || '')}</div>${c.catatan ? `<div class="kamus-note-box">${ksEsc(c.catatan)}</div>` : ''}`;
}
function ksNeedAI() {
  const sp = localStorage.getItem(AI_PROVIDER_STORE);
  if (sp && AI_ENDPOINTS[sp]) AI_PROVIDER = sp;
  return !localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
}
const KS_NOKEY = 'Belum ada API key. Atur dulu di menu <a href="../ai/">AI練習</a>, lalu coba lagi.';
async function ksAskWord() {
  const body = document.getElementById('ksSheetBody'), res = document.getElementById('ksSheetRes');
  const word = body.dataset.word, ctx = body.dataset.ctx;
  if (ksNeedAI()) { res.innerHTML = `<div class="ks-muted">${KS_NOKEY}</div>`; return; }
  const btn = document.getElementById('ksAskBtn'); btn.disabled = true;
  res.innerHTML = '<div class="ks-muted">Menanyakan ke AI…</div>';
  try {
    const out = await callAI([
      { role: 'system', content: 'Kamu kamus Jepang-Indonesia untuk pelajar bahasa Jepang di bidang konstruksi (SSW Kensetsu). Jawab HANYA JSON valid tanpa teks lain.' },
      { role: 'user', content: `Kata: ${word}\nKalimat asal: ${ctx.slice(0, 300)}\n\nBalas JSON: {"yomi":"cara baca hiragana","arti":"arti singkat bahasa Indonesia","catatan":"satu kalimat penjelasan/nuansa dalam konteks konstruksi"}` }
    ]);
    const m = out.match(/\{[\s\S]*\}/);
    const obj = JSON.parse(m ? m[0] : out);
    const c = { yomi: String(obj.yomi || ''), arti: String(obj.arti || ''), catatan: String(obj.catatan || '') };
    ksCache()[word] = c; ksSave(KS_WORDS_KEY, ksCache());
    ksOpenUnknown(word, ctx);
    const b = document.getElementById('ksBody'); if (b) ksRefreshTokens();
  } catch (err) {
    res.innerHTML = `<div class="ks-muted">Gagal: ${ksEsc(err.message || err)}</div>`;
    btn.disabled = false;
  }
}
function ksForgetWord() {
  const word = document.getElementById('ksSheetBody').dataset.word;
  delete ksCache()[word]; ksSave(KS_WORDS_KEY, ksCache());
  ksCloseSheet(); ksRefreshTokens();
}
function ksRefreshTokens() { if (!KS_CUR || document.getElementById('ksRead').hidden) return; const y = window.scrollY; const open = [...document.querySelectorAll('.ks-b.open')].map(e => e.id); ksReadPage(KS_CUR); window.scrollTo(0, y); open.forEach(i => { const e = document.getElementById(i); if (e) e.classList.add('open'); }); }

// ─── rangkuman AI ───
function ksBlocksText(blocks) {
  return blocks.filter(b => b[0] !== 'pb').map(b => {
    if (b[0] === 'tbl') return b[1].map(r => r.map(ksPlain).join(' | ')).join('\n');
    return ksPlain(b[1]) + (b[2] ? `\n(Terjemahan: ${b[2]})` : '');
  }).join('\n');
}
function ksSecText(s) { return ksBlocksText(s.b); }
function ksSumKey(id, text) { let h = 0; for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0; return id + '|' + text.length + '|' + h; }
function ksMd(t) {
  const lines = ksEsc(t).split('\n'); let html = '', inList = false;
  lines.forEach(l => {
    const li = l.match(/^\s*[-*•]\s+(.*)/), fmt = s => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    if (li) { if (!inList) { html += '<ul>'; inList = true; } html += '<li>' + fmt(li[1]) + '</li>'; }
    else { if (inList) { html += '</ul>'; inList = false; } if (l.trim()) html += '<p>' + fmt(l) + '</p>'; }
  });
  return html + (inList ? '</ul>' : '');
}
function ksSumHtml(text, id) { return `<div class="ks-sum-h">RANGKUMAN AI</div>${ksMd(text)}`; }
async function ksRunSummary(box, key, label, text) {
  if (ksNeedAI()) { box.hidden = false; box.innerHTML = `<div class="ks-muted">${KS_NOKEY}</div>`; return; }
  box.hidden = false; box.innerHTML = '<div class="ks-muted">AI sedang merangkum…</div>';
  try {
    const out = await callAI([
      { role: 'system', content: 'Kamu asisten belajar untuk pekerja asing (SSW Kensetsu) di Jepang. Rangkum bacaan dalam bahasa Indonesia yang sederhana. Format: 3-6 poin singkat berawalan "- ". Sebut istilah Jepang penting beserta arti Indonesianya dalam kurung. Jangan menambah informasi di luar teks.' },
      { role: 'user', content: `Rangkum bagian buku berikut (${label}):\n\n${text}` }
    ]);
    const sums = ksLoad(KS_SUM_KEY); sums[key] = out; ksSave(KS_SUM_KEY, sums);
    box.innerHTML = ksSumHtml(out) + '<button class="smbtn" style="margin-top:.6rem" onclick="this.parentNode.hidden=true">Tutup</button>';
  } catch (err) { box.innerHTML = `<div class="ks-muted">Gagal: ${ksEsc(err.message || err)}</div>`; }
}
function ksSummarizePage() {
  const pg = KS_PAGES[KS_CUR - 1], text = ksPageText(pg);
  ksRunSummary(document.getElementById('ksSecSum'), ksSumKey('pg' + KS_CUR, text), 'halaman ' + KS_CUR + ' (' + ksPageLabel(pg) + ')', text.slice(0, 12000));
}
function ksSummarizeChapter(n) {
  const ch = KENSETSU.chapters.find(c => c.n === n);
  // bab panjang dipotong ±12.000 karakter supaya muat di batas token provider
  const text = ch.sections.map(s => `## ${s.id} ${ksPlain(s.t)}\n${ksSecText(s)}`).join('\n\n').slice(0, 12000);
  ksRunSummary(document.getElementById('ksChSum' + n), ksSumKey('ch' + n, text), '第' + n + '章 ' + ksPlain(ch.title), text);
}

window.addEventListener('hashchange', ksRoute);
function initKensetsu() {
  document.body.classList.add('ks-on');   // matikan efek berat (noise fixed + blur header) di halaman ini
  ksBuildLex(); ksList(); ksInitFilter(); ksRoute(); ksApplyPrefs();
}
