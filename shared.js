/* shared.js — small enhancements used across pages */

/* Reveal-on-scroll */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(e => io.observe(e));
})();

/* Apply persisted tweaks on every page from localStorage */
(function () {
  try {
    const raw = localStorage.getItem('axel-tweaks');
    if (!raw) return;
    const t = JSON.parse(raw);
    applyTweaks(t);
  } catch (e) {}
})();

function applyTweaks(t) {
  if (!t) return;
  const body = document.body;
  body.classList.toggle('constructivist', t.aesthetic === 'constructivist');
  body.classList.toggle('compact', t.density === 'compact');

  const root = document.documentElement;
  if (t.accent) {
    root.style.setProperty('--accent', t.accent);
    // derive a darker variant
    root.style.setProperty('--accent-2', shade(t.accent, -18));
    root.style.setProperty('--accent-soft', shade(t.accent, 35));
  }
  if (t.paper) {
    root.style.setProperty('--paper', t.paper);
  }
}

function shade(hex, percent) {
  const h = hex.replace('#', '');
  const f = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
  const r = (f >> 16) & 255, g = (f >> 8) & 255, b = f & 255;
  const t = percent < 0 ? 0 : 255;
  const p = Math.abs(percent) / 100;
  const nr = Math.round((t - r) * p) + r;
  const ng = Math.round((t - g) * p) + g;
  const nb = Math.round((t - b) * p) + b;
  return '#' + ((1 << 24) | (nr << 16) | (ng << 8) | nb).toString(16).slice(1);
}

window.__axelApplyTweaks = applyTweaks;
