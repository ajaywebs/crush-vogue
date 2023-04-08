$(document).ready(function () {
    $(".open-search-bar").click(function () {
      $(".nav-search").addClass("open-fade-search");
    });
    $(".close-button").click(function () {
      $(".nav-search").removeClass("open-fade-search");
    });

  $(document).ready(function () {

    $(".product-slider ").owlCarousel({
      // stagePadding: 50,
      autoplay: true,
      autoplayTimeout:1000,
      autoplayHoverPause: true,
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,

        },
        600: {
          items: 3,

        },
        1000: {
          items: 5,

        },
      },
    });
  });
  $(document).ready(function () {

    $(".owl-slider-first ").owlCarousel({
      stagePadding: 50,
      autoplay: true,
      autoplayTimeout:1000,
      autoplayHoverPause: true,
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,

        },
        600: {
          items: 3,

        },
        1000: {
          items: 5,

        },
      },
    });
  });
  $(document).ready(function () {
    $(".owl-slider-center").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 0,    
      autoplayTimeout: 4000,
      smartSpeed: 400,
      center: true,
      responsive: {
        0: {
          items: 1,

        },
        600: {
          items: 3,

        },
        1000: {
          items: 5,

        },
      },
    });
  });
  
  var btn = $("#backToTop");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
});
$( window ).scroll(function() {

  var height = $(window).scrollTop();

  if(height >= 300) {
    $('.navbar').addClass('fixed-menu');
  } else {
    $('.navbar').removeClass('fixed-menu');
  }
});
// $( ".append" ).append( "This" + height + "is!");
