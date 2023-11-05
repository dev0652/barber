import getRefs from './refs';
const { syllabusRenderCnt } = getRefs();

// ***********************************************

export const expandButtonClickHandler = event => {
  if (!event.target.classList.contains('collapsible-toggle')) return;

  // 1.
  // Get all cards
  const cardsNodeList = document.querySelectorAll('.syllabus-card');
  const cards = Array.from(cardsNodeList);

  // 2.
  // Get the current button's parent card...
  const currentCard = cards.find(card => {
    const button = card.querySelector('.collapsible-toggle');
    return button.dataset.id === event.target.dataset.id;
  });

  // ...and it's blocks:
  const visible = currentCard.querySelector('.syllabus-card-visible');
  const coll = currentCard.querySelector('.syllabus-card-collapsible-wrapper');

  // 2.
  // Check if another card if expanded...
  const expandedCard = cards.find(card => {
    if (card === currentCard) return false;

    const cardVis = card.querySelector('.syllabus-card-visible');
    return cardVis.classList.contains('content-expanded');
  });

  // ...and if it is, collapse it
  if (expandedCard) {
    const expandedCardRefs = {
      coll: expandedCard.querySelector('.syllabus-card-collapsible-wrapper'),
      visible: expandedCard.querySelector('.syllabus-card-visible'),
      button: expandedCard.querySelector('.collapsible-toggle'),
    };

    expandedCardRefs.visible.classList.remove('content-expanded');
    expandedCardRefs.button.innerHTML = 'більше';
    expandedCardRefs.coll.style.maxHeight = null;
  }

  // 4.
  // Expand or collapse the current card
  visible.classList.toggle('content-expanded');

  if (coll.style.maxHeight) {
    coll.style.maxHeight = null;
    event.target.innerHTML = 'більше';
    //
  } else {
    coll.style.maxHeight = coll.scrollHeight + 'px';
    event.target.innerHTML = 'менше';

    // Check if the expanded card will cross the lower edge of the screen
    // const currentCardRect = currentCard.getBoundingClientRect();
    // console.log('currentCard height: ', currentCardRect.height);

    // const isLowerPartObscured =
    //   currentCardRect.bottom >
    //   (window.innerHeight || document.documentElement.clientHeight);

    // // const isLowerPartObscured = currentCard.scrollHeight;

    // // ...and if it will, scroll the whole of the card into view
    // isLowerPartObscured &&
    //   currentCard.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'end',
    //   });
  }
};

syllabusRenderCnt.addEventListener('click', expandButtonClickHandler);
