// ai-menulis.js — bagian dari NihonReview (dipecah dari app.js)
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
  Object.values(KATA_SIFAT).forEach(g => scanRows(g.rows));
  Object.values(KATA_KERJA).forEach(g => scanRows(g.rows));
  Object.values(BOOKS).forEach(book => {
    Object.keys(book.data).forEach(b => { if (book.data[b]) Object.values(book.data[b]).forEach(g => scanRows(g.rows)); });
  });
  const seen = new Set();
  return out.filter(x => { if (seen.has(x.char)) return false; seen.add(x.char); return true; });
}

function wKanjiMateriPool() {
  if (!Array.isArray(KANJI)) return [];
  return KANJI.map(k => ({
    char: k.char,
    romaji: [...(k.onyomi || []), ...(k.kunyomi || [])].join(' / '),
    arti: k.arti,
    note: (k.kotoba || []).map(w => `${w.w}（${w.furi}）— ${w.a}`).join(' · '),
    type: 'kanji-materi'
  }));
}

function wKotobaMateriPool() {
  if (!Array.isArray(KANJI)) return [];
  let out = [];
  KANJI.forEach(k => (k.kotoba || []).forEach(w => {
    if (!/[一-龯]/.test(w.w)) return; // lewati kotoba yang nggak punya kanji sama sekali
    out.push({ char: w.w, romaji: w.furi, arti: w.a, note: w.n || null, type: 'kotoba-materi' });
  }));
  const seen = new Set();
  return out.filter(x => { if (seen.has(x.char)) return false; seen.add(x.char); return true; });
}

const WCATS = [
  { id: 'hiragana',      label: 'Hiragana',               pool: wHiraganaPool },
  { id: 'katakana',      label: 'Katakana',                pool: wKatakanaPool },
  { id: 'kanji',         label: 'Kanji (dari Kosakata)',   pool: wKanjiPool },
  { id: 'kanji-materi',  label: 'Kanji (Materi Kanji)',    pool: wKanjiMateriPool },
  { id: 'kotoba-materi', label: 'Kotoba (Materi Kanji)',   pool: wKotobaMateriPool }
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

function wSaveVisionModel(input) {
  const val = input.value.trim();
  if (val) localStorage.setItem(AI_VISION_MODEL_STORE + '_' + AI_PROVIDER, val);
  else      localStorage.removeItem(AI_VISION_MODEL_STORE + '_' + AI_PROVIDER);
  aiEl('wModelStatus').textContent = 'Aktif: ' + (val || (AI_VISION_DEFAULTS[AI_PROVIDER] || AI_ENDPOINTS[AI_PROVIDER].model) + ' (default)');
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
  else if (!aiKeyOk) { warn.style.display = 'block'; warn.textContent = 'Simpan API key dulu di Pengaturan AI (bagian atas) sebelum mulai latihan menulis.'; }
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
  const tagMap = { hiragana: 'Hiragana', katakana: 'Katakana', kanji: 'Kanji', 'kanji-materi': 'Kanji (Materi)', 'kotoba-materi': 'Kotoba (Materi)' };
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

  const len = [...char].length;
  // Kanvas melebar otomatis untuk kata yang lebih dari 2 karakter, biar tiap karakter
  // tetap kebagian ruang yang cukup (mis. じゃがいも = 5 karakter butuh kanvas lebar).
  const ratio = Math.min(3, Math.max(1, len / 2));
  wrap.style.aspectRatio = ratio + ' / 1';

  const w = wrap.clientWidth, h = wrap.clientHeight;
  [guide, ink].forEach(cv => { cv.width = w * dpr; cv.height = h * dpr; });

  const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#e8e4dc';
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent2').trim() || '#8b6fcb';

  const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--border2').trim() || '#888';

  const gctx = guide.getContext('2d');
  gctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  gctx.clearRect(0, 0, w, h);

  // Garis bantu berbentuk "+" (seperti kertas latihan kanji) — digambar dulu di belakang karakter
  gctx.strokeStyle = gridColor;
  gctx.globalAlpha = 0.9;
  gctx.setLineDash([5, 6]);
  gctx.lineWidth = Math.max(1, Math.min(w, h) * 0.0035);
  gctx.beginPath(); gctx.moveTo(w / 2, 3); gctx.lineTo(w / 2, h - 3); gctx.stroke();
  gctx.beginPath(); gctx.moveTo(3, h / 2); gctx.lineTo(w - 3, h / 2); gctx.stroke();
  gctx.setLineDash([]); gctx.globalAlpha = 1;

  // Karakter panduan transparan di atas grid
  gctx.fillStyle = textColor;
  gctx.globalAlpha = 0.32;
  gctx.textAlign = 'center';
  gctx.textBaseline = 'middle';
  // fontSize dibatasi dari DUA arah: tidak boleh lebih tinggi dari kanvas (h*0.62),
  // dan tidak boleh lebih lebar dari kanvas kalau semua karakter dijejer (w*0.88/len).
  // Ini yang memastikan kata panjang (jagaimo, dll) tidak kepotong di tepi kanvas.
  const fontSize = Math.min(h * 0.62, (w * 0.88) / len);
  gctx.font = `400 ${fontSize}px 'Noto Serif JP', serif`;
  gctx.fillText(char, w / 2, h / 2 + fontSize * 0.04);
  gctx.globalAlpha = 1;

  const ictx = ink.getContext('2d');
  ictx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ictx.clearRect(0, 0, w, h);
  ictx.lineWidth = Math.max(4, Math.min(w, h) * 0.028);
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
      const active = document.getElementById('pageLatihanai').classList.contains('active')
        && document.getElementById('aiPanelMenulis').style.display !== 'none';
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

  const visionCustom = localStorage.getItem(AI_VISION_MODEL_STORE + '_' + AI_PROVIDER);
  const visionModel = visionCustom || AI_VISION_DEFAULTS[AI_PROVIDER] || AI_ENDPOINTS[AI_PROVIDER].model;

  // Model custom milik user dipakai apa adanya; model default boleh jatuh ke fallback kalau dicabut provider
  const candidates = visionCustom ? [visionModel] : [visionModel, ...(AI_VISION_FALLBACKS[AI_PROVIDER] || [])];
  const modelGone = /decommission|deprecat|no longer|not found|does not exist|model_not_found|unknown model/i;
  try {
    let raw = '';
    for (let i = 0; i < candidates.length; i++) {
      try {
        raw = await callAI([
          { role: 'system', content: sysPrompt },
          { role: 'user', content: userContent }
        ], candidates[i]);
        break;
      } catch (e) {
        if (i < candidates.length - 1 && modelGone.test(e.message)) continue;
        throw e;
      }
    }
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
    // Pesan "tidak mendukung gambar" hanya muncul kalau memang itu isi errornya; selain itu tampilkan error asli
    const msg = /content must be a string|does not support image|image.*not supported|not.*multimodal/i.test(err.message)
      ? `Model "${visionModel}" tidak mendukung input gambar. Isi kolom "Model vision" di Pengaturan AI dengan model vision lain (mis. qwen/qwen3.8-27b untuk Groq, atau gpt-4o-mini untuk OpenAI/OpenRouter).`
      : err.message;
    fb.style.display = 'block';
    fb.className = 'qfb ng';
    fb.textContent = '⚠ Gagal mengecek: ' + msg + ' — kamu bisa nilai manual di bawah.';
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
AI_READY_HOOKS.push(wCheckReady);
