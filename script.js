const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  menuToggle.textContent = isOpen ? '✕' : '☰';
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.textContent = '☰';
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, idx) => {
  el.style.transitionDelay = `${Math.min(idx * 60, 320)}ms`;
  observer.observe(el);
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been received. We will contact you soon.');
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
