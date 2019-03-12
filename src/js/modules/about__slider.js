const Swiper = require('swiper');

const aboutSlider = {
  function() {
    const swiper = new Swiper('.about__swiper-container', {
      navigation: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
};

export default aboutSlider;
