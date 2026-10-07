// cats.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// QUIZ CATEGORIES
// ─────────────────────────────────────────────────────
const QCATS_STATIC = [
  { id: 'hi-basic',    label: 'Hiragana Dasar',       t: 'kana' },
  { id: 'hi-dak',      label: 'Hiragana Dakuten',      t: 'kana' },
  { id: 'hi-combo',    label: 'Hiragana Combo',        t: 'kana' },
  { id: 'ka-basic',    label: 'Katakana Dasar',        t: 'kana' },
  { id: 'ka-dak',      label: 'Katakana Dakuten',      t: 'kana' },
  { id: 'ka-combo',    label: 'Katakana Combo',        t: 'kana' },
  { id: 'ka-serap',    label: 'Katakana Serapan',      t: 'kana' },
  { id: 'hewan',       label: 'Hewan',                 t: 'kotoba' },
  { id: 'orang',       label: 'Orang & Keluarga',      t: 'kotoba' },
  { id: 'tempat',      label: 'Tempat',                t: 'kotoba' },
  { id: 'kdrn',        label: 'Kendaraan',             t: 'kotoba' },
  { id: 'makan',       label: 'Makanan & Minuman',     t: 'kotoba' },
  { id: 'benda',       label: 'Benda',                 t: 'kotoba' },
  { id: 'benda-kelas', label: 'Benda (di Kelas)',      t: 'kotoba' },
  { id: 'alam',        label: 'Alam',                  t: 'kotoba' },
  { id: 'musim',       label: 'Musim',                 t: 'kotoba' },
  { id: 'konsep',      label: 'Konsep Umum',           t: 'kotoba' },
  { id: 'kotoba-n5',   label: 'Kotoba N5',             t: 'kotoba' },
  { id: 'umur',        label: 'Umur',                  t: 'kotoba' },
  { id: 'lantai',      label: 'Lantai',                t: 'kotoba' },
  { id: 'negara',      label: 'Negara & Bangsa',       t: 'kotoba' },
  { id: 'perkenalan',  label: 'Perkenalan Diri',       t: 'kotoba' },
  { id: 'hobi',        label: 'Hobi & Olahraga',       t: 'kotoba' },
  { id: 'angka',       label: 'Angka',                 t: 'kotoba' },
  { id: 'waktu',       label: 'Waktu',                 t: 'kotoba' },
  { id: 'durasi',      label: 'Durasi',                t: 'kotoba' },
  { id: 'hari',        label: 'Hari & Keterangan',     t: 'kotoba' },
  { id: 'bulan',       label: 'Bulan & Tahun',         t: 'kotoba' },
  { id: 'masak',       label: 'Peralatan Masak',       t: 'kotoba' },
  { id: 'alat',        label: 'Alat Dapur',            t: 'kotoba' },
  { id: 'wadah',       label: 'Wadah & Perabot',       t: 'kotoba' },
  { id: 'bumbu',       label: 'Bumbu & Bahan',         t: 'kotoba' },
  { id: 'jam',         label: 'Jam',                   t: 'kotoba' },
  { id: 'menit',       label: 'Menit',                 t: 'kotoba' },
  { id: 'bulan-n',     label: 'Bulan (Nama)',          t: 'kotoba' },
  { id: 'tanggal',     label: 'Tanggal',               t: 'kotoba' },
  { id: 'tubuh',       label: 'Bagian Tubuh',          t: 'kotoba' },
  { id: 'partikel',    label: 'Partikel',              t: 'particle' },
  { id: 'pelengkap',   label: 'Bahan Pelengkap',       t: 'kotoba' },
  { id: 'sapaan',      label: 'Sapaan & Ekspresi',     t: 'kotoba' },
  { id: 'warna',       label: 'Warna',                 t: 'kotoba' },
  { id: 'rasa',        label: 'Rasa',                  t: 'kotoba' },
  { id: 'tanya',       label: 'Kata Tanya',            t: 'kotoba' },
  { id: 'kosoad',      label: 'Ko-So-A-Do',            t: 'kotoba' },
  { id: 'ket',         label: 'Kata Keterangan',       t: 'kotoba' },
  { id: 'ket-drjt',    label: 'Kata Keterangan Derajat & Frekuensi', t: 'kotoba' },
  { id: 'ai-tek',      label: 'AI & Teknologi',        t: 'kotoba' },
  { id: 'ai-pakai',    label: 'AI & Pemakaian',        t: 'kotoba' },
  { id: 'penghubung',  label: 'Kata Penghubung',       t: 'kotoba' },
  { id: 'profesi',     label: 'Profesi',               t: 'kotoba' },
  { id: 'arah',        label: 'Arah & Posisi',         t: 'kotoba' },
  { id: 'kelas-ex',    label: 'Ekspresi di Kelas',     t: 'kotoba' },
  { id: 'sampah',      label: 'Sampah & Lingkungan',   t: 'kotoba' },
  { id: 'laut-dalam',  label: 'Laut Dalam',            t: 'kotoba' },
  { id: 'minecraft',   label: 'Minecraft & Game',      t: 'kotoba' },
  { id: 'counter',     label: 'Kata Bantu Bilangan',   t: 'counter' },
  { id: 'sifat-i',     label: 'Kata Sifat - い',        t: 'sifat' },
  { id: 'sifat-na',    label: 'Kata Sifat - な',        t: 'sifat' },
  { id: 'kerja-1',     label: 'Kata Kerja - Kelompok I',  t: 'kerja' },
  { id: 'kerja-2',     label: 'Kata Kerja - Kelompok II', t: 'kerja' },
  { id: 'kerja-3',     label: 'Kata Kerja - Kelompok III',t: 'kerja' },
  { id: 'par-adv',     label: 'Partikel Lanjutan',     t: 'particle-adv' },
  { id: 'buku-bab1',   label: 'Buku — Bab 1',          t: 'buku' },
  { id: 'buku-bab2',   label: 'Buku — Bab 2',          t: 'buku' },
  { id: 'buku-bab3',   label: 'Buku — Bab 3',          t: 'buku' },
  { id: 'buku-bab4',   label: 'Buku — Bab 4',          t: 'buku' },
  { id: 'buku-bab5',   label: 'Buku — Bab 5',          t: 'buku' },
  { id: 'buku-bab6',   label: 'Buku — Bab 6',          t: 'buku' },
  { id: 'buku-bab7',   label: 'Buku — Bab 7',          t: 'buku' },
  { id: 'buku-bab8',   label: 'Buku — Bab 8',          t: 'buku' },
  { id: 'buku-bab9',   label: 'Buku — Bab 9',          t: 'buku' },
  { id: 'buku-bab10',  label: 'Buku — Bab 10',         t: 'buku' },
  { id: 'buku-bab11',  label: 'Buku — Bab 11',         t: 'buku' },
  { id: 'buku-bab12',  label: 'Buku — Bab 12',         t: 'buku' },
  { id: 'buku-bab13',  label: 'Buku — Bab 13',         t: 'buku' },
  { id: 'buku-bab14',  label: 'Buku — Bab 14',         t: 'buku' },
  { id: 'buku-bab15',  label: 'Buku — Bab 15',         t: 'buku' },
  { id: 'buku-irodori-bab1',  label: 'Irodori — Bab 1',  t: 'buku' },
  { id: 'buku-irodori-bab2',  label: 'Irodori — Bab 2',  t: 'buku' },
  { id: 'buku-irodori-bab3',  label: 'Irodori — Bab 3',  t: 'buku' },
  { id: 'buku-irodori-bab4',  label: 'Irodori — Bab 4',  t: 'buku' },
  { id: 'buku-irodori-bab5',  label: 'Irodori — Bab 5',  t: 'buku' },
  { id: 'buku-irodori-bab6',  label: 'Irodori — Bab 6',  t: 'buku' },
  { id: 'buku-irodori-bab7',  label: 'Irodori — Bab 7',  t: 'buku' },
  { id: 'buku-irodori-bab8',  label: 'Irodori — Bab 8',  t: 'buku' },
  { id: 'buku-irodori-bab9',  label: 'Irodori — Bab 9',  t: 'buku' },
  { id: 'buku-irodori-bab10', label: 'Irodori — Bab 10', t: 'buku' },
  { id: 'buku-irodori-bab11', label: 'Irodori — Bab 11', t: 'buku' },
  { id: 'buku-irodori-bab12', label: 'Irodori — Bab 12', t: 'buku' },
  { id: 'buku-irodori-bab13', label: 'Irodori — Bab 13', t: 'buku' },
  { id: 'buku-irodori-bab14', label: 'Irodori — Bab 14', t: 'buku' },
  { id: 'buku-irodori-bab15', label: 'Irodori — Bab 15', t: 'buku' },
  { id: 'buku-irodori-bab16', label: 'Irodori — Bab 16', t: 'buku' },
  { id: 'buku-irodori-bab17', label: 'Irodori — Bab 17', t: 'buku' },
  { id: 'buku-irodori-bab18', label: 'Irodori — Bab 18', t: 'buku' },
  { id: 'buku-a2-bab1',       label: 'Irodori A2 — Bab 1', t: 'buku' },
  { id: 'buku-a2-bab2',       label: 'Irodori A2 — Bab 2', t: 'buku' },
  { id: 'buku-a2-bab3',       label: 'Irodori A2 — Bab 3', t: 'buku' },
  { id: 'buku-a2-bab4',       label: 'Irodori A2 — Bab 4', t: 'buku' },
  { id: 'buku-a2-bab5',       label: 'Irodori A2 — Bab 5', t: 'buku' },
  { id: 'buku-a2-bab6',       label: 'Irodori A2 — Bab 6', t: 'buku' },
  { id: 'buku-a2-bab7',       label: 'Irodori A2 — Bab 7', t: 'buku' },
  { id: 'buku-a2-bab8',       label: 'Irodori A2 — Bab 8', t: 'buku' },
  { id: 'buku-a2-bab9',       label: 'Irodori A2 — Bab 9', t: 'buku' },
  { id: 'buku-a2-bab10',    label: 'Irodori A2 — Bab 10', t: 'buku' },
  { id: 'buku-a2-bab11',    label: 'Irodori A2 — Bab 11', t: 'buku' },
  { id: 'buku-a2-bab12',    label: 'Irodori A2 — Bab 12', t: 'buku' },
];

// Kategori Bunpou TIDAK di-hardcode di sini — otomatis di-generate dari
// field `tema` di array BUNPOU (data.js). Nambah "Hari 11" dkk di data.js
// otomatis muncul di quiz & latihan AI tanpa perlu edit app.js sama sekali.
function slugifyTema(tema) {
  const t = String(tema).trim();
  const mHari = /^Hari\s+(\d+)$/i.exec(t);
  if (mHari) return 'hari' + mHari[1];
  if (/^Materi Tambahan$/i.test(t)) return 'tambahan';
  const s = t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '');
  return s || 'x';
}

function buildBunpouCats() {
  if (!Array.isArray(BUNPOU)) return [];
  const temaOrder = [];
  BUNPOU.forEach(g => { if (g.tema && !temaOrder.includes(g.tema)) temaOrder.push(g.tema); });
  return temaOrder.map(tema => ({
    id: 'bunpou-' + slugifyTema(tema),
    label: 'Bunpou — ' + tema,
    t: 'bunpou',
    tema        // disimpan langsung di sini biar bunpouItems/bunpouFullItems ga perlu temaMap terpisah
  }));
}

// Kategori Kanji (Materi Kanji) juga otomatis di-generate dari field `tema`
// di array KANJI (data.js), pola sama persis kayak buildBunpouCats().
function buildKanjiCats() {
  if (!Array.isArray(KANJI)) return [];
  const temaOrder = [];
  KANJI.forEach(k => { if (k.tema && !temaOrder.includes(k.tema)) temaOrder.push(k.tema); });
  return temaOrder.map(tema => ({
    id: 'kanji-' + slugifyTema(tema),
    label: 'Kanji — ' + tema,
    t: 'kanji',
    tema
  }));
}

const QCATS = QCATS_STATIC.concat(buildBunpouCats()).concat(buildKanjiCats());
