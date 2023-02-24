import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const mainSlider = new Swiper('.main-slider', {
   loop: true,
   clickable: true,
   speed: 500,

   pagination: {
      el: '.main-slider-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.main-arrow-next',
      prevEl: '.main-arrow-prev',
   },

});