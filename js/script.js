
(function ($) {
  'use strict';

  // ----------------------------
  // AOS
  // ----------------------------
  // people who ask the OS to reduce motion get no scroll animations, auto-advancing sliders or animated scrolling
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  AOS.init({
    once: true,
    disable: reduceMotion
  });

  // $(window).on('load', function () {

  //   $('.preloader').fadeOut('slow');
    
  // })
  $('.preloader').delay(2000).fadeOut('slow');

  $(window).on('scroll', function () {
    //.Scroll to top show/hide
    var scrollToTop = $('.scroll-top-to'),
      scroll = $(window).scrollTop();
    if (scroll >= 200) {
      scrollToTop.fadeIn(200);
    } else {
      scrollToTop.fadeOut(100);
    }
  });
  // scroll-to-top
  $('.scroll-top-to').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, reduceMotion ? 0 : 500);
    return false;
  });
  $('.scroll-top-to').on('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).trigger('click');
    }
  });

  $(document).ready(function () {

    // navbarDropdown
    if ($(window).width() < 992) {
      $('.main-nav .dropdown-toggle').on('click', function () {
        $(this).siblings('.dropdown-menu').animate({
          height: 'toggle'
        }, 300);
      });
    }

    // -----------------------------
    //  Testimonial Slider
    // -----------------------------
    $('.testimonial-slider').slick({
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      autoplay: !reduceMotion,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    // -----------------------------
    //  Story Slider
    // -----------------------------
    $('.about-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: !reduceMotion,
      autoplaySpeed: 2000,
      dots: true
    });


    // -----------------------------
    //  Quote Slider
    // -----------------------------
    $('.quote-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: !reduceMotion,
      autoplaySpeed: 2000,
      dots: true
    });


    // -----------------------------
    //  Client Slider
    // -----------------------------
    $('.client-slider').slick({
      slidesToShow: 4,
      infinite: true,
      arrows: false,
      // autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
    });

  });

})(jQuery);