var swiper = new Swiper(".mySwiper.category", {
    slidesPerView: 1,
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    spaceBetween: 10,
    slideToClickedSlide: true,
    initialSlide: 1,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1400: {
            slidesPerView: 2.38,
            initialSlide: 1.7,
            spaceBetween: 30,

        },
        768: {
            slidesPerView: 2,
            initialSlide: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1.5,
            initialSlide: 1,
        },
        320: {
            slidesPerView: 1
        }
    }
});


/********************************/
/*  Text Slider Js      */
/********************************/
let SwiperText = new Swiper('.swiper-container.swiper--text', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 30000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,

});


/********************************/
/*  halfContainer Js      */
/********************************/
var swiper = new Swiper(".mySwiper.halfContainer", {
    slidesPerView: 1.1,
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 6500,
    },
    spaceBetween: 70,
    centeredSlides: false,
    breakpoints: {
        1280: {
            slidesPerView: 1.2
        },
        1100: {
            slidesPerView: 1.1
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 50,
        },
        640: {
            slidesPerView: 1.1
        }
    }
});
/********************************/
/*  gratefulWorkWith Js      */
/********************************/
let SwiperTop = new Swiper('.swiper-container.swiper--top', {
    spaceBetween: 10,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 2,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        1024: {
            slidesPerView: 6
        },
        768: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 3
        }
    }
});
let SwiperMiddle = new Swiper('.swiper-container.swiper--middle', {
    spaceBetween: 10,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        reverseDirection: true
    },
    loop: true,
    slidesPerView: 2,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        1024: {
            slidesPerView: 6
        },
        768: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 3
        }
    }
});

let SwiperBottom = new Swiper('.swiper-container.swiper--botttom', {
    spaceBetween: 10,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 2,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        1024: {
            slidesPerView: 6
        },
        768: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 3
        }
    }
});