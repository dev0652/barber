(() => {
  const refs = {
    openModalBtnDev: document.querySelector('[data-modal-open-dev]'),
    closeModalBtnDev: document.querySelector('[data-modal-close-dev]'),
    modalDev: document.querySelector('[data-modal-dev]'),
  };

  refs.openModalBtnDev.addEventListener('click', toggleModalDev);
  refs.closeModalBtnDev.addEventListener('click', toggleModalDev);

  refs.modalDev.addEventListener('click', event => {
    if (event.target === refs.modalDev) {
      toggleModalDev();
    }
  });

  function toggleModalDev() {
    refs.modalDev.classList.toggle('is-hidden');
  }
})();
