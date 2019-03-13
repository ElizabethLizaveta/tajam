const Swiper = require('swiper');

const swiperSlider = {
  function() {
    const swiper = new Swiper('.about__swiper-container', {
      navigation: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

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

export default swiperSlider;
