$(document).ready(function () {
  $('.navigation>li>a').click(function (event) {
    event.preventDefault();
    $(this).parent().find('ul').slideToggle();
    $(this).parent().siblings().find('ul').slideUp();
  });

  lightbox.option({
    resizeDuration: 200,
    fadeDuration: 200,
    wrapAround: true
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  function showBtnCondition() {
    if ($(this).scrollTop() > 1000) {
      $("#gotop").fadeIn();
    } else {
      $("#gotop").fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);

  $('.top').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
});