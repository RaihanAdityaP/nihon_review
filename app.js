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
  document.querySelectorAll('#matHiragana,#matKatakana,#matKotoba').forEach(el => el.style.display = 'none');
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
    html += `<div class="acc-item">
      <div class="acc-head" onclick="togAcc('${id}',this)">
        <div class="acc-left"><span class="acc-title">${g}</span><span class="acc-cnt">${content.rows.length} kata</span></div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="${id}">
        <div class="tbl-wrap"><table class="ktable">
          <thead><tr>
            <th style="width:90px">Kana</th>
            <th style="width:100px">Romaji</th>
            <th style="width:120px">Arti</th>
            ${hasNote ? '<th>Penjelasan</th>' : ''}
          </tr></thead>
          <tbody>${content.rows.map(row => `<tr>
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
  { id: 'counter',     label: 'Counter',               t: 'kotoba' },
  { id: 'par-adv',     label: 'Partikel Lanjutan',     t: 'particle-adv' },
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
  QN = parseInt(btn.dataset.c);
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
    konsep: 'Konsep Umum', angka: 'Angka', waktu: 'Waktu', durasi: 'Durasi',
    hari: ['Hari dalam Seminggu', 'Keterangan Hari'],
    bulan: 'Keterangan Bulan & Tahun', masak: 'Peralatan Masak', alat: 'Alat Dapur',
    wadah: 'Wadah & Perabot', bumbu: 'Bumbu & Bahan',
    jam: 'Jam', menit: 'Menit', 'bulan-n': 'Bulan (Nama)', tanggal: 'Tanggal',
    tubuh: 'Bagian Tubuh', pelengkap: 'Bahan Pelengkap', sapaan: 'Sapaan & Ekspresi',
    warna: 'Warna', rasa: 'Rasa', tanya: 'Kata Tanya',
    kosoad: 'Kata Penunjuk (Ko-So-A-Do)', ket: 'Kata Keterangan Umum',
    rutin: 'Kegiatan Rutin', profesi: 'Profesi & Pekerjaan', arah: 'Arah & Posisi',
    'kelas-ex': 'Ekspresi di Kelas', counter: 'Counter (Kata Bilangan)'
  };
  const keys = Array.isArray(m[cid]) ? m[cid] : [m[cid]];
  let out = [];
  keys.forEach(k => { if (k && KT[k]) KT[k].rows.forEach(r => out.push({ kana: r.k, romaji: r.r, arti: r.a, type: 'kotoba' })); });
  return out;
}

function getAllItems() {
  let all = [];
  SC.forEach(id => {
    const qc = QCATS.find(c => c.id === id);
    if (!qc) return;
    if      (qc.t === 'kana')         all = all.concat(kanaItems(id));
    else if (qc.t === 'particle')     PT.forEach(p => all.push({ kana: p.sym, romaji: p.r, arti: p.name, type: 'particle' }));
    else if (qc.t === 'particle-adv') Object.values(PT_ADV).flat().forEach(p => all.push({ kana: p.sym, romaji: p.r, arti: p.kind, type: 'particle-adv' }));
    else                              all = all.concat(ktItems(id));
  });
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
// INIT
// ─────────────────────────────────────────────────────
renderKanaAcc(H, 'matHiragana');
renderKanaAcc(K, 'matKatakana');
renderKotobaAcc(KT, 'matKotoba');
renderPartikel();
renderPartikelAdv();
initQSetup();