const navbarMenu = {
  function() {
    const navbarToggle = $('.navbar__toggle');
    const navbarNav = $('.navbar__nav');

    function toggleAnimate() {
      navbarToggle.toggleClass('navbar__toggle_active');
    }

    function navbarShow() {
      navbarNav.toggleClass('navbar__nav_opened');
    }

    navbarToggle.click(() => {
      toggleAnimate();
      navbarShow();
    });
  },
};

export default navbarMenu;
