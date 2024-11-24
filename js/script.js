
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  // Toggle the 'bx-x' class to change the icon
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  

};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    // Select all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Listen to the scroll event
window.addEventListener('scroll', () => {
  let top = window.scrollY; // Get the current scroll position

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150; // Offset from the top of the section (150px for padding)
    let height = sec.offsetHeight; // Height of the section
    let id = sec.getAttribute('id'); // Get the section's ID

    // Check if the section is in view
    if (top >= offset && top < offset + height) {
      // Loop through navLinks and remove 'active' class from all
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add 'active' class to the corresponding link
      document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
    }
  });
});

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');  // Toggle the sun icon
  document.body.classList.toggle('dark-mode');  // Toggle the dark mode class on the body
};
ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

