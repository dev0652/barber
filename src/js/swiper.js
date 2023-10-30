import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const mySwiper = new Swiper('.swiper', {
  modules: [Autoplay],
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 2000,
  centeredSlides: true,
  breakpointsBase: 'container',
  breakpoints: {
    360: {
      slidesPerView: 1.2,
      spaceBetween: 7,
    },

    834: {
      slidesPerView: 1.5,
      spaceBetween: 18,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});
