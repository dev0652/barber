const setHeroTopPadding = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');

  const { height } = header.getBoundingClientRect();
  const headerHeight = `${height}px`;

  hero.style.paddingTop = headerHeight;
};

window.onload = () => setHeroTopPadding();
window.onresize = () => setHeroTopPadding();
