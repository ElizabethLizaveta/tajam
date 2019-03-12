const Swiper = require('swiper');

const testimonialsSlider = {
  function() {
    const swiper2 = new Swiper('.swiper-container_2', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 10,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next_2',
        prevEl: '.swiper-button-prev_2',
      },
      breakpoints: {
        767: {
          slidesPerView: 3,
        },
      },
    });
  },
};

export default testimonialsSlider;
