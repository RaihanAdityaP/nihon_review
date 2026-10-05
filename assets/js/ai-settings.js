// ai-settings.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// LATIHAN AI
// ─────────────────────────────────────────────────────
const AI_KEY_STORE = 'nihongo_ai_key';
const AI_PROVIDER_STORE = 'nihongo_ai_provider';
const AI_MODEL_STORE = 'nihongo_ai_model';
const AI_VISION_MODEL_STORE = 'nihongo_ai_vision_model';

// Default model teks (AI_ENDPOINTS di atas) BELUM TENTU mendukung gambar.
// Groq misalnya default-nya openai/gpt-oss-120b — model teks-only, akan gagal (error 400)
// kalau dipaksa terima gambar. Ini daftar model vision-capable yang aman dipakai
// khusus untuk fitur Menulis (cek tulisan tangan), dipakai kalau user belum isi custom vision model sendiri.
// CATATAN: Groq deprecate meta-llama/llama-4-scout-17b-16e-instruct per 17 Juni 2026.
// Diganti ke qwen/qwen3.6-27b (model vision resmi pengganti versi Groq saat ini).
const AI_VISION_DEFAULTS = {
  groq:       'qwen/qwen3.6-27b',
  openai:     'gpt-4o-mini',
  openrouter: 'openai/gpt-4o-mini'
};
let AI_PROVIDER = 'groq';

const AI_ENDPOINTS = {
  groq:       { url: 'https://api.groq.com/openai/v1/chat/completions',    model: 'openai/gpt-oss-120b' },
  openai:     { url: 'https://api.openai.com/v1/chat/completions',         model: 'gpt-5-mini' },
  openrouter: { url: 'https://openrouter.ai/api/v1/chat/completions',      model: 'openai/gpt-4o-mini' }
};

// ─────────────────────────────────────────────────────
// PENGATURAN AI BERSAMA — provider, model teks, model vision, API key.
// Satu panel di atas tab, dipakai Latihan Soal, Chatbot, dan Menulis.
// ─────────────────────────────────────────────────────
const AI_PROVIDER_LABELS = { groq: 'Groq', openai: 'OpenAI', openrouter: 'OpenRouter' };

function aiEl(id) { return document.getElementById(id); }

// Halaman yang perlu bereaksi saat key/provider berubah mendaftarkan fungsinya di sini
const AI_READY_HOOKS = [];
function notifyAIReady() { AI_READY_HOOKS.forEach(fn => { try { fn(); } catch (e) {} }); }

function initAISettings() {
  mountAISettings();
  const savedProvider = localStorage.getItem(AI_PROVIDER_STORE);
  if (savedProvider && AI_ENDPOINTS[savedProvider]) AI_PROVIDER = savedProvider;
  refreshAISettingsUI();
  // Belum ada key -> panel dibuka otomatis biar langsung kelihatan harus ngapain
  toggleAISettings(!localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER));
}

// Isi ulang seluruh field panel dari localStorage sesuai provider aktif
function refreshAISettingsUI() {
  const p = AI_PROVIDER, ep = AI_ENDPOINTS[p];
  document.querySelectorAll('#aiProviderRow .seg-btn').forEach(b => b.classList.toggle('sel', b.dataset.p === p));

  const key = localStorage.getItem(AI_KEY_STORE + '_' + p) || '';
  aiEl('aiKeyInput').value = key;
  setAIKeyStatus(key ? 'Key tersimpan untuk ' + AI_PROVIDER_LABELS[p] + '.' : 'Belum ada key untuk ' + AI_PROVIDER_LABELS[p] + '.', !!key);

  const textModel = localStorage.getItem(AI_MODEL_STORE + '_' + p) || '';
  aiEl('aiModelInput').value = textModel;
  aiEl('aiModelStatus').textContent = 'Aktif: ' + (textModel || ep.model + ' (default)');

  if (aiEl('wModelInput')) {
    const visionModel = localStorage.getItem(AI_VISION_MODEL_STORE + '_' + p) || '';
    aiEl('wModelInput').value = visionModel;
    aiEl('wModelStatus').textContent = 'Aktif: ' + (visionModel || (AI_VISION_DEFAULTS[p] || ep.model) + ' (default)');
  }

  updateAIStatusBar();
}

function setAIKeyStatus(text, ok) {
  const el = aiEl('aiKeyStatus');
  el.textContent = text;
  el.style.color = ok ? 'var(--green)' : 'var(--text3)';
}

// Ringkasan satu baris di header panel (tetap kelihatan waktu panel ditutup)
function updateAIStatusBar() {
  const p = AI_PROVIDER, ep = AI_ENDPOINTS[p];
  const hasKey = !!localStorage.getItem(AI_KEY_STORE + '_' + p);
  aiEl('aiStatusProv').textContent = AI_PROVIDER_LABELS[p];
  aiEl('aiStatusModel').textContent = localStorage.getItem(AI_MODEL_STORE + '_' + p) || ep.model;
  aiEl('aiStatusKey').textContent = hasKey ? 'Key tersimpan' : 'Key belum diatur';
  aiEl('aiStatusKey').classList.toggle('ok', hasKey);
  aiEl('aiDot').classList.toggle('on', hasKey);
}

function toggleAISettings(force) {
  const box = aiEl('aiSettings');
  const open = typeof force === 'boolean' ? force : !box.classList.contains('open');
  box.classList.toggle('open', open);
  aiEl('aiStatusBtn').setAttribute('aria-expanded', open ? 'true' : 'false');
}

function toggleAIKeyVisible() {
  const inp = aiEl('aiKeyInput');
  const hidden = inp.classList.toggle('ai-key-mask');
  aiEl('aiKeyEye').textContent = hidden ? 'Tampilkan' : 'Sembunyikan';
}

function setAIProvider(btn) {
  AI_PROVIDER = btn.dataset.p;
  localStorage.setItem(AI_PROVIDER_STORE, AI_PROVIDER);
  refreshAISettingsUI();
  notifyAIReady();
}

function saveAIModel(input) {
  const val = input.value.trim();
  if (val) localStorage.setItem(AI_MODEL_STORE + '_' + AI_PROVIDER, val);
  else      localStorage.removeItem(AI_MODEL_STORE + '_' + AI_PROVIDER);
  aiEl('aiModelStatus').textContent = 'Aktif: ' + (val || AI_ENDPOINTS[AI_PROVIDER].model + ' (default)');
  updateAIStatusBar();
}

function saveAIKey() {
  const val = aiEl('aiKeyInput').value.trim();
  if (!val) return;
  localStorage.setItem(AI_KEY_STORE + '_' + AI_PROVIDER, val);
  setAIKeyStatus('Key tersimpan untuk ' + AI_PROVIDER_LABELS[AI_PROVIDER] + '.', true);
  updateAIStatusBar();
  notifyAIReady();
  // Udah beres -> lipat panel biar halaman langsung fokus ke latihan
  setTimeout(() => toggleAISettings(false), 700);
}

function clearAIKey() {
  localStorage.removeItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  aiEl('aiKeyInput').value = '';
  setAIKeyStatus('Key untuk ' + AI_PROVIDER_LABELS[AI_PROVIDER] + ' sudah dihapus.', false);
  updateAIStatusBar();
  notifyAIReady();
}

// Nilai reasoning_effort beda-beda per model di Groq:
//  - qwen3   : 'none' (matikan mode thinking)
//  - gpt-oss : hanya 'low' | 'medium' | 'high' ('none' ditolak -> error 400)
//  - lainnya : parameter tidak dikirim sama sekali
function aiReasoningParam(provider, model) {
  if (provider !== 'groq') return null;
  const m = String(model || '').toLowerCase();
  if (m.includes('gpt-oss')) return 'low';
  if (m.includes('qwen'))    return 'none';
  return null;
}

async function callAI(messages, modelOverride) {
  const ep = AI_ENDPOINTS[AI_PROVIDER];
  const key = localStorage.getItem(AI_KEY_STORE + '_' + AI_PROVIDER);
  const customModel = localStorage.getItem(AI_MODEL_STORE + '_' + AI_PROVIDER);
  const model = modelOverride || customModel || ep.model;
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key };
  if (AI_PROVIDER === 'openrouter') {
    headers['HTTP-Referer'] = location.origin;
    headers['X-Title'] = 'Nihongo Review';
  }
  const body = { model, messages, temperature: 0.7 };
  const effort = aiReasoningParam(AI_PROVIDER, model);
  if (effort) body.reasoning_effort = effort;
  const post = () => fetch(ep.url, { method: 'POST', headers, body: JSON.stringify(body) });

  let res = await post();
  if (!res.ok) {
    let errText = await res.text().catch(() => '');
    // Jaga-jaga: kalau provider menolak reasoning_effort (model baru / aturan berubah), ulangi tanpa parameter itu
    if (res.status === 400 && body.reasoning_effort && /reasoning_effort/i.test(errText)) {
      delete body.reasoning_effort;
      res = await post();
      if (!res.ok) errText = await res.text().catch(() => '');
    }
    if (!res.ok) throw new Error('API error ' + res.status + ': ' + errText.slice(0, 200));
  }
  const data = await res.json();
  let content = data.choices?.[0]?.message?.content || '';
  // Buang blok <think>...</think> kalau model tetap menyelipkannya, biar sisanya aman di-JSON.parse
  content = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  return content;
}

// ─── Panel Pengaturan AI: dipasang ke <div id="aiSettingsMount"> di halaman AI dan Chatbot ───
// data-vision="1" di mount = tampilkan juga kolom Model vision (khusus Menulis).
function aiSettingsHtml(withVision) {
  return `
<!-- PENGATURAN AI (dipakai bareng Latihan Soal, Chatbot, Menulis) -->
    <div class="ai-settings" id="aiSettings">
      <button type="button" class="ai-status" id="aiStatusBtn" onclick="toggleAISettings()" aria-expanded="false" aria-controls="aiSettingsBody">
        <span class="ai-dot" id="aiDot"></span>
        <span class="ai-status-main">
          <b id="aiStatusProv">Groq</b>
          <small id="aiStatusModel"></small>
        </span>
        <span class="ai-status-key" id="aiStatusKey">Key belum diatur</span>
        <span class="ai-caret" aria-hidden="true">▾</span>
      </button>

      <div class="ai-settings-body" id="aiSettingsBody">
        <div class="ai-field">
          <div class="ai-lbl">Provider</div>
          <div class="seg" id="aiProviderRow">
            <button type="button" class="seg-btn sel" data-p="groq" onclick="setAIProvider(this)">Groq</button>
            <button type="button" class="seg-btn" data-p="openai" onclick="setAIProvider(this)">OpenAI</button>
            <button type="button" class="seg-btn" data-p="openrouter" onclick="setAIProvider(this)">OpenRouter</button>
          </div>
        </div>

        <div class="ai-field">
          <div class="ai-lbl">API Key <small>tersimpan lokal di browser ini saja, tidak pernah diunggah</small></div>
          <div class="ai-keyrow">
            <input type="text" id="aiKeyInput" class="input-ai ai-key-mask" placeholder="Tempel API key di sini..." autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" data-lpignore="true" data-1p-ignore onkeydown="if(event.key==='Enter')saveAIKey()">
            <button type="button" class="smbtn" id="aiKeyEye" onclick="toggleAIKeyVisible()">Tampilkan</button>
          </div>
          <div class="ai-actions">
            <button type="button" class="smbtn ai-primary" onclick="saveAIKey()">Simpan Key</button>
            <button type="button" class="smbtn" onclick="clearAIKey()">Hapus Key</button>
            <span class="ai-hint" id="aiKeyStatus">Belum ada key tersimpan.</span>
          </div>
        </div>

        <div class="ai-grid2">
          <div class="ai-field">
            <div class="ai-lbl">Model teks <small>Latihan Soal &amp; Chatbot</small></div>
            <input type="text" id="aiModelInput" class="input-ai" placeholder="kosongkan untuk default" autocomplete="off" oninput="saveAIModel(this)">
            <div class="ai-hint" id="aiModelStatus"></div>
          </div>
          ${withVision ? `<div class="ai-field">
            <div class="ai-lbl">Model vision <small>Menulis, harus bisa baca gambar</small></div>
            <input type="text" id="wModelInput" class="input-ai" placeholder="kosongkan untuk default" autocomplete="off" oninput="wSaveVisionModel(this)">
            <div class="ai-hint" id="wModelStatus"></div>
          </div>` : ''}
        </div>
      </div>
    </div>
`;
}

function mountAISettings() {
  const mount = document.getElementById('aiSettingsMount');
  if (!mount) return;
  mount.outerHTML = aiSettingsHtml(mount.dataset.vision === '1');
}
