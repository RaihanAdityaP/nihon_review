/* layout.js — header, nav, drawer, dan tema. Dimuat paling awal di SETIAP halaman. */
var PAGES = [
 {
  "slug": "home",
  "label": "ホーム",
  "title": "Home",
  "desc": "",
  "group": ""
 },
 {
  "slug": "materi",
  "label": "教材",
  "title": "Materi",
  "desc": "Kamus terpadu: kotoba, kata sifat, dan counter.",
  "group": "materi"
 },
 {
  "slug": "moji",
  "label": "文字",
  "title": "Moji",
  "desc": "Hiragana, katakana, dan kanji dalam satu tempat.",
  "group": "materi"
 },
 {
  "slug": "kata-kerja",
  "label": "動詞",
  "title": "Kata Kerja",
  "desc": "Daftar kata kerja per kelompok beserta bentuknya.",
  "group": "materi"
 },
 {
  "slug": "partikel",
  "label": "助詞",
  "title": "Partikel",
  "desc": "Partikel dasar dan partikel lanjutan.",
  "group": "materi"
 },
 {
  "slug": "buku",
  "label": "教科書",
  "title": "Buku",
  "desc": "Kotoba per bab dari buku utama dan Irodori.",
  "group": "materi"
 },
 {
  "slug": "bunpou",
  "label": "文法",
  "title": "Bunpou",
  "desc": "Pola kalimat per hari, lengkap dengan contoh.",
  "group": "materi"
 },
 {
  "slug": "quiz",
  "label": "クイズ",
  "title": "Quiz",
  "desc": "Pilih materi moji, kotoba, atau bunpou, lalu kerjakan soal.",
  "group": "latihan"
 },
 {
  "slug": "ai",
  "label": "AI練習",
  "title": "Latihan AI",
  "desc": "Latihan soal buatan AI, chatbot kaiwa, dan latihan menulis kanji.",
  "group": "latihan"
 },
 {
  "slug": "progress",
  "label": "進捗",
  "title": "Progress",
  "desc": "Riwayat sesi dan perkembangan belajarmu.",
  "group": "latihan"
 }
];
var TEMPLATE = "<header>\n  <a class=\"logo\" href=\"@@ROOT@@home/\">日本語復習<small>· review</small></a>\n  <!-- desktop nav -->\n  <nav id=\"desktopNav\">@@NAV_D@@</nav>\n  <!-- theme toggle (desktop) -->\n  <button class=\"theme-toggle\" id=\"themeToggleDesktop\" onclick=\"toggleTheme()\" aria-label=\"Ganti tema\">\n    <svg class=\"icon-sun\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\"></path></svg>\n    <svg class=\"icon-moon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>\n  </button>\n  <!-- burger button (mobile only) -->\n  <button class=\"burger\" id=\"burgerBtn\" onclick=\"toggleMenu()\" aria-label=\"Menu\">\n    <span></span><span></span><span></span>\n  </button>\n</header>\n\n<!-- mobile drawer -->\n<div class=\"drawer-overlay\" id=\"drawerOverlay\" onclick=\"closeMenu()\"></div>\n<div class=\"drawer\" id=\"drawer\">\n  <div class=\"drawer-logo\">日本語復習<small>· review</small></div>\n  <nav class=\"drawer-nav\">@@NAV_M@@</nav>\n  <div class=\"drawer-theme-row\">\n    <button class=\"drawer-theme-btn\" onclick=\"toggleTheme()\">\n      <svg id=\"drawerThemeIconSun\" class=\"icon-sun\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" width=\"18\" height=\"18\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\"></path></svg>\n      <svg id=\"drawerThemeIconMoon\" class=\"icon-moon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" width=\"18\" height=\"18\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>\n      <span id=\"drawerThemeLabel\">Mode Gelap</span>\n    </button>\n  </div>\n</div>";
var THEME_KEY = 'nihongo_theme';
var LAST_PAGE_KEY = 'nihongo_last_page';

(function () {
  var script = document.currentScript;
  var ROOT = new URL('../../', script.src).href;      // assets/js/layout.js -> akar situs
  var path = location.pathname.replace(/index\.html$/, '');
  var current = null;
  PAGES.forEach(function (p) { if (path.slice(-(p.slug.length + 2)) === '/' + p.slug + '/') current = p.slug; });
  window.NIHON_ROOT = ROOT; window.NIHON_PAGES = PAGES; window.NIHON_CURRENT = current;

  function links() {
    return PAGES.map(function (p) {
      var on = p.slug === current;
      return '<a href="' + ROOT + p.slug + '/"' + (on ? ' class="active" aria-current="page"' : '') + '>' + p.label + '</a>';
    }).join('\n    ');
  }
  var html = TEMPLATE.split('@@NAV_D@@').join(links()).split('@@NAV_M@@').join(links()).split('@@ROOT@@').join(ROOT);
  script.insertAdjacentHTML('beforebegin', html);
  if (current && current !== 'home') { try { localStorage.setItem(LAST_PAGE_KEY, current); } catch (e) {} }
  applyThemeUI(document.documentElement.getAttribute('data-theme') || 'dark');
})();

function applyThemeUI(theme) {
  var label = document.getElementById('drawerThemeLabel');
  if (label) label.textContent = theme === 'light' ? 'Mode Terang' : 'Mode Gelap';
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'dark';
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  applyThemeUI(next);
}

function toggleMenu() {
  var drawer = document.getElementById('drawer');
  var overlay = document.getElementById('drawerOverlay');
  var burger = document.getElementById('burgerBtn');
  var open = drawer.classList.contains('open');
  drawer.classList.toggle('open', !open);
  overlay.classList.toggle('open', !open);
  burger.classList.toggle('open', !open);
}

function closeMenu() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('burgerBtn').classList.remove('open');
}
