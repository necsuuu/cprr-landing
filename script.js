// =============================================
// MENÚ HAMBURGUESA
// =============================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Abrir / cerrar menú al hacer clic en el botón hamburguesa
navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace del menú
const navLinks = navMenu.querySelectorAll('.navbar__link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// =============================================
// NAVBAR CON FONDO AL HACER SCROLL
// =============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});

// =============================================
// ANIMACIONES AL HACER SCROLL
// =============================================
const fadeElements = document.querySelectorAll('.fade-in');

// Función que verifica si un elemento está visible en pantalla
function checkVisibility() {
  const windowHeight = window.innerHeight;
  const triggerPoint = windowHeight * 0.85;

  fadeElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.classList.add('visible');
    }
  });
}

// Verificar al cargar la página y al hacer scroll
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// =============================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// =============================================
navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// Smooth scroll para el logo
const logoLink = document.querySelector('.navbar__logo');

logoLink.addEventListener('click', function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
