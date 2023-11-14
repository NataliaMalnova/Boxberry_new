import Swiper, { Navigation } from "swiper";

const sliderBasicInit = () => {

    const sliders = document.querySelectorAll('.js--swiper-basic');

    if(sliders.length === 0) return;

    sliders.forEach(slider=> {

        new Swiper('#'+ slider.id + ' .swiper', {
            modules: [Navigation],
            slidesPerView: 2,
            spaceBetween: 8,
            navigation: {
                nextEl: '#'+ slider.id + " .swiper-button-next",
                prevEl: '#'+ slider.id + " .swiper-button-prev",
            },
            breakpoints: {
                675: {
                    slidesPerView: 3,
                },

                1199: {
                    slidesPerView: 4,
                    spaceBetween: 62,
                }
            }
        });
    })
}

const sliderCompareInit = () => {

    const sliders = document.querySelectorAll('.js--swiper-compare');

    if(sliders.length === 0) return;

    sliders.forEach(slider=> {

        new Swiper('#'+ slider.id + ' .swiper', {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '#'+ slider.id + " .swiper-button-next",
                prevEl: '#'+ slider.id + " .swiper-button-prev",
            },
            breakpoints: {
                675: {
                    slidesPerView: 2,
                },

                1199: {
                    slidesPerView: 3,
                }
            }
        });
    })
}

export {
    sliderBasicInit,
    sliderCompareInit
}
