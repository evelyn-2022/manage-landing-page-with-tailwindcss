// Nav Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-container');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  overlay.classList.toggle('hidden');
  body.classList.toggle('overflow-y-hidden');
});

// Testimonials
const controlContainer = document.querySelector('.controls');
const controlBtns = document.querySelectorAll('.control-btn');
const slides = document.querySelectorAll('.slide');
controlContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.control-btn');

  if (!clicked) return;

  const num = clicked.dataset.control;
  controlBtns.forEach(btn => {
    btn.classList.remove('control-active');
  });
  clicked.classList.add('control-active');

  slides.forEach(slide => {
    if (slide.classList.contains(`testi-${num}`)) {
      slide.classList.remove('hidden');
      slide.classList.add('flex');
    } else {
      slide.classList.add('hidden');
      slide.classList.remove('flex');
    }
  });
});
