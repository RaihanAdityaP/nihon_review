// notes.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// SHARED NOTES LOOKUP
// Satu sumber kebenaran untuk penjelasan kata: dicari dari Materi (KT),
// Kata Bantu Bilangan (COUNTER), Kata Sifat (KATA_SIFAT), dan Kata Kerja (KATA_KERJA). Dipakai bareng oleh Materi & Buku,
// supaya kalau diupdate di satu tempat otomatis ikut sinkron di semua menu.
// ─────────────────────────────────────────────────────
let _kotobaIndex = null;

function buildKotobaIndex() {
  if (_kotobaIndex) return _kotobaIndex;
  _kotobaIndex = new Map();
  const sources = [KT, COUNTER, KATA_SIFAT, KATA_KERJA];
  sources.forEach(src => {
    Object.values(src).forEach(group => {
      group.rows.forEach(r => {
        const key = r.k + '|' + r.r;
        if (!_kotobaIndex.has(key)) _kotobaIndex.set(key, r);
      });
    });
  });
  return _kotobaIndex;
}

// Ambil {kj, n} dari Materi/Counter berdasarkan kana+romaji.
// Kalau row Buku sudah punya kj/n sendiri, itu tetap dipakai duluan (override lokal).
function resolveEntry(row) {
  const idx = buildKotobaIndex();
  const match = idx.get(row.k + '|' + row.r);
  return {
    a:  row.a  || (match && match.a)  || '',
    kj: row.kj || (match && match.kj) || '',
    n:  row.n  || (match && match.n)  || ''
  };
}
