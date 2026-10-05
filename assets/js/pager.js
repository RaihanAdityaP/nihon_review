// pager.js — bagian dari NihonReview (dipecah dari app.js)
// klik "…" → berubah jadi input kecil buat lompat langsung ke halaman tertentu.
// Dipakai bareng-bareng oleh Materi/Kanji/Kata Kerja — tinggal kasih tau nama
// fungsi "goto page" (mis. "kamusGoPage") dan "render ulang" (mis. "renderKamusResults") masing-masing halaman.
function pagerToggleJump(el, totalPages, gotoFnName, renderFnName) {
  if (el.dataset.open === '1') return;
  el.dataset.open = '1';
  el.classList.add('kamus-page-ellipsis-open');
  el.innerHTML = `<input type="number" class="kamus-page-jump-input" min="1" max="${totalPages}">`;
  const input = el.querySelector('input');
  input.focus();
  const revert = () => { el.dataset.open = ''; window[renderFnName](); };
  const commit = () => {
    let p = parseInt(input.value, 10);
    if (isNaN(p)) { revert(); return; }
    p = Math.max(1, Math.min(totalPages, p));
    window[gotoFnName](p);
  };
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') commit();
    if (e.key === 'Escape') revert();
  });
  input.addEventListener('blur', () => setTimeout(() => { if (el.dataset.open === '1') revert(); }, 150));
}

// Bikin HTML baris nomor halaman (dipakai Materi/Kanji/Kata Kerja).
function pagerHtml(page, totalPages, gotoFnName, jumpFnName) {
  if (totalPages <= 1) return '';
  return `<div class="kamus-pagination">
    <button class="kamus-page-btn" ${page <= 1 ? 'disabled' : ''} onclick="${gotoFnName}(${page - 1})">←</button>
    ${kamusPageNumbers(page, totalPages).map(p =>
      p === '…'
        ? `<button class="kamus-page-ellipsis" onclick="${jumpFnName}(this, ${totalPages})">…</button>`
        : `<button class="kamus-page-num ${p === page ? 'active' : ''}" onclick="${gotoFnName}(${p})">${p}</button>`
    ).join('')}
    <button class="kamus-page-btn" ${page >= totalPages ? 'disabled' : ''} onclick="${gotoFnName}(${page + 1})">→</button>
  </div>`;
}

// bikin daftar nomor halaman: selalu tampilkan awal, akhir, sekitar halaman aktif, sisanya "…"
function kamusPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, 2, total - 1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter(p => p >= 1 && p <= total).sort((a, b) => a - b);
  const result = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push('…');
    result.push(p);
  });
  return result;
}
