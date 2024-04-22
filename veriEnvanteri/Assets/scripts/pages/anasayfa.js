//FAVORILERIM SLIDER
setTimeout(() => {
  $(document).ready(function () {
    $(".slider").slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: "<button>&#10095;</button>",
      prevArrow: "<button>&#10094;</button>",
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
    });
  });
}, 250)
