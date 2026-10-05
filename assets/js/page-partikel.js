// page-partikel.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// PARTIKEL
// ─────────────────────────────────────────────────────
function switchPartikelTab(tab, btn) {
  document.getElementById('parDasar').style.display    = tab === 'dasar'    ? 'block' : 'none';
  document.getElementById('parLanjutan').style.display = tab === 'lanjutan' ? 'block' : 'none';
  document.querySelectorAll('#pagePartikel .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function renderPartikel() {
  document.getElementById('particleGrid').innerHTML = PT.map(p => `
    <div class="pcard">
      <div class="p-sym">${p.sym}</div>
      <div class="p-rom">${p.r}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-desc">${p.desc}</div>
      <div class="p-exs">${p.ex.map(e => `<div class="p-ex"><div class="p-ex-jp">${e.jp}</div><div class="p-ex-id">${e.id}</div></div>`).join('')}</div>
    </div>`).join('');
}

function renderPartikelAdv() {
  const el = document.getElementById('particleAdvGrid');
  let html = '';
  for (const [group, items] of Object.entries(PT_ADV)) {
    const id = 'padv_' + group.replace(/[^a-z0-9]/gi, '_');
    html += `<div class="acc-item" style="margin-bottom:.5rem">
      <div class="acc-head" onclick="togAcc('` + id + `',this)">
        <div class="acc-left">
          <span class="acc-title">${group}</span>
          <span class="acc-cnt">${items.length}</span>
        </div>
        <span class="acc-arrow">▶</span>
      </div>
      <div class="acc-body" id="` + id + `">
        <div class="particle-grid">
          ${items.map(p => `
            <div class="pcard">
              <div class="p-sym">${p.sym}</div>
              <div class="p-rom">${p.r}</div>
              <div style="font-family:'DM Mono',monospace;font-size:.55rem;color:var(--accent3);margin-bottom:.3rem;letter-spacing:.04em">${p.kind}</div>
              <div class="p-desc">${p.desc}</div>
              <div class="p-exs">${p.ex.map(e => `<div class="p-ex"><div class="p-ex-jp">${e.jp}</div><div class="p-ex-id">${e.id}</div></div>`).join('')}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  }
  el.innerHTML = html;
}
