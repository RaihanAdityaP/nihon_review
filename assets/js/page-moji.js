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
// Sub-filter khusus tab Kanji: bedain kanji dari modul (Hari X) vs dari buku Irodori.
const MOJI_KANJI_SRC = [
  { key: 'semua', label: 'Semua' },
  { key: 'modul', label: 'Modul' },
  { key: 'irodori', label: 'Irodori' }
];
let mojiKanjiSrc = 'semua';
function renderMojiKanjiChips() {
  const el = document.getElementById('mojiKanjiChips');
  if (!el) return;
  if (mojiActiveTab !== 'kanji') { el.style.display = 'none'; return; }
  el.style.display = 'flex';
  el.innerHTML = MOJI_KANJI_SRC.map(c => `<div class="kamus-chip ${c.key === mojiKanjiSrc ? 'active' : ''}" data-c="${c.key}">${c.label}</div>`).join('');
  el.querySelectorAll('.kamus-chip').forEach(c => c.onclick = () => { mojiKanjiSrc = c.dataset.c; renderMojiKanjiChips(); renderMojiResults(true); });
}
function renderMojiTabs() {
  const el = document.getElementById('mojiTabs');
  if (!el) return;
  el.innerHTML = MOJI_TABS.map(t => `<button class="cat-btn${t.key === mojiActiveTab ? ' active' : ''}" onclick="switchMojiTab('${t.key}', this)">${t.label}</button>`).join('');
  renderMojiKanjiChips();
}
function switchMojiTab(key, btn) {
  mojiActiveTab = key;
  document.querySelectorAll('#mojiTabs .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMojiKanjiChips();
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
    if (mojiActiveTab === 'kanji' && mojiKanjiSrc !== 'semua' && w.sumber !== mojiKanjiSrc) return false;
    if (!q) return true;
    return (w.kana || '').toLowerCase().includes(q) || (w.kanji || '').includes(q) || (w.arti || '').toLowerCase().includes(q) || (w.group || '').toLowerCase().includes(q) ||
      (w.onyomi || []).some(x => x.includes(q)) || (w.kunyomi || []).some(x => x.includes(q));
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / MOJI_PAGE_SIZE));
  if (mojiPage > totalPages) mojiPage = totalPages;
  const start = (mojiPage - 1) * MOJI_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + MOJI_PAGE_SIZE);

  const countEl = document.getElementById('mojiCount');
  if (countEl) countEl.innerHTML = `<span>HASIL</span><span>${filtered.length} ${mojiActiveTab}</span>`;
  const el = document.getElementById('mojiResults');
  if (!el) return;
  if (!filtered.length) { el.innerHTML = `<div class="kamus-empty">Gak ketemu. Coba kata kunci lain.</div>`; return; }
  el.innerHTML = kamusItemsHtml(pageItems) + pagerHtml(mojiPage, totalPages, 'mojiGoPage', 'mojiToggleJump');
  bindKamusItemClicks(el);
}
