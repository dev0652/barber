const refs = {
  menu: document.querySelector('[data-menu]'),
  menuOpenButton: document.querySelector('[data-menu-open-button]'),
  menuCloseButton: document.querySelector('[data-menu-close-button]'),
  contactsFormWrapper: document.querySelector('.contact-form_wrapper'),
};

const toggleModal = () => {
  //
  refs.menu.classList.toggle('is-open');
  refs.contactsFormWrapper.classList.toggle('is-in-mobile-menu');

  if (refs.menu.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

refs.menuOpenButton.addEventListener('click', toggleModal);
refs.menuCloseButton.addEventListener('click', toggleModal);
