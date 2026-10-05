// core.js — bagian dari NihonReview (dipecah dari app.js)
// ─────────────────────────────────────────────────────
// LOCALSTORAGE
// ─────────────────────────────────────────────────────
const LSK = 'nihongo_progress_v2';

function loadProg() {
  try { return JSON.parse(localStorage.getItem(LSK)) || { sessions: [], tc: 0, tw: 0 }; }
  catch { return { sessions: [], tc: 0, tw: 0 }; }
}

function saveProg(d) {
  try { localStorage.setItem(LSK, JSON.stringify(d)); } catch {}
}

function addSession(cats, types, c, w, total) {
  const p = loadProg();
  p.sessions.unshift({ date: new Date().toISOString(), cats: [...cats], types: [...types], correct: c, wrong: w, total });
  if (p.sessions.length > 60) p.sessions = p.sessions.slice(0, 60);
  p.tc = (p.tc || 0) + c;
  p.tw = (p.tw || 0) + w;
  saveProg(p);
}

function shuf(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
