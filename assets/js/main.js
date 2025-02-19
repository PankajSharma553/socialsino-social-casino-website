const navbar = document.querySelector(".header_list");
const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close_menu");

humburger.addEventListener("click", function () {
    navbar.classList.add("active");
});
close.addEventListener("click", function () {
    navbar.classList.remove("active");
});

// scrollbar header section
window.addEventListener("scroll", function () {
    const scrollHeader = document.querySelector(".header");

    if (window.scrollY > 50) {
        scrollHeader.classList.add("scrolled");
    } else {
        scrollHeader.classList.remove("scrolled");
    }
});



// slick slider code
$('.perfectSlide').slick({
    centerMode: true,
    // centerPadding: '160px',
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 100,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       arrows: true,
    //       centerMode: true,
    //       centerPadding: '130px',
    //       slidesToShow: 4
    //     }
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       arrows: true,
    //       centerMode: true,
    //       centerPadding: '110px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: true,
    //       centerMode: true,
    //       centerPadding: '60px',
    //       slidesToShow: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: true,
    //       centerMode: true,
    //       centerPadding: '10px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]

});

$('.perfectSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    speed: 500,
    autoplaySpeed: 1000,
});