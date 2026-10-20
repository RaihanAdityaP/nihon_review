// page-bunpou.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// BUNPOU
// ─────────────────────────────────────────────────────
// ─── pilih buku aktif di halaman Bunpou (dipakai buat filter tema; label
// buku diambil dari BOOKS yang sama dengan menu Buku, data.js) ───
// 'all' = tab "Semua": gabungan semua buku, tiap tema diberi awalan nama bukunya.
let currentBunpouBook = 'all';
// Tab "Bunpou Tambahan": menu sendiri di luar buku modul & Irodori (bukan entri BOOKS).
const BUNPOU_TAMBAHAN = { key: 'tambahan', label: 'Bunpou Tambahan' };
function bunpouBookLabel(key) {
  if (key === BUNPOU_TAMBAHAN.key) return BUNPOU_TAMBAHAN.label;
  return BOOKS[key] ? BOOKS[key].label : key;
}
function switchBunpouBook(bookKey, btn) {
  if (bookKey !== 'all' && bookKey !== BUNPOU_TAMBAHAN.key && !BOOKS[bookKey]) return;
  currentBunpouBook = bookKey;
  document.querySelectorAll('#bunpouBookTabs .cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('bunpouSearchInput').value = '';
  renderBunpou();
}
function renderBunpouBookTabs() {
  const el = document.getElementById('bunpouBookTabs');
  if (!el) return;
  const tabs = [['all', 'Semua'], ...Object.entries(BOOKS).map(([key, b]) => [key, b.label]), [BUNPOU_TAMBAHAN.key, BUNPOU_TAMBAHAN.label]];
  el.innerHTML = tabs.map(([key, label]) => `
    <button class="cat-btn${key === currentBunpouBook ? ' active' : ''}" onclick="switchBunpouBook('${key}', this)">${label}</button>
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
  // `buku`-nya cocok sama tab aktif (atau semuanya kalau tab "Semua"). Entri lama
  // tanpa field `buku` dianggap 'minna'.
  const isAll = currentBunpouBook === 'all';
  const bookKeys = [...Object.keys(BOOKS), BUNPOU_TAMBAHAN.key];
  const bookOf = g => g.buku || 'minna';
  const byTema = {};
  const temaOrder = [];
  const meta = {}; // key tema -> { bookIdx, tema, label }
  BUNPOU.filter(g => isAll || bookOf(g) === currentBunpouBook).forEach(group => {
    const t = group.tema || 'Lainnya';
    const bi = bookKeys.indexOf(bookOf(group));
    const bookIdx = bi === -1 ? bookKeys.length : bi;
    const key = isAll ? bookOf(group) + '||' + t : t;
    if (!byTema[key]) {
      byTema[key] = []; temaOrder.push(key);
      const bookLabel = bunpouBookLabel(bookOf(group));
      meta[key] = { bookIdx, tema: t, label: (isAll && !t.startsWith(bookLabel)) ? bookLabel + ' · ' + t : t };
    }
    byTema[key].push(group);
  });
  // Urutan: per buku (sesuai urutan tab); "Bunpou Tambahan" punya tab sendiri di paling akhir.
  // sort() di JS stabil, jadi urutan alami array tetap terjaga di antara tema lain.
  temaOrder.sort((a, b) => (meta[a].bookIdx - meta[b].bookIdx) ||
    0);

  let html = '';
  temaOrder.forEach(tema => {
    html += `<div class="sec-header-bunpou">${meta[tema].label}</div>`;
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
                <div class="p-sym" style="font-size:1.15rem;font-family:'Noto Serif JP',serif">${it.polaFu ? it.polaFu.replace(FURI_RE, '<ruby>$1<rt>$2</rt></ruby>') : it.pola}</div>
                <div class="p-rom">${it.romaji}</div>
                <div class="p-name">${it.arti}</div>
                ${it.catatan ? `<div class="p-desc">${it.catatan}</div>` : ''}
                <div class="p-exs">${(it.contoh || []).map(e => `<div class="p-ex"><div class="p-ex-jp">${exJp(e)}</div>${e.r ? `<div class="p-ex-rom">${e.r}</div>` : ''}<div class="p-ex-id">${e.id}</div></div>`).join('')}</div>
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


// ─── furigana ───
// Kalimat contoh yang punya kanji menyimpan bacaan di field `fu`, formatnya 漢字[よみ].
// Di sini diubah jadi <ruby>. Tombol ON/OFF cuma menyembunyikan <rt> lewat CSS (class furi-off),
// jadi instan dan pilihannya disimpan di browser.
const FURI_RE = /([\u4e00-\u9fff々ヶ]+(?:か[\u4e00-\u9fff]+)?)\[([^\]]+)\]/g;
function exJp(e) {
  return e.fu ? e.fu.replace(FURI_RE, '<ruby>$1<rt>$2</rt></ruby>') : e.jp;
}
function applyFuri(on) {
  const c = document.getElementById('bunpouContent');
  if (c) c.classList.toggle('furi-off', !on);
  const b = document.getElementById('furiBtn');
  if (b) { b.textContent = 'ふりがな ' + (on ? 'ON' : 'OFF'); b.classList.toggle('sel', on); }
}
function toggleFuri() {
  const on = document.getElementById('bunpouContent').classList.contains('furi-off'); // sekarang OFF -> jadi ON
  try { localStorage.setItem('nihon_furi', on ? '1' : '0'); } catch (e) {}
  applyFuri(on);
}
(function initFuri() {
  let on = true;
  try { on = localStorage.getItem('nihon_furi') !== '0'; } catch (e) {}
  applyFuri(on);
})();
