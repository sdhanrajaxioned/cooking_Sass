var hamburgerMenu = document.querySelector('.hamburger');
var navBar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  navBar.classList.toggle('active');
  document.body.classList.add('hidden');
});