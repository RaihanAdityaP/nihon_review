// page-progress.js — bagian dari NihonReview (dipecah dari app.js)
function clearProg() {
  if (confirm('Hapus semua riwayat progress?')) {
    saveProg({ sessions: [], tc: 0, tw: 0 });
    renderProg();
  }
}

// ─────────────────────────────────────────────────────
// PROGRESS
// ─────────────────────────────────────────────────────
function renderProg() {
  const p = loadProg();
  const s = p.sessions || [], tc = p.tc || 0, tw = p.tw || 0, tq = tc + tw;
  const acc = tq > 0 ? Math.round((tc / tq) * 100) : 0;
  document.getElementById('povGrid').innerHTML = `
    <div class="pov"><div class="pov-l">Total Quiz</div><div class="pov-v">${s.length} <span>sesi</span></div></div>
    <div class="pov"><div class="pov-l">Total Soal</div><div class="pov-v">${tq} <span>soal</span></div></div>
    <div class="pov"><div class="pov-l">Akurasi</div><div class="pov-v">${acc}<span>%</span></div><div class="mbar"><div class="mfill" style="width:${acc}%"></div></div></div>
    <div class="pov"><div class="pov-l">Benar / Salah</div><div class="pov-v" style="color:var(--green)">${tc}</div><div style="font-family:'DM Mono',monospace;font-size:.62rem;color:var(--red)">✗ ${tw}</div></div>`;
  const rl = document.getElementById('recentList');
  if (!s.length) {
    rl.innerHTML = `<div style="text-align:center;color:var(--text3);font-style:italic;padding:2rem;font-size:.78rem">Belum ada riwayat. Mulai quiz dulu!</div>`;
    return;
  }
  rl.innerHTML = s.map(x => {
    const d = new Date(x.date);
    const ds = d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
             + ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const pct = Math.round((x.correct / x.total) * 100);
    const cls = pct >= 80 ? 'hi' : pct >= 50 ? 'md' : 'lo';
    const cats = [...x.cats].slice(0, 3)
      .map(id => { const c = QCATS.find(q => q.id === id); return c ? c.label : id; })
      .join(', ') + (x.cats.length > 3 ? ` +${x.cats.length - 3} lainnya` : '');
    return `<div class="ri">
      <div class="ri-l">
        <span class="ri-cats">${cats || '—'}</span>
        <span class="ri-date">${ds} · ${x.total} soal</span>
      </div>
      <div class="ri-sc ${cls}">${pct}%</div>
    </div>`;
  }).join('');
}
