// script.js
// Theme toggle with persistence and system preference detection
const THEME_KEY = 'theme-preference';
const toggle = document.getElementById('theme-toggle');

function getPreferredTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved === 'dark' || saved === 'light') return saved;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  if(toggle){
    toggle.textContent = isDark ? '🌙 Dark' : '☀️ Light';
    toggle.setAttribute('aria-pressed', isDark);
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try{ localStorage.setItem(THEME_KEY, next); }catch(e){ /* ignore storage errors */ }
}

// initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const initial = getPreferredTheme();
  applyTheme(initial);

  if(toggle){
    toggle.addEventListener('click', toggleTheme);
    // allow keyboard activation via Space/Enter already handled by button semantics
  }

  // If the user hasn't explicitly chosen, respond to system changes
  if(window.matchMedia){
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', e => {
      if(!localStorage.getItem(THEME_KEY)){
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
});