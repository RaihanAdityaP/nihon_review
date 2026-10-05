// page-buku.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// BUKU
// ─────────────────────────────────────────────────────
function switchBukuTab(tab, btn) {
  document.querySelectorAll('#pageBuku > [id^="bukuBab"]').forEach(el => el.style.display = 'none');
  document.getElementById('buku' + tab[0].toUpperCase() + tab.slice(1)).style.display = 'block';
  document.querySelectorAll('#bukuTabs .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ─── pilih buku aktif di halaman Buku (BOOKS didefinisikan di data.js) ───
let currentBookKey = 'minna';
function switchBukuBook(bookKey, btn) {
  if (!BOOKS[bookKey]) return;
  currentBookKey = bookKey;
  document.querySelectorAll('#bukuBookTabs .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('bukuSearchInput').value = '';
  BUKU_SEARCH_INDEX = null; // rebuild index sesuai buku yang aktif
  document.getElementById('bukuSearchResults').innerHTML = '';
  renderBabList();
}
function renderBukuBookTabs() {
  const el = document.getElementById('bukuBookTabs');
  if (!el) return;
  el.innerHTML = Object.entries(BOOKS).map(([key, b]) => `
    <button class="cat-btn${key === currentBookKey ? ' active' : ''}" onclick="switchBukuBook('${key}', this)">${b.label}</button>
  `).join('');
}

function renderBukuBab(babKey, elId) {
  const data = (BOOKS[currentBookKey] && BOOKS[currentBookKey].data[babKey]) || null;
  if (!data) return;
  const el = document.getElementById(elId);
  let html = '';
  for (const [group, content] of Object.entries(data)) {
    const id = 'buku_' + currentBookKey + '_' + babKey + '_' + group.replace(/[^a-z0-9]/gi, '_');
    const resolved = content.rows.map(r => ({ ...r, ...resolveEntry(r) }));
    const hasNote = resolved.some(r => r.n);
    const hasKanji = resolved.some(r => r.kj);
    // Pola Kalimat Tanya: render pakai kolom kana=pola, roma=romaji, arti=arti
    html += `<div class="acc-item">
      <div class="acc-head" onclick="togAcc('${id}',this)">
        <div class="acc-left">
          <span class="acc-title">${group}</span>
          <span class="acc-cnt">${resolved.length}</span>
        </div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="${id}">
        <div class="tbl-wrap"><table class="ktable">
          <thead><tr>
            ${hasKanji ? '<th style="width:70px">Kanji</th>' : ''}
            <th style="min-width:140px">Kana / Pola</th>
            <th style="min-width:160px">Romaji</th>
            <th style="min-width:120px">Arti</th>
            ${hasNote ? '<th>Penjelasan</th>' : ''}
          </tr></thead>
          <tbody>${resolved.map(row => `<tr>
            ${hasKanji ? `<td class="td-kanji">${row.kj || ''}</td>` : ''}
            <td class="td-kana" style="font-size:.9rem">${row.k}</td>
            <td class="td-roma">${row.r}</td>
            <td class="td-arti">${row.a}</td>
            ${hasNote ? `<td class="td-note">${row.n || ''}</td>` : ''}
          </tr>`).join('')}</tbody>
        </table></div>
      </div>
    </div>`;
  }
  el.innerHTML = html;
}

// ─────────────────────────────────────────────────────
// BAB & KUIS (Buku)
// ─────────────────────────────────────────────────────
function renderBabList() {
  renderBukuBookTabs();
  const el = document.getElementById('babList');
  if (!el) return;
  const bukuData = (BOOKS[currentBookKey] && BOOKS[currentBookKey].data) || {};
  const babKeys = Object.keys(bukuData);
  const babs = babKeys.map((key, i) => {
    const groups = Object.keys(bukuData[key]);
    const wordCount = Object.values(bukuData[key]).reduce((s, g) => s + g.rows.length, 0);
    const parsedNum = parseInt(String(key).replace(/^bab/i, ''), 10);
    return { key, num: Number.isFinite(parsedNum) ? parsedNum : i + 1, title: groups[0], groupCount: groups.length, wordCount };
  });
  const totalWords = babs.reduce((s, b) => s + b.wordCount, 0);

  const infoHtml = `<div class="bab-progress-card">
    <div class="bab-progress-top"><span>TOTAL MATERI — ${BOOKS[currentBookKey] ? BOOKS[currentBookKey].label : ''}</span></div>
    <div class="bab-progress-foot">${babs.length} BAB • ${totalWords} kata total. Klik bab untuk buka daftar kosakatanya.</div>
  </div>`;

  const cardsHtml = babs.map((b, i) => `<div class="bab-card">
      <div class="bab-head" data-toggle="${i}" data-babkey="${b.key}">
        <div class="bab-num">${String(b.num).padStart(2, '0')}</div>
        <div class="bab-main">
          <div class="bab-title">${b.title}</div>
          <div class="bab-sub">${b.groupCount} topik • ${b.wordCount} kata</div>
        </div>
        <span class="acc-arrow" id="babArrow${i}">▶</span>
      </div>
      <div class="bab-quiz-panel" id="babBody${i}" style="display:none">
        <button class="bab-quiz-link" onclick="location.href=NIHON_ROOT+'quiz/'">Buka halaman Quiz, lalu pilih materi bab ini secara manual →</button>
        <div id="babWords${i}"></div>
      </div>
    </div>`).join('');

  el.innerHTML = infoHtml + cardsHtml;
  el.querySelectorAll('[data-toggle]').forEach(h => {
    h.onclick = () => {
      const i = h.dataset.toggle;
      const panel = document.getElementById('babBody' + i);
      const arrow = document.getElementById('babArrow' + i);
      const opening = panel.style.display === 'none';
      panel.style.display = opening ? 'block' : 'none';
      arrow.style.transform = opening ? 'rotate(90deg)' : 'rotate(0deg)';
      if (opening) {
        const wordsEl = document.getElementById('babWords' + i);
        if (!wordsEl.dataset.loaded) {
          renderBukuBab(h.dataset.babkey, 'babWords' + i);
          wordsEl.dataset.loaded = '1';
        }
      }
    };
  });
}

// ─── search kosakata lintas semua bab di halaman Buku ───
let BUKU_SEARCH_INDEX = null;
function buildBukuSearchIndex() {
  if (BUKU_SEARCH_INDEX) return;
  BUKU_SEARCH_INDEX = [];
  const bukuData = (BOOKS[currentBookKey] && BOOKS[currentBookKey].data) || {};
  Object.entries(bukuData).forEach(([babKey, babData], babIdx) => {
    Object.entries(babData).forEach(([group, g]) => {
      g.rows.forEach(r => {
        BUKU_SEARCH_INDEX.push({ babKey, babIdx, babLabel: `Bab ${babIdx + 1}`, group, kana: r.k, romaji: r.r, kanji: r.kj || '', arti: r.a });
      });
    });
  });
}
function renderBukuSearch() {
  buildBukuSearchIndex();
  const q = (document.getElementById('bukuSearchInput').value || '').trim().toLowerCase();
  const resEl = document.getElementById('bukuSearchResults');
  const listEl = document.getElementById('babList');
  if (!q) { resEl.innerHTML = ''; listEl.style.display = ''; return; }
  listEl.style.display = 'none';
  const matches = BUKU_SEARCH_INDEX.filter(w =>
    (w.kana || '').toLowerCase().includes(q) || (w.romaji || '').toLowerCase().includes(q) ||
    (w.kanji || '').includes(q) || (w.arti || '').toLowerCase().includes(q)
  ).slice(0, 60);
  if (!matches.length) { resEl.innerHTML = `<div class="kamus-empty">Gak ketemu di Buku. Coba kata kunci lain.</div>`; return; }
  resEl.innerHTML = `<div class="kamus-count"><span>HASIL DI BUKU</span><span>${matches.length} entri</span></div>` +
    matches.map(w => `<div class="kamus-item" onclick="jumpToBab(${w.babIdx})">
      <div class="kbox">${w.kanji ? w.kanji.slice(0, 2) : w.kana.slice(0, 2)}</div>
      <div class="kinfo">
        <div class="ktag"><span class="kcat">${w.babLabel.toUpperCase()}</span><span class="kgrp">${w.group}</span></div>
        <div class="ktitle">${w.arti}</div>
        <div class="ksub">${w.kana}${w.romaji ? ' • ' + w.romaji : ''}</div>
      </div>
    </div>`).join('');
}
function jumpToBab(babIdx) {
  document.getElementById('bukuSearchInput').value = '';
  renderBukuSearch();
  const head = document.querySelector(`.bab-head[data-toggle="${babIdx}"]`);
  if (head) { head.click(); head.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}
