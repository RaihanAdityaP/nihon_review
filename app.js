// ─────────────────────────────────────────────────────
// LOCALSTORAGE
// ─────────────────────────────────────────────────────
const LSK = 'nihongo_progress_v2';

function loadProg() {
  try { return JSON.parse(localStorage.getItem(LSK)) || { sessions: [], tc: 0, tw: 0 }; }
  catch { return { sessions: [], tc: 0, tw: 0 }; }
}

function saveProg(d) {
  try { localStorage.setItem(LSK, JSON.stringify(d)); } catch {}
}

function addSession(cats, types, c, w, total) {
  const p = loadProg();
  p.sessions.unshift({ date: new Date().toISOString(), cats: [...cats], types: [...types], correct: c, wrong: w, total });
  if (p.sessions.length > 60) p.sessions = p.sessions.slice(0, 60);
  p.tc = (p.tc || 0) + c;
  p.tw = (p.tw || 0) + w;
  saveProg(p);
}

function clearProg() {
  if (confirm('Hapus semua riwayat progress?')) {
    saveProg({ sessions: [], tc: 0, tw: 0 });
    renderProg();
  }
}

// ─────────────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────────────
const THEME_KEY = 'nihongo_theme';

function applyThemeUI(theme) {
  const label = document.getElementById('drawerThemeLabel');
  if (label) label.textContent = theme === 'light' ? 'Mode Terang' : 'Mode Gelap';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem(THEME_KEY, next); } catch {}
  applyThemeUI(next);
}

// ─────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────
function showPage(name, btn, fromDrawer) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#desktopNav button, .drawer-nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('page' + name[0].toUpperCase() + name.slice(1)).classList.add('active');
  document.querySelectorAll('#desktopNav button, .drawer-nav button').forEach(b => {
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + name + "'")) b.classList.add('active');
  });
  if (fromDrawer) closeMenu();
  if (name === 'progress') renderProg();
}

function toggleMenu() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const burger = document.getElementById('burgerBtn');
  const open = drawer.classList.contains('open');
  drawer.classList.toggle('open', !open);
  overlay.classList.toggle('open', !open);
  burger.classList.toggle('open', !open);
}

function closeMenu() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('burgerBtn').classList.remove('open');
}

// ─────────────────────────────────────────────────────
// MATERI
// ─────────────────────────────────────────────────────
function switchCat(cat, btn) {
  document.querySelectorAll('#matHiragana,#matKatakana,#matKotoba,#matCounter').forEach(el => el.style.display = 'none');
  document.getElementById('mat' + cat[0].toUpperCase() + cat.slice(1)).style.display = 'block';
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function renderKanaAcc(data, cid) {
  const el = document.getElementById(cid);
  let html = '';
  for (const [g, items] of Object.entries(data)) {
    const id = 'a_' + cid + '_' + g.replace(/[^a-z0-9]/gi, '_');
    html += `<div class="acc-item">
      <div class="acc-head" onclick="togAcc('${id}',this)">
        <div class="acc-left"><span class="acc-title">${g}</span><span class="acc-cnt">${items.length}</span></div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="${id}">
        <div class="kana-grid">${items.map(x => `<div class="kana-card"><span class="kana-char">${x.c}</span><div class="kana-roma">${x.r}</div>${x.n ? `<div class="kana-note">${x.n}</div>` : ''}</div>`).join('')}</div>
      </div></div>`;
  }
  el.innerHTML = html;
}

function renderKotobaAcc(data, cid) {
  const el = document.getElementById(cid);
  let html = '';
  for (const [g, content] of Object.entries(data)) {
    const id = 'a_' + cid + '_' + g.replace(/[^a-z0-9]/gi, '_');
    const hasNote = content.rows.some(r => r.n);
    const hasKanji = content.rows.some(r => r.kj);
    html += `<div class="acc-item">
      <div class="acc-head" onclick="togAcc('${id}',this)">
        <div class="acc-left"><span class="acc-title">${g}</span><span class="acc-cnt">${content.rows.length} kata</span></div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="${id}">
        <div class="tbl-wrap"><table class="ktable">
          <thead><tr>
            ${hasKanji ? '<th style="width:70px">Kanji</th>' : ''}
            <th style="width:90px">Kana</th>
            <th style="width:100px">Romaji</th>
            <th style="width:120px">Arti</th>
            ${hasNote ? '<th>Penjelasan</th>' : ''}
          </tr></thead>
          <tbody>${content.rows.map(row => `<tr>
            ${hasKanji ? `<td class="td-kanji">${row.kj || ''}</td>` : ''}
            <td class="td-kana">${row.k}</td>
            <td class="td-roma">${row.r}</td>
            <td class="td-arti">${row.a}</td>
            ${hasNote ? `<td class="td-note">${row.n || ''}</td>` : ''}
          </tr>`).join('')}</tbody>
        </table></div>
      </div></div>`;
  }
  el.innerHTML = html;
}

function togAcc(id, head) {
  const body = document.getElementById(id);
  const open = body.classList.contains('open');
  body.classList.toggle('open', !open);
  head.classList.toggle('open', !open);
}

// ─────────────────────────────────────────────────────
// PARTIKEL
// ─────────────────────────────────────────────────────
function switchPartikelTab(tab, btn) {
  document.getElementById('parDasar').style.display    = tab === 'dasar'    ? 'block' : 'none';
  document.getElementById('parLanjutan').style.display = tab === 'lanjutan' ? 'block' : 'none';
  document.querySelectorAll('#pagePartikel .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function renderPartikel() {
  document.getElementById('particleGrid').innerHTML = PT.map(p => `
    <div class="pcard">
      <div class="p-sym">${p.sym}</div>
      <div class="p-rom">${p.r}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-desc">${p.desc}</div>
      <div class="p-exs">${p.ex.map(e => `<div class="p-ex"><div class="p-ex-jp">${e.jp}</div><div class="p-ex-id">${e.id}</div></div>`).join('')}</div>
    </div>`).join('');
}

function renderPartikelAdv() {
  const el = document.getElementById('particleAdvGrid');
  let html = '';
  for (const [group, items] of Object.entries(PT_ADV)) {
    const id = 'padv_' + group.replace(/[^a-z0-9]/gi, '_');
    html += `<div class="acc-item" style="margin-bottom:.5rem">
      <div class="acc-head" onclick="togAcc('` + id + `',this)">
        <div class="acc-left">
          <span class="acc-title">${group}</span>
          <span class="acc-cnt">${items.length}</span>
        </div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="` + id + `">
        <div class="particle-grid">
          ${items.map(p => `
            <div class="pcard">
              <div class="p-sym">${p.sym}</div>
              <div class="p-rom">${p.r}</div>
              <div style="font-family:'DM Mono',monospace;font-size:.55rem;color:var(--accent3);margin-bottom:.3rem;letter-spacing:.04em">${p.kind}</div>
              <div class="p-desc">${p.desc}</div>
              <div class="p-exs">${p.ex.map(e => `<div class="p-ex"><div class="p-ex-jp">${e.jp}</div><div class="p-ex-id">${e.id}</div></div>`).join('')}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  }
  el.innerHTML = html;
}

// ─────────────────────────────────────────────────────
// QUIZ CATEGORIES
// ─────────────────────────────────────────────────────
const QCATS = [
  { id: 'hi-basic',    label: 'Hiragana Dasar',       t: 'kana' },
  { id: 'hi-dak',      label: 'Hiragana Dakuten',      t: 'kana' },
  { id: 'hi-combo',    label: 'Hiragana Combo',        t: 'kana' },
  { id: 'ka-basic',    label: 'Katakana Dasar',        t: 'kana' },
  { id: 'ka-dak',      label: 'Katakana Dakuten',      t: 'kana' },
  { id: 'ka-combo',    label: 'Katakana Combo',        t: 'kana' },
  { id: 'ka-serap',    label: 'Katakana Serapan',      t: 'kana' },
  { id: 'hewan',       label: 'Hewan',                 t: 'kotoba' },
  { id: 'orang',       label: 'Orang & Keluarga',      t: 'kotoba' },
  { id: 'tempat',      label: 'Tempat',                t: 'kotoba' },
  { id: 'kdrn',        label: 'Kendaraan',             t: 'kotoba' },
  { id: 'makan',       label: 'Makanan & Minuman',     t: 'kotoba' },
  { id: 'benda',       label: 'Benda',                 t: 'kotoba' },
  { id: 'benda-kelas', label: 'Benda (di Kelas)',      t: 'kotoba' },
  { id: 'alam',        label: 'Alam',                  t: 'kotoba' },
  { id: 'sifat',       label: 'Kata Sifat',            t: 'kotoba' },
  { id: 'musim',       label: 'Musim',                 t: 'kotoba' },
  { id: 'kerja',       label: 'Kata Kerja',            t: 'kotoba' },
  { id: 'konsep',      label: 'Konsep Umum',           t: 'kotoba' },
  { id: 'kotoba-n5',   label: 'Kotoba N5',             t: 'kotoba' },
  { id: 'umur',        label: 'Umur',                  t: 'kotoba' },
  { id: 'lantai',      label: 'Lantai',                t: 'kotoba' },
  { id: 'negara',      label: 'Negara & Bangsa',       t: 'kotoba' },
  { id: 'perkenalan',  label: 'Perkenalan Diri',       t: 'kotoba' },
  { id: 'hobi',        label: 'Hobi & Olahraga',       t: 'kotoba' },
  { id: 'angka',       label: 'Angka',                 t: 'kotoba' },
  { id: 'waktu',       label: 'Waktu',                 t: 'kotoba' },
  { id: 'durasi',      label: 'Durasi',                t: 'kotoba' },
  { id: 'hari',        label: 'Hari & Keterangan',     t: 'kotoba' },
  { id: 'bulan',       label: 'Bulan & Tahun',         t: 'kotoba' },
  { id: 'masak',       label: 'Peralatan Masak',       t: 'kotoba' },
  { id: 'alat',        label: 'Alat Dapur',            t: 'kotoba' },
  { id: 'wadah',       label: 'Wadah & Perabot',       t: 'kotoba' },
  { id: 'bumbu',       label: 'Bumbu & Bahan',         t: 'kotoba' },
  { id: 'jam',         label: 'Jam',                   t: 'kotoba' },
  { id: 'menit',       label: 'Menit',                 t: 'kotoba' },
  { id: 'bulan-n',     label: 'Bulan (Nama)',          t: 'kotoba' },
  { id: 'tanggal',     label: 'Tanggal',               t: 'kotoba' },
  { id: 'tubuh',       label: 'Bagian Tubuh',          t: 'kotoba' },
  { id: 'partikel',    label: 'Partikel',              t: 'particle' },
  { id: 'pelengkap',   label: 'Bahan Pelengkap',       t: 'kotoba' },
  { id: 'sapaan',      label: 'Sapaan & Ekspresi',     t: 'kotoba' },
  { id: 'warna',       label: 'Warna',                 t: 'kotoba' },
  { id: 'rasa',        label: 'Rasa',                  t: 'kotoba' },
  { id: 'tanya',       label: 'Kata Tanya',            t: 'kotoba' },
  { id: 'kosoad',      label: 'Ko-So-A-Do',            t: 'kotoba' },
  { id: 'ket',         label: 'Kata Keterangan',       t: 'kotoba' },
  { id: 'rutin',       label: 'Kegiatan Rutin',        t: 'kotoba' },
  { id: 'profesi',     label: 'Profesi',               t: 'kotoba' },
  { id: 'arah',        label: 'Arah & Posisi',         t: 'kotoba' },
  { id: 'kelas-ex',    label: 'Ekspresi di Kelas',     t: 'kotoba' },
  { id: 'sampah',      label: 'Sampah & Lingkungan',   t: 'kotoba' },
  { id: 'counter',     label: 'Kata Bantu Bilangan',   t: 'counter' },
  { id: 'par-adv',     label: 'Partikel Lanjutan',     t: 'particle-adv' },
  { id: 'buku-bab1',   label: 'Buku — Bab 1',          t: 'buku' },
  { id: 'buku-bab2',   label: 'Buku — Bab 2',          t: 'buku' },
  { id: 'buku-bab3',   label: 'Buku — Bab 3',          t: 'buku' },
  { id: 'bunpou-dasar',   label: 'Bunpou — Kalimat Dasar',       t: 'bunpou' },
  { id: 'bunpou-kosoado', label: 'Bunpou — Ko-So-A-Do',          t: 'bunpou' },
  { id: 'bunpou-id',      label: 'Bunpou — Identitas Diri',      t: 'bunpou' },
  { id: 'bunpou-waktu',   label: 'Bunpou — Waktu, Jumlah, Harga',t: 'bunpou' },
  { id: 'bunpou-minta',   label: 'Bunpou — Meminta & Permintaan',t: 'bunpou' },
  { id: 'bunpou-jenis',   label: 'Bunpou — Jenis & Kepemilikan', t: 'bunpou' },
  { id: 'bunpou-objek',   label: 'Bunpou — Partikel Objek & Tempat (を・で)', t: 'bunpou' },
  { id: 'bunpou-arah',    label: 'Bunpou — Partikel Arah & Waktu (へ・に)',   t: 'bunpou' },
  { id: 'bunpou-negasi',  label: 'Bunpou — Negasi & Kata Ganti Tak Tentu',   t: 'bunpou' },
];

let SC = new Set(), ST = new Set(['kana-to-romaji']), QN = 10;

function initQSetup() {
  document.getElementById('qog').innerHTML = QCATS.map(c => `
    <div class="qopt${SC.has(c.id) ? ' sel' : ''}" onclick="togCat('${c.id}',this)">
      <div class="qcb">${SC.has(c.id) ? '✓' : ''}</div>
      <span class="qol">${c.label}</span>
    </div>`).join('');
  checkReady();
}

function togCat(id, el) {
  SC.has(id)
    ? (SC.delete(id), el.classList.remove('sel'), el.querySelector('.qcb').textContent = '')
    : (SC.add(id),    el.classList.add('sel'),    el.querySelector('.qcb').textContent = '✓');
  checkReady();
}

function selAll(v) { v ? QCATS.forEach(c => SC.add(c.id)) : SC.clear(); initQSetup(); }

function toggleType(btn) {
  const t = btn.dataset.t;
  if (ST.has(t)) { ST.delete(t); btn.classList.remove('sel'); }
  else           { ST.add(t);    btn.classList.add('sel'); }
  checkReady();
}

function setCount(btn) {
  document.querySelectorAll('#cntRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  document.getElementById('qCntCustom').value = '';
  QN = parseInt(btn.dataset.c);
}

function setQCountCustom(input) {
  const v = parseInt(input.value);
  if (!v || v < 1) return;
  document.querySelectorAll('#cntRow .tbtn').forEach(b => b.classList.remove('sel'));
  QN = Math.min(v, 500);
}

function checkReady() {
  const hasItems = getAllItems().length >= 4;
  const hasTypes = ST.size > 0;
  const ok = hasItems && hasTypes;
  document.getElementById('startBtn').disabled = !ok;
  const warn = document.getElementById('qwarn');
  if (!hasItems)      { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu kategori (butuh 4+ item).'; }
  else if (!hasTypes) { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu tipe quiz.'; }
  else                { warn.style.display = 'none'; }
}

// ─────────────────────────────────────────────────────
// ITEM FETCHERS
// ─────────────────────────────────────────────────────
function kanaItems(cid) {
  const hg = {
    'hi-basic':  ['Vokal Dasar','Baris K','Baris S','Baris T','Baris N','Baris H','Baris M','Baris Y','Baris R','Baris W + N'],
    'hi-dak':    ['Dakuten G','Dakuten Z','Dakuten D','Dakuten B','Handakuten P'],
    'hi-combo':  ['Combo KY','Combo SH','Combo CH','Combo NY','Combo HY','Combo MY','Combo RY','Combo GY','Combo JY','Combo BY','Combo PY','Vokal Panjang','Konsonan Ganda (っ)']
  };
  const kg = {
    'ka-basic':  ['Vokal Dasar','Baris K','Baris S','Baris T','Baris N','Baris H','Baris M','Baris Y','Baris R','Baris W + N'],
    'ka-dak':    ['Dakuten G','Dakuten Z','Dakuten D','Dakuten B','Handakuten P'],
    'ka-combo':  ['Combo KY','Combo SH','Combo CH','Combo NY','Combo HY','Combo MY','Combo RY','Combo GY','Combo JY','Combo BY','Combo PY'],
    'ka-serap':  ['Serapan Ti/Di','Serapan WI/WE/WO','Serapan FA/FI/FE/FO','Serapan VA/VI/VE/VO','Serapan JE/CHE','Vokal Panjang (ー)','Konsonan Ganda (ッ)']
  };
  const isH = cid.startsWith('hi');
  const src = isH ? H : K, gmap = isH ? hg : kg, gs = gmap[cid] || [];
  let out = [];
  gs.forEach(g => { if (src[g]) src[g].forEach(x => out.push({ kana: x.c, romaji: x.r, type: 'kana' })); });
  return out;
}

function ktItems(cid) {
  const m = {
    hewan: 'Hewan', orang: 'Orang & Keluarga', tempat: 'Tempat', kdrn: 'Kendaraan',
    makan: 'Makanan & Minuman', benda: 'Benda', 'benda-kelas': 'Benda (di Kelas)',
    alam: 'Alam', sifat: 'Kata Sifat', musim: 'Musim', kerja: 'Kata Kerja',
    konsep: 'Konsep Umum', 'kotoba-n5': 'Kotoba N5', umur: 'Umur', lantai: 'Lantai',
    angka: 'Angka', waktu: 'Waktu', durasi: 'Durasi',
    hari: ['Hari dalam Seminggu', 'Keterangan Hari'],
    bulan: 'Keterangan Bulan & Tahun', masak: 'Peralatan Masak', alat: 'Alat Dapur',
    wadah: 'Wadah & Perabot', bumbu: 'Bumbu & Bahan',
    jam: 'Jam', menit: 'Menit', 'bulan-n': 'Bulan (Nama)', tanggal: 'Tanggal',
    tubuh: 'Bagian Tubuh', pelengkap: 'Bahan Pelengkap', sapaan: 'Sapaan & Ekspresi',
    warna: 'Warna', rasa: 'Rasa', tanya: 'Kata Tanya',
    kosoad: 'Kata Penunjuk (Ko-So-A-Do)', ket: 'Kata Keterangan Umum',
    rutin: 'Kegiatan Rutin', profesi: 'Profesi & Pekerjaan',
    negara: 'Negara & Bangsa', perkenalan: 'Perkenalan Diri', hobi: 'Hobi & Olahraga',
    arah: 'Arah & Posisi', 'kelas-ex': 'Ekspresi di Kelas', sampah: 'Sampah & Lingkungan'
  };
  const keys = Array.isArray(m[cid]) ? m[cid] : [m[cid]];
  let out = [];
  keys.forEach(k => { if (k && KT[k]) KT[k].rows.forEach(r => out.push({ kana: r.k, romaji: r.r, arti: r.a, type: 'kotoba' })); });
  return out;
}

function counterItems(cid) {
  if (cid !== 'counter') return [];
  let out = [];
  Object.values(COUNTER).forEach(group => {
    group.rows.forEach(r => out.push({ kana: r.k, romaji: r.r, arti: r.a, type: 'counter' }));
  });
  return out;
}

function bukuItems(cid) {
  const babKey = cid === 'buku-bab1' ? 'bab1' : cid === 'buku-bab2' ? 'bab2' : cid === 'buku-bab3' ? 'bab3' : null;
  if (!babKey || !BUKU[babKey]) return [];
  let out = [];
  Object.values(BUKU[babKey]).forEach(group => {
    group.rows.forEach(r => out.push({ kana: r.k, romaji: r.r, arti: r.a, type: 'buku' }));
  });
  return out;
}

function bunpouItems(cid) {
  const temaMap = {
    'bunpou-dasar':    'Kalimat Dasar',
    'bunpou-kosoado':  'Ko-So-A-Do',
    'bunpou-id':       'Identitas Diri',
    'bunpou-waktu':    'Waktu, Jumlah & Harga',
    'bunpou-minta':    'Meminta & Permintaan',
    'bunpou-jenis':    'Menanyakan Jenis & Kepemilikan',
    'bunpou-objek':    'Partikel Objek & Tempat (を・で)',
    'bunpou-arah':     'Partikel Arah & Waktu (へ・に)',
    'bunpou-negasi':   'Negasi & Kata Ganti Tak Tentu'
  };
  const tema = temaMap[cid];
  if (!tema || !Array.isArray(BUNPOU)) return [];
  let out = [];
  BUNPOU.filter(g => g.tema === tema).forEach(group => {
    group.items.forEach(it => out.push({ kana: it.pola, romaji: it.romaji, arti: it.arti, type: 'bunpou' }));
  });
  return out;
}

function cleanKana(k) {
  // "DVD（ディーブイディー）" -> "ディーブイディー" (jawaban/pilihan cukup kana-nya saja)
  const m = /^[A-Za-z0-9]+（(.+)）$/.exec(k);
  return m ? m[1] : k;
}

function getAllItems(catSet) {
  const useSet = catSet || SC;
  let all = [];
  useSet.forEach(id => {
    const qc = QCATS.find(c => c.id === id);
    if (!qc) return;
    if      (qc.t === 'kana')         all = all.concat(kanaItems(id));
    else if (qc.t === 'particle')     PT.forEach(p => all.push({ kana: p.sym, romaji: p.r, arti: p.name, type: 'particle' }));
    else if (qc.t === 'particle-adv') Object.values(PT_ADV).flat().forEach(p => all.push({ kana: p.sym, romaji: p.r, arti: p.kind, type: 'particle-adv' }));
    else if (qc.t === 'buku')         all = all.concat(bukuItems(id));
    else if (qc.t === 'bunpou')       all = all.concat(bunpouItems(id));
    else if (qc.t === 'counter')      all = all.concat(counterItems(id));
    else                              all = all.concat(ktItems(id));
  });
  all = all.map(x => ({ ...x, kana: cleanKana(x.kana) }));
  const seen = new Set();
  return all.filter(x => { const k = x.kana + '|' + x.romaji; if (seen.has(k)) return false; seen.add(k); return true; });
}

// ─────────────────────────────────────────────────────
// QUIZ ENGINE
// ─────────────────────────────────────────────────────
let QS = [], CQ = 0, CC = 0, CW = 0, ANS = false;

function shuf(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function validTypes(item) {
  const hasArti = item.type !== 'kana' && !!item.arti;
  return [...ST].filter(t => {
    // Pola bunpou terlalu panjang untuk mode kana<->romaji, cukup jp-to-id / id-to-jp
    if (item.type === 'bunpou') return (t === 'jp-to-id' || t === 'id-to-jp') && hasArti;
    if (t === 'kana-to-romaji' || t === 'romaji-to-kana') return true;
    return hasArti;
  });
}

// Skor kemiripan antara dua string (makin tinggi = makin mirip = distractor lebih susah)
function similarityScore(a, b) {
  if (!a || !b) return 0;
  const sa = a.toLowerCase(), sb = b.toLowerCase();
  let score = 0;
  // prefix sama (1-2 karakter pertama sama)
  if (sa[0] === sb[0]) score += 3;
  if (sa.length > 1 && sb.length > 1 && sa[1] === sb[1]) score += 2;
  // panjang mirip
  const lenDiff = Math.abs(sa.length - sb.length);
  if (lenDiff === 0) score += 2;
  else if (lenDiff === 1) score += 1;
  // akhiran sama
  if (sa[sa.length - 1] === sb[sb.length - 1]) score += 1;
  // berbagi substring 2 karakter
  for (let i = 0; i < sa.length - 1; i++) {
    if (sb.includes(sa.slice(i, i + 2))) score += 1;
  }
  return score;
}

// Track berapa kali setiap nilai muncul sebagai distractor dalam satu sesi quiz
let distractorCount = {};

function buildQ(item, pool) {
  const vt = validTypes(item);
  if (!vt.length) return null;
  const type = vt[Math.floor(Math.random() * vt.length)];
  let prompt, psub, ans, df, tag, isKA;

  if      (type === 'kana-to-romaji') { prompt = item.kana;   psub = null;       ans = item.romaji; df = 'romaji'; tag = 'Kana → Romaji';      isKA = false; }
  else if (type === 'romaji-to-kana') { prompt = item.romaji; psub = null;       ans = item.kana;   df = 'kana';   tag = 'Romaji → Kana';      isKA = true;  }
  else if (type === 'jp-to-id')       { prompt = item.kana;   psub = item.romaji;ans = item.arti;   df = 'arti';   tag = 'Jepang → Indonesia'; isKA = false; }
  else                                { prompt = item.arti;   psub = null;       ans = item.kana;   df = 'kana';   tag = 'Indonesia → Jepang'; isKA = true;  }

  // Kumpulkan kandidat distractor dari tipe yang sama
  const candidates = pool.filter(x => x !== item && x.type === item.type && x[df] && x[df] !== ans);

  // Beri skor setiap kandidat: kemiripan tinggi = lebih susah; kemunculan berlebihan = penalti
  const scored = candidates.map(x => {
    const val = x[df];
    const sim = similarityScore(ans, val);                    // kemiripan dengan jawaban benar
    const overuse = distractorCount[val] || 0;               // penalti kalau sering muncul
    return { val, score: sim - overuse * 2 };
  });

  // Urutkan dari skor tertinggi, lalu ambil 3 teratas dengan sedikit shuffle pada skor yang sama
  scored.sort((a, b) => b.score - a.score || Math.random() - 0.5);

  const used = new Set([ans]);
  const dists = [];
  for (const s of scored) {
    if (dists.length >= 3) break;
    if (!used.has(s.val)) { dists.push(s.val); used.add(s.val); }
  }

  // Fallback kalau masih kurang (pool kecil)
  if (dists.length < 3) {
    shuf(pool).forEach(x => {
      if (dists.length >= 3) return;
      if (x[df] && !used.has(x[df])) { dists.push(x[df]); used.add(x[df]); }
    });
  }

  // Update tracker kemunculan
  dists.forEach(v => { distractorCount[v] = (distractorCount[v] || 0) + 1; });

  const choices = shuf([ans, ...dists.slice(0, 3)]);
  return { prompt, psub, tag, ans, choices, isKA };
}

function startQuiz() {
  const all = getAllItems();
  if (all.length < 4) return;
  const picked = shuf(all).slice(0, QN === 999 ? all.length : Math.min(QN, all.length));
  QS = picked.map(x => buildQ(x, all)).filter(Boolean);
  if (!QS.length) return;
  CQ = 0; CC = 0; CW = 0; distractorCount = {};
  document.getElementById('quizSetup').style.display  = 'none';
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizActive').style.display = 'block';
  renderQ();
}

function renderQ() {
  ANS = false;
  const q = QS[CQ], tot = QS.length;
  document.getElementById('qpf').style.width  = `${(CQ / tot) * 100}%`;
  document.getElementById('qctr').textContent  = `${CQ + 1} / ${tot}`;
  document.getElementById('qsc').textContent   = `✓ ${CC}  ✗ ${CW}`;
  document.getElementById('qtag').textContent  = q.tag;

  const pe = document.getElementById('qprompt');
  pe.textContent = q.prompt;
  const l = q.prompt.length;
  pe.className = 'qprompt' + (l > 8 ? ' sm' : l > 4 ? ' md' : '');

  document.getElementById('qsub').textContent   = q.psub || '';
  document.getElementById('qfb').style.display  = 'none';
  document.getElementById('nxtBtn').style.display = 'none';

  const grid = document.getElementById('choicesEl');
  const maxL = Math.max(...q.choices.map(c => c.length));
  grid.style.gridTemplateColumns = maxL > 14 ? '1fr' : '1fr 1fr';
  grid.innerHTML = q.choices.map((c, i) => `
    <button class="choice" onclick="pickAns(${i})">
      ${q.isKA ? `<span class="ck">${c}</span>` : c}
    </button>`).join('');
}

function pickAns(idx) {
  if (ANS) return;
  ANS = true;
  const q = QS[CQ];
  const ok = q.choices[idx] === q.ans;
  ok ? CC++ : CW++;
  document.querySelectorAll('.choice').forEach((b, i) => {
    b.disabled = true;
    if (q.choices[i] === q.ans) b.classList.add('correct');
    else if (i === idx && !ok) b.classList.add('wrong');
  });
  const fb = document.getElementById('qfb');
  fb.style.display = 'block';
  if (ok) { fb.className = 'qfb ok'; fb.textContent = '✓ Benar！'; }
  else    { fb.className = 'qfb ng'; fb.textContent = `✗ Salah — jawaban: ${q.ans}`; }
  document.getElementById('nxtBtn').style.display = 'block';
}

function nextQ() {
  CQ++;
  if (CQ >= QS.length) showResult();
  else renderQ();
}

function showResult() {
  document.getElementById('quizActive').style.display = 'none';
  document.getElementById('quizResult').style.display = 'block';
  const pct = Math.round((CC / QS.length) * 100);
  document.getElementById('rScore').textContent = pct + '%';
  const msgs = ['頑張れ！Terus semangat！','もう少し！Hampir bagus！','いいね！Lumayan！','上手！Bagus banget！','完璧！Sempurna！'];
  document.getElementById('rSub').textContent = msgs[pct === 100 ? 4 : pct >= 80 ? 3 : pct >= 60 ? 2 : pct >= 40 ? 1 : 0];
  document.getElementById('rC').textContent = CC;
  document.getElementById('rW').textContent = CW;
  addSession(SC, ST, CC, CW, QS.length);
}

function retryQuiz() { document.getElementById('quizResult').style.display = 'none'; startQuiz(); }
function backSetup()  { document.getElementById('quizResult').style.display = 'none'; document.getElementById('quizSetup').style.display = 'block'; }

// ─────────────────────────────────────────────────────
// PROGRESS
// ─────────────────────────────────────────────────────
function renderProg() {
  const p = loadProg();
  const s = p.sessions || [], tc = p.tc || 0, tw = p.tw || 0, tq = tc + tw;
  const acc = tq > 0 ? Math.round((tc / tq) * 100) : 0;
  document.getElementById('povGrid').innerHTML = `
    <div class="pov"><div class="pov-l">Total Quiz</div><div class="pov-v">${s.length} <span>sesi</span></div></div>
    <div class="pov"><div class="pov-l">Total Soal</div><div class="pov-v">${tq} <span>soal</span></div></div>
    <div class="pov"><div class="pov-l">Akurasi</div><div class="pov-v">${acc}<span>%</span></div><div class="mbar"><div class="mfill" style="width:${acc}%"></div></div></div>
    <div class="pov"><div class="pov-l">Benar / Salah</div><div class="pov-v" style="color:var(--green)">${tc}</div><div style="font-family:'DM Mono',monospace;font-size:.62rem;color:var(--red)">✗ ${tw}</div></div>`;
  const rl = document.getElementById('recentList');
  if (!s.length) {
    rl.innerHTML = `<div style="text-align:center;color:var(--text3);font-style:italic;padding:2rem;font-size:.78rem">Belum ada riwayat. Mulai quiz dulu!</div>`;
    return;
  }
  rl.innerHTML = s.map(x => {
    const d = new Date(x.date);
    const ds = d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
             + ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const pct = Math.round((x.correct / x.total) * 100);
    const cls = pct >= 80 ? 'hi' : pct >= 50 ? 'md' : 'lo';
    const cats = [...x.cats].slice(0, 3)
      .map(id => { const c = QCATS.find(q => q.id === id); return c ? c.label : id; })
      .join(', ') + (x.cats.length > 3 ? ` +${x.cats.length - 3} lainnya` : '');
    return `<div class="ri">
      <div class="ri-l">
        <span class="ri-cats">${cats || '—'}</span>
        <span class="ri-date">${ds} · ${x.total} soal</span>
      </div>
      <div class="ri-sc ${cls}">${pct}%</div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────────────────
// BUKU
// ─────────────────────────────────────────────────────
function switchBukuTab(tab, btn) {
  document.querySelectorAll('#pageBuku > [id^="bukuBab"]').forEach(el => el.style.display = 'none');
  document.getElementById('buku' + tab[0].toUpperCase() + tab.slice(1)).style.display = 'block';
  document.querySelectorAll('#bukuTabs .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ─────────────────────────────────────────────────────
// SHARED NOTES LOOKUP
// Satu sumber kebenaran untuk penjelasan kata: dicari dari Materi (KT)
// dan Kata Bantu Bilangan (COUNTER). Dipakai bareng oleh Materi & Buku,
// supaya kalau diupdate di satu tempat otomatis ikut sinkron di semua menu.
// ─────────────────────────────────────────────────────
let _kotobaIndex = null;

function buildKotobaIndex() {
  if (_kotobaIndex) return _kotobaIndex;
  _kotobaIndex = new Map();
  const sources = [KT, COUNTER];
  sources.forEach(src => {
    Object.values(src).forEach(group => {
      group.rows.forEach(r => {
        const key = r.k + '|' + r.r;
        if (!_kotobaIndex.has(key)) _kotobaIndex.set(key, r);
      });
    });
  });
  return _kotobaIndex;
}

// Ambil {kj, n} dari Materi/Counter berdasarkan kana+romaji.
// Kalau row Buku sudah punya kj/n sendiri, itu tetap dipakai duluan (override lokal).
function resolveEntry(row) {
  const idx = buildKotobaIndex();
  const match = idx.get(row.k + '|' + row.r);
  return {
    kj: row.kj || (match && match.kj) || '',
    n:  row.n  || (match && match.n)  || ''
  };
}

function renderBukuBab(babKey, elId) {
  const data = BUKU[babKey];
  if (!data) return;
  const el = document.getElementById(elId);
  let html = '';
  for (const [group, content] of Object.entries(data)) {
    const id = 'buku_' + babKey + '_' + group.replace(/[^a-z0-9]/gi, '_');
    const resolved = content.rows.map(r => ({ ...r, ...resolveEntry(r) }));
    const hasNote = resolved.some(r => r.n);
    const hasKanji = resolved.some(r => r.kj);
    // Pola Kalimat Tanya: render pakai kolom kana=pola, roma=romaji, arti=arti
    html += `<div class="acc-item">
      <div class="acc-head" onclick="togAcc('${id}',this)">
        <div class="acc-left">
          <span class="acc-title">${group}</span>
          <span class="acc-cnt">${resolved.length}</span>
        </div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="${id}">
        <div class="tbl-wrap"><table class="ktable">
          <thead><tr>
            ${hasKanji ? '<th style="width:70px">Kanji</th>' : ''}
            <th style="min-width:140px">Kana / Pola</th>
            <th style="min-width:160px">Romaji</th>
            <th style="min-width:120px">Arti</th>
            ${hasNote ? '<th>Penjelasan</th>' : ''}
          </tr></thead>
          <tbody>${resolved.map(row => `<tr>
            ${hasKanji ? `<td class="td-kanji">${row.kj || ''}</td>` : ''}
            <td class="td-kana" style="font-size:.9rem">${row.k}</td>
            <td class="td-roma">${row.r}</td>
            <td class="td-arti">${row.a}</td>
            ${hasNote ? `<td class="td-note">${row.n || ''}</td>` : ''}
          </tr>`).join('')}</tbody>
        </table></div>
      </div>
    </div>`;
  }
  el.innerHTML = html;
}

// ─────────────────────────────────────────────────────
// BUNPOU
// ─────────────────────────────────────────────────────
function renderBunpou() {
  const el = document.getElementById('bunpouContent');
  if (!el || !Array.isArray(BUNPOU)) return;

  // Kelompokkan array flat BUNPOU berdasarkan field `tema`
  const byTema = {};
  const temaOrder = [];
  BUNPOU.forEach(group => {
    const t = group.tema || 'Lainnya';
    if (!byTema[t]) { byTema[t] = []; temaOrder.push(t); }
    byTema[t].push(group);
  });

  let html = '';
  temaOrder.forEach(tema => {
    html += `<div class="sec-header-bunpou">${tema}</div>`;
    byTema[tema].forEach((group, gi) => {
      const id = 'bunpou_' + tema.replace(/[^a-z0-9]/gi, '_') + '_' + gi;
      html += `<div class="acc-item">
        <div class="acc-head" onclick="togAcc('${id}',this)">
          <div class="acc-left">
            <span class="acc-title">${group.judul}</span>
            <span class="acc-cnt">${group.items.length}</span>
          </div>
          <span class="acc-arrow">▶</span>
        </div>
        <div class="acc-body" id="${id}">
          ${group.sub ? `<div style="font-size:.8rem;color:var(--text3);font-style:italic;margin-bottom:.9rem;line-height:1.6">${group.sub}</div>` : ''}
          <div class="particle-grid">
            ${group.items.map(it => `
              <div class="pcard">
                <div class="p-sym" style="font-size:1.15rem;font-family:'Noto Serif JP',serif">${it.pola}</div>
                <div class="p-rom">${it.romaji}</div>
                <div class="p-name">${it.arti}</div>
                ${it.catatan ? `<div class="p-desc">${it.catatan}</div>` : ''}
                <div class="p-exs">${(it.contoh || []).map(e => `<div class="p-ex"><div class="p-ex-jp">${e.jp}</div><div class="p-ex-id">${e.id}</div></div>`).join('')}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
    });
  });
  el.innerHTML = html;
}

// ─────────────────────────────────────────────────────
// LATIHAN AI
// ─────────────────────────────────────────────────────
const AI_KEY_STORE = 'nihongo_ai_key';
const AI_PROVIDER_STORE = 'nihongo_ai_provider';
const AI_MODEL_STORE = 'nihongo_ai_model';

let AI_SC = new Set();      // kategori materi terpilih (terpisah dari SC milik Quiz)
let AI_ST = new Set(['jp-to-id', 'id-to-jp']);
let AI_N = 5;
let AI_PROVIDER = 'groq';
let AI_MODE = 'vocab';      // 'vocab' (isian kata) atau 'bunpou' (bikin kalimat pakai pola)

function bunpouFullItems(cidSet) {
  const temaMap = {
    'bunpou-dasar':    'Kalimat Dasar',
    'bunpou-kosoado':  'Ko-So-A-Do',
    'bunpou-id':       'Identitas Diri',
    'bunpou-waktu':    'Waktu, Jumlah & Harga',
    'bunpou-minta':    'Meminta & Permintaan',
    'bunpou-jenis':    'Menanyakan Jenis & Kepemilikan',
    'bunpou-objek':    'Partikel Objek & Tempat (を・で)',
    'bunpou-arah':     'Partikel Arah & Waktu (へ・に)',
    'bunpou-negasi':   'Negasi & Kata Ganti Tak Tentu'
  };
  const temas = [...cidSet].map(id => temaMap[id]).filter(Boolean);
  if (!temas.length || !Array.isArray(BUNPOU)) return [];
  let out = [];
  BUNPOU.filter(g => temas.includes(g.tema)).forEach(group => {
    group.items.forEach(it => out.push({
      pola: it.pola, romaji: it.romaji, arti: it.arti,
      catatan: it.catatan || '',
      contohJp: it.contoh?.[0]?.jp || '', contohId: it.contoh?.[0]?.id || ''
    }));
  });
  return out;
}
let AI_QUEUE = [];          // soal-soal hasil generate AI
let AI_IDX = 0, AI_CORRECT = 0, AI_WRONG = 0;

const AI_ENDPOINTS = {
  groq:       { url: 'https://api.groq.com/openai/v1/chat/completions',    model: 'openai/gpt-oss-120b' },
  openai:     { url: 'https://api.openai.com/v1/chat/completions',         model: 'gpt-5-mini' },
  openrouter: { url: 'https://openrouter.ai/api/v1/chat/completions',      model: 'openai/gpt-4o-mini' }
};

function aiVisibleCats() {
  return AI_MODE === 'bunpou' ? QCATS.filter(c => c.t === 'bunpou') : QCATS;
}

function initAISetup() {
  document.getElementById('aiQog').innerHTML = aiVisibleCats().map(c => `
    <div class="qopt${AI_SC.has(c.id) ? ' sel' : ''}" onclick="togAICat('${c.id}',this)">
      <div class="qcb">${AI_SC.has(c.id) ? '✓' : ''}</div>
      <span class="qol">${c.label}</span>
    </div>`).join('');

  // Muat provider & key tersimpan
  const savedProvider = localStorage.getItem(AI_PROVIDER_STORE);
  if (savedProvider && AI_ENDPOINTS[savedProvider]) {
    AI_PROVIDER = savedProvider;
    document.querySelectorAll('#aiProviderRow .tbtn').forEach(b => b.classList.toggle('sel', b.dataset.p === savedProvider));
  }
  const savedKey = localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  const statusEl = document.getElementById('aiKeyStatus');
  if (savedKey) {
    document.getElementById('aiKeyInput').value = savedKey;
    statusEl.textContent = 'Key tersimpan untuk ' + AI_PROVIDER + '.';
    statusEl.style.color = 'var(--green)';
  } else {
    statusEl.textContent = 'Belum ada key tersimpan untuk ' + AI_PROVIDER + '.';
    statusEl.style.color = 'var(--text3)';
  }
  const savedModel = localStorage.getItem(AI_MODEL_STORE + '_' + AI_PROVIDER);
  document.getElementById('aiModelInput').value = savedModel || '';
  document.getElementById('aiModelStatus').textContent = 'Model aktif: ' + (savedModel || AI_ENDPOINTS[AI_PROVIDER].model + ' (default)');
  checkAIReady();
}

function setAIMode(btn) {
  AI_MODE = btn.dataset.m;
  document.querySelectorAll('#aiModeRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  AI_SC.clear();
  document.getElementById('aiTypeRow').style.display = AI_MODE === 'bunpou' ? 'none' : 'flex';
  document.getElementById('aiTypeLabel').style.display = AI_MODE === 'bunpou' ? 'none' : 'block';
  initAISetup();
}

function setAIProvider(btn) {
  AI_PROVIDER = btn.dataset.p;
  localStorage.setItem(AI_PROVIDER_STORE, AI_PROVIDER);
  document.querySelectorAll('#aiProviderRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  const savedKey = localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  const statusEl = document.getElementById('aiKeyStatus');
  document.getElementById('aiKeyInput').value = savedKey || '';
  if (savedKey) { statusEl.textContent = 'Key tersimpan untuk ' + AI_PROVIDER + '.'; statusEl.style.color = 'var(--green)'; }
  else          { statusEl.textContent = 'Belum ada key tersimpan untuk ' + AI_PROVIDER + '.'; statusEl.style.color = 'var(--text3)'; }
  const savedModel = localStorage.getItem(AI_MODEL_STORE + '_' + AI_PROVIDER);
  document.getElementById('aiModelInput').value = savedModel || '';
  document.getElementById('aiModelStatus').textContent = 'Model aktif: ' + (savedModel || AI_ENDPOINTS[AI_PROVIDER].model + ' (default)');
  checkAIReady();
}

function saveAIModel(input) {
  const val = input.value.trim();
  if (val) localStorage.setItem(AI_MODEL_STORE + '_' + AI_PROVIDER, val);
  else      localStorage.removeItem(AI_MODEL_STORE + '_' + AI_PROVIDER);
  document.getElementById('aiModelStatus').textContent = 'Model aktif: ' + (val || AI_ENDPOINTS[AI_PROVIDER].model + ' (default)');
}

function saveAIKey() {
  const val = document.getElementById('aiKeyInput').value.trim();
  if (!val) return;
  localStorage.setItem(AI_KEY_STORE + '_' + AI_PROVIDER, val);
  const statusEl = document.getElementById('aiKeyStatus');
  statusEl.textContent = 'Key tersimpan untuk ' + AI_PROVIDER + '.';
  statusEl.style.color = 'var(--green)';
  checkAIReady();
}

function clearAIKey() {
  localStorage.removeItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  document.getElementById('aiKeyInput').value = '';
  const statusEl = document.getElementById('aiKeyStatus');
  statusEl.textContent = 'Key untuk ' + AI_PROVIDER + ' sudah dihapus.';
  statusEl.style.color = 'var(--text3)';
  checkAIReady();
}

function togAICat(id, el) {
  AI_SC.has(id)
    ? (AI_SC.delete(id), el.classList.remove('sel'), el.querySelector('.qcb').textContent = '')
    : (AI_SC.add(id),    el.classList.add('sel'),    el.querySelector('.qcb').textContent = '✓');
  checkAIReady();
}

function aiSelAll(v) { v ? aiVisibleCats().forEach(c => AI_SC.add(c.id)) : AI_SC.clear(); initAISetup(); }

function toggleAIType(btn) {
  const t = btn.dataset.t;
  if (AI_ST.has(t)) { AI_ST.delete(t); btn.classList.remove('sel'); }
  else              { AI_ST.add(t);    btn.classList.add('sel'); }
  checkAIReady();
}

function setAICount(btn) {
  document.querySelectorAll('#aiCntRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  document.getElementById('aiCntCustom').value = '';
  AI_N = parseInt(btn.dataset.c);
}

function setAICountCustom(input) {
  const v = parseInt(input.value);
  if (!v || v < 1) return;
  document.querySelectorAll('#aiCntRow .tbtn').forEach(b => b.classList.remove('sel'));
  AI_N = Math.min(v, 100);
}

function checkAIReady() {
  const hasItems = AI_MODE === 'bunpou' ? bunpouFullItems(AI_SC).length >= 1 : getAllItems(AI_SC).length >= 1;
  const hasTypes = AI_MODE === 'bunpou' ? true : AI_ST.size > 0;
  const hasKey = !!localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  document.getElementById('aiStartBtn').disabled = !(hasItems && hasTypes && hasKey);
  const warn = document.getElementById('aiWarn');
  if (!hasKey)        { warn.style.display = 'block'; warn.textContent = 'Simpan API key dulu sebelum membuat soal.'; }
  else if (!hasItems) { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu kategori materi.'; }
  else if (!hasTypes) { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu tipe soal.'; }
  else                { warn.style.display = 'none'; }
}

async function callAI(messages) {
  const ep = AI_ENDPOINTS[AI_PROVIDER];
  const key = localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  const customModel = localStorage.getItem(AI_MODEL_STORE + '_' + AI_PROVIDER);
  const model = customModel || ep.model;
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key };
  if (AI_PROVIDER === 'openrouter') {
    headers['HTTP-Referer'] = location.origin;
    headers['X-Title'] = 'Nihongo Review';
  }
  const res = await fetch(ep.url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ model, messages, temperature: 0.7 })
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error('API error ' + res.status + ': ' + errText.slice(0, 200));
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

function showAIError(msg) {
  const box = document.getElementById('aiErrorBox');
  box.style.display = 'block';
  box.textContent = '⚠ ' + msg;
  document.getElementById('aiLoading').style.display = 'none';
  document.getElementById('aiSetup').style.display = 'block';
}

async function startAILatihan() {
  document.getElementById('aiErrorBox').style.display = 'none';

  if (AI_MODE === 'bunpou') {
    const pool = bunpouFullItems(AI_SC);
    if (!pool.length) return;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const sample = shuffled.slice(0, Math.min(AI_N, pool.length, 50));
    AI_QUEUE = sample.map(it => ({
      tag: 'bunpou-kalimat',
      prompt: `Buat 1 kalimat menggunakan pola: ${it.pola}`,
      sub: `${it.romaji} — "${it.arti}"` + (it.catatan ? ` · ${it.catatan}` : ''),
      pola: it.pola, arti: it.arti, catatan: it.catatan,
      contohJp: it.contohJp, contohId: it.contohId
    }));
    AI_IDX = 0; AI_CORRECT = 0; AI_WRONG = 0;
    document.getElementById('aiSetup').style.display = 'none';
    document.getElementById('aiActive').style.display = 'block';
    renderAIQuestion();
    return;
  }

  const pool = getAllItems(AI_SC);
  if (!pool.length) return;

  document.getElementById('aiSetup').style.display = 'none';
  document.getElementById('aiLoading').style.display = 'block';

  // Ambil sample acak dari pool sebanyak AI_N (atau semua kalau pool lebih kecil)
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const sample = shuffled.slice(0, Math.min(AI_N, pool.length, 50));
  const types = [...AI_ST];

  const materialList = sample.map((it, i) => {
    const t = types[i % types.length];
    return `${i + 1}. kana:"${it.kana}" romaji:"${it.romaji}" arti:"${it.arti}" tipe:"${t}"`;
  }).join('\n');

  const sysPrompt = `Kamu adalah pembuat soal bahasa Jepang untuk aplikasi belajar. Berdasarkan daftar kosakata/pola berikut, buatkan SATU soal ISIAN (bukan pilihan ganda) untuk tiap nomor, sesuai tipe yang diminta:
- tipe "jp-to-id": tampilkan kana/pola dalam bahasa Jepang, orang harus mengetik artinya dalam Bahasa Indonesia.
- tipe "id-to-jp": tampilkan artinya dalam Bahasa Indonesia, orang harus mengetik kana (hiragana/katakana) atau kanjinya dalam bahasa Jepang.

Balas HANYA dalam format JSON array valid, tanpa markdown, tanpa penjelasan tambahan, dengan struktur:
[{"prompt":"teks soal yang ditampilkan ke user","sub":"petunjuk tambahan singkat atau kosong string","answer":"jawaban benar yang diharapkan","tag":"jp-to-id atau id-to-jp"}]`;

  const userPrompt = `Buatkan soal dari daftar berikut:\n${materialList}`;

  try {
    const raw = await callAI([
      { role: 'system', content: sysPrompt },
      { role: 'user', content: userPrompt }
    ]);
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(cleaned);
    if (!Array.isArray(parsed) || !parsed.length) throw new Error('Format soal dari AI tidak valid.');
    AI_QUEUE = parsed;
    AI_IDX = 0; AI_CORRECT = 0; AI_WRONG = 0;
    document.getElementById('aiLoading').style.display = 'none';
    document.getElementById('aiActive').style.display = 'block';
    renderAIQuestion();
  } catch (err) {
    showAIError('Gagal membuat soal: ' + err.message);
  }
}

function renderAIQuestion() {
  const q = AI_QUEUE[AI_IDX];
  const tot = AI_QUEUE.length;
  document.getElementById('aiPf').style.width = `${(AI_IDX / tot) * 100}%`;
  document.getElementById('aiCtr').textContent = `${AI_IDX + 1} / ${tot}`;
  document.getElementById('aiSc').textContent = `✓ ${AI_CORRECT}  ✗ ${AI_WRONG}`;
  document.getElementById('aiTag').textContent =
    q.tag === 'jp-to-id' ? 'Jepang → Indo' :
    q.tag === 'bunpou-kalimat' ? 'Bikin Kalimat (Bunpou)' : 'Indo → Jepang';
  const pe = document.getElementById('aiPrompt');
  pe.textContent = q.prompt;
  const l = q.prompt.length;
  pe.className = 'qprompt' + (l > 18 ? ' sm' : l > 8 ? ' md' : '');
  document.getElementById('aiSub').textContent = q.sub || '';
  const exEl = document.getElementById('aiExample');
  if (q.tag === 'bunpou-kalimat' && q.contohJp) {
    exEl.style.display = 'block';
    exEl.textContent = `Contoh referensi (jangan disalin persis): ${q.contohJp} — ${q.contohId}`;
  } else {
    exEl.style.display = 'none';
    exEl.textContent = '';
  }
  const input = document.getElementById('aiAnswerInput');
  input.placeholder = q.tag === 'bunpou-kalimat' ? 'Ketik kalimat bahasa Jepangmu di sini...' : 'Ketik jawabanmu di sini...';
  input.value = '';
  input.disabled = false;
  document.getElementById('aiSubmitBtn').style.display = 'block';
  document.getElementById('aiFb').style.display = 'none';
  document.getElementById('aiNxtBtn').style.display = 'none';
  input.focus();
}

async function submitAIAnswer() {
  const input = document.getElementById('aiAnswerInput');
  const userAns = input.value.trim();
  if (!userAns) return;
  input.disabled = true;
  document.getElementById('aiSubmitBtn').disabled = true;
  document.getElementById('aiSubmitBtn').textContent = 'Mengecek...';

  const q = AI_QUEUE[AI_IDX];
  let sysPrompt, userPrompt;

  if (q.tag === 'bunpou-kalimat') {
    sysPrompt = `Kamu adalah guru bahasa Jepang yang mengoreksi kalimat buatan siswa. Siswa diminta membuat SATU kalimat bahasa Jepang yang menggunakan pola tata bahasa tertentu. Nilai:
1. Apakah kalimat siswa BENAR-BENAR memakai pola yang diminta (bukan pola lain).
2. Apakah kalimat itu gramatikal dan masuk akal (partikel, bentuk kata kerja, struktur, dll).
Typo kecil atau penulisan kana/kanji yang tertukar tetap boleh dianggap benar kalau strukturnya sudah tepat. Kalau ada kesalahan, berikan versi perbaikannya.
Balas HANYA JSON: {"correct":true/false,"feedback":"penjelasan singkat 1-2 kalimat dalam Bahasa Indonesia","corrected":"versi kalimat yang sudah diperbaiki (kosongkan string jika kalimat sudah benar)"}`;
    userPrompt = `Pola yang harus dipakai: ${q.pola} (${q.arti})\nCatatan pola: ${q.catatan || '-'}\nContoh referensi: ${q.contohJp || '-'}\nKalimat buatan siswa: ${userAns}\nApakah kalimat siswa benar?`;
  } else {
    sysPrompt = `Kamu adalah pengoreksi jawaban bahasa Jepang. Nilai apakah jawaban user BENAR secara makna/isi, meski beda bentuk penulisan (romaji vs kana vs kanji semua bisa diterima kalau maksudnya sama, typo kecil dimaafkan). Balas HANYA JSON: {"correct":true/false,"feedback":"penjelasan singkat 1 kalimat dalam Bahasa Indonesia"}`;
    userPrompt = `Soal: ${q.prompt}\nJawaban yang diharapkan: ${q.answer}\nJawaban user: ${userAns}\nApakah benar?`;
  }

  try {
    const raw = await callAI([
      { role: 'system', content: sysPrompt },
      { role: 'user', content: userPrompt }
    ]);
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(cleaned);
    const ok = !!parsed.correct;
    ok ? AI_CORRECT++ : AI_WRONG++;
    const fb = document.getElementById('aiFb');
    fb.style.display = 'block';
    fb.className = 'qfb ' + (ok ? 'ok' : 'ng');
    let fbText = (ok ? '✓ Benar — ' : '✗ Kurang tepat — ') + (parsed.feedback || (q.tag === 'bunpou-kalimat' ? '' : `Jawaban: ${q.answer}`));
    if (q.tag === 'bunpou-kalimat' && parsed.corrected) fbText += `\nSaran: ${parsed.corrected}`;
    fb.textContent = fbText;
    document.getElementById('aiSc').textContent = `✓ ${AI_CORRECT}  ✗ ${AI_WRONG}`;
    document.getElementById('aiSubmitBtn').style.display = 'none';
    document.getElementById('aiNxtBtn').style.display = 'block';
  } catch (err) {
    showAIError('Gagal mengecek jawaban: ' + err.message);
  } finally {
    document.getElementById('aiSubmitBtn').disabled = false;
    document.getElementById('aiSubmitBtn').textContent = 'Kirim Jawaban';
  }
}

function nextAIQuestion() {
  AI_IDX++;
  if (AI_IDX >= AI_QUEUE.length) showAIResult();
  else renderAIQuestion();
}

function showAIResult() {
  document.getElementById('aiActive').style.display = 'none';
  document.getElementById('aiResult').style.display = 'block';
  const tot = AI_QUEUE.length;
  const pct = Math.round((AI_CORRECT / tot) * 100);
  document.getElementById('aiRScore').textContent = pct + '%';
  const msgs = ['頑張れ！Terus semangat！','もう少し！Hampir bagus！','いいね！Lumayan！','上手！Bagus banget！','完璧！Sempurna！'];
  document.getElementById('aiRSub').textContent = msgs[pct === 100 ? 4 : pct >= 80 ? 3 : pct >= 60 ? 2 : pct >= 40 ? 1 : 0];
  document.getElementById('aiRC').textContent = AI_CORRECT;
  document.getElementById('aiRW').textContent = AI_WRONG;
  addSession([...AI_SC], AI_MODE === 'bunpou' ? ['bunpou-kalimat'] : [...AI_ST], AI_CORRECT, AI_WRONG, tot);
}

function backAISetup() {
  document.getElementById('aiResult').style.display = 'none';
  document.getElementById('aiSetup').style.display = 'block';
}

// ─────────────────────────────────────────────────────
// MENULIS (WRITING PRACTICE — CANVAS TRACE)
// ─────────────────────────────────────────────────────
function wHiraganaPool() {
  let out = [];
  Object.values(H).forEach(group => group.forEach(x => out.push({ char: x.c, romaji: x.r, arti: null, note: x.n || null, type: 'hiragana' })));
  return out;
}

function wKatakanaPool() {
  let out = [];
  Object.values(K).forEach(group => group.forEach(x => out.push({ char: x.c, romaji: x.r, arti: null, note: x.n || null, type: 'katakana' })));
  return out;
}

function wKanjiPool() {
  let out = [];
  const scanRows = rows => rows.forEach(r => {
    if (!r.kj) return;
    if (r.kj.includes('/') || r.kj.includes('（') || r.kj.includes('(')) return; // lewati bentuk alternatif ganda
    out.push({ char: r.kj, romaji: r.r, arti: r.a, note: r.n || null, type: 'kanji' });
  });
  Object.values(KT).forEach(g => scanRows(g.rows));
  Object.values(COUNTER).forEach(g => scanRows(g.rows));
  ['bab1', 'bab2', 'bab3'].forEach(b => { if (BUKU[b]) Object.values(BUKU[b]).forEach(g => scanRows(g.rows)); });
  const seen = new Set();
  return out.filter(x => { if (seen.has(x.char)) return false; seen.add(x.char); return true; });
}

const WCATS = [
  { id: 'hiragana', label: 'Hiragana', pool: wHiraganaPool },
  { id: 'katakana', label: 'Katakana', pool: wKatakanaPool },
  { id: 'kanji',    label: 'Kanji (dari Kosakata)', pool: wKanjiPool }
];

let WC = new Set(['hiragana']), WORDER = 'acak', WN = 20;
let WQ = [], WCQ = 0, WOK = 0, WNGCOUNT = 0, WCUR = null, WNG_LIST = [];
let W_GUIDE_VISIBLE = true, W_NOTE_VISIBLE = false, W_DRAWING = false;

function initWSetup() {
  document.getElementById('wog').innerHTML = WCATS.map(c => `
    <div class="qopt${WC.has(c.id) ? ' sel' : ''}" onclick="wTogCat('${c.id}',this)">
      <div class="qcb">${WC.has(c.id) ? '✓' : ''}</div>
      <span class="qol">${c.label}</span>
    </div>`).join('');
  wCheckReady();
}

function wTogCat(id, el) {
  WC.has(id)
    ? (WC.delete(id), el.classList.remove('sel'), el.querySelector('.qcb').textContent = '')
    : (WC.add(id),    el.classList.add('sel'),    el.querySelector('.qcb').textContent = '✓');
  wCheckReady();
}

function setWOrder(btn) {
  document.querySelectorAll('#wOrderRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  WORDER = btn.dataset.o;
}

function setWCount(btn) {
  document.querySelectorAll('#wCntRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  document.getElementById('wCntCustom').value = '';
  WN = parseInt(btn.dataset.c);
}

function setWCountCustom(input) {
  const v = parseInt(input.value);
  if (!v || v < 1) return;
  document.querySelectorAll('#wCntRow .tbtn').forEach(b => b.classList.remove('sel'));
  WN = Math.min(v, 500);
}

function wGetPool() {
  let out = [];
  WCATS.forEach(c => { if (WC.has(c.id)) out = out.concat(c.pool()); });
  return out;
}

function wCheckReady() {
  const has = wGetPool().length >= 1;
  const aiKeyOk = !!localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  document.getElementById('wStartBtn').disabled = !(has && aiKeyOk);
  const warn = document.getElementById('wWarn');
  if (!has)          { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu kategori.'; }
  else if (!aiKeyOk) { warn.style.display = 'block'; warn.textContent = 'Simpan API key dulu di tab Latihan AI sebelum mulai latihan menulis.'; }
  else               { warn.style.display = 'none'; }
}

function startWriting() {
  let pool = wGetPool();
  if (WORDER === 'acak') pool = shuf(pool);
  if (WN !== 999) pool = pool.slice(0, WN);
  WQ = pool; WCQ = 0; WOK = 0; WNGCOUNT = 0; WNG_LIST = [];
  document.getElementById('wSetup').style.display = 'none';
  document.getElementById('wResult').style.display = 'none';
  document.getElementById('wActive').style.display = 'block';
  renderWQuestion();
}

function renderWQuestion() {
  const item = WQ[WCQ]; WCUR = item;
  document.getElementById('wPf').style.width = Math.round((WCQ / WQ.length) * 100) + '%';
  document.getElementById('wCtr').textContent = (WCQ + 1) + ' / ' + WQ.length;
  document.getElementById('wSc').textContent = '✓ ' + WOK + '  ✗ ' + WNGCOUNT;
  const tagMap = { hiragana: 'Hiragana', katakana: 'Katakana', kanji: 'Kanji' };
  document.getElementById('wTag').textContent = tagMap[item.type] || item.type;
  document.getElementById('wPrompt').textContent = item.romaji || '';
  document.getElementById('wSub').textContent = item.arti ? item.arti : 'Tulis karakternya di kanvas di bawah';

  const noteEl = document.getElementById('wNote'), noteBtn = document.getElementById('wNoteToggleBtn');
  noteEl.style.display = 'none'; W_NOTE_VISIBLE = false; noteBtn.textContent = 'Lihat Catatan';
  noteBtn.style.display = item.note ? 'flex' : 'none';
  noteEl.textContent = item.note || '';

  W_GUIDE_VISIBLE = true;
  document.getElementById('wGuideCanvas').classList.remove('hidden');
  document.getElementById('wGuideToggleBtn').textContent = 'Sembunyikan Panduan';

  const aiBtn = document.getElementById('wAICheckBtn'), aiFb = document.getElementById('wAIFb'), aiNxt = document.getElementById('wAINxtBtn'), checkRow = document.getElementById('wCheckRow');
  aiFb.style.display = 'none'; aiFb.textContent = ''; aiNxt.style.display = 'none';
  aiBtn.style.display = 'block'; aiBtn.disabled = false; aiBtn.textContent = 'Cek dengan AI';
  checkRow.style.display = 'none';

  wSetupCanvases(item.char);
}

function wSetupCanvases(char) {
  const wrap = document.getElementById('wCanvasWrap');
  const guide = document.getElementById('wGuideCanvas');
  const ink = document.getElementById('wInkCanvas');
  const dpr = window.devicePixelRatio || 1;
  const size = wrap.clientWidth;
  [guide, ink].forEach(cv => { cv.width = size * dpr; cv.height = size * dpr; });

  const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#e8e4dc';
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent2').trim() || '#8b6fcb';

  const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--border2').trim() || '#888';

  const gctx = guide.getContext('2d');
  gctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  gctx.clearRect(0, 0, size, size);

  // Garis bantu berbentuk "+" (seperti kertas latihan kanji) — digambar dulu di belakang karakter
  gctx.strokeStyle = gridColor;
  gctx.globalAlpha = 0.9;
  gctx.setLineDash([5, 6]);
  gctx.lineWidth = Math.max(1, size * 0.0035);
  gctx.beginPath(); gctx.moveTo(size / 2, 3); gctx.lineTo(size / 2, size - 3); gctx.stroke();
  gctx.beginPath(); gctx.moveTo(3, size / 2); gctx.lineTo(size - 3, size / 2); gctx.stroke();
  gctx.setLineDash([]); gctx.globalAlpha = 1;

  // Karakter panduan transparan di atas grid
  gctx.fillStyle = textColor;
  gctx.globalAlpha = 0.32;
  gctx.textAlign = 'center';
  gctx.textBaseline = 'middle';
  const len = [...char].length;
  const fontSize = size * Math.max(0.16, 0.62 - (len - 1) * 0.09);
  gctx.font = `400 ${fontSize}px 'Noto Serif JP', serif`;
  gctx.fillText(char, size / 2, size / 2 + fontSize * 0.04);
  gctx.globalAlpha = 1;

  const ictx = ink.getContext('2d');
  ictx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ictx.clearRect(0, 0, size, size);
  ictx.lineWidth = Math.max(4, size * 0.028);
  ictx.lineCap = 'round';
  ictx.lineJoin = 'round';
  ictx.strokeStyle = accentColor;
}

function wInitCanvasEvents() {
  const ink = document.getElementById('wInkCanvas');
  const getPos = e => {
    const rect = ink.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  ink.addEventListener('pointerdown', e => {
    e.preventDefault();
    W_DRAWING = true;
    ink.setPointerCapture(e.pointerId);
    const ctx = ink.getContext('2d'), p = getPos(e);
    ctx.beginPath(); ctx.moveTo(p.x, p.y);
  });
  ink.addEventListener('pointermove', e => {
    if (!W_DRAWING) return;
    e.preventDefault();
    const ctx = ink.getContext('2d'), p = getPos(e);
    ctx.lineTo(p.x, p.y); ctx.stroke();
  });
  const stop = () => { W_DRAWING = false; };
  ink.addEventListener('pointerup', stop);
  ink.addEventListener('pointercancel', stop);
  ink.addEventListener('pointerleave', stop);

  let resizeT;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      const active = document.getElementById('pageMenulis').classList.contains('active');
      const showing = document.getElementById('wActive').style.display === 'block';
      if (active && showing && WCUR) wSetupCanvases(WCUR.char);
    }, 200);
  });
}

function wToggleGuide() {
  const g = document.getElementById('wGuideCanvas'), btn = document.getElementById('wGuideToggleBtn');
  W_GUIDE_VISIBLE = !W_GUIDE_VISIBLE;
  g.classList.toggle('hidden', !W_GUIDE_VISIBLE);
  btn.textContent = W_GUIDE_VISIBLE ? 'Sembunyikan Panduan' : 'Tampilkan Panduan';
}

function wClearInk() {
  const ink = document.getElementById('wInkCanvas');
  const dpr = window.devicePixelRatio || 1;
  ink.getContext('2d').clearRect(0, 0, ink.width / dpr, ink.height / dpr);
}

function wToggleNote() {
  const el = document.getElementById('wNote'), btn = document.getElementById('wNoteToggleBtn');
  W_NOTE_VISIBLE = !W_NOTE_VISIBLE;
  el.style.display = W_NOTE_VISIBLE ? 'block' : 'none';
  btn.textContent = W_NOTE_VISIBLE ? 'Sembunyikan Catatan' : 'Lihat Catatan';
}

function wAdvance() {
  WCQ++;
  if (WCQ >= WQ.length) finishWriting(); else renderWQuestion();
}

function wMark(ok) {
  if (ok) WOK++; else { WNGCOUNT++; WNG_LIST.push(WCUR); }
  wAdvance();
}

function wCaptureInkImage() {
  const ink = document.getElementById('wInkCanvas');
  const off = document.createElement('canvas');
  off.width = ink.width; off.height = ink.height;
  const octx = off.getContext('2d');
  octx.fillStyle = '#ffffff';
  octx.fillRect(0, 0, off.width, off.height);
  octx.drawImage(ink, 0, 0);
  return off.toDataURL('image/png');
}

async function wCheckWithAI() {
  const btn = document.getElementById('wAICheckBtn');
  const fb = document.getElementById('wAIFb');
  const item = WCUR;
  btn.disabled = true; btn.textContent = 'Mengecek...';
  fb.style.display = 'none';

  const imgData = wCaptureInkImage();
  const sysPrompt = `Kamu adalah guru tulisan tangan bahasa Jepang. Kamu menerima gambar kanvas hasil tulisan tangan siswa (latar putih, tinta warna gelap/ungu). Nilai apakah BENTUK DASAR karakter yang ditulis sudah sesuai dengan karakter target (proporsi, komponen/bagian utama, jumlah coretan kira-kira) — tulisan tangan pemula yang agak berantakan tetap boleh dianggap benar asal bentuk dasarnya tepat. Kalau kanvas kosong atau coretannya tidak menyerupai karakter target sama sekali, anggap salah. Balas HANYA JSON valid tanpa markdown: {"correct":true/false,"feedback":"komentar singkat 1-2 kalimat dalam Bahasa Indonesia soal bentuk tulisannya"}`;
  const userContent = [
    { type: 'text', text: `Karakter/kata target yang harus ditulis: "${item.char}" (dibaca: ${item.romaji}${item.arti ? ', arti: ' + item.arti : ''}). Ini gambar kanvas hasil tulisan tangan siswa:` },
    { type: 'image_url', image_url: { url: imgData } }
  ];

  try {
    const raw = await callAI([
      { role: 'system', content: sysPrompt },
      { role: 'user', content: userContent }
    ]);
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(cleaned);
    const ok = !!parsed.correct;
    ok ? WOK++ : (WNGCOUNT++, WNG_LIST.push(item));
    document.getElementById('wSc').textContent = '✓ ' + WOK + '  ✗ ' + WNGCOUNT;
    fb.style.display = 'block';
    fb.className = 'qfb ' + (ok ? 'ok' : 'ng');
    fb.textContent = (ok ? '✓ Bagus — ' : '✗ Perlu latihan lagi — ') + (parsed.feedback || '');
    btn.style.display = 'none';
    document.getElementById('wAINxtBtn').style.display = 'block';
  } catch (err) {
    fb.style.display = 'block';
    fb.className = 'qfb ng';
    fb.textContent = '⚠ Gagal mengecek: ' + err.message + ' — kamu bisa nilai manual di bawah.';
    document.getElementById('wCheckRow').style.display = 'grid';
    btn.disabled = false; btn.textContent = 'Cek dengan AI';
  }
}

function finishWriting() {
  document.getElementById('wActive').style.display = 'none';
  document.getElementById('wResult').style.display = 'block';
  const tot = WQ.length, pct = tot ? Math.round((WOK / tot) * 100) : 0;
  document.getElementById('wRScore').textContent = pct + '%';
  const msgs = ['頑張れ！Terus berlatih！', 'もう少し！Sedikit lagi！', 'いいね！Lumayan！', '上手！Bagus banget！', '完璧！Sempurna！'];
  document.getElementById('wRSub').textContent = msgs[pct === 100 ? 4 : pct >= 80 ? 3 : pct >= 60 ? 2 : pct >= 40 ? 1 : 0];
  document.getElementById('wRC').textContent = WOK;
  document.getElementById('wRW').textContent = WNGCOUNT;
  document.getElementById('wRetryWrongBtn').style.display = WNG_LIST.length ? 'inline-block' : 'none';
}

function wRetryWrong() {
  WQ = [...WNG_LIST]; WNG_LIST = []; WCQ = 0; WOK = 0; WNGCOUNT = 0;
  document.getElementById('wResult').style.display = 'none';
  document.getElementById('wActive').style.display = 'block';
  renderWQuestion();
}

function backWSetup() {
  document.getElementById('wResult').style.display = 'none';
  document.getElementById('wSetup').style.display = 'block';
}

// ─────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────
renderKanaAcc(H, 'matHiragana');
renderKanaAcc(K, 'matKatakana');
renderKotobaAcc(KT, 'matKotoba');
renderKotobaAcc(COUNTER, 'matCounter');
renderPartikel();
renderPartikelAdv();
renderBukuBab('bab1', 'bukuBab1');
renderBukuBab('bab2', 'bukuBab2');
renderBukuBab('bab3', 'bukuBab3');
renderBunpou();
initQSetup();
initAISetup();
initWSetup();
wInitCanvasEvents();
applyThemeUI(document.documentElement.getAttribute('data-theme') || 'dark');
