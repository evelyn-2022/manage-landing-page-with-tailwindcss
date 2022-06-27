const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-container');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
});
