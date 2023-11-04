import getRefs from './refs';
const { header, hero } = getRefs();

const setHeroTopPadding = () => {
  const { height } = header.getBoundingClientRect();
  const headerHeight = `${height}px`;

  hero.style.paddingTop = headerHeight;
};

document.addEventListener('DOMContentLoaded', () => {
  setHeroTopPadding();
});

window.addEventListener('resize', () => {
  setHeroTopPadding();
});
