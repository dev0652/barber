// !!! This code chunk is currently NOT being imported due to an iOS issue (paddingTop is hardcoded)

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
