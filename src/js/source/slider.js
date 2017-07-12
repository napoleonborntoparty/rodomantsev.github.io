    var main_block_swiper = new Swiper('.main-block .swiper-container', {
        pagination: ' .main-block  .swiper-pagination',
        nextButton: '.main-block  .swiper-button-next',
        prevButton: '.main-block  .swiper-button-prev',
        paginationClickable: true
    });
    var product_line_swiper = new Swiper('.product-line-1 .swiper-container', {
        slidesPerView: 4,
        loop: true,
        nextButton: '.product-line-1 .swiper-button-next',
        prevButton: '.product-line-1 .swiper-button-prev',
        autoplay: 4000,
        // onlyExternal: true,
        paginationClickable: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }
        },
        spaceBetween: 30
    });

    var product_line_swiper_1 = new Swiper('#tab-1 .swiper-container', {
        slidesPerView: 4,
        loop: true,
        autoplay: 4000,
        nextButton: '#tab-1 .swiper-button-next',
        prevButton: '#tab-1 .swiper-button-prev',

        // onlyExternal: true,
        lazyLoading: true,
        paginationClickable: true,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }

        }
    });

    var product_line_swiper_2 = new Swiper('#tab-2 .swiper-container', {
        slidesPerView: 4,
        loop: true,
        autoplay: 4000,
        nextButton: '#tab-2 .swiper-button-next',
        prevButton: '#tab-2 .swiper-button-prev',

        // onlyExternal: true,
        paginationClickable: true,
        lazyLoading: true,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }
        }
    });

    var product_line_swiper_3 = new Swiper('#tab-3 .swiper-container', {
        slidesPerView: 4,
        loop: true,
        autoplay: 4000,
        lazyLoading: true,
        nextButton: '#tab-3 .swiper-button-next',
        prevButton: '#tab-3 .swiper-button-prev',
        // onlyExternal: true,
        paginationClickable: true,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }
        }
    });

    var popular_line_swiper = new Swiper('.popular .swiper-container', {
        slidesPerView: 4,
        loop: true,
        autoplay: 4000,
        lazyLoading: true,
        nextButton: '.popular .swiper-button-next',
        prevButton: '.popular .swiper-button-prev',
        // onlyExternal: true,
        paginationClickable: true,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }
        }
    });
    var news_line_swiper = new Swiper('.news .swiper-container', {
        slidesPerView: 4,
        loop: true,
        autoplay: 4000,
        lazyLoading: true,
        nextButton: '.news .swiper-button-next',
        prevButton: '.news .swiper-button-prev',
        // onlyExternal: true,
        paginationClickable: true,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }
        }
    });

    var sale_line_swiper = new Swiper('.sale .swiper-container', {
        slidesPerView: 4,
        loop: true,
        autoplay: 4000,
        lazyLoading: true,
        nextButton: '.sale .swiper-button-next',
        prevButton: '.sale .swiper-button-prev',
        // onlyExternal: true,
        paginationClickable: true,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }
        }
    });

    var our_clients_swiper = new Swiper('.our_clients .swiper-container', {
        slidesPerView: 5,
        loop: true,
        autoplay: 4000,
        nextButton: '.our_clients .swiper-button-next',
        prevButton: '.our_clients .swiper-button-prev',
        // onlyExternal: true,
        paginationClickable: true,
        spaceBetween: 30,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },

            // 1920: {
            //     slidesPerView: 5
            // }
        }
    });
    var our_brends_swiper = new Swiper('.our_brends .swiper-container', {
        slidesPerView: 5,
        loop: true,
        autoplay: 4000,
        nextButton: '.our_brends .swiper-button-next',
        prevButton: '.our_brends .swiper-button-prev',
        // onlyExternal: true,
        paginationClickable: true,
        spaceBetween: 30,
        spaceBetween: 30,
                breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            900: {
                slidesPerView:2
            },
            1100: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            }

            // 1920: {
            //     slidesPerView: 5
            // }
        }
    });
