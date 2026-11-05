/* page-konstruksi.js — baca, cari, terjemahan, ringkasan buku teks konstruksi */
(function () {
  var D = KONSTRUKSI, cur = 1, TR_KEY = 'nihongo_konstruksi_tr', store = {};
  try { store = JSON.parse(localStorage.getItem(TR_KEY) || '{}'); } catch (e) {}
  function save() { try { localStorage.setItem(TR_KEY, JSON.stringify(store)); } catch (e) {} }
  function $(i) { return document.getElementById(i); }
  function mk(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function hl(el, text, q) {
    el.textContent = '';
    if (!q) { el.textContent = text; return; }
    var i = 0, k;
    while ((k = text.indexOf(q, i)) > -1) {
      if (k > i) el.appendChild(document.createTextNode(text.slice(i, k)));
      el.appendChild(mk('mark', null, q)); i = k + q.length;
    }
    el.appendChild(document.createTextNode(text.slice(i)));
  }
  function tabs() {
    var t = $('knTabs'); t.textContent = '';
    D.bab.forEach(function (b) {
      var x = mk('button', 'cat-btn' + (b.n === cur ? ' active' : ''), 'Bab ' + b.n);
      x.onclick = function () { cur = b.n; $('knQ').value = ''; tabs(); render(); };
      t.appendChild(x);
    });
  }
  function card(s, q) {
    var a = mk('article', 'kn-card'), h = mk('h3'), ht = mk('span');
    hl(ht, s.id + ' ' + s.t, q); h.appendChild(ht); h.appendChild(mk('small', null, 'hal. ' + s.p)); a.appendChild(h);
    var p = mk('p', 'kn-jp'); hl(p, s.jp, q); a.appendChild(p);
    var act = mk('div', 'kn-act'), bt = mk('button', 'kn-btn', 'Terjemahan'), bs = mk('button', 'kn-btn', 'Ringkasan');
    var pt = mk('div', 'kn-panel'), ps = mk('div', 'kn-panel'), tv = mk('div'), ta = mk('textarea', 'kn-ta');
    bt.setAttribute('aria-expanded', 'false'); bs.setAttribute('aria-expanded', 'false'); pt.hidden = true; ps.hidden = true;
    ta.placeholder = 'Tempel terjemahan di sini'; ta.value = store[s.id] || '';
    function showT() { tv.textContent = ''; tv.appendChild(store[s.id] ? mk('div', null, store[s.id]) : mk('div', 'kn-empty', 'Menunggu terjemahan darimu.')); }
    ta.oninput = function () { store[s.id] = ta.value; save(); showT(); };
    showT(); pt.appendChild(tv); pt.appendChild(ta);
    ps.appendChild(mk('div', null, s.sum || 'Ringkasan belum dibuat.'));
    bt.onclick = function () { pt.hidden = !pt.hidden; bt.setAttribute('aria-expanded', String(!pt.hidden)); };
    bs.onclick = function () { ps.hidden = !ps.hidden; bs.setAttribute('aria-expanded', String(!ps.hidden)); };
    act.appendChild(bt); act.appendChild(bs); a.appendChild(act); a.appendChild(pt); a.appendChild(ps);
    return a;
  }
  function render() {
    var q = $('knQ').value.trim(), L = $('knList'), n = 0;
    L.textContent = '';
    var b = D.bab.filter(function (x) { return x.n === cur; })[0];
    $('knBab').textContent = q ? '' : '第' + b.n + '章 ' + b.jp + ' · mulai hal. ' + b.p;
    D.sections.forEach(function (s) {
      if (!q && s.bab !== cur) return;
      var tr = store[s.id] || '';
      if (q && (s.jp + s.t + tr).indexOf(q) < 0) return;
      n++; L.appendChild(card(s, q));
    });
    if (!n) L.appendChild(mk('div', 'kn-empty', q ? 'Tidak ada hasil untuk “' + q + '”.' : 'Bab ini belum diisi.'));
    $('knCnt').textContent = q ? n + ' hasil' : '';
  }
  $('knQ').oninput = render;
  tabs(); render();
})();
