const h1 = document.querySelector('h1');

function spanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}

h1.innerHTML = spanWrap(h1.textContent);
