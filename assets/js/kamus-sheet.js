// kamus-sheet.js — bagian dari NihonReview (dipecah dari app.js)
function openKamusSheet(w) {
  let ov = document.getElementById('kamusOverlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'kamusOverlay';
    ov.className = 'kamus-overlay';
    ov.innerHTML = `<div class="kamus-sheet">
      <div class="kamus-sheet-close"><button onclick="closeKamusSheet()">✕</button></div>
      <div class="kamus-genko"><div class="kchar" id="kamusSheetChar">?</div></div>
      <div class="kamus-sheet-body">
        <div class="kamus-sheet-tags" id="kamusSheetTags"></div>
        <div class="kamus-sheet-arti" id="kamusSheetArti"></div>
        <div id="kamusSheetNuance"></div>
        <div id="kamusSheetNote"></div>
      </div>
    </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) closeKamusSheet(); });
  }
  const bigText = w.jishokei ? (w.jishokei.kanji || w.jishokei.kana) : (w.kanji || w.kana);
  const charEl = document.getElementById('kamusSheetChar');
  charEl.textContent = bigText;
  charEl.style.fontSize = bigText.length <= 2 ? '4.2rem' : bigText.length <= 4 ? '2.4rem' : '1.5rem';
  const jishoTag = w.jishokei ? `<span class="kamus-sheet-tag">辞書形: ${w.jishokei.kana}</span>` : '';
  const typeTag = w.type ? `<span class="kamus-sheet-tag">${w.type === 'jidoushi' ? '自動詞 (Jidoushi)' : w.type === 'tadoushi' ? '他動詞 (Tadoushi)' : '自動詞/他動詞 (dua-duanya)'}</span>` : '';
  document.getElementById('kamusSheetTags').innerHTML = `<span class="kamus-sheet-tag">${w.kana}${w.romaji ? ' • ' + w.romaji : ''}</span>${jishoTag}${typeTag}`;
  document.getElementById('kamusSheetArti').textContent = w.arti;

  const key = kamusNormK(w.kana) + '|' + kamusNormR(w.romaji);
  const group = KAMUS_HOMOFON.get(key);
  const nuanceEl = document.getElementById('kamusSheetNuance');
  nuanceEl.innerHTML = (group && group.length > 1) ? `<div class="kamus-nuance">
      <div class="kamus-nuance-head">⚠ CATATAN NUANSA — mirip bunyi, beda kanji</div>
      <div class="kamus-nuance-grid">${group.map(g => `<div class="kamus-nuance-item"><div class="nk">${g.kanji}</div><div class="na">${g.arti}</div></div>`).join('')}</div>
    </div>` : '';

  const noteEl = document.getElementById('kamusSheetNote');
  let noteHtml = w.note ? `<div class="kamus-note-box">${w.note}</div>` : '';
  if (w.source === 'Kanji') {
    const yomiParts = [];
    if (w.onyomi && w.onyomi.length) yomiParts.push(`<span class="kamus-sheet-tag">音: ${w.onyomi.join('、')}</span>`);
    if (w.kunyomi && w.kunyomi.length) yomiParts.push(`<span class="kamus-sheet-tag">訓: ${w.kunyomi.join('、')}</span>`);
    if (yomiParts.length) noteHtml = `<div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.6rem">${yomiParts.join('')}</div>` + noteHtml;
    if (w.kotoba && w.kotoba.length) {
      noteHtml += `<div class="kamus-kanji-words">
        <div class="kamus-kanji-words-head">KOSAKATA DENGAN KANJI INI</div>
        ${w.kotoba.map(kw => `<div class="kamus-kanji-word"><span class="kw-w">${kw.w}</span><span class="kw-f">${kw.furi}</span><span class="kw-a">${kw.a}</span></div>`).join('')}
      </div>`;
    }
  }
  noteEl.innerHTML = noteHtml;
  ov.classList.add('show');
}
function closeKamusSheet() { const ov = document.getElementById('kamusOverlay'); if (ov) ov.classList.remove('show'); }
