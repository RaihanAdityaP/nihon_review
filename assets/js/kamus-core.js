// kamus-core.js — bagian dari NihonReview (dipecah dari app.js)
let KAMUS_ALL = null;
let KAMUS_HOMOFON = null;

function kamusNormK(k) { return (k || '').replace(/【な】|（な）|\(na\)/gi, '').replace(/[\s\/／]/g, '').trim(); }
function kamusNormR(r) { return (r || '').toLowerCase().replace(/\(na\)/g, '').replace(/[\s~〜]/g, '').trim(); }

const GODAN_I2U = { 'い': 'う', 'き': 'く', 'ぎ': 'ぐ', 'し': 'す', 'ち': 'つ', 'に': 'ぬ', 'び': 'ぶ', 'み': 'む', 'り': 'る' };

function toJishokei(kana, kanji, group) {
  if (!kana || !kana.endsWith('ます')) return null;
  if (group && group.includes('Kelompok III')) {
    if (kana === 'きます' && kanji === '来ます') return { kana: 'くる', kanji: '来る' };
    if (kana.endsWith('します')) return { kana: kana.slice(0, -3) + 'する', kanji: kanji ? kanji.slice(0, -3) + 'する' : '' };
    return null;
  }
  if (group && group.includes('Kelompok II')) {
    return { kana: kana.slice(0, -2) + 'る', kanji: kanji ? kanji.slice(0, -2) + 'る' : '' };
  }
  if (group && group.includes('Kelompok I')) {
    const stem = kana.slice(0, -2);
    const lastMora = stem.slice(-1);
    const u = GODAN_I2U[lastMora];
    if (!u) return null;
    const newKana = stem.slice(0, -1) + u;
    const newKanji = kanji ? kanji.slice(0, -2).slice(0, -1) + u : '';
    return { kana: newKana, kanji: newKanji };
  }
  return null;
}

function buildKamusIndex() {
  if (KAMUS_ALL) return;
  KAMUS_ALL = [];
  Object.entries(H).forEach(([group, arr]) => {
    arr.forEach(x => {
      KAMUS_ALL.push({ source: 'Hiragana', group, kana: x.c, romaji: x.r, kanji: '', arti: x.r, note: x.n || '' });
    });
  });
  Object.entries(K).forEach(([group, arr]) => {
    arr.forEach(x => {
      KAMUS_ALL.push({ source: 'Katakana', group, kana: x.c, romaji: x.r, kanji: '', arti: x.r, note: x.n || '' });
    });
  });
  [{ l: 'Kotoba', d: KT }, { l: 'Kata Kerja', d: KATA_KERJA }, { l: 'Kata Sifat', d: KATA_SIFAT }, { l: 'Counter', d: COUNTER }].forEach(src => {
    Object.entries(src.d).forEach(([group, g]) => {
      g.rows.forEach(r => {
        const jishokei = src.l === 'Kata Kerja' ? toJishokei(r.k, r.kj, group) : null;
        KAMUS_ALL.push({ source: src.l, group, kana: r.k, romaji: r.r, kanji: r.kj || '', arti: r.a, note: r.n || '', jishokei, type: r.type || null });
      });
    });
  });
  // Kosakata dari semua buku (BOOKS, data.js) ikut masuk chip "Kotoba" secara
  // otomatis — TIDAK ditulis ulang di sini. Kalau sebuah kata sudah ada di KT,
  // yang dipakai tetap versi KT (biar gak dobel tampil).
  const kotobaSeen = new Set(
    Object.values(KT).flatMap(g => g.rows.map(r => kamusNormK(r.k) + '|' + kamusNormR(r.r)))
  );
  Object.values(BOOKS).forEach(book => {
    Object.entries(book.data).forEach(([babKey, babData], babIdx) => {
      Object.entries(babData).forEach(([group, g]) => {
        g.rows.forEach(r => {
          const dedupeKey = kamusNormK(r.k) + '|' + kamusNormR(r.r);
          if (kotobaSeen.has(dedupeKey)) return;
          kotobaSeen.add(dedupeKey);
          const resolved = resolveEntry(r);
          KAMUS_ALL.push({ source: 'Kotoba', group: `${book.label} · Bab ${babIdx + 1} · ${group}`, kana: r.k, romaji: r.r, kanji: resolved.kj, arti: resolved.a, note: resolved.n });
        });
      });
    });
  });
  KANJI.forEach(k => {
    KAMUS_ALL.push({ source: 'Kanji', group: k.tema, kana: (k.kunyomi && k.kunyomi[0]) || (k.onyomi && k.onyomi[0]) || '', romaji: '', kanji: k.char, arti: k.arti, note: k.n || '', onyomi: k.onyomi || [], kunyomi: k.kunyomi || [], kotoba: k.kotoba || [], sumber: k.sumber || 'modul' });
  });
  // Level JLPT (jlpt-levels.js) cuma buat sumber kata; Hiragana/Katakana/Kanji tidak punya.
  if (typeof jlptLevelOf === 'function') {
    KAMUS_ALL.forEach(w => {
      if (w.source === 'Kotoba' || w.source === 'Kata Kerja' || w.source === 'Kata Sifat' || w.source === 'Counter') {
        w.lv = jlptLevelOf({ k: w.kana, r: w.romaji });
      }
    });
  }
  KAMUS_HOMOFON = new Map();
  KAMUS_ALL.forEach(w => {
    if (!w.kanji) return;
    const key = kamusNormK(w.kana) + '|' + kamusNormR(w.romaji);
    if (!KAMUS_HOMOFON.has(key)) KAMUS_HOMOFON.set(key, []);
    const list = KAMUS_HOMOFON.get(key);
    if (!list.some(x => x.kanji === w.kanji)) list.push(w);
  });
}

// Bikin HTML daftar kata dari array item ala KAMUS_ALL, lengkap header grup
// dan tombol "MIRIP" homofon (dipakai Materi/Kanji/Kata Kerja).
function kamusItemsHtml(items) {
  let lastGroup = null;
  let html = '';
  items.forEach(w => {
    const idx = KAMUS_ALL.indexOf(w);
    const key = kamusNormK(w.kana) + '|' + kamusNormR(w.romaji);
    const hasMirip = KAMUS_HOMOFON.has(key) && KAMUS_HOMOFON.get(key).length > 1;
    const boxSrc = w.jishokei ? (w.jishokei.kanji || w.jishokei.kana) : w.kanji;
    const boxText = boxSrc ? (boxSrc.length > 2 ? boxSrc.slice(0, 2) : boxSrc) : w.kana.slice(0, 2);
    if (w.group && w.group !== lastGroup) {
      html += `<div class="sec-header-bunpou">${w.group}</div>`;
      lastGroup = w.group;
    }
    const typeBadge = w.type ? `<span class="kcat" style="margin-left:.35rem">${w.type === 'jidoushi' ? '自動詞' : '他動詞'}</span>` : '';
    html += `<div class="kamus-item" data-i="${idx}">
      <div class="kbox">${boxText}</div>
      <div class="kinfo">
        <div class="ktag"><span class="kcat">${w.source.toUpperCase()}</span>${typeBadge}${w.lv !== undefined && typeof lvBadge === 'function' ? lvBadge(w.lv) : ''}</div>
        <div class="ktitle">${w.arti}</div>
        <div class="ksub">${w.jishokei ? (w.jishokei.kanji || w.jishokei.kana) + ' ・ ' : ''}${w.kana}${w.romaji && w.source !== 'Hiragana' && w.source !== 'Katakana' ? ' • ' + w.romaji : ''}</div>
      </div>
      ${hasMirip ? '<div class="kamus-mirip">MIRIP</div>' : ''}
    </div>`;
  });
  return html;
}
function bindKamusItemClicks(containerEl) {
  containerEl.querySelectorAll('.kamus-item').forEach(r => r.onclick = () => openKamusSheet(KAMUS_ALL[parseInt(r.dataset.i)]));
}
