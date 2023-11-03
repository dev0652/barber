import getRefs from '/js/refs';
const { detailsToggle, syllabusCard, syllabusRenderCnt } = getRefs();

const toggleSyllabusCard = event => {
  syllabusCard.classList.toggle('details-expanded');

  const isShown = syllabusCard.classList.contains('details-expanded');
  detailsToggle.innerHTML = isShown ? 'менше' : 'більше';
};

// detailsToggle && detailsToggle.addEventListener('click', toggleSyllabusCard);

// ***********************************************

export const expandButtonClickHandler = event => {
  if (!event.target.classList.contains('details-toggle-button')) return;

  const id = event.target.dataset.id;

  // Test

  const cards = document.querySelectorAll('.syllabus-card');

  for (const card of cards) {
    if (card.dataset.id === id) {
      card.classList.toggle('details-expanded');
    }
  }

  // // Check if any other card if expanded
  // const activeCategoryBtn = document.querySelector('.active-category');
  // const expandedCard = document.querySelector('.details-expanded');

  // // Collapse any other section if expanded
  // const allMoreButtons = document.querySelectorAll('.details-toggle-button');

  // // Expand current card
  // for (const button of allMoreButtons) {
  //   if (btn.dataset.id === id) {
  //     btn.classList.add('active-category');
  //   }
  // }
  // activeCategoryBtn.classList.remove('active-category');
};

syllabusRenderCnt.addEventListener('click', expandButtonClickHandler);
