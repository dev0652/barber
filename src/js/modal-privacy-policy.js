const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  siteName: document.querySelector('[data-insert-site-name]'),
};

(() => {
  const { origin, pathname } = window.location;
  refs.siteName.innerHTML = origin + pathname;
})();

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.body.classList.add('is-modal-shown');
  document.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscapeKeyDown);
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('is-modal-shown');
  document.removeEventListener('click', handleBackdropClick);
  document.removeEventListener('keydown', handleEscapeKeyDown);
}

function handleEscapeKeyDown(event) {
  if (event.key === 'Escape') closeModal();
}

function handleBackdropClick(event) {
  if (event.target == refs.modal) closeModal();
}
