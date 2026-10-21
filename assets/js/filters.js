// filters.js — bar pencarian + filter (gaya aplikasi): kolom cari bulat + tombol filter, deretan pill cepat,
// riwayat pencarian, dan halaman filter layar penuh. Dipakai bareng oleh Materi dan Buku.
//
// createFilterBar(el, groups, onChange, opts)
//   groups: [{ id, label, options: [[value, label], ...], show?: () => boolean, hiddenHint?: string }]
//   opts.search = { inputId, placeholder, historyKey, onInput }   → kolom cari (id input dipertahankan)
//   opts.quick  = id grup yang tampil sebagai pill di bawah kolom cari (pilih satu, ada "Semua")
//   opts.countFn = () => jumlah hasil, untuk tombol "Lihat N hasil"
// Dalam satu grup bisa pilih beberapa (OR). Antar grup digabung (AND). Tanpa pilihan = semua.
let _fbarSeq = 0;
const FB_ICON = {
  search: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  filter: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h8M18 6h2M4 12h2M12 12h8M4 18h10M20 18h0"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  eraser: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20H9l-5-5a2 2 0 010-3l8-8a2 2 0 013 0l5 5a2 2 0 010 3l-8 8"/><path d="M8 10l7 7"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  history: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 109-9 9 9 0 00-7 3.5"/><path d="M3 4v4h4"/><path d="M12 7v5l3 2"/></svg>'
};
function _fbEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

function createFilterBar(el, groups, onChange, opts) {
  opts = opts || {};
  const state = {};
  groups.forEach(g => { state[g.id] = new Set(); });
  const uid = 'fpage' + (++_fbarSeq);
  const quickId = opts.quick || null;
  const cfg = opts.search || null;
  const HKEY = cfg && cfg.historyKey ? 'nihon-hist-' + cfg.historyKey : null;
  let page = null, input = null;

  const isShown = g => !g.show || g.show();
  const panelGroups = () => groups.filter(g => g.id !== quickId);
  const count = () => panelGroups().reduce((n, g) => n + state[g.id].size, 0);
  const api = {
    state,
    has(id, v) { return state[id].has(v); },
    any(id) { return state[id].size > 0; },
    isActive() { return groups.some(g => state[g.id].size > 0); },
    query() { return input ? input.value : ''; },
    reset() { groups.forEach(g => state[g.id].clear()); render(); renderPage(); onChange(); },
    open() { renderPage(); page.classList.add('show'); document.body.style.overflow = 'hidden'; },
    close() { if (page) page.classList.remove('show'); document.body.style.overflow = ''; },
    refreshCount() { const b = page && page.querySelector('.fpage-ok'); if (b && page.classList.contains('show')) b.textContent = okLabel(); },
    render
  };
  const okLabel = () => opts.countFn ? `Lihat ${opts.countFn()} hasil` : 'Selesai';

  function toggle(gid, v, single) {
    const set = state[gid];
    if (single) { const had = set.has(v); set.clear(); if (!had) set.add(v); }
    else if (set.has(v)) set.delete(v); else set.add(v);
    // grup yang disembunyikan ikut dibersihkan supaya filter lama tidak nyangkut diam-diam
    groups.forEach(g => { if (!isShown(g)) state[g.id].clear(); });
    render(); renderPage(); onChange();
  }
  function optLabel(g, v) { const o = g.options.find(x => x[0] === v); return o ? o[1] : v; }

  // ── riwayat pencarian ──
  function histGet() { if (!HKEY) return []; try { return JSON.parse(localStorage.getItem(HKEY)) || []; } catch (e) { return []; } }
  function histSet(a) { if (!HKEY) return; try { localStorage.setItem(HKEY, JSON.stringify(a.slice(0, 8))); } catch (e) {} }
  function histSave() {
    if (!input) return; const q = input.value.trim(); if (q.length < 2) return;
    histSet([q].concat(histGet().filter(x => x !== q)));
    renderHist();
  }
  function renderHist() {
    const box = el.querySelector('.fhist'); if (!box) return;
    const h = histGet();
    if (!h.length || (input && input.value.trim())) { box.innerHTML = ''; return; }
    box.innerHTML = `<button type="button" class="fhist-clear" aria-label="Hapus riwayat">${FB_ICON.history}</button>` + h.map((q, i) => `<button type="button" class="fhist-chip" data-i="${i}">${_fbEsc(q)}</button>`).join('');
    box.querySelector('.fhist-clear').onclick = () => { histSet([]); renderHist(); };
    box.querySelectorAll('.fhist-chip').forEach(b => b.onclick = () => { input.value = h[+b.dataset.i]; syncClear(); renderHist(); cfg.onInput && cfg.onInput(); });
  }
  function syncClear() { const c = el.querySelector('.sbar-clear'); if (c && input) c.hidden = !input.value; }

  // ── bar atas ──
  function build() {
    el.innerHTML = `<div class="fbar2">
      ${cfg ? `<div class="sbar">
        <label class="sbar-field">${FB_ICON.search}<input type="text" id="${cfg.inputId}" placeholder="${_fbEsc(cfg.placeholder || 'Cari...')}" autocomplete="off" enterkeyhint="search"><button type="button" class="sbar-clear" hidden aria-label="Hapus">${FB_ICON.x}</button></label>
        <button type="button" class="sbar-filter" aria-label="Filter">${FB_ICON.filter}<span class="sbar-badge" hidden></span></button>
      </div>` : ''}
      <div class="fquick"></div><div class="ftags"></div><div class="fhist"></div>
    </div>`;
    input = cfg ? el.querySelector('input') : null;
    if (input) {
      input.addEventListener('input', () => { syncClear(); renderHist(); cfg.onInput && cfg.onInput(); });
      input.addEventListener('keydown', e => { if (e.key === 'Enter') { histSave(); input.blur(); } });
      input.addEventListener('blur', histSave);
      el.querySelector('.sbar-clear').onclick = () => { input.value = ''; syncClear(); renderHist(); cfg.onInput && cfg.onInput(); input.focus(); };
    }
    const fb = el.querySelector('.sbar-filter'); if (fb) fb.onclick = () => api.open();
  }
  function render() {
    if (!el) return;
    if (!el.querySelector('.fbar2')) build();
    // pill cepat
    const q = quickId ? groups.find(g => g.id === quickId) : null;
    const qbox = el.querySelector('.fquick');
    if (q) {
      const none = state[q.id].size === 0;
      qbox.innerHTML = `<div class="fpills"><button type="button" class="fpill${none ? ' active' : ''}" data-v="__all">${opts.quickAllLabel || 'Semua'}</button>${q.options.map(([v, l]) => `<button type="button" class="fpill${state[q.id].has(v) ? ' active' : ''}" data-v="${_fbEsc(v)}">${l}</button>`).join('')}</div>`;
      qbox.querySelectorAll('.fpill').forEach(b => b.onclick = () => { if (b.dataset.v === '__all') { state[q.id].clear(); groups.forEach(g => { if (!isShown(g)) state[g.id].clear(); }); render(); renderPage(); onChange(); } else toggle(q.id, b.dataset.v, true); });
    } else qbox.innerHTML = '';
    // tag aktif (selain pill cepat)
    const tags = panelGroups().flatMap(g => [...state[g.id]].map(v => `<button type="button" class="fbar-tag" data-g="${g.id}" data-v="${_fbEsc(v)}">${optLabel(g, v)} ✕</button>`)).join('');
    const tbox = el.querySelector('.ftags');
    tbox.innerHTML = tags;
    tbox.querySelectorAll('.fbar-tag').forEach(b => b.onclick = () => toggle(b.dataset.g, b.dataset.v, false));
    // badge di tombol filter
    const bd = el.querySelector('.sbar-badge'); if (bd) { bd.hidden = !count(); bd.textContent = count(); }
    renderHist(); syncClear();
  }

  // ── halaman filter layar penuh ──
  function renderPage() {
    if (!page) {
      page = document.createElement('div');
      page.id = uid; page.className = 'fpage';
      document.body.appendChild(page);
    }
    const body = panelGroups().map(g => {
      if (!isShown(g)) return g.hiddenHint ? `<div class="fpage-hint">${g.hiddenHint}</div>` : '';
      return `<div class="fpage-label">${g.label}</div>
        <div class="fseg">${g.options.map(([v, l]) => `<button type="button" class="fseg-opt${state[g.id].has(v) ? ' active' : ''}" data-g="${g.id}" data-v="${_fbEsc(v)}">${l}</button>`).join('')}</div>`;
    }).join('');
    page.innerHTML = `<div class="fpage-head">
        <button type="button" class="fpage-ic fpage-reset" aria-label="Reset filter">${FB_ICON.eraser}</button>
        <div class="fpage-title">Filter</div>
        <button type="button" class="fpage-ic fpage-x" aria-label="Tutup">${FB_ICON.x}</button>
      </div>
      <div class="fpage-body">${body}</div>
      <div class="fpage-foot"><button type="button" class="fpage-ok">${okLabel()}</button></div>`;
    page.querySelectorAll('.fseg-opt').forEach(b => b.onclick = () => toggle(b.dataset.g, b.dataset.v, false));
    page.querySelector('.fpage-reset').onclick = () => api.reset();
    page.querySelector('.fpage-x').onclick = () => api.close();
    page.querySelector('.fpage-ok').onclick = () => api.close();
  }
  return api;
}
const FILTER_LEVEL_OPTIONS = [['5', 'N5'], ['4', 'N4'], ['3', 'N3'], ['2', 'N2'], ['1', 'N1'], ['none', 'Tanpa level']];
function filterLevelMatch(set, lv) {
  if (!set.size) return true;
  return lv ? set.has(String(lv)) : set.has('none');
}
