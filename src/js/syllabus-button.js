import getRefs from '/js/refs';
const { detailsToggle, syllabusCard, syllabusRenderCnt } = getRefs();

const toggleSyllabusCard = event => {
  syllabusCard.classList.toggle('details-expanded');

  const isShown = syllabusCard.classList.contains('details-expanded');
  detailsToggle.innerHTML = isShown ? 'менше' : 'більше';
};

detailsToggle && detailsToggle.addEventListener('click', toggleSyllabusCard);

// ***********************************************

export const moreBtnClickHandler = e => {
  if (!e.target.classList.contains('details-toggle-button')) return;

  const id = e.target.dataset.id;

  // See if any other card if expanded
  const activeCategoryBtn = document.querySelector('.active-category');

  // Collapse any other section if expanded
  const allMoreButtons = document.querySelectorAll('.details-toggle-button');

  // Expand current card
  for (const button of allMoreButtons) {
    if (btn.dataset.id === id) {
      btn.classList.add('active-category');
    }
  }
  activeCategoryBtn.classList.remove('active-category');

  renderBooksByCategory(data);
  scrollToTop();
};

syllabusRenderCnt.addEventListener('click', moreBtnClickHandler);
