export default function () {
  return {
    // Header
    header: document.querySelector('.header'),

    // Hero
    hero: document.querySelector('.hero'),

    // Program
    detailsToggle: document.querySelector('.details-toggle-button'),
    syllabusCard: document.querySelector('.syllabus-card'),
    syllabusRenderCnt: document.querySelector('#syllabus-rendering-container'),

    // Scroll to top:
    // scrollToTopButton: document.querySelector('.back-to-top'),
    // toTopTarget: document.querySelector('.to-top-target'),

    // Feedback
    feedbackItems: document.querySelectorAll('.feedback-item'),
    feedbackButtons: document.querySelectorAll('.feedback-button'),
  };
}
