// acc.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// MATERI
// ─────────────────────────────────────────────────────
function switchCat(cat, btn) {
  document.querySelectorAll('#matHiragana,#matKatakana,#matKotoba,#matKanji,#matCounter,#matSifat,#matKerja').forEach(el => el.style.display = 'none');
  document.getElementById('mat' + cat[0].toUpperCase() + cat.slice(1)).style.display = 'block';
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function renderKanaAcc(data, cid) {
  const el = document.getElementById(cid);
  let html = '';
  for (const [g, items] of Object.entries(data)) {
    const id = 'a_' + cid + '_' + g.replace(/[^a-z0-9]/gi, '_');
    html += `<div class="acc-item">
      <div class="acc-head" onclick="togAcc('${id}',this)">
        <div class="acc-left"><span class="acc-title">${g}</span><span class="acc-cnt">${items.length}</span></div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="${id}">
        <div class="kana-grid">${items.map(x => `<div class="kana-card"><span class="kana-char">${x.c}</span><div class="kana-roma">${x.r}</div>${x.n ? `<div class="kana-note">${x.n}</div>` : ''}</div>`).join('')}</div>
      </div></div>`;
  }
  el.innerHTML = html;
}

function renderKotobaAcc(data, cid) {
  const el = document.getElementById(cid);
  let html = '';
  for (const [g, content] of Object.entries(data)) {
    const id = 'a_' + cid + '_' + g.replace(/[^a-z0-9]/gi, '_');
    const hasNote = content.rows.some(r => r.n);
    const hasKanji = content.rows.some(r => r.kj);
    html += `<div class="acc-item">
      <div class="acc-head" onclick="togAcc('${id}',this)">
        <div class="acc-left"><span class="acc-title">${g}</span><span class="acc-cnt">${content.rows.length} kata</span></div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="${id}">
        <div class="tbl-wrap"><table class="ktable">
          <thead><tr>
            ${hasKanji ? '<th style="width:70px">Kanji</th>' : ''}
            <th style="width:90px">Kana</th>
            <th style="width:100px">Romaji</th>
            <th style="width:120px">Arti</th>
            ${hasNote ? '<th>Penjelasan</th>' : ''}
          </tr></thead>
          <tbody>${content.rows.map(row => `<tr>
            ${hasKanji ? `<td class="td-kanji">${row.kj || ''}</td>` : ''}
            <td class="td-kana">${row.k}</td>
            <td class="td-roma">${row.r}</td>
            <td class="td-arti">${row.a}</td>
            ${hasNote ? `<td class="td-note">${row.n || ''}</td>` : ''}
          </tr>`).join('')}</tbody>
        </table></div>
      </div></div>`;
  }
  el.innerHTML = html;
}

function togAcc(id, head) {
  const body = document.getElementById(id);
  const open = body.classList.contains('open');
  body.classList.toggle('open', !open);
  head.classList.toggle('open', !open);
}

function renderKanjiAcc(data, cid) {
  const el = document.getElementById(cid);
  if (!el || !Array.isArray(data)) return;
  const byTema = {};
  const temaOrder = [];
  data.forEach(k => {
    const t = k.tema || 'Lainnya';
    if (!byTema[t]) { byTema[t] = []; temaOrder.push(t); }
    byTema[t].push(k);
  });

  let html = '';
  temaOrder.forEach(tema => {
    html += `<div class="sec-header-bunpou">${tema}</div>`;
    byTema[tema].forEach((k, ki) => {
      const id = 'a_' + cid + '_' + tema.replace(/[^a-z0-9]/gi, '_') + '_' + ki;
      html += `<div class="acc-item">
        <div class="acc-head" onclick="togAcc('${id}',this)">
          <div class="acc-left">
            <span class="acc-title" style="font-family:'Noto Serif JP',serif;font-size:1.3rem">${k.char}</span>
            <span class="acc-cnt">${k.arti}</span>
          </div>
          <span class="acc-arrow">▶</span>
        </div>
        <div class="acc-body" id="${id}">
          ${k.n ? `<div style="font-size:.8rem;color:var(--text3);font-style:italic;margin-bottom:.9rem;line-height:1.6">${k.n}</div>` : ''}
          <div style="display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:1rem">
            <div><div class="p-name" style="margin-bottom:.3rem">Onyomi (音読み)</div><div class="p-rom">${(k.onyomi || []).join('、') || '—'}</div></div>
            <div><div class="p-name" style="margin-bottom:.3rem">Kunyomi (訓読み)</div><div class="p-rom">${(k.kunyomi || []).join('、') || '—'}</div></div>
          </div>
          <div class="tbl-wrap"><table class="ktable">
            <thead><tr>
              <th style="width:90px">Kotoba</th>
              <th style="width:100px">Furigana</th>
              <th>Arti</th>
            </tr></thead>
            <tbody>${(k.kotoba || []).map(w => `<tr>
              <td class="td-kanji">${w.w}</td>
              <td class="td-kana">${w.furi}</td>
              <td class="td-arti">${w.a}${w.n ? `<div class="p-desc" style="margin-top:.2rem">${w.n}</div>` : ''}</td>
            </tr>`).join('')}</tbody>
          </table></div>
        </div></div>`;
    });
  });
  el.innerHTML = html;
}
