// ai-chat.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// CHATBOT (tab di halaman /ai/) — latihan kaiwa bebas, dibatasi kotoba+bunpou terpilih
// ─────────────────────────────────────────────────────
const CHAT_SC_KEY = 'nihongo_chat_cats';
const CHAT_TOPIC_KEY = 'nihongo_chat_topic';
const CHAT_SESSION_KEY = 'nihongo_chat_session';   // riwayat chat aktif (sessionStorage)

let CHAT_SC = new Set();
try {
  const savedCats = JSON.parse(localStorage.getItem(CHAT_SC_KEY) || '[]');
  if (Array.isArray(savedCats)) savedCats.forEach(id => CHAT_SC.add(id));
} catch {}
let CHAT_HISTORY = [];
let CHAT_BUSY = false;
let CHAT_LAST = 'send';    // permintaan terakhir ('start' | 'send'), dipakai tombol Coba lagi

function saveChatCats() {
  try { localStorage.setItem(CHAT_SC_KEY, JSON.stringify([...CHAT_SC])); } catch {}
}

function initChatSetup() {
  const savedTopic = localStorage.getItem(CHAT_TOPIC_KEY);
  const topicInput = document.getElementById('chatTopicInput');
  if (savedTopic && topicInput && !topicInput.value) topicInput.value = savedTopic;
  if (topicInput && !topicInput.dataset.bound) {
    topicInput.dataset.bound = '1';
    topicInput.addEventListener('input', () => {
      try { localStorage.setItem(CHAT_TOPIC_KEY, topicInput.value); } catch {}
    });
  }
  document.getElementById('chatQog').innerHTML = renderCatGrid(QCATS, CHAT_SC, 'togChatCat');
  checkChatReady();
}

function togChatCat(id, el) {
  CHAT_SC.has(id)
    ? (CHAT_SC.delete(id), el.classList.remove('sel'), el.querySelector('.qcb').textContent = '')
    : (CHAT_SC.add(id),    el.classList.add('sel'),    el.querySelector('.qcb').textContent = '✓');
  saveChatCats();
  refreshBulkLabels(el.closest('#chatQog'));
  checkChatReady();
}

function chatSelAll(v) {
  v ? QCATS.forEach(c => CHAT_SC.add(c.id)) : CHAT_SC.clear();
  saveChatCats();
  initChatSetup();
}

function filterChatQog() {
  filterCatGrid('chatQog', document.getElementById('chatQogSearchInput').value);
}

function checkChatReady() {
  const hasKey  = !!localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  const hasCats = CHAT_SC.size > 0;
  const btn = document.getElementById('chatStartBtn');
  if (btn) btn.disabled = !(hasKey && hasCats);
  const warn = document.getElementById('chatWarn');
  if (!warn) return;
  if (!hasKey)       { warn.style.display = 'block'; warn.textContent = 'Simpan API key dulu di Pengaturan AI (bagian atas).'; }
  else if (!hasCats) { warn.style.display = 'block'; warn.textContent = 'Pilih minimal satu kategori materi.'; }
  else                { warn.style.display = 'none'; }
}

// Batas ukuran prompt: tier gratis Groq cuma 8000 token/menit (request + balasan),
// jadi daftar materi dipangkas. Kalau materi terpilih kebanyakan, diambil acak sesuai budget.
const CHAT_KOTOBA_BUDGET = 3000;  // karakter
const CHAT_BUNPOU_BUDGET = 1400;  // karakter

function chatPackList(items, fmt, budget) {
  const pool = items.slice();
  const strs = pool.map(fmt);
  const total = strs.reduce((n, t) => n + [...t].length + 2, 0);
  if (total > budget) {
    for (let i = strs.length - 1; i > 0; i--) {           // acak biar tiap chat dapat variasi
      const j = Math.floor(Math.random() * (i + 1));
      [strs[i], strs[j]] = [strs[j], strs[i]];
    }
  }
  const out = [];
  let used = 0;
  for (const t of strs) {
    const len = [...t].length + 2;
    if (used + len > budget) continue;
    out.push(t);
    used += len;
  }
  return out.join('; ');
}

function buildChatSystemPrompt() {
  const ids = [...CHAT_SC];
  const kotobaIds = new Set(ids.filter(id => QCATS.find(c => c.id === id)?.t !== 'bunpou'));
  const bunpouIds = new Set(ids.filter(id => QCATS.find(c => c.id === id)?.t === 'bunpou'));
  const kotobaPool = getAllItems(kotobaIds);
  const bunpouPool = bunpouFullItems(bunpouIds);
  const kotobaList = chatPackList(kotobaPool, it => `${it.kana}=${it.arti}`, CHAT_KOTOBA_BUDGET);
  const bunpouList = chatPackList(bunpouPool, it => `${it.pola}(${it.arti})`, CHAT_BUNPOU_BUDGET);
  const topic = (document.getElementById('chatTopicInput').value || '').trim();

  return `Kamu adalah teman ngobrol bahasa Jepang buat latihan percakapan (kaiwa) orang Indonesia yang lagi belajar bahasa Jepang.
ATURAN KETAT — WAJIB DIIKUTI:
- Pakai HANYA kosakata dan pola tata bahasa yang ada di daftar di bawah. Jangan pakai kosakata/grammar lain yang belum ada di daftar, walaupun levelnya kelihatan gampang.
- Tiap kalimat bahasa Jepang kamu, selalu kasih terjemahan Bahasa Indonesia di baris bawahnya.
- Kalau balasan user ada yang salah (kata/grammar), koreksi dengan singkat & lembut, tapi tetap pakai kosakata/pola dari daftar aja buat koreksinya.
- Balasan singkat aja (1-3 kalimat), biar berasa natural kayak chat beneran, bukan kuliah panjang.
- Jangan keluar dari peran sebagai teman ngobrol, walau user coba suruh hal lain.
${topic ? `- Topik/skenario percakapan: ${topic}.` : '- Topik bebas, mulai dengan sapaan santai.'}

KOSAKATA YANG BOLEH DIPAKAI:
${kotobaList || '(tidak ada — pakai kosakata paling dasar banget aja)'}

POLA TATA BAHASA YANG BOLEH DIPAKAI:
${bunpouList || '(tidak ada — pakai pola paling dasar aja: です/ます)'}

Mulai percakapan duluan dengan sapaan singkat dalam bahasa Jepang + terjemahannya.`;
}

// ─────────────────────────────────────────────────────
// UI CHAT (gaya messenger)
// ─────────────────────────────────────────────────────
const CHAT_JA_RE = /[\u3040-\u30ff\u3400-\u9fff]/;
function chatEl(id) { return document.getElementById(id); }
function chatEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Balasan AI: baris Jepang tampil besar, baris terjemahan/romaji tampil kecil & redup
function chatMsgHtml(who, text) {
  if (who === 'user') return '<div class="msg-bubble">' + chatEsc(text) + '</div>';
  const lines = String(text).split('\n').map(l => l.trim()).filter(Boolean)
    .map(l => '<div class="' + (CHAT_JA_RE.test(l) ? 'cl-ja' : 'cl-id') + '">' + chatEsc(l) + '</div>').join('');
  return '<div class="msg-av" aria-hidden="true">会</div><div class="msg-bubble">' + lines + '</div>';
}

function appendChatMsg(who, text) {
  const box = chatEl('chatMessages');
  const row = document.createElement('div');
  row.className = 'msg ' + (who === 'user' ? 'msg-user' : 'msg-ai');
  row.innerHTML = chatMsgHtml(who, text);
  box.appendChild(row);
  box.scrollTop = box.scrollHeight;
}

function showChatTyping() {
  const box = chatEl('chatMessages');
  const row = document.createElement('div');
  row.className = 'msg msg-ai';
  row.id = 'chatTypingBubble';
  row.innerHTML = '<div class="msg-av" aria-hidden="true">会</div><div class="msg-bubble typing" aria-label="AI sedang mengetik"><i></i><i></i><i></i></div>';
  box.appendChild(row);
  box.scrollTop = box.scrollHeight;
}

function removeChatTyping() {
  const el = chatEl('chatTypingBubble');
  if (el) el.remove();
}

function friendlyChatError(err) {
  const raw = String((err && err.message) || err || '');
  let text = 'Gagal menghubungi AI.';
  if (/ 401|invalid_api_key|incorrect api key/i.test(raw))      text = 'API key ditolak. Cek lagi key-nya di Pengaturan AI.';
  else if (/ 413|too large|request too large/i.test(raw))     text = 'Permintaan kebesaran buat batas provider. Klik "Chat baru" (atau pilih materi lebih sedikit).';
  else if (/ 429|rate.?limit/i.test(raw))                        text = 'Kena batas pemakaian. Tunggu sebentar lalu coba lagi.';
  else if (/failed to fetch|networkerror|load failed/i.test(raw)) text = 'Tidak bisa terhubung. Cek koneksi internetmu.';
  else if (/ 400/.test(raw))                                     text = 'Permintaan ditolak provider. Coba ganti model di Pengaturan AI.';
  else if (/ 5\d\d/.test(raw))                                   text = 'Server provider lagi bermasalah. Coba lagi sebentar lagi.';
  return { text, detail: raw };
}

function showChatError(err) {
  const f = friendlyChatError(err);
  chatEl('chatErrorText').innerHTML = chatEsc(f.text) + '<small>' + chatEsc(f.detail) + '</small>';
  chatEl('chatErrorBox').hidden = false;
}

function hideChatError() { chatEl('chatErrorBox').hidden = true; }

function chatUpdateSend() {
  const btn = chatEl('chatSendBtn');
  if (btn) btn.disabled = CHAT_BUSY || !chatEl('chatInput').value.trim();
}

function setChatBusy(b) { CHAT_BUSY = b; chatUpdateSend(); }

function chatAutoGrow(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 152) + 'px';
  chatUpdateSend();
}

// Enter = kirim, Shift+Enter = baris baru. isComposing: Enter untuk konfirmasi IME Jepang tidak boleh ikut mengirim.
function chatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && e.keyCode !== 229) {
    e.preventDefault();
    sendChatMsg();
  }
}

// Mode ruang chat: judul, panel pengaturan & tab bar disembunyikan biar chat dapat tinggi penuh.
// Hanya aktif kalau tab Chatbot yang sedang terbuka.
function chatTabOpen() { return chatEl('aiPanelChat').style.display !== 'none'; }

function chatSyncShell() {
  const shell = document.querySelector('.ai-shell');
  if (shell) shell.classList.toggle('chat-on', chatTabOpen() && !chatEl('chatRoom').hidden);
}

function showChatView(inRoom) {
  chatEl('chatIntro').hidden = inRoom;
  chatEl('chatSetup').hidden = inRoom;
  chatEl('chatRoom').hidden = !inRoom;
  chatSyncShell();
  if (!chatTabOpen()) return;
  window.scrollTo(0, 0);
  if (inRoom && window.matchMedia && window.matchMedia('(pointer:fine)').matches) chatEl('chatInput').focus();
}

function updateChatMeta() {
  const topic = (chatEl('chatTopicInput').value || '').trim();
  chatEl('chatMeta').textContent = CHAT_SC.size + ' kategori materi' + (topic ? ' · ' + topic : '');
}

function saveChatSession() {
  try { sessionStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(CHAT_HISTORY)); } catch {}
}

function clearChatSession() {
  try { sessionStorage.removeItem(CHAT_SESSION_KEY); } catch {}
}

// Pindah halaman lalu balik lagi: percakapan yang sedang jalan dilanjutkan
function restoreChatSession() {
  try {
    const h = JSON.parse(sessionStorage.getItem(CHAT_SESSION_KEY) || '[]');
    if (!Array.isArray(h) || h.length < 2 || h[0].role !== 'system') return;
    CHAT_HISTORY = h;
    chatEl('chatMessages').innerHTML = '';
    h.slice(1).forEach(m => appendChatMsg(m.role === 'user' ? 'user' : 'ai', m.content));
    updateChatMeta();
    showChatView(true);
  } catch {}
}

// Mode latihan: sembunyikan terjemahan Indonesia, tap balasan AI buat ngintip
const CHAT_TR_KEY = 'nihon_chat_hide_tr';
function chatApplyTr() {
  let hide = false;
  try { hide = localStorage.getItem(CHAT_TR_KEY) === '1'; } catch {}
  chatEl('chatMessages').classList.toggle('hide-tr', hide);
  const b = chatEl('chatTrBtn');
  b.classList.toggle('on', hide);
  b.setAttribute('aria-pressed', hide ? 'true' : 'false');
  b.title = hide ? 'Tampilkan terjemahan' : 'Sembunyikan terjemahan (tap balasan buat ngintip)';
}

function chatToggleTr() {
  let hide = false;
  try { hide = localStorage.getItem(CHAT_TR_KEY) === '1'; localStorage.setItem(CHAT_TR_KEY, hide ? '0' : '1'); } catch {}
  chatApplyTr();
}

function initChatPage() {
  chatApplyTr();
  chatEl('chatMessages').addEventListener('click', e => {
    const row = e.target.closest('.msg-ai');
    if (row && chatEl('chatMessages').classList.contains('hide-tr')) row.classList.toggle('show-tr');
  });
  initChatSetup();
  restoreChatSession();
  chatUpdateSend();
}

async function requestChatReply(kind) {
  CHAT_LAST = kind;
  setChatBusy(true);
  hideChatError();
  showChatTyping();
  try {
    const msgs = [CHAT_HISTORY[0], ...CHAT_HISTORY.slice(1).slice(-10)];
    const reply = await callAI(msgs);
    if (!reply) throw new Error('Balasan kosong dari AI');
    removeChatTyping();
    CHAT_HISTORY.push({ role: 'assistant', content: reply });
    appendChatMsg('ai', reply);
    saveChatSession();
  } catch (e) {
    removeChatTyping();
    showChatError(e);
  }
  setChatBusy(false);
}

async function startChat() {
  if (CHAT_BUSY) return;
  hideChatError();
  CHAT_HISTORY = [{ role: 'system', content: buildChatSystemPrompt() }];
  chatEl('chatMessages').innerHTML = '';
  updateChatMeta();
  showChatView(true);
  saveChatSession();
  await requestChatReply('start');
}

async function sendChatMsg() {
  if (CHAT_BUSY) return;
  const input = chatEl('chatInput');
  const val = input.value.trim();
  if (!val) return;
  input.value = '';
  chatAutoGrow(input);
  hideChatError();
  appendChatMsg('user', val);
  CHAT_HISTORY.push({ role: 'user', content: val });
  saveChatSession();
  await requestChatReply('send');
}

function retryChat() { if (!CHAT_BUSY) requestChatReply(CHAT_LAST); }

// ↺ Chat baru: mulai ulang dengan materi yang sama
function newChat() { startChat(); }

// ← Materi: kembali ke pemilihan materi
function leaveChat() {
  CHAT_HISTORY = [];
  clearChatSession();
  chatEl('chatMessages').innerHTML = '';
  hideChatError();
  showChatView(false);
  checkChatReady();
}

AI_READY_HOOKS.push(checkChatReady);
CAT_CTX.chatQog = () => ({ set: CHAT_SC, after: () => { saveChatCats(); checkChatReady(); } });
