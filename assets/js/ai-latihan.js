// ai-latihan.js — bagian dari NihonReview (dipecah dari app.js)
let AI_SC = new Set();      // kategori materi terpilih (terpisah dari SC milik Quiz)
let AI_ST = new Set(['jp-to-id', 'id-to-jp']);
let AI_N = 5;
let AI_MODE = 'vocab';      // 'vocab' (isian kata) atau 'bunpou' (bikin kalimat pakai pola)

let AI_QUEUE = [];          // soal-soal hasil generate AI
let AI_IDX = 0, AI_CORRECT = 0, AI_WRONG = 0;

function aiVisibleCats() {
  return AI_MODE === 'bunpou' ? QCATS.filter(c => c.t === 'bunpou') : QCATS;
}

function initAISetup() {
  document.getElementById('aiQog').innerHTML = renderCatGrid(aiVisibleCats(), AI_SC, 'togAICat');
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

function togAICat(id, el) {
  AI_SC.has(id)
    ? (AI_SC.delete(id), el.classList.remove('sel'), el.querySelector('.qcb').textContent = '')
    : (AI_SC.add(id),    el.classList.add('sel'),    el.querySelector('.qcb').textContent = '✓');
  refreshBulkLabels(el.closest('#aiQog'));
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
  AI_N = Math.min(v, 500);
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
    const sample = shuffled.slice(0, Math.min(AI_N, pool.length));
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
  const sample = shuffled.slice(0, Math.min(AI_N, pool.length));
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
CAT_CTX.aiQog = () => ({ set: AI_SC, after: () => checkAIReady() });
AI_READY_HOOKS.push(checkAIReady);
