const refs = {
  menuOpenButton: document.querySelector('[data-menu-open-button]'),
  // menuOpenIcon: document.querySelector('.mobile-menu-open-icon'),
  // menuCloseIcon: document.querySelector('.mobile-menu-close-icon'),
  menu: document.querySelector('[data-menu]'),
};

const toggleModal = () => {
  //
  refs.menu.classList.toggle('is-open');
  // refs.menuCloseIcon.classList.toggle('is-hidden');
  // refs.menuOpenIcon.classList.toggle('is-hidden');

  if (refs.menuOpenIcon.classList.contains('is-hidden')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

refs.menuOpenButton.addEventListener('click', toggleModal);
