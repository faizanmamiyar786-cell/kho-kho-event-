const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('registration-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  const existing = JSON.parse(localStorage.getItem('khoKhoEnquiries') || '[]');
  existing.push({ ...data, submittedAt: new Date().toISOString() });
  localStorage.setItem('khoKhoEnquiries', JSON.stringify(existing));

  message.textContent = 'Thank you! Your team enquiry has been saved in this browser demo.';
  form.reset();
});
