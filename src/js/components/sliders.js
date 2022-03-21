import Swiper from 'swiper';

const headerAcc = new Swiper('.header__acc-slider', {
  slidesPerView: 4.7,
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 60,
  },

  speed: 200,

  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 7,
      spaceBetween: 20
    },
    // when window width is >= 480px
    766: {
      slidesPerView: 10,
      spaceBetween: 29
    },
    // when window width is >= 640px
    1300: {
      slidesPerView: 14,
      spaceBetween: 50,
    }
  }
});
