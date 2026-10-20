// filters.js — tombol ☰ Filter + panel (bottom sheet) yang dipakai bareng oleh Materi dan Buku.
// groups: [{ id, label, options: [[value, label], ...], show?: () => boolean }]
// Dalam satu grup bisa pilih beberapa (OR). Antar grup digabung (AND). Tanpa pilihan = semua.
// Yang aktif tampil sebagai tag kecil di sebelah tombol (ketuk ✕ untuk lepas satu).
let _fbarSeq = 0;
function createFilterBar(el, groups, onChange) {
  const state = {};
  groups.forEach(g => { state[g.id] = new Set(); });
  const uid = 'fsheet' + (++_fbarSeq);
  let sheet = null;
  const visible = () => groups.filter(g => !g.show || g.show());
  const count = () => groups.reduce((n, g) => n + state[g.id].size, 0);
  const api = {
    state,
    has(id, v) { return state[id].has(v); },
    any(id) { return state[id].size > 0; },
    isActive() { return count() > 0; },
    reset() { groups.forEach(g => state[g.id].clear()); render(); onChange(); },
    open() { renderSheet(); sheet.classList.add('show'); },
    close() { if (sheet) sheet.classList.remove('show'); },
    render
  };
  function toggle(gid, v) {
    const set = state[gid];
    if (set.has(v)) set.delete(v); else set.add(v);
    // grup yang disembunyikan ikut dibersihkan supaya filter lama tidak nyangkut diam-diam
    groups.forEach(g => { if (g.show && !g.show()) state[g.id].clear(); });
    render(); renderSheet(); onChange();
  }
  function optLabel(g, v) { const o = g.options.find(x => x[0] === v); return o ? o[1] : v; }
  function render() {
    if (!el) return;
    const tags = groups.flatMap(g => [...state[g.id]].map(v => `<button type="button" class="fbar-tag" data-g="${g.id}" data-v="${v}">${optLabel(g, v)} ✕</button>`)).join('');
    el.innerHTML = `<div class="fbar">
      <button type="button" class="fbar-toggle" aria-label="Buka filter"><span class="fbar-burger"><i></i><i></i><i></i></span>Filter${count() ? `<span class="fbar-badge">${count()}</span>` : ''}</button>
      <div class="fbar-tags">${tags}</div>
    </div>`;
    const tb = el.querySelector('.fbar-toggle'); if (tb) tb.onclick = () => api.open();
    el.querySelectorAll('.fbar-tag').forEach(b => b.onclick = () => toggle(b.dataset.g, b.dataset.v));
  }
  function renderSheet() {
    if (!sheet) {
      sheet = document.createElement('div');
      sheet.id = uid; sheet.className = 'fsheet-overlay';
      sheet.addEventListener('click', e => { if (e.target === sheet) api.close(); });
      document.body.appendChild(sheet);
    }
    const body = visible().map(g => `
      <div class="fsheet-group">
        <div class="fsheet-label">${g.label}</div>
        <div class="fsheet-chips">${g.options.map(([v, label]) => `<button type="button" class="kamus-chip${state[g.id].has(v) ? ' active' : ''}" data-g="${g.id}" data-v="${v}">${label}</button>`).join('')}</div>
      </div>`).join('');
    sheet.innerHTML = `<div class="fsheet">
      <div class="fsheet-head"><span>Filter</span><button type="button" class="fsheet-x" aria-label="Tutup">✕</button></div>
      <div class="fsheet-body">${body}</div>
      <div class="fsheet-foot"><button type="button" class="fsheet-reset">Reset</button><button type="button" class="fsheet-ok">Selesai${count() ? ' · ' + count() + ' aktif' : ''}</button></div>
    </div>`;
    sheet.querySelectorAll('.kamus-chip').forEach(c => c.onclick = () => toggle(c.dataset.g, c.dataset.v));
    const x = sheet.querySelector('.fsheet-x'); if (x) x.onclick = () => api.close();
    const ok = sheet.querySelector('.fsheet-ok'); if (ok) ok.onclick = () => api.close();
    const rs = sheet.querySelector('.fsheet-reset'); if (rs) rs.onclick = () => { groups.forEach(g => state[g.id].clear()); render(); renderSheet(); onChange(); };
  }
  return api;
}
const FILTER_LEVEL_OPTIONS = [['5', 'N5'], ['4', 'N4'], ['3', 'N3'], ['2', 'N2'], ['1', 'N1'], ['none', 'Tanpa level']];
function filterLevelMatch(set, lv) {
  if (!set.size) return true;
  return lv ? set.has(String(lv)) : set.has('none');
}
