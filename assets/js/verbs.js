// verbs.js — helper kata kerja: konversi ます ⇄ 辞書形 (jisho), deteksi kata kerja di Buku, jenis 自動詞/他動詞.
// Dipakai bareng oleh Materi, Kata Kerja, dan Buku. Buku (data.js) TIDAK diubah — semua dibaca dari sini.
const VB_I2U = { 'い': 'う', 'き': 'く', 'ぎ': 'ぐ', 'し': 'す', 'ち': 'つ', 'に': 'ぬ', 'び': 'ぶ', 'み': 'む', 'り': 'る' };
const VB_U2I = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り' };
const VB_ROM_I2U = [['kimasu', 'ku'], ['gimasu', 'gu'], ['shimasu', 'su'], ['chimasu', 'tsu'], ['nimasu', 'nu'], ['bimasu', 'bu'], ['mimasu', 'mu'], ['rimasu', 'ru'], ['imasu', 'u']];
const VB_ROM_U2I = [['tsu', 'chimasu'], ['ku', 'kimasu'], ['gu', 'gimasu'], ['su', 'shimasu'], ['nu', 'nimasu'], ['bu', 'bimasu'], ['mu', 'mimasu'], ['ru', 'rimasu'], ['u', 'imasu']];

function vbGroupNum(groupName) {
  const m = /Kelompok (III|II|I)$/.exec(groupName || '');
  return m ? m[1].length : 0;
}
const VB_ROMAN = { 1: 'I', 2: 'II', 3: 'III' };

// ます形 → 辞書形. Mengembalikan {kana, kanji, romaji} atau null kalau polanya tidak dikenal.
// Beberapa baris punya dua bentuk dipisah "／" atau " / " (mis. 亡くします / 無くします, atau 向きます／向いています).
// Setiap bentuk dikonversi sendiri; bentuk yang cuma pasangan progresif (〜ています) dibuang kalau yang pertama bukan.
function vbToJisho(kana, kanji, romaji, g) {
  const alts = (s) => {
    const parts = (s || '').split(/\s*[／\/]\s*/).map(x => x.trim()).filter(Boolean);
    if (!parts.length) return [''];
    const prog = /(ています|teimasu|teiru|ている)$/;
    return parts.filter((x, i) => i === 0 || prog.test(x) === prog.test(parts[0]));
  };
  const ka = alts(kana)[0] || '';
  if (!ka.endsWith('ます') || !g) return null;
  const one = (kn, kj, rm) => vbToJishoOne(kn, kj, rm, g);
  const kanjiAlts = alts(kanji), romAlts = alts(romaji);
  const first = one(ka, kanjiAlts[0] || '', romAlts[0] || '');
  if (!first) return null;
  const conv = (list, key, joiner) => list.map((x, i) => {
    const r = one(ka, key === 'kanji' ? x : '', key === 'romaji' ? x : '');
    return r ? r[key] : '';
  }).filter(Boolean);
  const kj = kanjiAlts.length > 1 ? conv(kanjiAlts, 'kanji').join(' / ') : first.kanji;
  const rj = romAlts.length > 1 ? conv(romAlts, 'romaji').join(' / ') : first.romaji;
  return { kana: first.kana, kanji: kj, romaji: rj };
}
function vbToJishoOne(kana, kanji, romaji, g) {
  if (!kana.endsWith('ます') || !g) return null;
  let rom = romaji.trim();
  if (g === 1 && kana.endsWith('します')) rom = rom.replace(/\s+shimasu$/, 'shimasu');   // 'naku shimasu' → nakushimasu
  if (g === 3) {
    if (kana === 'きます') return { kana: 'くる', kanji: kanji === '来ます' ? '来る' : '', romaji: 'kuru' };
    if (kana.endsWith('きます')) return { kana: kana.slice(0, -3) + 'くる', kanji: kanji.endsWith('きます') ? kanji.slice(0, -3) + 'くる' : '', romaji: rom.replace(/kimasu$/, 'kuru') };
    if (kana.endsWith('しています')) return { kana: kana.slice(0, -2) + 'る', kanji: kanji.endsWith('ます') ? kanji.slice(0, -2) + 'る' : '', romaji: rom.replace(/imasu$/, 'iru') };
    if (!kana.endsWith('します')) return null;
    return { kana: kana.slice(0, -3) + 'する', kanji: kanji.endsWith('します') ? kanji.slice(0, -3) + 'する' : '', romaji: rom.replace(/shimasu$/, 'suru') };
  }
  if (g === 2) {
    return { kana: kana.slice(0, -2) + 'る', kanji: kanji.endsWith('ます') ? kanji.slice(0, -2) + 'る' : '', romaji: rom.replace(/masu$/, 'ru') };
  }
  const stem = kana.slice(0, -2); const u = VB_I2U[stem.slice(-1)];
  if (!u) return null;
  let kj = '';
  if (kanji.endsWith('ます')) { const ks = kanji.slice(0, -2); kj = ks.slice(0, -1) + (VB_I2U[ks.slice(-1)] || ks.slice(-1)); }
  let rj = rom;
  for (const [a, b] of VB_ROM_I2U) if (rom.endsWith(a)) { rj = rom.slice(0, -a.length) + b; break; }
  return { kana: stem.slice(0, -1) + u, kanji: kj, romaji: rj };
}

// 辞書形 → ます形 (untuk baris Buku yang cuma punya bentuk kamus).
function vbToMasu(kana, kanji, romaji, g) {
  const out = { kana: '', kanji: '', romaji: '' };
  const conv = (w) => {
    if (!w) return '';
    if (g === 3) return w.endsWith('する') ? w.slice(0, -2) + 'します' : (w.endsWith('くる') ? w.slice(0, -2) + 'きます' : (w.endsWith('来る') ? w.slice(0, -1) + 'ます' : ''));
    if (g === 2) return w.endsWith('る') ? w.slice(0, -1) + 'ます' : '';
    const l = w.slice(-1); return VB_U2I[l] ? w.slice(0, -1) + VB_U2I[l] + 'ます' : '';
  };
  out.kana = conv(kana); out.kanji = conv(kanji);
  const r = (romaji || '').trim();
  if (g === 3) out.romaji = r.replace(/suru$/, 'shimasu').replace(/kuru$/, 'kimasu');
  else if (g === 2) out.romaji = r.replace(/ru$/, 'masu');
  else { out.romaji = r; for (const [a, b] of VB_ROM_U2I) if (r.endsWith(a)) { out.romaji = r.slice(0, -a.length) + b; break; } }
  return out;
}

// jenis kata kerja: dari baris sendiri (r.type) → VERB_TYPES (verb-types.js) → null
function vbType(jishoKana, ownType) {
  if (ownType === 'b') return 'both';
  if (ownType) return ownType;
  const t = (typeof VERB_TYPES !== 'undefined') ? VERB_TYPES[jishoKana] : null;
  return t === 'j' ? 'jidoushi' : t === 't' ? 'tadoushi' : t === 'b' ? 'both' : null;
}
function vbTypeMatches(type, wanted) {   // wanted: 'jidoushi' | 'tadoushi'
  return type === wanted || type === 'both';
}
function vbTypeBadge(type) { return type === 'jidoushi' ? '自動詞' : type === 'tadoushi' ? '他動詞' : type === 'both' ? '自他' : ''; }

// Set bentuk ます yang SUDAH ada di tab Kata Kerja (data.js KATA_KERJA), buat dedupe dengan Buku.
let _vbKKSet = null;
function vbKKSet() {
  if (_vbKKSet) return _vbKKSet;
  _vbKKSet = new Set();
  Object.values(KATA_KERJA).forEach(g => g.rows.forEach(r => _vbKKSet.add(r.k.split('／')[0])));
  return _vbKKSet;
}

// Deteksi apakah satu baris Buku itu kata kerja. Return null kalau bukan.
// Irodori: tanda [1]/[2]/[3] di akhir arti (bentuk kamus). Buku Modul: daftar eksplisit MINNA_VERBS (bentuk ます).
function bookVerbOf(row, bookKey) {
  const a = row.a || '';
  let g = 0, masu = null, jisho = null, ownType = null;
  const gm = a.match(/\[([123])\](?=\s*$|\s*,)/);
  if (gm) {
    g = +gm[1];
    const suruParen = /（する）\s*$/.test(row.k);
    const baseK = row.k.replace(/（する）/, 'する').replace(/（[^）]*）/, '').trim();
    let baseR = (row.r || '').replace(/\s*\(suru\)\s*$/i, '').replace(/\s*\(.*$/, '').trim();
    if (suruParen && !/suru$/.test(baseR)) baseR += ' suru';
    let baseKj = (row.kj || '');
    const kjSuru = /（する）\s*$/.test(baseKj);
    baseKj = baseKj.replace(/（する）/, 'する').replace(/（[^）]*）/, '').trim();
    if (g === 3 && !baseKj.endsWith('する') && kjSuru) baseKj += 'する';
    let jK = baseK, jKj = baseKj, jR = baseR;
    if (g === 3 && !jK.endsWith('する') && !jK.endsWith('くる')) { jK += 'する'; if (jKj) jKj += 'する'; jR += ' suru'; }   // contoh: だんすい [3]
    jisho = { kana: jK, kanji: jKj, romaji: jR };
    masu = vbToMasu(jisho.kana, jisho.kanji, jisho.romaji, g);
    if (!masu.kana) return null;
  } else if (bookKey === 'minna' && typeof MINNA_VERBS !== 'undefined' && MINNA_VERBS[row.k]) {
    const info = MINNA_VERBS[row.k]; g = info.g; ownType = info.t === 'j' ? 'jidoushi' : info.t === 't' ? 'tadoushi' : info.t === 'b' ? 'both' : null;
    masu = { kana: row.k, kanji: row.kj || '', romaji: row.r || '' };
    jisho = vbToJisho(masu.kana, masu.kanji, masu.romaji, g);
    if (!jisho) return null;
  } else return null;
  return { g, jisho, masu, type: vbType(jisho.kana, ownType), arti: a.replace(/\s*\[[123]\].*$/, '').replace(/\s*\((cth|contoh)[^)]*\)/i, '').trim() };
}

// Kelompok yang tertulis di data kadang meleset (mis. 続けます ditaruh di Kelompok I padahal II).
// Untuk tampilan, kelompok disimpulkan ulang dari bentuknya: stem berakhir baris え → Kelompok II. Data aslinya tidak diubah.
const VB_E_ROW = 'えけげせぜてでねへべぺめれ';
function vbEffectiveGroup(kana, declared) {
  const k = (kana || '').split('／')[0];
  if (k === 'きます') return 3;   // 来ます — selalu Kelompok III
  if (declared === 1 && k.endsWith('ます') && VB_E_ROW.includes(k.slice(-3, -2))) return 2;
  return declared;
}
