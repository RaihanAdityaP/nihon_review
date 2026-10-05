// ai-hub.js — bagian dari NihonReview (dipecah dari app.js)
const AI_TAB_KEY = 'nihongo_last_ai_tab';

// ─────────────────────────────────────────────────────
// TAB HALAMAN AI (Latihan Soal / Chatbot / Menulis)
// ─────────────────────────────────────────────────────
function aiSwitchTab(tab, btn) {
  document.getElementById('aiPanelLatihan').style.display = tab === 'latihan' ? 'block' : 'none';
  document.getElementById('aiPanelChat').style.display = tab === 'chat' ? 'block' : 'none';
  document.getElementById('aiPanelMenulis').style.display = tab === 'menulis' ? 'block' : 'none';
  document.querySelectorAll('#aiTabBar .cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  try { localStorage.setItem(AI_TAB_KEY, tab); } catch {}
  try { history.replaceState(null, '', tab === 'latihan' ? location.pathname + location.search : '#' + tab); } catch {}
  if (tab === 'chat') checkChatReady();
  chatSyncShell();
  if (tab === 'menulis') initWSetup();
}
