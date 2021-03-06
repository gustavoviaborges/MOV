window.addEventListener('scroll', onScroll)



onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add("show")
    } else {
      backToTopButton.classList.remove("show")
    }

}

function openMenu() {
  document.body.classList.add('menu-expanded')

}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: "30px",
  duration: 700


}).reveal(`
#home,
#home img,
#home .stats,
#benefits,
#benefits header,
#benefits .card
#about,
#about header,
#about .content,
#testimonials,
#contact,
#footer
`);

/* Testimonial Slider */ 

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: 'swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }


});