(() => {
  // ---- Mobile menu: Escape closes, focus stays inside while open ----
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const header = document.querySelector('[data-header]');
  const mq = window.matchMedia('(min-width: 1024px)');

  const focusables = () => [toggle, ...menu.querySelectorAll('a')];

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.querySelector('.menu-toggle__label').textContent = 'Loka';
    menu.querySelector('a').focus();
    document.addEventListener('keydown', onKey);
  }
  function closeMenu({ restoreFocus = true } = {}) {
    if (menu.hidden) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('.menu-toggle__label').textContent = 'Valmynd';
    document.removeEventListener('keydown', onKey);
    if (restoreFocus) toggle.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
    if (e.key !== 'Tab') return;
    const items = focusables();
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  toggle.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu({ restoreFocus: false }); });
  document.addEventListener('click', (e) => { if (!menu.hidden && !header.contains(e.target)) closeMenu({ restoreFocus: false }); });
  mq.addEventListener('change', () => closeMenu({ restoreFocus: false }));

  // ---- Catalogue filter (all books stay visible without JS) ----
  const filters = document.querySelector('[data-filters]');
  if (filters) {
    filters.hidden = false;
    const status = document.querySelector('[data-filter-status]');
    const cards = document.querySelectorAll('.catalog__item');
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      const tag = btn.dataset.filter;
      filters.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let shown = 0;
      cards.forEach((c) => {
        const on = !tag || c.dataset.tags.split(' ').includes(tag);
        c.hidden = !on;
        if (on) { shown++; c.classList.add('is-visible'); }
      });
      document.querySelectorAll('[data-group]').forEach((g) => {
        g.hidden = !g.querySelector('.catalog__item:not([hidden])');
      });
      status.textContent = `${shown} bækur sýndar`;
    });
  }

  // ---- Gentle reveal on scroll ----
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach((el) => io.observe(el));
})();
