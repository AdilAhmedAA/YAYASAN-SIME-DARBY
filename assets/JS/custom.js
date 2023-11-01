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
    $('.slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        draggable: false,
        fade: true,
        speed: 1000
    });
});