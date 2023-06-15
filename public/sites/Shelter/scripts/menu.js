//add click sub menu
let navIcon = document.querySelector('.nav-icon');
let navUl = document.querySelector('.navigation ul');
let nav = document.querySelector('.navigation');
let openP = document.querySelector('.openP');
let wind = document.querySelector('html');

nav.addEventListener('click', () => {
  navIcon.classList.toggle('open');
  navUl.style.right = navUl.style.right === "" || navUl.style.right === "-100%" ? "0px" : "-100%";
  nav.classList.toggle('openP');
  wind.style.overflowY = wind.style.overflowY === "" ? "hidden" : "";
  console.log(wind.style.overflowY)
})

