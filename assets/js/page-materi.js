// page-materi.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// KAMUS TERPADU (Materi) — search lintas semua kategori
// ─────────────────────────────────────────────────────
// Catatan: Kanji dan Kata Kerja PUNYA HALAMAN SENDIRI (lihat bagian "KANJI —
// halaman sendiri" dan "KATA KERJA — halaman sendiri" di bawah), jadi gak
// muncul lagi sebagai chip/kategori di pencarian terpadu Materi ini.
const KAMUS_CATS = [
  { key: 'Semua', label: 'Semua' },
  { key: 'Kotoba', label: 'Kotoba (Kata Benda)' },
  { key: 'Kata Sifat', label: 'Kata Sifat' },
  { key: 'Counter', label: 'Kata Bantu Bilangan' },
];
// Sumber yang masih ikut ke-search di chip "Semua" pada Materi — Hiragana,
// Katakana, Kanji & Kata Kerja sengaja dikecualikan karena sudah pindah ke
// halaman sendiri (Hiragana/Katakana/Kanji digabung jadi tab 文字 Moji).
const KAMUS_VISIBLE_SOURCES = new Set(['Kotoba', 'Kata Sifat', 'Counter']);
let kamusActiveCat = 'Semua';

function kamusGoPage(p) {
  kamusPage = p;
  renderKamusResults();
  document.getElementById('kamusResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function kamusToggleJump(el, totalPages) { pagerToggleJump(el, totalPages, 'kamusGoPage', 'renderKamusResults'); }

function renderKamusChips() {
  const el = document.getElementById('kamusChips');
  if (!el) return;
  el.innerHTML = KAMUS_CATS.map(c => `<div class="kamus-chip ${c.key === kamusActiveCat ? 'active' : ''}" data-c="${c.key}">${c.label}</div>`).join('');
  el.querySelectorAll('.kamus-chip').forEach(c => c.onclick = () => { kamusActiveCat = c.dataset.c; renderKamusChips(); renderKamusResults(true); });
}

let kamusPage = 1;
const KAMUS_PAGE_SIZE = 40;

function renderKamusResults(resetPage) {
  buildKamusIndex();
  if (resetPage) kamusPage = 1;
  const qEl = document.getElementById('kamusSearchInput');
  const q = qEl ? qEl.value.trim().toLowerCase() : '';
  const filtered = KAMUS_ALL.filter(w => {
    const matchCat = kamusActiveCat === 'Semua' ? KAMUS_VISIBLE_SOURCES.has(w.source) : w.source === kamusActiveCat;
    if (!matchCat) return false;
    if (!q) return true;
    return (w.kana || '').toLowerCase().includes(q) || (w.romaji || '').toLowerCase().includes(q) || (w.kanji || '').includes(q) || (w.arti || '').toLowerCase().includes(q) || (w.group || '').toLowerCase().includes(q);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / KAMUS_PAGE_SIZE));
  if (kamusPage > totalPages) kamusPage = totalPages;
  const start = (kamusPage - 1) * KAMUS_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + KAMUS_PAGE_SIZE);

  const countEl = document.getElementById('kamusCount');
  if (countEl) countEl.innerHTML = `<span>HASIL</span><span>${filtered.length} entri</span>`;

  const el = document.getElementById('kamusResults');
  if (!el) return;
  if (!filtered.length) { el.innerHTML = `<div class="kamus-empty">Gak ketemu. Coba kata kunci lain.</div>`; return; }

  const html = kamusItemsHtml(pageItems) + pagerHtml(kamusPage, totalPages, 'kamusGoPage', 'kamusToggleJump');
  el.innerHTML = html;
  bindKamusItemClicks(el);
}
