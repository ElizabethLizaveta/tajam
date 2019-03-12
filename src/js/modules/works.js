const worksLoad = {
  function() {
    const loadBtn = $('.works__button_load');
    const hideBtn = $('.works__button_hide');

    loadBtn.click(() => {
      $.getJSON('portfolio.json', (obj1) => {
        $.getJSON('portfolio2.json', (obj2) => {
          $.each(obj1, (key, val) => {
            $('.works__holder').append(`<div class="works__img-wrap works__img_more"><img class="works__img" src="${val.link}"></div>`);
          });
          $.each(obj2, (key, val) => {
            $('.works__holder').append(`<div class="works__img-wrap works__img_more"><img class="works__img" src="${val.link}"></div>`);
          });
        });
      });
      /* $.when(
        $.getJSON('portfolio.json'),
        $.getJSON('portfolio2.json'),
      ).done((obj1, obj2) => {
        $.each(obj1, (key, val) => {
          $('.works__holder').append(`<div class="works__img-wrap works__img_more">
          <img class="works__img" src="${val.link}"></div>`);
        });
        $.each(obj2, (key, val) => {
          $('.works__holder').append(`<div class="works__img-wrap works__img_more">
          <img class="works__img" src="${val.link}"></div>`);
        });
      }); */
      loadBtn.toggleClass('works__button_hidden');
      hideBtn.toggleClass('works__button_hidden');
    });

    hideBtn.click(() => {
      $('.works__img_more').hide();
      loadBtn.toggleClass('works__button_hidden');
      hideBtn.toggleClass('works__button_hidden');
    });
  },
};

export default worksLoad;
