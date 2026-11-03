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

  // ---- Book dialog: confirmed metadata only ----
  const data = JSON.parse(document.getElementById('book-data').textContent);
  const dialog = document.getElementById('book-dialog');
  const $ = (s) => dialog.querySelector(s);
  let opener = null;

  document.querySelectorAll('[data-book]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const b = data[btn.dataset.book];
      if (!b) return;
      opener = btn;
      $('[data-dialog-title]').textContent = b.title;
      $('[data-dialog-subtitle]').textContent = b.subtitle || '';
      $('[data-dialog-author]').textContent = b.author;
      $('[data-dialog-ill-row]').hidden = !b.illustrator;
      $('[data-dialog-ill]').textContent = b.illustrator || '';
      const img = $('[data-dialog-img]');
      img.src = b.img; img.width = b.w; img.height = b.h;
      dialog.showModal();
    });
  });
  $('[data-dialog-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (opener) opener.focus(); });

  // ---- Highlight proposed copy (demo helper) ----
  const proposedBtn = document.querySelector('[data-proposed-toggle]');
  proposedBtn.addEventListener('click', () => {
    const on = document.documentElement.classList.toggle('show-proposed');
    proposedBtn.setAttribute('aria-pressed', String(on));
  });

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
