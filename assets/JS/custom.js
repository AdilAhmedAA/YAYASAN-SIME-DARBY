// Get the toggler and nav menu elements
const toggler = document.querySelector('.toggler');
const nav = document.querySelector('.nav-menu');

// Add a click event listener to the toggler element
toggler.addEventListener('click', () => {
    // Toggle the active class on the nav menu element
    nav.classList.toggle('active');

    // Toggle the active class on the toggler element
    toggler.classList.toggle('active');
});

//slider
$(document).ready(function () {
    var $slider = $('.slider-wrapper');

    $slider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        loop: false,
        infinite: false,
        draggable: false,
        fade: true,
        speed: 1000
    });
    var $prevArrow = $slider.find('.slick-prev');
    var $nextArrow = $slider.find('.slick-next');
    $prevArrow.hide();
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {


        // If on the first slide, hide the previous arrow
        if (nextSlide <= 0) {
            $prevArrow.hide();
        } else {
            $prevArrow.show();
        }

        // If on the last slide, hide the next arrow
        if (nextSlide === slick.slideCount - 1) {
            $nextArrow.hide();
        } else {
            $nextArrow.show();
        }
    });

});