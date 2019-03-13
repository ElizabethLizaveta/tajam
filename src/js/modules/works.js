const worksLoad = {
  function() {
    const loadBtn = $('.works__button_load');

    function galleryLoad(fileUrl) {
      $.ajax({
        url: fileUrl,
        context: document.body,
      }).done((obj) => {
        $.each(obj, (key, val) => {
          $('.works__holder').append(`<div class="works__img-wrap works__img_more"><img class="works__img" src="${val.link}"></div>`);
        });
      });
    }

    loadBtn.click(() => {
      galleryLoad('portfolio.json');
      galleryLoad('portfolio2.json');
      loadBtn.toggleClass('works__button_hidden');
    });
  },
};

export default worksLoad;
