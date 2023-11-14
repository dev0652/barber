const refs = {
  openModalBtnDev: document.querySelector('[data-modal-open-dev]'),
  closeModalBtnDev: document.querySelector('[data-modal-close-dev]'),
  modalDev: document.querySelector('[data-modal-dev]'),
};

refs.openModalBtnDev.addEventListener('click', openModal);
refs.closeModalBtnDev.addEventListener('click', closeModal);

function openModal() {
  refs.modalDev.classList.remove('is-hidden');
  document.body.classList.add('is-modal-shown');
  document.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscapeKeyDown);
}

function closeModal() {
  refs.modalDev.classList.add('is-hidden');
  document.body.classList.remove('is-modal-shown');
  document.removeEventListener('click', handleBackdropClick);
  document.removeEventListener('keydown', handleEscapeKeyDown);
}

function handleEscapeKeyDown(event) {
  if (event.key === 'Escape') closeModal();
}

function handleBackdropClick(event) {
  if (event.target == refs.modalDev) closeModal();
}
