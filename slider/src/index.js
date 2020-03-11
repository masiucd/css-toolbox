const track = document.querySelector('.volume-slider');
const volumeValue = document.querySelector('.volume-value');

const chageTo = color => (track.style.background = color);

track.addEventListener('input', () => {
  const { value } = track;
  if (value < 50) chageTo('#2CFF7d');
  else if (value >= 50 && value < 65) chageTo('#C6FF2C');
  else if (value >= 65 && value < 80) chageTo('#FFAE2c');
  else chageTo('#FF2c2c');
  volumeValue.innerText = value;
  volumeValue.opacity = 1;
  track.style.boxShadow = '0 3px 4px rgba(255,255,255,0.9)';
});

track.addEventListener('change', () => {
  setTimeout(() => {
    volumeValue.opacity = 0;
    track.style.boxShadow = '0 3px 4px rgba(255,255,255,0.1)';
  }, 1000);
});
