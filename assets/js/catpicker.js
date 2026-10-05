// catpicker.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// PENGELOMPOKAN KATEGORI: Moji / Kotoba / Bunpou
// Dipakai bareng oleh Quiz, Latihan AI, dan Chatbot. Nambah kategori baru
// di QCATS_STATIC cukup lewat field `t` — grup-nya otomatis ngikut di sini.
// ─────────────────────────────────────────────────────
const QGROUP_ORDER = [
  { key: 'moji',   label: '文字 · Moji',   hint: 'Huruf: kana & kanji' },
  { key: 'kotoba', label: '語彙 · Kotoba', hint: 'Kosakata' },
  { key: 'bunpou', label: '文法 · Bunpou', hint: 'Tata bahasa: partikel & pola kalimat' }
];

function catGroup(c) {
  if (c.t === 'kana')  return { g: 'moji', sub: 'Kana (Hiragana & Katakana)' };
  if (c.t === 'kanji') return { g: 'moji', sub: 'Kanji' };
  if (c.t === 'particle' || c.t === 'particle-adv') return { g: 'bunpou', sub: 'Partikel' };
  if (c.t === 'bunpou') return { g: 'bunpou', sub: 'Pola Kalimat' };
  if (c.t === 'buku') {
    if (c.id.startsWith('buku-irodori-')) return { g: 'kotoba', sub: 'Kyoukasho — Irodori' };
    if (c.id.startsWith('buku-a2-'))      return { g: 'kotoba', sub: 'Kyoukasho — Irodori A2' };
    return { g: 'kotoba', sub: 'Kyoukasho — Buku Utama' };
  }
  if (c.t === 'counter' || c.t === 'sifat' || c.t === 'kerja') return { g: 'kotoba', sub: 'Kata Bilangan, Sifat & Kerja' };
  return { g: 'kotoba', sub: 'Kotoba Tematik' };
}

// Render grid kategori berkelompok. `handler` = nama fungsi toggle (string).
// Tiap grup & subgrup punya tombol "Pilih semua / Hapus semua" (lihat bulkToggle).
function renderCatGrid(cats, selSet, handler) {
  const groups = {};
  cats.forEach(c => {
    const { g, sub } = catGroup(c);
    (groups[g] = groups[g] || { subs: [], map: {} });
    if (!groups[g].map[sub]) { groups[g].map[sub] = []; groups[g].subs.push(sub); }
    groups[g].map[sub].push(c);
  });
  const bulkBtn = (scope, list) => {
    const all = list.length > 0 && list.every(c => selSet.has(c.id));
    return `<button type="button" class="qgrp-bulk" data-scope="${scope}" onclick="bulkToggle(this)">${all ? 'Hapus semua' : 'Pilih semua'}</button>`;
  };
  return QGROUP_ORDER.filter(G => groups[G.key]).map(G => {
    const grp = groups[G.key];
    const allInGroup = grp.subs.reduce((arr, sb) => arr.concat(grp.map[sb]), []);
    const subsHtml = grp.subs.map(sb => `
      <div class="qgrp-sub">
        <div class="qgrp-subh">${sb}<span>${grp.map[sb].length}</span>${bulkBtn('sub', grp.map[sb])}</div>
        <div class="qog">${grp.map[sb].map(c => `
          <div class="qopt${selSet.has(c.id) ? ' sel' : ''}" data-id="${c.id}" onclick="${handler}('${c.id}',this)">
            <div class="qcb">${selSet.has(c.id) ? '✓' : ''}</div>
            <span class="qol">${c.label}</span>
          </div>`).join('')}
        </div>
      </div>`).join('');
    return `
    <div class="qgrp">
      <div class="qgrp-h"><b>${G.label}</b><small>${G.hint}</small><span>${allInGroup.length}</span>${bulkBtn('grp', allInGroup)}</div>
      ${subsHtml}
    </div>`;
  }).join('');
}

// ── Pilih semua / Hapus semua per grup atau subgrup ──
// Hanya menyentuh item yang sedang tampil (jadi aman dipakai bareng kotak pencarian).
const CAT_CTX = {};   // tiap halaman mendaftarkan konteksnya sendiri: CAT_CTX.<idWadah> = () => ({ set, after })

function visibleOpts(scopeEl) {
  return Array.from(scopeEl.querySelectorAll('.qopt')).filter(o => o.style.display !== 'none');
}

function bulkToggle(btn) {
  const root = btn.closest('#qog,#aiQog,#chatQog');
  if (!root) return;
  const ctx = CAT_CTX[root.id]();
  const scopeEl = btn.closest(btn.dataset.scope === 'grp' ? '.qgrp' : '.qgrp-sub');
  const opts = visibleOpts(scopeEl);
  if (!opts.length) return;
  const allSel = opts.every(o => o.classList.contains('sel'));
  opts.forEach(o => {
    const id = o.dataset.id;
    if (allSel) { ctx.set.delete(id); o.classList.remove('sel'); o.querySelector('.qcb').textContent = ''; }
    else        { ctx.set.add(id);    o.classList.add('sel');    o.querySelector('.qcb').textContent = '✓'; }
  });
  refreshBulkLabels(root);
  ctx.after();
}

// Sinkronkan teks semua tombol bulk dengan kondisi centang sekarang
function refreshBulkLabels(root) {
  if (!root) return;
  root.querySelectorAll('.qgrp-bulk').forEach(btn => {
    const scopeEl = btn.closest(btn.dataset.scope === 'grp' ? '.qgrp' : '.qgrp-sub');
    const opts = visibleOpts(scopeEl);
    const all = opts.length > 0 && opts.every(o => o.classList.contains('sel'));
    btn.textContent = all ? 'Hapus semua' : 'Pilih semua';
  });
}

// Filter pencarian yang ikut nyembunyiin header grup kalau isinya kosong.
function filterCatGrid(rootId, q) {
  q = (q || '').trim().toLowerCase();
  const root = document.getElementById(rootId);
  if (!root) return;
  root.querySelectorAll('.qopt').forEach(opt => {
    const label = (opt.querySelector('.qol')?.textContent || '').toLowerCase();
    opt.style.display = !q || label.includes(q) ? '' : 'none';
  });
  root.querySelectorAll('.qgrp-sub').forEach(sub => {
    const any = Array.from(sub.querySelectorAll('.qopt')).some(o => o.style.display !== 'none');
    sub.style.display = any ? '' : 'none';
  });
  root.querySelectorAll('.qgrp').forEach(g => {
    const any = Array.from(g.querySelectorAll('.qgrp-sub')).some(sb => sb.style.display !== 'none');
    g.style.display = any ? '' : 'none';
  });
  refreshBulkLabels(root);
}
