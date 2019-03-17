const Swiper = require('swiper');

const swiperSlider = {
  function() {
    function aboutSliderInit() {
      const swiper = new Swiper('.about__swiper-container', {
        navigation: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    function testimonialsSliderInit() {
      const galleryThumbs = new Swiper('.testimonials__gallery-thumbs', {
        spaceBetween: 0,
        slidesPerView: 5,
        loop: true,
        freeMode: true,
        loopedSlides: 4,
        centeredSlides: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.testimonials__button-next',
          prevEl: '.testimonials__button-prev',
        },
        breakpoints: {
          767: {
            slidesPerView: 3,
          },
        },
      });

      const galleryTop = new Swiper('.testimonials__gallery-top', {
        spaceBetween: 0,
        loop: true,
        loopedSlides: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });

      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
    }

    function sliderInit() {
      aboutSliderInit();
      testimonialsSliderInit();
    }

    return {
      publicMethod: sliderInit(),
    };
  },
};

export default swiperSlider;
