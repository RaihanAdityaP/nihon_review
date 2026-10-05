// page-bunpou.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// BUNPOU
// ─────────────────────────────────────────────────────
// ─── pilih buku aktif di halaman Bunpou (dipakai buat filter tema; label
// buku diambil dari BOOKS yang sama dengan menu Buku, data.js) ───
let currentBunpouBook = 'minna';
function switchBunpouBook(bookKey, btn) {
  if (!BOOKS[bookKey]) return;
  currentBunpouBook = bookKey;
  document.querySelectorAll('#bunpouBookTabs .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('bunpouSearchInput').value = '';
  renderBunpou();
}
function renderBunpouBookTabs() {
  const el = document.getElementById('bunpouBookTabs');
  if (!el) return;
  el.innerHTML = Object.entries(BOOKS).map(([key, b]) => `
    <button class="cat-btn${key === currentBunpouBook ? ' active' : ''}" onclick="switchBunpouBook('${key}', this)">${b.label}</button>
  `).join('');
}

function resolveBunpouItems(group) {
  // Kartu "Pengulangan dari Hari X" bisa punya refFrom: {tema, judul} yang manggil
  // langsung item dari kartu aslinya (data.js) — jadi gak perlu ditulis ulang manual.
  // Kalau kartu ini juga punya items sendiri (contoh tambahan yang unik), itu digabung
  // di belakang item hasil panggilan tadi.
  const own = group.items || [];
  if (!group.refFrom) return own;
  const source = BUNPOU.find(g => g.tema === group.refFrom.tema && g.judul === group.refFrom.judul);
  return source ? source.items.concat(own) : own;
}

function renderBunpou() {
  renderBunpouBookTabs();
  const el = document.getElementById('bunpouContent');
  if (!el || !Array.isArray(BUNPOU)) return;

  // Kelompokkan array flat BUNPOU berdasarkan field `tema`, tapi cuma yang
  // `buku`-nya cocok sama tab aktif. Entri lama tanpa field `buku` dianggap 'minna'.
  const byTema = {};
  const temaOrder = [];
  BUNPOU.filter(g => (g.buku || 'minna') === currentBunpouBook).forEach(group => {
    const t = group.tema || 'Lainnya';
    if (!byTema[t]) { byTema[t] = []; temaOrder.push(t); }
    byTema[t].push(group);
  });
  // "Materi Tambahan" selalu ditaruh paling akhir, di luar urutan alami array
  const tambahanIdx = temaOrder.indexOf('Materi Tambahan');
  if (tambahanIdx > -1) temaOrder.push(temaOrder.splice(tambahanIdx, 1)[0]);

  let html = '';
  temaOrder.forEach(tema => {
    html += `<div class="sec-header-bunpou">${tema}</div>`;
    byTema[tema].forEach((group, gi) => {
      const id = 'bunpou_' + tema.replace(/[^a-z0-9]/gi, '_') + '_' + gi;
      const resolvedItems = resolveBunpouItems(group);
      html += `<div class="acc-item">
        <div class="acc-head" onclick="togAcc('${id}',this)">
          <div class="acc-left">
            <span class="acc-title">${group.judul}</span>
            <span class="acc-cnt">${resolvedItems.length}</span>
          </div>
          <span class="acc-arrow">▶</span>
        </div>
        <div class="acc-body" id="${id}">
          ${group.sub ? `<div style="font-size:.8rem;color:var(--text3);font-style:italic;margin-bottom:.9rem;line-height:1.6">${group.sub}</div>` : ''}
          <div class="particle-grid">
            ${resolvedItems.map(it => `
              <div class="pcard">
                <div class="p-sym" style="font-size:1.15rem;font-family:'Noto Serif JP',serif">${it.pola}</div>
                <div class="p-rom">${it.romaji}</div>
                <div class="p-name">${it.arti}</div>
                ${it.catatan ? `<div class="p-desc">${it.catatan}</div>` : ''}
                <div class="p-exs">${(it.contoh || []).map(e => `<div class="p-ex"><div class="p-ex-jp">${e.jp}</div><div class="p-ex-id">${e.id}</div></div>`).join('')}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
    });
  });
  el.innerHTML = html;
}

// ─── search filter untuk halaman Bunpou (bisa juga cari "hari 5", "bab 3", dst) ───
function filterBunpou() {
  const q = (document.getElementById('bunpouSearchInput').value || '').trim().toLowerCase();
  const container = document.getElementById('bunpouContent');
  if (!container) return;
  let currentHeader = null;
  let currentHeaderText = '';
  let headerHasMatch = false;
  const finalizeHeader = () => {
    if (currentHeader) currentHeader.style.display = headerHasMatch ? '' : 'none';
  };
  Array.from(container.children).forEach(child => {
    if (child.classList.contains('sec-header-bunpou')) {
      finalizeHeader();
      currentHeader = child;
      currentHeaderText = child.textContent.toLowerCase();
      headerHasMatch = false;
      return;
    }
    if (child.classList.contains('acc-item')) {
      const text = currentHeaderText + ' ' + child.textContent.toLowerCase();
      const match = !q || text.includes(q);
      child.style.display = match ? '' : 'none';
      if (match) headerHasMatch = true;
    }
  });
  finalizeHeader();
}
