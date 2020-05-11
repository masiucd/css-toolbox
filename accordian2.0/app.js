const accordianTrigger = document.querySelector('.accordianTrigger');
const accordian = document.querySelector('.accordian');

accordianTrigger.addEventListener('click', () => {
  accordian.classList.toggle('open');
});
