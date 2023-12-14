const swiper = new Swiper('.swiperswiper-wrapper', {
    // Default parameters
    slidesPerView: 9,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1008:{
        slidesPerView: 8,
        spaceBetween: 50
      },
      
    }
  });