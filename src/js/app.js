// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import navbarMenu from './modules/navbar';
import swiperSlider from './modules/swiper';
import storyVideo from './modules/video';
import worksLoad from './modules/gallery';
import formValid from './modules/form';

(($) => {
  // When DOM is ready
  $(() => {
    navbarMenu.function();
  });
  swiperSlider.function();
  storyVideo.function();
  worksLoad.function();
  formValid.function();
})(jQuery);
