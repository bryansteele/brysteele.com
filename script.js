// TOGGLE NAVBAR ICON
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

// SCROLL SECTION ACTIVE LINK
let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offet + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // STICKY NAVBAR
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // REMOVE TOGGLE ICON AND NAVBAR
  menuIcon.classList.remover('fa-xmark');
  navbar.classList.remove('active');
};

// SCROLL REVEAL
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .experience-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .thank-you-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .thank-you-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['Linux <i class="fa-brands fa-linux"></i>', 'Programming <i class="fa-brands fa-python"></i> <i class="fa-solid fa-code-branch"></i> <i class="fa-brands fa-js"></i>', 'Cybersecurity <i class="fa-solid fa-shield-halved"></i>'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
