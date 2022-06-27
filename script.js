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
