const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active')
}
// slider used in review section  swiperJS
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidePerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// scroll reveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
})
sr.reveal('header', { delay: 300, origin: 'top' });
sr.reveal('.home,.home-food', { delay: 300, origin: 'left' });
sr.reveal('.breakfast', { delay: 300, origin: 'bottom' });
sr.reveal('.review', { delay: 300, origin: 'left' });
sr.reveal('.menu', { delay: 300, origin: 'left' });
sr.reveal('.order', { delay: 300, origin: 'left' });
sr.reveal('.main-text', { delay: 300, origin: 'left' });
sr.reveal('.about,.menu,.contact ', { delay: 300, origin: 'bottom' });
sr.reveal('.container-box ', { delay: 300, origin: 'right' });
sr.reveal('.about-img ', { delay: 300, origin: 'left' });
sr.reveal('.about-text ', { delay: 300, origin: 'right' });
sr.reveal('.menu-content ', { delay: 300, origin: 'bottom' });
sr.reveal('.main-contact ', { delay: 300, origin: 'top' });
sr.reveal('.last-text ', { delay: 300, origin: 'bottom' });
