// Tot top button
window.onscroll = function() {
  scrollFunction();
  stickyFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.querySelector(".scrollToTop").style.display = "block";
  } else {
    document.querySelector(".scrollToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.querySelector(".scrollToTop").addEventListener('click', topFunction);

// sticky menu

//header__top

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {
// };

// Get the navbar
var navbar = document.querySelector(".header__top");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// slick

$(document).ready(function(){
  $('.slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       // dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }]
});
});
