import Swiper, { Navigation, Thumbs, Grid } from 'swiper';
import * as header from '../components/_header/header.js'
import changeBurger from '../components/burger/burger.js'
import * as catalog from "../components/app-catalog/catalog.js";
import showModal from "../components/app-overlay/overlay.js";
import changeStars from "../components/app-stars/star.js";
import * as form from '../components/app-form/form.js'
import scrolling from './components/scroll.js'
import changeFixedTop from '../components/app-fixed/fixed.js'

window.addEventListener('load', () => {
    header.changeDatalist();
    changeBurger();
    catalog.openCatalogMenu();
    catalog.openCatalogSubMenu();
    catalog.openCatalogSecondMenu();
    showModal();
    changeStars();
    form.upload();
    scrolling();
    changeFixedTop();

    let galleryThumbs = new Swiper(".preview-swiper-small", {
        direction: "vertical",
        slidesPerView: 4,
        modules: [Navigation],
        spaceBetween: 8,
        navigation: {
            nextEl: '.slider-preview__navigation .swiper-button-next',
            prevEl: '.slider-preview__navigation .swiper-button-prev',
        },
    });

    new Swiper(".preview-swiper", {
        slidesPerView: 1,
        modules: [Navigation, Thumbs],
        spaceBetween: 8,
        navigation: {
            nextEl: '.slider-preview__navigation .swiper-button-next',
            prevEl: '.slider-preview__navigation .swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 1,
            }
        }
    });

   let swipetReviews = new Swiper(".slider-reviews .slider-reviews_images", {
        slidesPerView: 1
    });

   const reviewsSlider = document.querySelectorAll('.slider-reviews-preview');

   if(reviewsSlider.length !=0) {
       reviewsSlider.forEach(elems => {
           const photos = elems.querySelectorAll('.slider-reviews_image');
           if(photos.length == 0) return;
           photos.forEach((photo, index) => {
               photo.addEventListener('click', () => {
                   swipetReviews.slideTo(index);
                   photos.forEach((elem, index) => {
                       elem.classList.remove('active');
                   })
                   photo.classList.add('active');
               })
           })
       })
   }

    new Swiper(".similar-sliders .similar-slider", {
        slidesPerView: 1,
        modules: [Navigation],
        spaceBetween: 8,
        navigation: {
            nextEl: '.similar-sliders .swiper-button-next',
            prevEl: '.similar-sliders .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            }
        }
    });
    new Swiper(".buy-sliders .buy-slider", {
        slidesPerView: 1,
        modules: [Navigation],
        spaceBetween: 8,
        navigation: {
            nextEl: '.buy-sliders .swiper-button-next',
            prevEl: '.buy-sliders .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            }
        }
    });
    new Swiper(".top-sliders .top-slider", {
        slidesPerView: 1,
        modules: [Navigation],
        spaceBetween: 8,
        navigation: {
            nextEl: '.top-sliders .swiper-button-next',
            prevEl: '.top-sliders .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });
    new Swiper(".product-sliders .product-slider", {
        slidesPerView: 1,
        modules: [Navigation],
        spaceBetween: 8,
        navigation: {
            nextEl: '.product-sliders .swiper-button-next',
            prevEl: '.product-sliders .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });

    new Swiper(".popular-sliders .popular-slider", {
        slidesPerView: 1,
        modules: [Navigation],
        spaceBetween: 8,
        navigation: {
            nextEl: '.popular-sliders .swiper-button-next',
            prevEl: '.popular-sliders .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });


    let brand_sliders = new Swiper(".brand-sliders .brand-slider", {

        modules: [Navigation, Grid],
        spaceBetween: 8,
        slidesPerView: 2,
        grid: {
            rows: 2,
        },
        navigation: {
            nextEl: '.brand-sliders .swiper-button-next',
            prevEl: '.brand-sliders .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
            }
        }
    });

    const brandSliderUpdate = () => {
        const slier = document.querySelector('.brand-slider');
        if(!slier) return;

        const elements = slier.querySelectorAll('.swiper-slide');
        if(!elements) return;

        let maxHeight = 0;

        elements.forEach(el => {
            if(maxHeight < el.clientHeight) maxHeight = el.clientHeight;
        });

        elements.forEach(el => {
            el.style.height = maxHeight + 'px';
        });

        slier.style.height = maxHeight * 2 + 30 + 'px';
        brand_sliders.update();
    }
    brandSliderUpdate();
});