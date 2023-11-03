import getRefs from '/js/refs';
const { header } = getRefs();

const changeHeaderBackground = () => {
  const { height } = header.getBoundingClientRect();

  if (window.scrollY > height) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
};

window.onscroll = () => changeHeaderBackground();
