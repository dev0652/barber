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
    refs.menuCloseButton.setAttribute('aria-expanded', true);
  } else {
    document.body.style.overflow = '';
    refs.menuCloseButton.setAttribute('aria-expanded', false);
  }
};

refs.menuOpenButton.addEventListener('click', toggleModal);
refs.menuCloseButton.addEventListener('click', toggleModal);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 834px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.menu.classList.remove('is-open');
  refs.menuCloseButton.setAttribute('aria-expanded', false);
  document.body.style.overflow = '';
});

// Close mobile menu whenever a link is clicked
document.querySelectorAll('[js-close-on-click]').forEach(item => {
  item.addEventListener('click', toggleModal, { once: true });
});
