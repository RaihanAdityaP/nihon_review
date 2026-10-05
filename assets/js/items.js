// items.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// ITEM FETCHERS
// ─────────────────────────────────────────────────────
function kanaItems(cid) {
  const hg = {
    'hi-basic':  ['Vokal Dasar','Baris K','Baris S','Baris T','Baris N','Baris H','Baris M','Baris Y','Baris R','Baris W + N'],
    'hi-dak':    ['Dakuten G','Dakuten Z','Dakuten D','Dakuten B','Handakuten P'],
    'hi-combo':  ['Combo KY','Combo SH','Combo CH','Combo NY','Combo HY','Combo MY','Combo RY','Combo GY','Combo JY','Combo BY','Combo PY','Vokal Panjang','Konsonan Ganda (っ)']
  };
  const kg = {
    'ka-basic':  ['Vokal Dasar','Baris K','Baris S','Baris T','Baris N','Baris H','Baris M','Baris Y','Baris R','Baris W + N'],
    'ka-dak':    ['Dakuten G','Dakuten Z','Dakuten D','Dakuten B','Handakuten P'],
    'ka-combo':  ['Combo KY','Combo SH','Combo CH','Combo NY','Combo HY','Combo MY','Combo RY','Combo GY','Combo JY','Combo BY','Combo PY'],
    'ka-serap':  ['Serapan Ti/Di','Serapan WI/WE/WO','Serapan FA/FI/FE/FO','Serapan VA/VI/VE/VO','Serapan JE/CHE','Vokal Panjang (ー)','Konsonan Ganda (ッ)']
  };
  const isH = cid.startsWith('hi');
  const src = isH ? H : K, gmap = isH ? hg : kg, gs = gmap[cid] || [];
  let out = [];
  gs.forEach(g => { if (src[g]) src[g].forEach(x => out.push({ kana: x.c, romaji: x.r, type: 'kana' })); });
  return out;
}

function ktItems(cid) {
  const m = {
    hewan: 'Hewan', orang: 'Orang & Keluarga', tempat: 'Tempat', kdrn: 'Kendaraan',
    makan: 'Makanan & Minuman', benda: 'Benda', 'benda-kelas': 'Benda (di Kelas)',
    alam: 'Alam', musim: 'Musim',
    konsep: 'Konsep Umum', 'kotoba-n5': 'Kotoba N5', umur: 'Umur', lantai: 'Lantai',
    angka: 'Angka', waktu: 'Waktu', durasi: 'Durasi',
    hari: ['Hari dalam Seminggu', 'Keterangan Hari'],
    bulan: 'Keterangan Bulan & Tahun', masak: 'Peralatan Masak', alat: 'Alat Dapur',
    wadah: 'Wadah & Perabot', bumbu: 'Bumbu & Bahan',
    jam: 'Jam', menit: 'Menit', 'bulan-n': 'Bulan (Nama)', tanggal: 'Tanggal',
    tubuh: 'Bagian Tubuh', pelengkap: 'Bahan Pelengkap', sapaan: 'Sapaan & Ekspresi',
    warna: 'Warna', rasa: 'Rasa', tanya: 'Kata Tanya',
    kosoad: 'Kata Penunjuk (Ko-So-A-Do)', ket: 'Kata Keterangan Umum',
    'ket-drjt': 'Kata Keterangan Derajat & Frekuensi (Perasaan)',
    penghubung: 'Kata Penghubung (Setsuzokushi)',
    profesi: 'Profesi & Pekerjaan',
    'ai-tek': 'AI & Teknologi', 'ai-pakai': 'AI & Pemakaian',
    negara: 'Negara & Bangsa', perkenalan: 'Perkenalan Diri', hobi: 'Hobi & Olahraga',
    arah: 'Arah & Posisi', 'kelas-ex': 'Ekspresi di Kelas', sampah: 'Sampah & Lingkungan', 'laut-dalam': 'Laut Dalam'
  };
  const keys = Array.isArray(m[cid]) ? m[cid] : [m[cid]];
  let out = [];
  keys.forEach(k => { if (k && KT[k]) KT[k].rows.forEach(r => out.push({ kana: r.k, romaji: r.r, arti: r.a, type: 'kotoba' })); });
  return out;
}

function counterItems(cid) {
  if (cid !== 'counter') return [];
  let out = [];
  Object.values(COUNTER).forEach(group => {
    group.rows.forEach(r => out.push({ kana: r.k, romaji: r.r, arti: r.a, type: 'counter' }));
  });
  return out;
}

function sifatItems(cid) {
  const m = {
    'sifat-i':  'Kata Sifat - い (i-keiyoushi)',
    'sifat-na': 'Kata Sifat - な (na-keiyoushi)'
  };
  const k = m[cid];
  if (!k || !KATA_SIFAT[k]) return [];
  return KATA_SIFAT[k].rows.map(r => ({ kana: r.k, romaji: r.r, arti: r.a, type: 'sifat' }));
}

function kerjaItems(cid) {
  const m = {
    'kerja-1':  'Kata Kerja - Kelompok I',
    'kerja-2':  'Kata Kerja - Kelompok II',
    'kerja-3':  'Kata Kerja - Kelompok III'
  };
  const k = m[cid];
  if (!k || !KATA_KERJA[k]) return [];
  return KATA_KERJA[k].rows.map(r => ({ kana: r.k, romaji: r.r, arti: r.a, type: 'kerja' }));
}

function bukuItems(cid) {
  // Format lama: "buku-bab1" (buku utama/minna). Format baru: "buku-<bookKey>-bab1" (buku lain, mis. irodori/a2).
  const mOther = /^buku-([a-z0-9]+)-(bab\d+)$/.exec(cid || '');
  const bookKey = mOther ? mOther[1] : 'minna';
  const babKey = mOther ? mOther[2] : (/^buku-(bab\d+)$/.exec(cid || '') || [])[1];
  const source = BOOKS[bookKey] && BOOKS[bookKey].data;
  if (!babKey || !source || !source[babKey]) return [];
  let out = [];
  Object.values(source[babKey]).forEach(group => {
    group.rows.forEach(r => out.push({ kana: r.k, romaji: r.r, arti: resolveEntry(r).a, type: 'buku' }));
  });
  return out;
}

function bunpouItems(cid) {
  const tema = QCATS.find(c => c.id === cid && c.t === 'bunpou')?.tema;
  if (!tema || !Array.isArray(BUNPOU)) return [];
  let out = [];
  BUNPOU.filter(g => g.tema === tema).forEach(group => {
    group.items.forEach(it => out.push({ kana: it.pola, romaji: it.romaji, arti: it.arti, type: 'bunpou' }));
  });
  return out;
}

// Item quiz Kanji materi: prompt-nya bentuk kanji si kotoba (mis. "一つ"),
// subtitle furigana-nya (mis. "ひとつ"), jawaban artinya — atau kebalik
// kalau tipe soalnya id-to-jp (harus ngetik kana/kanji dari artinya).
function kanjiItems(cid) {
  const tema = QCATS.find(c => c.id === cid && c.t === 'kanji')?.tema;
  if (!tema || !Array.isArray(KANJI)) return [];
  let out = [];
  KANJI.filter(k => k.tema === tema).forEach(k => {
    (k.kotoba || []).forEach(w => out.push({ kana: w.w, romaji: w.furi, arti: w.a, type: 'kanji' }));
  });
  return out;
}

function cleanKana(k) {
  // "DVD（ディーブイディー）" -> "ディーブイディー" (jawaban/pilihan cukup kana-nya saja)
  const m = /^[A-Za-z0-9]+（(.+)）$/.exec(k);
  return m ? m[1] : k;
}

function getAllItems(catSet) {
  const useSet = catSet || new Set();
  let all = [];
  useSet.forEach(id => {
    const qc = QCATS.find(c => c.id === id);
    if (!qc) return;
    if      (qc.t === 'kana')         all = all.concat(kanaItems(id));
    else if (qc.t === 'particle')     PT.forEach(p => all.push({ kana: p.sym, romaji: p.r, arti: p.name, type: 'particle' }));
    else if (qc.t === 'particle-adv') Object.values(PT_ADV).flat().forEach(p => all.push({ kana: p.sym, romaji: p.r, arti: p.kind, type: 'particle-adv' }));
    else if (qc.t === 'buku')         all = all.concat(bukuItems(id));
    else if (qc.t === 'bunpou')       all = all.concat(bunpouItems(id));
    else if (qc.t === 'kanji')        all = all.concat(kanjiItems(id));
    else if (qc.t === 'counter')      all = all.concat(counterItems(id));
    else if (qc.t === 'sifat')        all = all.concat(sifatItems(id));
    else if (qc.t === 'kerja')        all = all.concat(kerjaItems(id));
    else                              all = all.concat(ktItems(id));
  });
  all = all.map(x => ({ ...x, kana: cleanKana(x.kana) }));
  const seen = new Set();
  return all.filter(x => { const k = x.kana + '|' + x.romaji; if (seen.has(k)) return false; seen.add(k); return true; });
}

// Dipakai Latihan AI dan Chatbot (dipindah dari ai-latihan.js)
function bunpouFullItems(cidSet) {
  const temas = [...cidSet]
    .map(id => QCATS.find(c => c.id === id && c.t === 'bunpou')?.tema)
    .filter(Boolean);
  if (!temas.length || !Array.isArray(BUNPOU)) return [];
  let out = [];
  BUNPOU.filter(g => temas.includes(g.tema)).forEach(group => {
    group.items.forEach(it => out.push({
      pola: it.pola, romaji: it.romaji, arti: it.arti,
      catatan: it.catatan || '',
      contohJp: it.contoh?.[0]?.jp || '', contohId: it.contoh?.[0]?.id || ''
    }));
  });
  return out;
}
