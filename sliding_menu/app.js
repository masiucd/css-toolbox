const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
