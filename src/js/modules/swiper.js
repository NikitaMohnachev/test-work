import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperMobile () {

    const swiper = new Swiper('.swiper', {
        // loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 16,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};

export default swiperMobile;