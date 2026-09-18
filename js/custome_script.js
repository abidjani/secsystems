
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
$('.actual_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400,

    slidesToShow: 2,
    slidesToScroll: 1,

    centerMode: true,
    centerPadding: '20px',
    prevArrow: $('.slider_prev'),
  nextArrow: $('.slider_next'),
  

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '50px'
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '45px'
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '25px'
            }
        }
    ]
});



