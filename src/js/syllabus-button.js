import getRefs from '/js/refs';
const { syllabusRenderCnt } = getRefs();

// ***********************************************

export const expandButtonClickHandler = event => {
  if (!event.target.classList.contains('details-toggle-button')) return;

  // Get the current button's parent card
  const cardsNodeList = document.querySelectorAll('.syllabus-card');
  const cards = Array.from(cardsNodeList);

  const buttonsNodeList = document.querySelectorAll('.details-toggle-button');
  const buttons = Array.from(buttonsNodeList);

  const currentCard = cards.find(
    card => card.dataset.id === event.target.dataset.id
  );

  // Check if current card if expanded
  if (currentCard.classList.contains('details-expanded')) {
    // If it is, collapse it...
    currentCard.classList.remove('details-expanded');

    // ...revert it's button's text to default...
    event.target.innerHTML = 'більше';

    return;
  } else {
    // Check if any other card if expanded...
    const expandedCard = cards.find(card =>
      card.classList.contains('details-expanded')
    );

    if (expandedCard) {
      // ...collapse it...
      expandedCard.classList.remove('details-expanded');

      // ...and revert it's button's text to default...
      const expandedCardButton = buttons.find(
        button => button.dataset.id === expandedCard.dataset.id
      );

      expandedCardButton.innerHTML = 'більше';
    }
  }

  // Expand current card
  currentCard.classList.add('details-expanded');

  // ...set it's button's text to 'Less'...
  event.target.innerHTML = 'менше';

 // ...check if the expanded card will cross the lower edge of the screen
 const currentCardPosition = currentCard.getBoundingClientRect();
  
 const isLowerPartObscured = currentCardPosition.bottom > (window.innerHeight || document.documentElement.clientHeight);

 // ...and if it will, scroll the whole of the card into view
 isLowerPartObscured && currentCard.scrollIntoView({
     behavior: 'smooth',
     block: 'end',
   });
};

syllabusRenderCnt.addEventListener('click', expandButtonClickHandler);
