// "swiper": "^8.4.5"
import Swiper, { Autoplay, Pagination, Keyboard } from 'swiper';
import '../../node_modules/swiper/swiper.scss';

const swiper = new Swiper('[data-swiper="gallery"]', {  
  modules: [Autoplay],
  loop: true,  
  speed: 2500,
  autoplay: {
    delay: 3500,
  },  
});

const swiperReviews = new Swiper('[data-swiper="customer-reviews"]', {  
  modules: [Pagination, Keyboard],  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },

  loop: true,  
  speed: 2500,
  spaceBetween: 30,
});