document.getElementById('about-more-btn').addEventListener('click', () => {
  document.getElementById('about-main-div').style.display = 'none'
  document.getElementById('about-sub-div').style.display = 'flex'
})

const button = document.getElementById('more-button')
button.addEventListener('click', () => {
  document.getElementsByClassName('hidden-img-div')[0].style.display = 'flex'
  button.style.display = 'none'
})

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  grabCursor: true,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar')
  var scrolled = window.scrollY > 0
  navbar.classList.toggle('scrolled', scrolled)
})

const menuHamburger = document.querySelector('.menu-hamburger')
const navLinks = document.querySelector('.nav-links')

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu')
})
