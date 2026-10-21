// page-materi.js — bagian dari NihonReview
// ─────────────────────────────────────────────────────
// MATERI (kamus terpadu) — kotoba, kata kerja, kata sifat, counter dalam satu tempat,
// disaring pakai tombol filter (jenis kata, JLPT, sumber, dan khusus kata kerja: kelompok & 自動詞/他動詞).
// Kata kerja dari Buku otomatis ikut masuk (lihat kamus-core.js).
// ─────────────────────────────────────────────────────
const KAMUS_VISIBLE_SOURCES = new Set(['Kotoba', 'Kata Kerja', 'Kata Sifat', 'Counter']);
let kamusPage = 1;
const KAMUS_PAGE_SIZE = 40;
let kamusFilter = null;

let kamusLastCount = 0;
function initKamusFilters() {
  kamusFilter = createFilterBar(document.getElementById('kamusFilters'), [
    { id: 'jenis', label: 'Jenis kata', options: [['Kata Kerja', 'Kata Kerja'], ['Kotoba', 'Kotoba'], ['Kata Sifat', 'Kata Sifat'], ['Counter', 'Counter']] },
    { id: 'kk', label: 'Kelompok', options: [['1', 'Kelompok I'], ['2', 'Kelompok II'], ['3', 'Kelompok III']], show: () => kamusFilter && kamusFilter.has('jenis', 'Kata Kerja'), hiddenHint: 'Pilih “Kata Kerja” di bar atas untuk menyaring per kelompok dan 自動詞 / 他動詞.' },
    { id: 'vt', label: 'Jenis kata kerja', options: [['jidoushi', '自動詞 Jidoushi'], ['tadoushi', '他動詞 Tadoushi'], ['none', 'Belum diberi jenis']], show: () => kamusFilter && kamusFilter.has('jenis', 'Kata Kerja') },
    { id: 'lv', label: 'JLPT', options: FILTER_LEVEL_OPTIONS },
    { id: 'src', label: 'Sumber', options: [['Materi', 'Materi']].concat(Object.values(BOOKS).map(b => [b.label, b.label])) }
  ], () => renderKamusResults(true), {
    quick: 'jenis',
    countFn: () => kamusLastCount,
    search: { inputId: 'kamusSearchInput', placeholder: 'Cari kana, romaji, kanji, arti, atau n5 / n4…', historyKey: 'materi', onInput: () => renderKamusResults(true) }
  });
  kamusFilter.render();
  // tautan lama / pintasan: materi/?jenis=kata-kerja langsung memilih filter Kata Kerja
  try {
    const j = new URLSearchParams(location.search).get('jenis');
    const map = { 'kata-kerja': 'Kata Kerja', kotoba: 'Kotoba', 'kata-sifat': 'Kata Sifat', counter: 'Counter' };
    if (j && map[j]) kamusFilter.state.jenis.add(map[j]);
  } catch (e) {}
  kamusFilter.render();
}
// nama lama dipertahankan biar halaman lain tidak patah
function renderKamusChips() { if (!kamusFilter) initKamusFilters(); }
function renderKamusLevelChips() {}

function kamusGoPage(p) {
  kamusPage = p;
  renderKamusResults();
  document.getElementById('kamusResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function kamusToggleJump(el, totalPages) { pagerToggleJump(el, totalPages, 'kamusGoPage', 'renderKamusResults'); }

function kamusMatches(w, f, q, lvQ) {
  if (f.any('jenis') ? !f.has('jenis', w.source) : !KAMUS_VISIBLE_SOURCES.has(w.source)) return false;
  if (lvQ) { if (String(w.lv) !== lvQ) return false; } else if (!filterLevelMatch(f.state.lv, w.lv)) return false;
  if (f.any('src') && !f.has('src', w.src || 'Materi')) return false;
  if (f.any('kk') && !(w.source === 'Kata Kerja' && f.has('kk', String(w.kk)))) return false;
  if (f.any('vt')) {
    if (w.source !== 'Kata Kerja') return false;
    const ok = (f.has('vt', 'jidoushi') && vbTypeMatches(w.type, 'jidoushi')) || (f.has('vt', 'tadoushi') && vbTypeMatches(w.type, 'tadoushi')) || (f.has('vt', 'none') && !w.type);
    if (!ok) return false;
  }
  if (!q) return true;
  return (w.kana || '').toLowerCase().includes(q) || (w.romaji || '').toLowerCase().includes(q) || (w.kanji || '').includes(q) || (w.arti || '').toLowerCase().includes(q) || (w.group || '').toLowerCase().includes(q) ||
    (w.masu && ((w.masu.kana || '').includes(q) || (w.masu.romaji || '').toLowerCase().includes(q)));
}

function renderKamusResults(resetPage) {
  buildKamusIndex();
  if (!kamusFilter) initKamusFilters();
  if (resetPage) kamusPage = 1;
  const qEl = document.getElementById('kamusSearchInput');
  let q = qEl ? qEl.value.trim().toLowerCase() : '';
  // ketik "n5" / "n4" / ... di kolom cari = pintasan buat filter level
  let lvQ = '';
  const lvQuery = q.match(/^n([1-5])$/);
  if (lvQuery) { lvQ = lvQuery[1]; q = ''; }
  const filtered = KAMUS_ALL.filter(w => kamusMatches(w, kamusFilter, q, lvQ));
  kamusLastCount = filtered.length;
  kamusFilter.refreshCount();

  const totalPages = Math.max(1, Math.ceil(filtered.length / KAMUS_PAGE_SIZE));
  if (kamusPage > totalPages) kamusPage = totalPages;
  const start = (kamusPage - 1) * KAMUS_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + KAMUS_PAGE_SIZE);

  const countEl = document.getElementById('kamusCount');
  if (countEl) countEl.innerHTML = `<span>HASIL</span><span>${filtered.length} entri</span>`;
  const el = document.getElementById('kamusResults');
  if (!el) return;
  if (!filtered.length) { el.innerHTML = `<div class="kamus-empty">Gak ketemu. Coba kata kunci atau filter lain.</div>`; return; }
  el.innerHTML = kamusItemsHtml(pageItems) + pagerHtml(kamusPage, totalPages, 'kamusGoPage', 'kamusToggleJump');
  bindKamusItemClicks(el);
}
