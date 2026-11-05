// filter-sheet.js — komponen filter (bottom-sheet) yang bisa dipakai ulang di halaman mana pun.
//
//   const fs = createFilterSheet({
//     title: 'Filter',                              // opsional
//     groups: [
//       { key:'jenis', label:'JENIS KATA', type:'single',            // 'single' = pilih satu; value '' = semua
//         options:[{v:'',t:'Semua'},{v:'kk',t:'Kata Kerja'}],
//         hint: 'teks bantuan di bawah kartu',                       // string atau fn(state) → string
//         visibleIf: s => true },                                    // opsional, untuk grup bergantung
//       { key:'jlpt', label:'JLPT', type:'multi',                    // 'multi' = boleh banyak; kosong = tanpa filter
//         options:[{v:'n5',t:'N5'},{v:'n4',t:'N4'}] }
//     ],
//     initial: {},                                  // state awal, mis. {jlpt:['n5']}
//     count: state => 123,                          // jumlah hasil untuk tombol bawah (opsional)
//     applyLabel: n => `Lihat ${n} hasil`,          // opsional
//     onChange: state => {},                        // tiap chip diubah (opsional)
//     onApply: state => {}                          // tombol bawah / tutup
//   });
//   fs.open(); fs.close(); fs.getState(); fs.setState({...}); fs.reset(); fs.activeCount();
//
// State: single → string, multi → array. Sheet menyimpan state sendiri; baca lewat getState().
function createFilterSheet(cfg) {
  const groups = cfg.groups || [];
  const blank = () => { const s = {}; groups.forEach(g => { s[g.key] = g.type === 'multi' ? [] : ''; }); return s; };
  const clone = o => JSON.parse(JSON.stringify(o));
  let state = Object.assign(blank(), clone(cfg.initial || {}));
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const ov = document.createElement('div');
  ov.className = 'fs-overlay';
  ov.innerHTML = `
    <div class="fs-sheet" role="dialog" aria-modal="true" aria-label="${esc(cfg.title || 'Filter')}">
      <div class="fs-head">
        <button class="fs-round" data-act="reset" aria-label="Reset filter" title="Reset"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20H9L3.6 14.6a2 2 0 0 1 0-2.8l8.2-8.2a2 2 0 0 1 2.8 0l5.8 5.8a2 2 0 0 1 0 2.8L12 19"/><path d="M8.5 9.5l6 6"/></svg></button>
        <div class="fs-title">${esc(cfg.title || 'Filter')}</div>
        <button class="fs-round" data-act="close" aria-label="Tutup"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      </div>
      <div class="fs-body"></div>
      <div class="fs-foot"><button class="fs-apply" data-act="apply"></button></div>
    </div>`;
  document.body.appendChild(ov);
  const body = ov.querySelector('.fs-body'), applyBtn = ov.querySelector('.fs-apply');

  function selected(g, v) { return g.type === 'multi' ? state[g.key].includes(v) : state[g.key] === v; }
  function render() {
    body.innerHTML = groups.filter(g => !g.visibleIf || g.visibleIf(state)).map(g => {
      const hint = typeof g.hint === 'function' ? g.hint(state) : g.hint;
      return `<div class="fs-group">
        <div class="fs-label">${esc(g.label)}</div>
        <div class="fs-card">${g.options.map(o => `<button class="fs-chip${selected(g, o.v) ? ' on' : ''}" data-k="${esc(g.key)}" data-v="${esc(o.v)}" aria-pressed="${selected(g, o.v)}">${esc(o.t)}</button>`).join('')}</div>
        ${hint ? `<div class="fs-hint">${esc(hint)}</div>` : ''}
      </div>`;
    }).join('');
    refreshCount();
  }
  function refreshCount() {
    const n = cfg.count ? cfg.count(clone(state)) : null;
    applyBtn.textContent = n === null ? 'Terapkan' : (cfg.applyLabel ? cfg.applyLabel(n) : `Lihat ${n} hasil`);
    applyBtn.disabled = n === 0;
  }
  function toggle(key, v) {
    const g = groups.find(x => x.key === key);
    if (!g) return;
    if (g.type === 'multi') { const a = state[key], i = a.indexOf(v); if (i < 0) a.push(v); else a.splice(i, 1); }
    else state[key] = v;
    // grup yang jadi tak terlihat dikembalikan ke kosong supaya filter tersembunyi tidak ikut aktif
    groups.forEach(x => { if (x.visibleIf && !x.visibleIf(state)) state[x.key] = x.type === 'multi' ? [] : ''; });
    render();
    if (cfg.onChange) cfg.onChange(clone(state));
  }
  function close() { ov.classList.remove('show'); document.documentElement.classList.remove('fs-lock'); document.removeEventListener('keydown', onKey); }
  function onKey(e) { if (e.key === 'Escape') { close(); if (cfg.onApply) cfg.onApply(clone(state)); } }
  ov.addEventListener('click', e => {
    if (e.target === ov) { close(); if (cfg.onApply) cfg.onApply(clone(state)); return; }
    const chip = e.target.closest('.fs-chip');
    if (chip) { toggle(chip.dataset.k, chip.dataset.v); return; }
    const act = e.target.closest('[data-act]');
    if (!act) return;
    if (act.dataset.act === 'reset') { state = blank(); render(); if (cfg.onChange) cfg.onChange(clone(state)); }
    else if (act.dataset.act === 'close' || act.dataset.act === 'apply') { close(); if (cfg.onApply) cfg.onApply(clone(state)); }
  });
  return {
    open() { render(); ov.classList.add('show'); document.documentElement.classList.add('fs-lock'); document.addEventListener('keydown', onKey); },
    close,
    getState: () => clone(state),
    setState(s) { state = Object.assign(blank(), clone(s || {})); if (ov.classList.contains('show')) render(); },
    reset() { state = blank(); if (ov.classList.contains('show')) render(); },
    // jumlah grup yang sedang punya pilihan (untuk badge di tombol Filter)
    activeCount() { return groups.filter(g => g.type === 'multi' ? state[g.key].length : state[g.key] !== '').length; }
  };
}
