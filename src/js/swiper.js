// "swiper": "^8.4.5"
import Swiper from 'swiper';
import { Autoplay } from 'swiper';
import '../../node_modules/swiper/swiper.scss';

const swiper = new Swiper('[data-swiper="gallery"]', {  
  modules: [Autoplay],
  loop: true,  
  speed: 2500,
  autoplay: {
    delay: 3500,
  },  
});