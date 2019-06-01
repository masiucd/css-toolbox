const jump = document.querySelector('.jump');

jump.innerHTML = jumping(jump.textContent);

function jumping(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}
