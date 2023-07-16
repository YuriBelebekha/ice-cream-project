(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuItem: document.querySelectorAll('.mobile-menu-nav__item'),
    section: document.querySelectorAll('section'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuItem.forEach(item => { item.addEventListener('click', closeMenu) });
  refs.section.forEach(section => { section.addEventListener('click', closeMenu) });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  };

  function closeMenu() {
    if (!refs.menu.classList.contains('is-open')) {
      return;
    } else {
      refs.menu.classList.remove('is-open');
    };
  };
})();