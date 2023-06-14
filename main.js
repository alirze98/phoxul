const header = document.querySelector('.header');
const btnMobileNav = document.querySelector('.header__btn-mobile-nav')

btnMobileNav.addEventListener('click',function(){
  header.classList.toggle('nav-open')
})