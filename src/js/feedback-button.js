import getRefs from './refs';

const { feedbackItems, feedbackButtons } = getRefs();

feedbackItems.forEach((item, index) => {
  const feedbackText = document.getElementById(`feedback-text-${index + 1}`);
  const feedbackArrow = feedbackButtons[index].querySelector('.feedback-arrow');

  function toggleFeedback() {
    feedbackText.classList.toggle('hidden-feedback');
    feedbackArrow.classList.toggle('rotate-arrow');
  }

  feedbackButtons[index].addEventListener('click', toggleFeedback);
});
