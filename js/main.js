const hamburger = document.querySelector('.hamburger');
const navbarNav = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.navbar-nav li');

hamburger.addEventListener('click', () =>{
  navbarNav.classList.toggle('open');
})
