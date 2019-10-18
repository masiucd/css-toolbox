const slide = document.querySelector('.slide');
const sideMenu = document.querySelector('.side-menu');
const content = document.querySelector('.side-menu');
const close = document.querySelector('.close');
const hamburger = document.getElementById('hamburger');
const h1 = document.querySelector('h1');

slide.addEventListener('click', () => {
  sideMenu.style.width = '250px';
  slide.style.marginLeft = '250px';
  hamburger.style.display = 'none';
  h1.style.backgroundPosition = '-100%';
});

close.addEventListener('click', () => {
  sideMenu.style.width = '0px';
  slide.style.marginLeft = '0px';
  hamburger.style.display = 'block';
  h1.style.backgroundPosition = '0';
});
