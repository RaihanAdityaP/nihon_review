// page-moji.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// KANJI — halaman sendiri (dipisah dari pencarian terpadu Materi)
// ─────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────
// MOJI — halaman sendiri (Hiragana / Katakana / Kanji digabung jadi satu,
// dipisah lewat tab, dipisahkan dari pencarian terpadu Materi).
// ─────────────────────────────────────────────────────
const MOJI_TABS = [
  { key: 'hiragana', label: 'Hiragana' },
  { key: 'katakana', label: 'Katakana' },
  { key: 'kanji',    label: 'Kanji' }
];
const MOJI_SOURCE = { hiragana: 'Hiragana', katakana: 'Katakana', kanji: 'Kanji' };
let mojiActiveTab = 'hiragana';
let mojiPage = 1;
const MOJI_PAGE_SIZE = 40;
// Sub-filter khusus tab Kanji (sumber: modul vs Irodori) ada di halaman filter, lewat tombol di samping kolom cari.
let mojiFilter = null;
function initMojiFilters() {
  mojiFilter = createFilterBar(document.getElementById('mojiFilters'), [
    { id: 'src', label: 'Sumber kanji', options: [['modul', 'Modul (Hari)'], ['irodori', 'Irodori']], show: () => mojiActiveTab === 'kanji', hiddenHint: 'Filter sumber hanya tersedia di tab Kanji.' }
  ], () => renderMojiResults(true), {
    countFn: () => mojiLastCount,
    search: { inputId: 'mojiSearchInput', placeholder: 'Cari karakter, cara baca, atau arti…', historyKey: 'moji', onInput: () => renderMojiResults(true) }
  });
  mojiFilter.render();
}
let mojiLastCount = 0;
function renderMojiTabs() {
  const el = document.getElementById('mojiTabs');
  if (!el) return;
  el.innerHTML = MOJI_TABS.map(t => `<button class="cat-btn${t.key === mojiActiveTab ? ' active' : ''}" onclick="switchMojiTab('${t.key}', this)">${t.label}</button>`).join('');
}
function switchMojiTab(key, btn) {
  mojiActiveTab = key;
  document.querySelectorAll('#mojiTabs .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (mojiFilter) { mojiFilter.state.src.clear(); mojiFilter.render(); }
  renderMojiResults(true);
}
function mojiGoPage(p) {
  mojiPage = p;
  renderMojiResults();
  document.getElementById('mojiResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function mojiToggleJump(el, totalPages) { pagerToggleJump(el, totalPages, 'mojiGoPage', 'renderMojiResults'); }
function renderMojiResults(resetPage) {
  buildKamusIndex();
  if (resetPage) mojiPage = 1;
  const src = MOJI_SOURCE[mojiActiveTab];
  const qEl = document.getElementById('mojiSearchInput');
  const q = qEl ? qEl.value.trim().toLowerCase() : '';
  const filtered = KAMUS_ALL.filter(w => {
    if (w.source !== src) return false;
    if (mojiActiveTab === 'kanji' && mojiFilter && mojiFilter.any('src') && !mojiFilter.has('src', w.sumber)) return false;
    if (!q) return true;
    return (w.kana || '').toLowerCase().includes(q) || (w.kanji || '').includes(q) || (w.arti || '').toLowerCase().includes(q) || (w.group || '').toLowerCase().includes(q) ||
      (w.onyomi || []).some(x => x.includes(q)) || (w.kunyomi || []).some(x => x.includes(q));
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / MOJI_PAGE_SIZE));
  if (mojiPage > totalPages) mojiPage = totalPages;
  const start = (mojiPage - 1) * MOJI_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + MOJI_PAGE_SIZE);
  mojiLastCount = filtered.length;
  if (mojiFilter) mojiFilter.refreshCount();

  const countEl = document.getElementById('mojiCount');
  if (countEl) countEl.innerHTML = `<span>HASIL</span><span>${filtered.length} ${mojiActiveTab}</span>`;
  const el = document.getElementById('mojiResults');
  if (!el) return;
  if (!filtered.length) { el.innerHTML = `<div class="kamus-empty">Gak ketemu. Coba kata kunci lain.</div>`; return; }
  el.innerHTML = kamusItemsHtml(pageItems) + pagerHtml(mojiPage, totalPages, 'mojiGoPage', 'mojiToggleJump');
  bindKamusItemClicks(el);
}
