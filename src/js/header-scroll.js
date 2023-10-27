window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('.header');
  const { height } = header.getBoundingClientRect();

  window.onscroll = () => {
    if (window.scrollY > height) {
      header.classList.add('no-transparency');
    } else {
      header.classList.remove('no-transparency');
    }
  };
}
