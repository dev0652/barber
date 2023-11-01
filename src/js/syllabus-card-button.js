const button = document.querySelector('.details-toggle-button');
const card = document.querySelector('.syllabus-card');

const toggleSyllabusCard = event => {
  // if (event.target.tagName !== 'BUTTON') return;
  // if (!event.target.classList.contains('see-more-btn')) return;

  card.classList.toggle('details-expanded');

  const isShown = details.classList.contains('is-shown');
  button.innerHTML = isShown ? 'менше' : 'більше';
};

button.addEventListener('click', toggleSyllabusCard);
