// page-quiz.js — bagian dari NihonReview (dipecah dari app.js)
let SC = new Set(), ST = new Set(['kana-to-romaji']), QN = 10;
let QM = 'acak'; // urutan soal: 'acak' (diacak) atau 'urut' (sesuai urutan kategori/bab)
let QMODE = 'pg'; // mode soal: 'pg' (pilihan ganda) atau 'ketik' (ketik jawaban sendiri)
let LIVES_CFG = 0; // 0 = tanpa nyawa, 3 = pakai 3 nyawa
let LIVES = 0, LIVES_ON = false, STREAK = 0, BEST = 0, GO = false, LASTRES = null;

// tipe yang benar-benar dipakai: mode ketik tidak punya "Romaji → Kana" (butuh keyboard Jepang)
function effTypes() { return [...ST].filter(t => !(QMODE === 'ketik' && t === 'romaji-to-kana')); }

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

function setOrder(btn) {
  document.querySelectorAll('#ordRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  QM = btn.dataset.m;
}

function setQMode(btn) {
  document.querySelectorAll('#modeRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  QMODE = btn.dataset.q;
  const rk = document.querySelector('#typeRow [data-t="romaji-to-kana"]');
  if (rk) rk.style.display = QMODE === 'ketik' ? 'none' : '';
  const hint = document.getElementById('modeHint');
  if (hint) hint.textContent = QMODE === 'ketik'
    ? 'Kamu mengetik jawabannya sendiri. Romaji boleh tanpa tanda panjang (ō = o / ou). Tipe Romaji → Kana tidak tersedia di mode ini.'
    : '';
  checkReady();
}

function setLives(btn) {
  document.querySelectorAll('#lifeRow .tbtn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  LIVES_CFG = parseInt(btn.dataset.l) || 0;
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
  const hasTypes = effTypes().length > 0;
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
  if (QMODE === 'ketik') {
    return effTypes().filter(t => {
      if (item.type === 'bunpou') return t === 'jp-to-id' && hasArti;   // pola bunpou terlalu panjang untuk diketik balik
      if (t === 'kana-to-romaji') return !!item.romaji;
      return hasArti;
    });
  }
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

// ─── mode KETIK: pembuat soal + pencocok jawaban ───
function buildTyped(item) {
  const vt = validTypes(item);
  if (!vt.length) return null;
  const type = vt[Math.floor(Math.random() * vt.length)];
  if (type === 'kana-to-romaji') return { typed: true, kind: 'romaji',  prompt: item.kana, psub: null,        tag: 'Kana → Romaji · ketik',      ans: item.romaji, item };
  if (type === 'jp-to-id')       return { typed: true, kind: 'meaning', prompt: item.kana, psub: item.romaji, tag: 'Jepang → Indonesia · ketik', ans: item.arti,   item };
  return { typed: true, kind: 'jp', prompt: item.arti, psub: null, tag: 'Indonesia → Jepang · ketik',
           ans: item.kana + (item.romaji ? ' (' + item.romaji + ')' : ''), item };
}

// romaji: buang tanda panjang/aksen & tanda baca, samakan vokal panjang (ō = ou = oo = o)
function normR(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z]/g, '').replace(/ou|oo/g, 'o').replace(/uu/g, 'u').replace(/aa/g, 'a').replace(/ii/g, 'i').replace(/ee/g, 'e');
}
function normT(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
// arti: cocok kalau sama dengan seluruh arti atau salah satu bagiannya (dipisah ; , / ( ) )
function meaningOk(inp, ans) {
  const a = normT(inp);
  if (!a) return false;
  if (a === normT(ans)) return true;
  return String(ans).split(/[;,\/()]/).map(normT).filter(Boolean).some(seg => {
    if (seg === a) return true;
    const sh = a.length < seg.length ? a : seg, lo = a.length < seg.length ? seg : a;
    return sh.length >= 4 && lo.includes(sh) && sh.length / lo.length >= 0.6;
  });
}
function typedOk(q, raw) {
  const it = q.item, v = raw.trim();
  if (!v) return false;
  if (q.kind === 'romaji')  return normR(v) === normR(it.romaji);
  if (q.kind === 'meaning') return meaningOk(v, it.arti);
  // kind 'jp': boleh ketik romaji atau kana
  return (it.romaji && normR(v) === normR(it.romaji)) || v.replace(/\s/g, '') === String(it.kana).replace(/\s/g, '');
}

function buildQ(item, pool) {
  if (QMODE === 'ketik') return buildTyped(item);
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
  const ordered = QM === 'urut';
  // mode urut: kategori diurutkan sesuai daftar (bukan urutan klik), soal diambil dari awal ke akhir
  const all = getAllItems(ordered ? new Set(QCATS.filter(c => SC.has(c.id)).map(c => c.id)) : SC);
  if (all.length < 4) return;
  const n = QN === 999 ? all.length : Math.min(QN, all.length);
  const picked = ordered ? all.slice(0, n) : shuf(all).slice(0, n);
  QS = picked.map(x => buildQ(x, all)).filter(Boolean);
  if (!QS.length) return;
  CQ = 0; CC = 0; CW = 0; distractorCount = {};
  LIVES = LIVES_CFG; LIVES_ON = LIVES_CFG > 0; STREAK = 0; BEST = 0; GO = false; LASTRES = null;
  document.getElementById('quizSetup').style.display  = 'none';
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizActive').style.display = 'block';
  renderQ();
}

function metaText() {
  let t = `✓ ${CC}  ✗ ${CW}`;
  if (LIVES_ON) t += '  ' + '♥'.repeat(Math.max(LIVES, 0)) + '♡'.repeat(LIVES_CFG - Math.max(LIVES, 0));
  if (STREAK >= 2) t += `  streak ${STREAK}`;
  return t;
}

function renderQ() {
  ANS = false;
  const q = QS[CQ], tot = QS.length;
  document.getElementById('qpf').style.width  = `${(CQ / tot) * 100}%`;
  document.getElementById('qctr').textContent  = `${CQ + 1} / ${tot}`;
  document.getElementById('qsc').textContent   = metaText();
  document.getElementById('qtag').textContent  = q.tag;

  const pe = document.getElementById('qprompt');
  pe.textContent = q.prompt;
  const l = q.prompt.length;
  pe.className = 'qprompt' + (l > 8 ? ' sm' : l > 4 ? ' md' : '');

  document.getElementById('qsub').textContent   = q.psub || '';
  document.getElementById('qfb').style.display  = 'none';
  const nb = document.getElementById('nxtBtn');
  nb.style.display = 'none';
  nb.textContent = 'Lanjut →';
  document.getElementById('ovrBtn').style.display = 'none';

  const grid = document.getElementById('choicesEl');
  const tb = document.getElementById('typeBox');
  if (q.typed) {
    grid.style.display = 'none';
    tb.style.display = 'block';
    const inp = document.getElementById('typeIn');
    inp.value = ''; inp.readOnly = false;
    inp.placeholder = q.kind === 'romaji' ? 'Ketik romaji...' : q.kind === 'meaning' ? 'Ketik artinya (Indonesia)...' : (q.item.romaji ? 'Ketik romaji (atau kana)...' : 'Ketik kana...');
    document.getElementById('typeBtn').style.display = 'block';
    inp.focus();
    return;
  }
  tb.style.display = 'none';
  grid.style.display = '';
  const maxL = Math.max(...q.choices.map(c => c.length));
  grid.style.gridTemplateColumns = maxL > 14 ? '1fr' : '1fr 1fr';
  grid.innerHTML = q.choices.map((c, i) => `
    <button class="choice" onclick="pickAns(${i})">
      ${q.isKA ? `<span class="ck">${c}</span>` : c}
    </button>`).join('');
}

// hitung hasil satu soal (dipakai pilihan ganda & ketik): skor, streak, nyawa, feedback
function applyResult(ok, ansText) {
  ANS = true;
  LASTRES = { ok, prevStreak: STREAK, lifeLost: false };
  if (ok) { CC++; STREAK++; if (STREAK > BEST) BEST = STREAK; }
  else {
    CW++; STREAK = 0;
    if (LIVES_ON) { LIVES--; LASTRES.lifeLost = true; if (LIVES <= 0) GO = true; }
  }
  const fb = document.getElementById('qfb');
  fb.style.display = 'block';
  if (ok) { fb.className = 'qfb ok'; fb.textContent = '✓ Benar！' + (STREAK >= 3 ? `  Streak ×${STREAK}` : ''); }
  else    { fb.className = 'qfb ng'; fb.textContent = `✗ Salah — jawaban: ${ansText}` + (GO ? '  · Nyawa habis' : ''); }
  document.getElementById('qsc').textContent = metaText();
  const nb = document.getElementById('nxtBtn');
  nb.style.display = 'block';
  nb.textContent = (GO || CQ + 1 >= QS.length) ? 'Lihat Hasil →' : 'Lanjut →';
}

function pickAns(idx) {
  if (ANS) return;
  const q = QS[CQ];
  const ok = q.choices[idx] === q.ans;
  document.querySelectorAll('.choice').forEach((b, i) => {
    b.disabled = true;
    if (q.choices[i] === q.ans) b.classList.add('correct');
    else if (i === idx && !ok) b.classList.add('wrong');
  });
  applyResult(ok, q.ans);
}

function submitTyped() {
  if (ANS) return;
  const q = QS[CQ], inp = document.getElementById('typeIn');
  if (!inp.value.trim()) return;
  inp.readOnly = true;
  const ok = typedOk(q, inp.value);
  document.getElementById('typeBtn').style.display = 'none';
  applyResult(ok, q.ans);
  // jawaban salah karena beda penulisan arti? kasih kesempatan koreksi sendiri
  if (!ok) document.getElementById('ovrBtn').style.display = 'inline-block';
}

// "Ternyata aku benar": ubah jawaban salah jadi benar (arti punya banyak cara penulisan)
function overrideCorrect() {
  if (!ANS || !LASTRES || LASTRES.ok) return;
  CW--; CC++;
  STREAK = LASTRES.prevStreak + 1;
  if (STREAK > BEST) BEST = STREAK;
  if (LASTRES.lifeLost) { LIVES++; GO = false; }
  LASTRES = { ok: true, prevStreak: LASTRES.prevStreak, lifeLost: false };
  const fb = document.getElementById('qfb');
  fb.className = 'qfb ok';
  fb.textContent = '✓ Dihitung benar' + (STREAK >= 3 ? `  Streak ×${STREAK}` : '');
  document.getElementById('ovrBtn').style.display = 'none';
  document.getElementById('qsc').textContent = metaText();
  document.getElementById('nxtBtn').textContent = (CQ + 1 >= QS.length) ? 'Lihat Hasil →' : 'Lanjut →';
}

function nextQ() {
  CQ++;
  if (GO || CQ >= QS.length) showResult();
  else renderQ();
}

function showResult() {
  document.getElementById('quizActive').style.display = 'none';
  document.getElementById('quizResult').style.display = 'block';
  const answered = Math.max(CC + CW, 1);
  const pct = Math.round((CC / answered) * 100);
  document.getElementById('rTitle').textContent = GO ? 'Nyawa Habis！' : 'Selesai！';
  document.getElementById('rScore').textContent = pct + '%';
  const msgs = ['頑張れ！Terus semangat！','もう少し！Hampir bagus！','いいね！Lumayan！','上手！Bagus banget！','完璧！Sempurna！'];
  document.getElementById('rSub').textContent = msgs[pct === 100 ? 4 : pct >= 80 ? 3 : pct >= 60 ? 2 : pct >= 40 ? 1 : 0];
  document.getElementById('rC').textContent = CC;
  document.getElementById('rW').textContent = CW;
  const extra = [];
  if (BEST >= 2) extra.push(`Streak terbaik: ${BEST}`);
  if (GO) extra.push(`Terjawab ${CC + CW} dari ${QS.length} soal`);
  document.getElementById('rExtra').textContent = extra.join('  ·  ');
  addSession(SC, ST, CC, CW, CC + CW);
}

function retryQuiz() { document.getElementById('quizResult').style.display = 'none'; startQuiz(); }
function backSetup()  { document.getElementById('quizResult').style.display = 'none'; document.getElementById('quizSetup').style.display = 'block'; }

// ─── search filter untuk grid kategori Quiz ───
function filterQog() {
  filterCatGrid('qog', document.getElementById('qogSearchInput').value);
}
CAT_CTX.qog = () => ({ set: SC, after: () => checkReady() });


// Enter di kotak ketik: cek jawaban, atau lanjut kalau sudah dijawab
(function () {
  const inp = document.getElementById('typeIn');
  if (!inp) return;
  inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    ANS ? nextQ() : submitTyped();
  });
})();
