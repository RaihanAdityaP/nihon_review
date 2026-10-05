// page-katakerja.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// KATA KERJA — halaman sendiri (dipisah dari pencarian terpadu Materi)
// Tab: Semua, per Kelompok (I/II/III), dan per jenis (Jidoushi/Tadoushi).
// Field `type` ("jidoushi"/"tadoushi") sudah nempel di tiap baris KATA_KERJA
// (data.js), jadi kata kerja baru otomatis kesortir begitu ditambahin ke sana.
// ─────────────────────────────────────────────────────
const KK_TABS = [
  { key: 'kelompok1', label: 'Kelompok I' },
  { key: 'kelompok2', label: 'Kelompok II' },
  { key: 'kelompok3', label: 'Kelompok III' },
  { key: 'jidoushi', label: '自動詞 Jidoushi' },
  { key: 'tadoushi', label: '他動詞 Tadoushi' },
  { key: 'semua', label: 'Semua' }
];
let kkActiveTab = 'kelompok1';
let kkPage = 1;
const KK_PAGE_SIZE = 40;
function renderKataKerjaTabs() {
  const el = document.getElementById('kkTabs');
  if (!el) return;
  el.innerHTML = KK_TABS.map(t => `<button class="cat-btn${t.key === kkActiveTab ? ' active' : ''}" onclick="switchKkTab('${t.key}', this)">${t.label}</button>`).join('');
}
function switchKkTab(key, btn) {
  kkActiveTab = key;
  document.querySelectorAll('#kkTabs .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderKataKerjaResults(true);
}
function kkGoPage(p) {
  kkPage = p;
  renderKataKerjaResults();
  document.getElementById('kkResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function kkToggleJump(el, totalPages) { pagerToggleJump(el, totalPages, 'kkGoPage', 'renderKataKerjaResults'); }
function renderKataKerjaResults(resetPage) {
  buildKamusIndex();
  if (resetPage) kkPage = 1;
  const qEl = document.getElementById('kkSearchInput');
  const q = qEl ? qEl.value.trim().toLowerCase() : '';
  const filtered = KAMUS_ALL.filter(w => {
    if (w.source !== 'Kata Kerja') return false;
    if (kkActiveTab === 'kelompok1' && !w.group.endsWith('Kelompok I')) return false;
    if (kkActiveTab === 'kelompok2' && !w.group.endsWith('Kelompok II')) return false;
    if (kkActiveTab === 'kelompok3' && !w.group.endsWith('Kelompok III')) return false;
    if (kkActiveTab === 'jidoushi' && w.type !== 'jidoushi') return false;
    if (kkActiveTab === 'tadoushi' && w.type !== 'tadoushi') return false;
    if (!q) return true;
    return (w.kana || '').toLowerCase().includes(q) || (w.romaji || '').toLowerCase().includes(q) || (w.kanji || '').includes(q) || (w.arti || '').toLowerCase().includes(q);
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / KK_PAGE_SIZE));
  if (kkPage > totalPages) kkPage = totalPages;
  const start = (kkPage - 1) * KK_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + KK_PAGE_SIZE);

  const countEl = document.getElementById('kkCount');
  if (countEl) countEl.innerHTML = `<span>HASIL</span><span>${filtered.length} kata kerja</span>`;
  const el = document.getElementById('kkResults');
  if (!el) return;
  if (!filtered.length) { el.innerHTML = `<div class="kamus-empty">Gak ketemu. Coba kata kunci lain.</div>`; return; }
  el.innerHTML = kamusItemsHtml(pageItems) + pagerHtml(kkPage, totalPages, 'kkGoPage', 'kkToggleJump');
  bindKamusItemClicks(el);
}
