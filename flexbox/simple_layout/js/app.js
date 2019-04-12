const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const h1 = document.querySelector('h1');

function open() {
  navList.classList.toggle('open');
}
function spanWrap(word) {
  return [...word].map(x => `<span>${x} </span>`).join('');
}

h1.innerHTML = spanWrap(h1.textContent);

hamburger.addEventListener('click', open);
