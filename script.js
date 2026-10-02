const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const checkIn = document.querySelector('#check-in');
const checkOut = document.querySelector('#check-out');
const today = new Date().toISOString().split('T')[0];
checkIn.min = today;
checkOut.min = today;

checkIn.addEventListener('change', () => {
  checkOut.min = checkIn.value || today;
  if (checkOut.value && checkOut.value < checkIn.value) checkOut.value = '';
});

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('.form-message');
  message.textContent = 'Thank you — we’ll show you the best rooms for your dates shortly.';
});
