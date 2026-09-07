
  $(document).ready(function () {
      var navbar = $(".navbar");

      $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
          navbar.addClass("sticky");
        } else {
          navbar.removeClass("sticky");
        }
      });
    });

$(document).ready(function(){
  $('#logos_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1000, // Set a lower value for continuous scrolling
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
});





var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerText = currentYear;