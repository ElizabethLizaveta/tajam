const storyVideo = {
  function() {
    const playBtn = $('.story-video__button_play');
    const stopBtn = $('.story-video__button_stop');
    const video = $('.story-video__media').get(0);

    function videoPlay() {
      playBtn.click(() => {
        playBtn.toggleClass('story-video__button_hide');
        stopBtn.toggleClass('story-video__button_hide');
        video.play();
        video.style.opacity = 1;
      });
    }

    function videoStop() {
      stopBtn.click(() => {
        stopBtn.toggleClass('story-video__button_hide');
        playBtn.toggleClass('story-video__button_hide');
        video.pause();
        video.style.opacity = 0;
      });
    }

    function videoSwitcher() {
      videoPlay();
      videoStop();
    }

    videoSwitcher();
  },
};

export default storyVideo;
