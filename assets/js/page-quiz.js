// page-quiz.js — bagian dari NihonReview (dipecah dari app.js)
let SC = new Set(), ST = new Set(['kana-to-romaji']), QN = 10;

function initQSetup() {
  document.getElementById('qog').innerHTML = renderCatGrid(QCATS, SC, 'togCat');
  checkReady();
}

function togCat(id, el) {
  SC.has(id)
    ? (SC.delete(id), el.classList.remove('sel'), el.querySelector('.qcb').textContent = '')
    : (SC.add(id),    el.classList.add('sel'),    el.querySelector('.qcb').textContent = '✓');
  refreshBulkLabels(el.closest('#qog'));
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
  const hasItems = getAllItems(SC).length >= 4;
  const hasTypes = ST.size > 0;
  const ok = hasItems && hasTypes;
  document.getElementById('startBtn').disabled = !ok;
  const warn = document.getElementById('qwarn');
  if (!hasItems)      { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu kategori (butuh 4+ item).'; }
  else if (!hasTypes) { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu tipe quiz.'; }
  else                { warn.style.display = 'none'; }
}

// ─────────────────────────────────────────────────────
// QUIZ ENGINE
// ─────────────────────────────────────────────────────
let QS = [], CQ = 0, CC = 0, CW = 0, ANS = false;

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
  const all = getAllItems(SC);
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

// ─── search filter untuk grid kategori Quiz ───
function filterQog() {
  filterCatGrid('qog', document.getElementById('qogSearchInput').value);
}
CAT_CTX.qog = () => ({ set: SC, after: () => checkReady() });
