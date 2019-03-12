// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import navbarMenu from './modules/navbar';
import aboutSlider from './modules/about__slider';
import storyVideo from './modules/story-video';
import worksLoad from './modules/works';
import testimonialsSlider from './modules/testimonials__slider';
import formValid from './modules/contact__form';

(($) => {
  // When DOM is ready
  $(() => {
    navbarMenu.function();
  });
  aboutSlider.function();
  storyVideo.function();
  worksLoad.function();
  testimonialsSlider.function();
  formValid.function();
})(jQuery);
