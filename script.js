const root = document.documentElement;
const themeBtn = document.getElementById('theme');
const menu = document.getElementById('menu');

try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}

themeBtn.addEventListener('click', () => {
  const dark = getComputedStyle(root).colorScheme === 'dark';
  const next = dark ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

document.getElementById('burger').addEventListener('click', () => menu.classList.toggle('open'));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });
document.getElementById('year').textContent = new Date().getFullYear();
