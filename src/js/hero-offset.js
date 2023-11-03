import getRefs from '/js/refs';
const { header, hero } = getRefs();

const setHeroTopPadding = () => {
  const { height } = header.getBoundingClientRect();
  const headerHeight = `${height}px`;

  hero.style.paddingTop = headerHeight;
};

window.onload = () => setHeroTopPadding();
window.onresize = () => setHeroTopPadding();
