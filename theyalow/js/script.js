(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('button_to_up-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('button_to_up-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -60);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.button_to_up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();


$('.header-container__block-slider').slick({
  dots: false,
  infinite: true,
  speed: 450,
  // centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
      {
        breakpoint: 970,
        settings: {
          arrows: false,
        }
      },
  ]
});