const changeHeaderBackground = () => {
  const header = document.querySelector('.header');
  const { height } = header.getBoundingClientRect();

  if (window.scrollY > height) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
};

window.onscroll = () => changeHeaderBackground();
