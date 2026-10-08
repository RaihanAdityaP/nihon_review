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
// 'all' = tab "Semua": gabungan semua buku, seperti chip "Semua" di menu Materi.
let currentBookKey = 'all';

function bukuSources() {
  if (currentBookKey === 'all') return Object.entries(BOOKS);
  return BOOKS[currentBookKey] ? [[currentBookKey, BOOKS[currentBookKey]]] : [];
}
// daftar bab datar dari buku yang lagi aktif (dipakai bareng oleh list bab, search, dan jumpToBab)
function bukuBabList() {
  const out = [];
  bukuSources().forEach(([bookKey, book]) => {
    Object.keys(book.data).forEach((babKey, i) => {
      const groups = Object.keys(book.data[babKey]);
      const wordCount = Object.values(book.data[babKey]).reduce((s, g) => s + g.rows.length, 0);
      const parsedNum = parseInt(String(babKey).replace(/^bab/i, ''), 10);
      out.push({ bookKey, bookLabel: book.label, babKey, num: Number.isFinite(parsedNum) ? parsedNum : i + 1, title: groups[0], groupCount: groups.length, wordCount });
    });
  });
  return out;
}
function switchBukuBook(bookKey, btn) {
  if (bookKey !== 'all' && !BOOKS[bookKey]) return;
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
  const tabs = [['all', 'Semua'], ...Object.entries(BOOKS).map(([key, b]) => [key, b.label])];
  el.innerHTML = tabs.map(([key, label]) => `
    <button class="cat-btn${key === currentBookKey ? ' active' : ''}" onclick="switchBukuBook('${key}', this)">${label}</button>
  `).join('');
}
function renderBukuBab(babKey, elId, bookKey) {
  bookKey = bookKey || currentBookKey;
  const data = (BOOKS[bookKey] && BOOKS[bookKey].data[babKey]) || null;
  if (!data) return;
  const el = document.getElementById(elId);
  let html = '';
  for (const [group, content] of Object.entries(data)) {
    const id = 'buku_' + bookKey + '_' + babKey + '_' + group.replace(/[^a-z0-9]/gi, '_');
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
            <th style="width:56px">JLPT</th>
            ${hasNote ? '<th>Penjelasan</th>' : ''}
          </tr></thead>
          <tbody>${resolved.map(row => `<tr>
            ${hasKanji ? `<td class="td-kanji">${row.kj || ''}</td>` : ''}
            <td class="td-kana" style="font-size:.9rem">${row.k}</td>
            <td class="td-roma">${row.r}</td>
            <td class="td-arti">${row.a}</td>
            <td>${lvBadge(jlptLevelOf(row))}</td>
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
  const babs = bukuBabList();
  const totalWords = babs.reduce((s, b) => s + b.wordCount, 0);
  const isAll = currentBookKey === 'all';
  const bookLabel = isAll ? 'SEMUA BUKU' : (BOOKS[currentBookKey] ? BOOKS[currentBookKey].label : '');

  const infoHtml = `<div class="bab-progress-card">
    <div class="bab-progress-top"><span>TOTAL MATERI — ${bookLabel}</span></div>
    <div class="bab-progress-foot">${babs.length} BAB • ${totalWords} kata total. Klik bab untuk buka daftar kosakatanya.</div>
  </div>`;

  let lastBook = null;
  const cardsHtml = babs.map((b, i) => {
    const header = (isAll && b.bookKey !== lastBook) ? `<div class="sec-header-bunpou">${b.bookLabel}</div>` : '';
    lastBook = b.bookKey;
    return header + `<div class="bab-card">
      <div class="bab-head" data-toggle="${i}" data-babkey="${b.babKey}" data-bookkey="${b.bookKey}">
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
    </div>`;
  }).join('');

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
          renderBukuBab(h.dataset.babkey, 'babWords' + i, h.dataset.bookkey);
          wordsEl.dataset.loaded = '1';
        }
      }
    };
  });
}

// ─── search kosakata lintas semua bab di halaman Buku (+ filter level JLPT) ───
let BUKU_SEARCH_INDEX = null;
function buildBukuSearchIndex() {
  if (BUKU_SEARCH_INDEX) return;
  BUKU_SEARCH_INDEX = [];
  const isAll = currentBookKey === 'all';
  bukuBabList().forEach((b, babIdx) => {
    Object.entries(BOOKS[b.bookKey].data[b.babKey]).forEach(([group, g]) => {
      g.rows.forEach(r => {
        const res = resolveEntry(r);
        BUKU_SEARCH_INDEX.push({
          babIdx, babLabel: (isAll ? b.bookLabel + ' · ' : '') + `Bab ${b.num}`, group,
          kana: r.k, romaji: r.r, kanji: res.kj || '', arti: res.a || r.a || '', lv: jlptLevelOf(r)
        });
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
        <div class="ktag"><span class="kcat">${w.babLabel.toUpperCase()}</span><span class="kgrp">${w.group}</span>${lvBadge(w.lv)}</div>
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
