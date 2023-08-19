var siteScript = {
    init: function () {
        this.stickyHeader();
        this.subnav();
        this.homeSlider();
        this.featuredSlider();
        this.ftSlider();
        this.successSlider();
        this.propositionSlider();
        this.worldclassSlider();
        this.threeSlider();
        this.mapSlider();
        this.eventSlider();
        this.eventArtLargeSlider();
        this.whySlider();
        this.helpSlider();
        this.techSlider();
        this.sectorsSlider();
        this.tabMenu();
        this.careerslide();
        // this.gallerySlider();
        if ($.fn.select2) {
            this.select();
        }
        this.customSelect();
        // this.wizard();
        this.wizardSetting();
        this.eqHeight();
        this.resize();
        this.tab();
        this.slickslider();
    },

    stickyHeader: function () {
        var spotH = $('#home-slider').outerHeight();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('header').addClass("sticky");
                $('body').addClass("sticky-sub");
            } else {
                $('header').removeClass("sticky");
                $('body').removeClass("sticky-sub");
            }
        });

        var position = $(window).scrollTop();

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
                $('header').addClass("up");
                $('body').addClass("menu-up");
            } else {
                $('header').removeClass("up");
                $('body').removeClass("menu-up");
            }
            position = scroll;
        });
    },



    slickslider: function() {
        $('.slider-items-inner').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
        });



        $('.slider-items').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            swipe: false,
            infinite: false,
            asNavFor: '.slider-menu',

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        swipe: true,
                    }
                }
            ]
        });



        $('.slider-menu').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-items',
            dots: false,
            arrows: false,
            centerMode: false,
            infinite: false,
            swipe: false,
            focusOnSelect: true,



            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                    }
                },



                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2
                    }
                },



                {
                    breakpoint: 490,
                    settings: {
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]



        });



        $('.slider-items-2').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            swipe: false,
            infinite: false,
            asNavFor: '.slider-menu-2',

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        swipe: true,
                    }
                }
            ]
        });



        $('.slider-menu-2').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-items-2',
            dots: false,
            arrows: false,
            centerMode: false,
            infinite: false,
            swipe: false,
            focusOnSelect: true,



            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                    }
                },



                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2
                    }
                },



                {
                    breakpoint: 490,
                    settings: {
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]

        });


//         $(".about-member").each(function() {
//             $(this).slick({
//                 rtl: ($('html').attr('dir') == 'rtl') ? true : false,
//                 slidesToShow: 1,
//                 infinite: true,
//                 arrows: true,
// // dots: true,
// //dots: ($('.about-member li').length > 1) ? true : false,
//                 dots: true,
//                 centerMode: true,
//                 centerPadding: '0',
//                 slidesToShow: 1,
//                 focusOnSelect: true,
//
//                 responsive: [{
//                     breakpoint: 768,
//                     settings: {
//                         arrows: true,
//                         infinite: false,
//                         centerMode: false,
//                     }
//                 }
//                 ]
//             });
//         });

        $('.about-member').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '0',
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    infinite: false,
                    centerMode: false,
                }

            }]
        });

    },

	subnav: function() {
		// setTimeout(function(){
		// 	$('#mobile-chat-container').wrap( "<div id='mobile-chat-container-wrapper' class='mobile-chat-container-wrapper'></div>" );
		// }, 1000);

        // setTimeout(function(){

		// 	dragElement(document.getElementById("mobile-chat-container-wrapper"));

		// 	function dragElement(elmnt) {
		// 		var pos1 = 0,
		// 			pos2 = 0,
		// 			pos3 = 0,
		// 			pos4 = 0;
		// 		if (document.getElementById(elmnt.id + "header")) {
		// 			/* if present, the header is where you move the DIV from:*/
		// 			document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
		// 		} else {
		// 			/* otherwise, move the DIV from anywhere inside the DIV:*/
		// 			elmnt.onmousedown = dragMouseDown;
		// 		}

		// 		function dragMouseDown(e) {
		// 			e = e || window.event;
		// 			e.preventDefault();
		// 			// get the mouse cursor position at startup:
		// 			pos3 = e.clientX;
		// 			pos4 = e.clientY;
		// 			document.onmouseup = closeDragElement;
		// 			// call a function whenever the cursor moves:
		// 			document.onmousemove = elementDrag;
		// 		}

		// 		function elementDrag(e) {
		// 			e = e || window.event;
		// 			e.preventDefault();
		// 			// calculate the new cursor position:
		// 			pos1 = pos3 - e.clientX;
		// 			pos2 = pos4 - e.clientY;
		// 			pos3 = e.clientX;
		// 			pos4 = e.clientY;
		// 			// set the element's new position:
		// 			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		// 			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		// 		}

		// 		function closeDragElement() {
		// 			/* stop moving when mouse button is released:*/
		// 			document.onmouseup = null;
		// 			document.onmousemove = null;
		// 		}
		// 	}
		// }, 1500);

        // $('.langDrop').on('click', function () {
        //     setTimeout(function () {
        //         $('body').find('#joe-menu-dropdown.Slsh-list-items ul li').trigger('click');
        //     }, 1000);
        // });
        //
        // $(document).ready(function () {
        //     setTimeout(function () {
        //         $('body').find('#joe-menu-dropdown.Slsh-list-items ul li').trigger('click');
        //     }, 1000);
        // });

		// $('.aside-title .navbar-toggler').click(function(){
		// 	$('body').stop().toggleClass('aside-on');
		// });
		// $( '#dl-menu' ).dlmenu();

        $('button.dl-trigger').click(function () {
            $('body').stop().toggleClass('menu-on');
            // $('.dl-menuInner').stop().slideToggle();
        });
        $('.dl-menu ul').each(function () {
            $(this).parent('li').find('> a').append("<button class='icon-down'></button");
        });
        $('.dl-menuwrapper .dl-menu .icon-down').click(function (e) {
            $(this).stop().toggleClass('menu-close');
            $(this).parent('a').next('ul').stop().slideToggle('slow');
            e.preventDefault();
        });

        $(".single-nav a").click(function (e) {
            var headerH1 = $('.page-header').outerHeight();
            var navH1 = $('.single-navWrapper').outerHeight();
            var navHF = headerH1 + navH1;
            var target = $(this).attr('href');
            setTimeout(function () {
            }, 500);
            $('html, body').animate({
                scrollTop: ($(target).offset().top - navHF)
            }, '100');

            e.preventDefault();
        });

        $('.contrast').on('click', function () {
            $('body').stop().toggleClass('highcontrast');
        });

        // new SimpleBar($('.page-header .dropdown-menu')[0]);

		// $(".single-nav a").one("click", function(e) {
		// 	var headerH1 = $('.page-header').outerHeight();
		// 	var navH1 = $('.single-navWrapper').outerHeight();
		// 	var navHF = headerH1+navH1;
		// 	var target = $(this).attr('href');
		// 	setTimeout(function(){
		// 	}, 500);
		// 	$('html, body').animate({
		// 		scrollTop: ($(target).offset().top - 300)
		// 	}, '100');

		// 	e.preventDefault();
		// });

		// $('body').scrollspy({
		// 	target: "#single-navbar",
		// 	offset: 300
		// })
	},

    homeSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlH = $('.home-slider');
            owlH.owlCarousel({
                items: 1,
                autoplay: true,
                autoHeight: true,
                nav: true,
                lazyLoad:true,
                loop: true,
                dots: false,
                mouseDrag: false,
                touchDrag: false,
                autoplaySpeed: 3000,
                autoplayTimeout: 8000,
                navSpeed: 3000,
                dotsSpeed: 1000,
                rtl: rtlV,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        dots: true
                    },
                    768: {
                        dots: false
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlH.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlH.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlH.on('drag.owl.carousel', function (event) {
                owlH.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlH.trigger('play.owl.autoplay');
                }, 10000);
            })
        }
    },

    eventSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }
        if ($.fn.owlCarousel) {
            var owlE = $('.event-slider');
            owlE.owlCarousel({
                items: 2,
                autoplay: false,
                autoHeight: true,
                nav: false,
                loop: false,
                lazyLoad:true,
                dots: false,
                mouseDrag: false,
                rtl: rtlV,
                // autoplayTimeout: 8000,
                autoplayHoverPause: true,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: true
                    },
                    768: {
                        items: 2
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlE.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlE.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlE.on('drag.owl.carousel', function (event) {
                owlE.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlE.trigger('play.owl.autoplay');
                }, 10000);
            })
        }
    },

    eventArtLargeSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlE = $('.articleLarge-slider');
            owlE.owlCarousel({
                items: 2,
                autoplay: false,
                autoHeight: true,
                nav: false,
                loop: false,
                lazyLoad:true,
                dots: false,
                rtl: rtlV,
                mouseDrag: false,
                // autoplayTimeout: 8000,
                autoplayHoverPause: true,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: true
                    },
                    768: {
                        items: 4
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlE.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlE.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlE.on('drag.owl.carousel', function (event) {
                owlE.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlE.trigger('play.owl.autoplay');
                }, 10000);
            })
        }
    },

    whySlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlW = $('.why-slider');
            owlW.owlCarousel({
                items: 4,
                autoplay: false,
                autoHeight: true,
                nav: false,
                loop: false,
                lazyLoad:true,
                dots: false,
                mouseDrag: false,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                navSpeed: 3000,
                dotsSpeed: 1000,
                navText: [],
                rtl: rtlV,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: true
                    },
                    768: {
                        items: 2,
                        dots: true
                    },
                    992: {
                        items: 4
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlW.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlW.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlW.on('drag.owl.carousel', function (event) {
                owlW.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlW.trigger('play.owl.autoplay');
                }, 10000);
            })
        }
    },

    helpSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlHlp = $('.help-slider');
            owlHlp.owlCarousel({
                items: 5,
                autoplay: false,
                autoHeight: true,
                nav: false,
                loop: false,
                lazyLoad:true,
                dots: false,
                mouseDrag: false,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                navSpeed: 3000,
                dotsSpeed: 1000,
                navText: [],
                rtl: rtlV,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: true
                    },
                    768: {
                        items: 3,
                        dots: true
                    },
                    992: {
                        items: 4,
                        dots: true
                    },
                    1025: {
                        items: 5
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlHlp.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlHlp.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlHlp.on('drag.owl.carousel', function (event) {
                owlHlp.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlHlp.trigger('play.owl.autoplay');
                }, 10000);
            })
        }
    },

    successSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            var owl = $(".success-slider");
            var sync1 = $("#sync1");
            var sync2 = $("#sync2");
            var slidesPerPage = 1;
            var syncedSecondary = true;

            sync1.owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                dots: false,
                lazyLoad:true,
                autoHeight: true,
                mouseDrag: false,
                responsiveRefreshRate: 200,
                navText: [],
                rtl: rtlV,
                responsiveClass: true,
                responsive: {
                    0: {
                        // nav: true
                    },
                    768: {
                        // nav: false
                    }
                }
            }).on('changed.owl.carousel', syncPosition);

            sync2
                .on('initialized.owl.carousel', function () {
                    sync2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items: slidesPerPage,
                    dots: false,
                    mouseDrag: false,
                    lazyLoad:true,
                    nav: true,
                    navText: [],
                    // center:true,
                    rtl: rtlV,
                    URLhashListener: true,
                    startPosition: 'URLHash',
                    slideBy: slidesPerPage,
                    responsiveRefreshRate: 100,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 5
                        }
                    }
                }).on('changed.owl.carousel', syncPosition2);

            function syncPosition(el) {

                var current = el.item.index;


                sync2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                var onscreen = sync2.find('.owl-item.active').length - 1;
                var start = sync2.find('.owl-item.active').first().index();
                var end = sync2.find('.owl-item.active').last().index();

                if (current > end) {
                    sync2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    sync2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }

            function syncPosition2(el) {
                if (syncedSecondary) {
                    var number = el.item.index;
                    sync1.data('owl.carousel').to(number, 100, true);
                }
            }

            sync2.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync1.data('owl.carousel').to(number, 300, true);
            });

        }
    },

    propositionSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            var owl = $(".success-slider");
            var sync1 = $("#sync11");
            var sync2 = $("#sync12");
            var slidesPerPage = 1;
            var syncedSecondary = true;

            sync1.owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                dots: false,
                lazyLoad:true,
                mouseDrag: false,
                autoHeight: true,
                rtl: rtlV,
                responsiveRefreshRate: 200,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        nav: true
                    },
                    768: {
                        // nav: false
                    }
                }
            }).on('changed.owl.carousel', syncPosition);

            sync2
                .on('initialized.owl.carousel', function () {
                    sync2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items: slidesPerPage,
                    dots: true,
                    mouseDrag: false,
                    nav: false,
                    navText: [],
                    lazyLoad:true,
                    // center:true,
                    URLhashListener: true,
                    rtl: rtlV,
                    startPosition: 'URLHash',
                    slideBy: slidesPerPage,
                    responsiveRefreshRate: 100,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            // items:3
                            items: 4
                        }
                    }
                }).on('changed.owl.carousel', syncPosition2);

            function syncPosition(el) {

                var current = el.item.index;


                sync2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                var onscreen = sync2.find('.owl-item.active').length - 1;
                var start = sync2.find('.owl-item.active').first().index();
                var end = sync2.find('.owl-item.active').last().index();

                if (current > end) {
                    sync2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    sync2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }

            function syncPosition2(el) {
                if (syncedSecondary) {
                    var number = el.item.index;
                    sync1.data('owl.carousel').to(number, 100, true);
                }
            }

            sync2.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync1.data('owl.carousel').to(number, 300, true);
            });

        }
    },

    threeSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            var owl = $(".success-slider");
            var sync1_1 = $("#sync1_1");
            var sync1_2 = $("#sync1_2");
            var slidesPerPage = 1;
            var syncedSecondary = true;

            sync1_1.owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                dots: false,
                lazyLoad:true,
                mouseDrag: false,
                autoHeight: true,
                rtl: rtlV,
                responsiveRefreshRate: 200,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        nav: true
                    },
                    768: {
                        // nav: false
                    }
                }
            }).on('changed.owl.carousel', syncPosition);

            sync1_2
                .on('initialized.owl.carousel', function () {
                    sync1_2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items: slidesPerPage,
                    dots: false,
                    mouseDrag: false,
                    lazyLoad:true,
                    nav: false,
                    navText: [],
                    // center:true,
                    rt: rtlV,
                    URLhashListener: true,
                    startPosition: 'URLHash',
                    slideBy: slidesPerPage,
                    responsiveRefreshRate: 100,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true
                        },
                        576: {
                            items: 2,
                            dots: true
                        },
                        768: {
                            items: 2,
                            dots: true
                        },
                        992: {
                            items: 3
                        }
                    }
                }).on('changed.owl.carousel', syncPosition2);

            function syncPosition(el) {

                var current = el.item.index;


                sync1_2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                var onscreen = sync1_2.find('.owl-item.active').length - 1;
                var start = sync1_2.find('.owl-item.active').first().index();
                var end = sync1_2.find('.owl-item.active').last().index();

                if (current > end) {
                    sync1_2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    sync1_2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }

            function syncPosition2(el) {
                if (syncedSecondary) {
                    var number = el.item.index;
                    sync1_1.data('owl.carousel').to(number, 100, true);
                }
            }

            sync1_2.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync1_1.data('owl.carousel').to(number, 300, true);
            });

        }
    },

    mapSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            var owl = $(".success-slider");
            var sync1_1 = $("#syncTab_1");
            var sync1_2 = $("#syncTab_2");
            var slidesPerPage = 1;
            var syncedSecondary = true;

            sync1_1.owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                dots: false,
                lazyLoad:true,
                mouseDrag: false,
                autoHeight: true,
                rtl: rtlV,
                responsiveRefreshRate: 200,
                navText: [],
                // touchDrag: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        nav: false
                    },
                    768: {
                        // nav: false
                    }
                }
            }).on('changed.owl.carousel', syncPosition);

            sync1_2
                .on('initialized.owl.carousel', function () {
                    sync1_2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items: slidesPerPage,
                    dots: false,
                    mouseDrag: false,
                    lazyLoad:true,
                    nav: false,
                    navText: [],
                    touchDrag: false,
                    // center:true,
                    rtl: rtlV,
                    URLhashListener: true,
                    startPosition: 'URLHash',
                    slideBy: slidesPerPage,
                    responsiveRefreshRate: 100,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true
                        },
                        576: {
                            items: 2,
                            dots: true
                        },
                        768: {
                            items: 2,
                            dots: true
                        },
                        992: {
                            items: 3
                        }
                    }
                }).on('changed.owl.carousel', syncPosition2);

            function syncPosition(el) {

                var current = el.item.index;


                sync1_2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                var onscreen = sync1_2.find('.owl-item.active').length - 1;
                var start = sync1_2.find('.owl-item.active').first().index();
                var end = sync1_2.find('.owl-item.active').last().index();

                if (current > end) {
                    sync1_2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    sync1_2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }

            function syncPosition2(el) {
                if (syncedSecondary) {
                    var number = el.item.index;
                    sync1_1.data('owl.carousel').to(number, 100, true);
                }
            }

            sync1_2.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync1_1.data('owl.carousel').to(number, 300, true);
            });

        }
    },

    worldclassSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        var lang = $('html').attr('lang');
        if ($.fn.owlCarousel) {
            var owl = $(".success-slider");
            var sync1 = $("#sync21");
            var sync2 = $("#sync22");
            var slidesPerPage = 1;
            var syncedSecondary = true;

            sync1.owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                dots: false,
                lazyLoad:true,
                mouseDrag: false,
                autoHeight: true,
                rtl: rtlV,
                responsiveRefreshRate: 200,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        // nav: true
                    },
                    768: {
                        // nav: false
                    }
                }
            }).on('changed.owl.carousel', syncPosition);

            sync2
                .on('initialized.owl.carousel', function () {
                    sync2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items: slidesPerPage,
                    dots: false,
                    mouseDrag: false,
                    lazyLoad:true,
                    nav: true,
                    navText: [],
                    // center:true,
                    rtl: rtlV,
                    URLhashListener: true,
                    startPosition: 'URLHash',
                    slideBy: slidesPerPage,
                    responsiveRefreshRate: 100,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        }
                    }
                }).on('changed.owl.carousel', syncPosition2);

            function syncPosition(el) {

                var current = el.item.index;


                sync2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                var onscreen = sync2.find('.owl-item.active').length - 1;
                var start = sync2.find('.owl-item.active').first().index();
                var end = sync2.find('.owl-item.active').last().index();

                if (current > end) {
                    sync2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    sync2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }

            function syncPosition2(el) {
                if (syncedSecondary) {
                    var number = el.item.index;
                    sync1.data('owl.carousel').to(number, 100, true);
                }
            }

            sync2.on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).index();
                sync1.data('owl.carousel').to(number, 300, true);
            });

        }
    },

    techSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlTech = $('.tech-slider, .champ-slider');
            owlTech.owlCarousel({
                items: 2,
                autoplay: false,
                autoHeight: true,
                lazyLoad:true,
                nav: false,
                loop: false,
                dots: true,
                rtl: rtlV,
                // autoplayTimeout: 8000,
                autoplayHoverPause: true,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                        dots: true
                    },
                    768: {
                        items: 2,
                        dots: true
                    },
                    992: {
                        items: 4
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlTech.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlTech.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlTech.on('drag.owl.carousel', function (event) {
                owlTech.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlTech.trigger('play.owl.autoplay');
                }, 10000);
            })

        }
    },

    featuredSlider: function () {
        var dir = $('html').attr('lang');


        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }


        if ($.fn.owlCarousel) {
            var owlTech = $('.featured-slider');
            owlTech.owlCarousel({
                items: 1,
                autoplay: false,
                autoHeight: true,
                nav: true,
                lazyLoad:true,
                loop: true,
                dots: false,
                navText: [],
                rtl: rtlV,
                mouseDrag: false,
                autoplaySpeed: 1500,
                navSpeed: 1500,
                dotsSpeed: 1000,
                responsiveClass: true,
                responsive: {
                    0: {
                        dots: true,
                        nav: false
                    },
                    768: {
                        dots: true,
                        nav: false
                    },
                    992: {
                        dots: false,
                        nav: true
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlTech.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlTech.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlTech.on('drag.owl.carousel', function (event) {
                owlTech.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlTech.trigger('play.owl.autoplay');
                }, 10000);
            })


        }
    },

    ftSlider: function () {
        var dir = $('html').attr('lang');
        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }
        if ($.fn.slick) {
            $(".ft-slider").on("init", function (c, a, b, d) {
                $(this).find(".slick-center").prev().addClass("between-slider");
                $(this).find(".slick-center").next().addClass("between-slider");
            }).slick({
                lazyLoad: 'ondemand',
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: false,
                rtl: rtlV,
                dots: true,
                cssEase: "linear",
                draggable: false,
                variableWidth: true,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }).on("afterChange", function (c, a, b, d) {
                console.log("event2", c);
                $(".slick-slide").removeClass("between-slider");
                $(a.$slides[b]).removeClass("between-slider");
                $(a.$slides[b]).prev().addClass("between-slider");
                $(a.$slides[b]).next().addClass("between-slider");
                $(".featured-slider .slick-slide").last().addClass("last-class");
                $(".featured-slider .slick-slide.last-class").hasClass("slick-center") ? $(".slick-next").css("display", "none") : $(".slick-next").css("display", "block");
                $(".featured-slider .slick-slide").first().addClass("first-class");
                $(".featured-slider .slick-slide.first-class").hasClass("slick-center") ? $(".slick-prev").css("display", "none") : $(".slick-prev").css("display", "block")
            }).on("beforeChange", function (c, a, b, d) {
                console.log("event", c);
                $(".slick-slide").removeClass("between-slider");
                $(a.$slides[b]).addClass("between-slider");
                $(a.$slides[d + 1]).addClass("between-slider");
                $(a.$slides[d - 1]).addClass("between-slider")
            })

            $(document).on('click', '.ft-slider .item:not(.slick-current)', function (e) {
                e.preventDefault();
                let slide_no = $(this).index();
                $('.ft-slider').slick('slickGoTo', slide_no);
            });
        }
    },


    careerslide: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlH = $('.careerSlide');
            owlH.owlCarousel({
                items: 1,
                autoplay: true,
                autoHeight: true,
                lazyLoad:true,
                nav: false,
                //loop: true,
                dots: true,
                rtl: rtlV,
                mouseDrag: true,
                //autoplaySpeed: 3000,
                //autoplayTimeout: 8000,
                //navSpeed: 3000,
                //dotsSpeed: 1000,
                navText: []
            });
        }
    },


    tabMenu: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlH = $('.tab-menu-slid');
            owlH.owlCarousel({
                //items: 1,
                //autoplay: true,
                //autoHeight: true,
                nav: true,
                lazyLoad:true,
                //loop: true,
                dots: false,
                mouseDrag: false,
                rtl: rtlV,
                //autoplaySpeed: 3000,
                //autoplayTimeout: 8000,
                //navSpeed: 3000,
                //dotsSpeed: 1000,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlH.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlH.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlH.on('drag.owl.carousel', function (event) {
                owlH.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlH.trigger('play.owl.autoplay');
                }, 10000);
            })

        }
    },

    sectorsSlider: function () {
        var dir = $('html').attr('lang');

        if (dir == 'ar') {
            var rtlV = true;
        } else {
            var rtlV = false
        }

        if ($.fn.owlCarousel) {
            var owlTech = $('.resources-slider');
            owlTech.owlCarousel({
                items: 2,
                autoplay: false,
                // autoHeight: false,
                nav: true,
                loop: false,
                lazyLoad:true,
                dots: false,
                mouseDrag: false,
                rtl: rtlV,
                // autoplayTimeout: 8000,
                autoplayHoverPause: true,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: true,
                        nav: false,
                        autoHeight: true
                    },
                    768: {
                        items: 2,
                        dots: true,
                        nav: false,
                        autoHeight: true
                    },
                    992: {
                        items: 2
                    }
                }
            });
            var owlTechSector = $('.sectors-slider');
            owlTechSector.owlCarousel({
                items: 3,
                autoplay: false,
                // autoHeight: false,
                nav: true,
                loop: false,
                lazyLoad:true,
                dots: false,
                mouseDrag: false,
                rtl: rtlV,
                // autoplayTimeout: 8000,
                autoplayHoverPause: true,
                navText: [],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: true,
                        nav: false,
                        autoHeight: true
                    },
                    768: {
                        items: 3,
                        dots: true,
                        nav: false,
                        autoHeight: true
                    },
                    992: {
                        items: 3
                    }
                }
            });
            $('.owl-nav button, .owl-dots button').on('click', function (e) {
                owlTech.trigger('stop.owl.autoplay');
                owlTechSector.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlTech.trigger('play.owl.autoplay');
                    owlTechSector.trigger('play.owl.autoplay');
                }, 10000);
            })
            owlTech.on('drag.owl.carousel', function (event) {
                owlTech.trigger('stop.owl.autoplay');
                owlTechSector.trigger('stop.owl.autoplay');
                setTimeout(function () {
                    owlTech.trigger('play.owl.autoplay');
                    owlTechSector.trigger('play.owl.autoplay');
                }, 10000);
            })

        }
    },

    select: function () {
        //Make it so that select2 cannot remove choice when pressing backspace
        $.fn.select2.amd.require(['select2/selection/search'], function (Search) {
            // let oldRemoveChoice = Search.prototype.searchRemoveChoice;
            Search.prototype.searchRemoveChoice = function () {
                // oldRemoveChoice.apply(this, arguments);
                this.$search.val('');
            };
        });

        function selectModal() {
            $("select.select2").select2({
                closeOnSelect: false, tags: true
            }).on('change', function () {
                var $selected = $(this).find('option:selected');
                var $container = $(this).parents('.select-wrapper').find('.items-selected');

                var $list = $('<ul class="tag-list">');
                $selected.each(function (k, v) {
                    var $li = $('<li>' + $(v).text() + '<a></a>' + '</li>');
                    $li.children('a')
                        .off('click.select2-copy')
                        .on('click.select2-copy', function (e) {
                            var $opt = $(this).data('select2-opt');

                            $opt.prop('selected', false);

                            $opt.parents('select').trigger('change');
                        }).data('select2-opt', $(v));
                    $list.append($li);
                    $('.selected-items').show();
                });
                $container.html('').append($list);
            }).trigger('change');
        }

        function selectLimitedModal() {
            $(".select2-limited").select2({
                closeOnSelect: false, tags: true, maximumSelectionLength: 5
            }).on('change', function () {
                var $selected = $(this).find('option:selected');
                var $container = $(this).parents('.select-wrapper').find('.items-selected');

                var $list = $('<ul class="tag-list">');
                $selected.each(function (k, v) {
                    var $li = $('<li>' + $(v).text() + '<a></a>' + '</li>');
                    $li.children('a')
                        .off('click.select2-copy')
                        .on('click.select2-copy', function (e) {
                            var $opt = $(this).data('select2-opt');

                            $opt.prop('selected', false);

                            $opt.parents('select').trigger('change');
                        }).data('select2-opt', $(v));
                    $list.append($li);
                    $('.selected-items').show();
                });
                $container.html('').append($list);
            }).trigger('change');
        }

        function selectSuggestionModal() {
            $(".speciality-select").select2({
                closeOnSelect: false, tags: true, // minimumInputLength: 1,
                dropdownCssClass: 'speciality-drop',
            }).on('change', function () {
                var $selected = $(this).find('option:selected');
                var $container = $(this).parents('.select-wrapper').find('.items-selected');

                var $list = $('<ul class="tag-list">');
                $selected.each(function (k, v) {
                    var $li = $('<li>' + $(v).text() + '<a></a>' + '</li>');
                    $li.children('a')
                        .off('click.select2-copy')
                        .on('click.select2-copy', function (e) {
                            var $opt = $(this).data('select2-opt');

                            $opt.prop('selected', false);

                            $opt.parents('select').trigger('change');
                        }).data('select2-opt', $(v));
                    $list.append($li);
                    $('.selected-items').show();
                });
                $container.html('').append($list);
            }).trigger('change');
        }

        function selectWithoutNewModal() {
            $(".existing-only-select").select2({
                closeOnSelect: false, // minimumInputLength: 1,
                dropdownCssClass: 'no-checkbox',
            }).on('change', function () {
                var $selected = $(this).find('option:selected');
                var $container = $(this).parents('.select-wrapper').find('.items-selected');

                var $list = $('<ul class="tag-list">');
                $selected.each(function (k, v) {
                    var $li = $('<li>' + $(v).text() + '<a></a>' + '</li>');
                    $li.children('a')
                        .off('click.select2-copy')
                        .on('click.select2-copy', function (e) {
                            var $opt = $(this).data('select2-opt');

                            $opt.prop('selected', false);

                            $opt.parents('select').trigger('change');
                        }).data('select2-opt', $(v));
                    $list.append($li);
                    $('.selected-items').show();
                });
                $container.html('').append($list);
            }).trigger('change');
        }

        function selectWithoutCheckboxModal() {
            $(".select-without-checkbox").select2({
                closeOnSelect: false, tags: true, dropdownCssClass: 'no-checkbox',
            }).on('change', function () {
                var $selected = $(this).find('option:selected');
                var $container = $(this).parents('.select-wrapper').find('.items-selected');

                var $list = $('<ul class="tag-list">');
                $selected.each(function (k, v) {
                    var $li = $('<li>' + $(v).text() + '<a></a>' + '</li>');
                    $li.children('a')
                        .off('click.select2-copy')
                        .on('click.select2-copy', function (e) {
                            var $opt = $(this).data('select2-opt');

                            $opt.prop('selected', false);

                            $opt.parents('select').trigger('change');
                        }).data('select2-opt', $(v));
                    $list.append($li);
                    $('.selected-items').show();
                });
                $container.html('').append($list);
            }).trigger('change');
        }

        function selectWithoutCheckboxNoResultModal() {
            $(".select-without-checkbox-no-result").select2({
                closeOnSelect: false, tags: true, dropdownCssClass: 'no-checkbox d-none',
            }).on('change', function () {
                $(this).parent().find('textarea.select2-search__field').val('');
                var $selected = $(this).find('option:selected');
                var $container = $(this).parents('.select-wrapper').find('.items-selected');

                var $list = $('<ul class="tag-list">');
                $selected.each(function (k, v) {
                    var $li = $('<li>' + $(v).text() + '<a></a>' + '</li>');
                    $li.children('a')
                        .off('click.select2-copy')
                        .on('click.select2-copy', function (e) {
                            var $opt = $(this).data('select2-opt');

                            $opt.prop('selected', false);

                            $opt.parents('select').trigger('change');
                        }).data('select2-opt', $(v));
                    $list.append($li);
                    $('.selected-items').show();
                });
                $container.html('').append($list);
            }).trigger('change');
        }

        function select2() {
            $(".multi-select").select2({
                closeOnSelect: false, // multiple: true,
                tags: true
            }).on('change', function () {
                var $selected = $(this).find('option:selected');
                var $container = $(this).parents('.select-wrapper').find('.items-selected');

                var $list = $('<ul class="tag-list">');
                $selected.each(function (k, v) {
                    var $li = $('<li>' + $(v).text() + '<a></a>' + '</li>');
                    $li.children('a')
                        .off('click.select2-copy')
                        .on('click.select2-copy', function (e) {
                            var $opt = $(this).data('select2-opt');

                            $opt.prop('selected', false);

                            $opt.parents('select').trigger('change');
                        }).data('select2-opt', $(v));
                    $list.append($li);
                    $('.selected-items').show();
                });
                $container.html('').append($list);
            }).trigger('change');

            $(".single-select").select2({
                closeOnSelect: false, // multiple: true,
                tags: false,
                dropdownCssClass: 'select-single-1',
            }).on('select2:select', function (data) {
                $(this).parents('.dropdown').find('.btn').addClass("active-select");
            }).on('change', function () {
                //
            }).on('select2:close', function () {
                setTimeout(() => {
                    $(this).parents('.dropdown').find('.dropdown-toggle.active').removeClass('active');
                }, 150);
            }).trigger('change');

            /*img select start*/
            $(".imagechange").select2({
                closeOnSelect: false,
                tags: false,
            }).on('change', function () {
                var imageclass = $(this).val();

                $(this).parent().parent().parent().find("img").hide();
                $(this).parent().parent().parent().find("."+imageclass).show();

            }).on('select2:close', function () {
                setTimeout(() => {
                    $(this).parents('.dropdown').find('.dropdown-toggle.active').removeClass('active');
                }, 150);
            }).trigger('change');
        }

        function select2Only() {
            var multiSelect2 = $('.multiSelect-2').select2({
                multiple: true, closeOnSelect: false, tags: false, dropdownCssClass: 'filter-drop',
            }).on('change', function (data) {
                var cc = $(this).next('.select2').find('.select2-selection__rendered li').length;
                $(this).parents('.dropdown').find('.btn .count').html(cc > 0 ? cc : '');
                if (cc > 0) {
                    $(this).parents('.dropdown').find('.btn').addClass("active-select");
                } else {
                    $(this).parents('.dropdown').find('.btn').removeClass("active-select");
                }
            }).on('select2:close', function () {
                setTimeout(() => {
                    $(this).parents('.dropdown').find('.dropdown-toggle.active').removeClass('active');
                }, 150);
            })
        }

        select2();
        select2Only();


        $(window).on('show.bs.modal', function () {
            selectModal();
            selectLimitedModal();
            selectSuggestionModal();
            selectWithoutNewModal();
            selectWithoutCheckboxModal();
            selectWithoutCheckboxNoResultModal();
            // setTimeout(function () {
            //
            // }, 500);
        });

        $('.advanced-filter .btn').click(function () {
            $(this).stop().addClass('active').parents('.cell').siblings().find('.btn').removeClass('active');
            $(this).parent('.dropdown').find('.multiSelect-2').select2('open');
            $(this).parent('.dropdown').find('.single-select').select2('open');
        });

        $('.clear-filter').on("click", function (e) {
            e.preventDefault();
            $('.multiSelect-2').val('').trigger("change").trigger('select2:close');
            $('.single-select').val('all').trigger("change").trigger('select2:close');
            $('.advanced-filter .btn').removeClass('active');
        });
    },

    customSelect: function () {

        $(document).on('click tap', '.interactive-map .card-body ul a, .interactive-map .btn-link.btn-none', function (e) {
            e.preventDefault();
            setTimeout(function () {
                $('.map-innerNav-1>.btn-link').trigger('click');
            }, 500);
        });

		// var siteContrast = $.cookie('site-contrast');
		// $('.contrast').on('click', function() {
		// 	if (siteContrast == 'high') {
		// 		var date = new Date();
		// 		//document.cookie = 'site-contrast' + '=; Path=/; Expires=' + date;
		// 		$.cookie('site-contrast', '', {
		// 			expires: date
		// 		});
		// 		$('body').stop().removeClass('highcontrast');
		// 	} else {
		// 		var date = new Date();
		// 		var minutes = 60 * 24 * 365;
		// 		date.setTime(date.getTime() + (minutes * 60 * 1000));
		// 		document.cookie = 'site-contrast=high; Path=/; Expires=' + date;
		// 		$.cookie('site-contrast', 'high', {
		// 			expires: date
		// 		});
		// 		$('body').stop().addClass('highcontrast');
		// 		// document.cookie = 'site-contrast=high; Path=/; Expires='+date;
		// 	}
		// });
		// if (siteContrast == 'high') {
		// 	$('body').stop().addClass('highcontrast');
		// }

        $('.contrast').on('click', function (e) {

            if ($(this).attr('data-cc') == 1) {
                $(this).attr('data-cc', 0);
                $("body").addClass("highcontrast");

                $(this).addClass("active");
                localStorage.setItem("contrast", 'highcontrast');
            } else {
                $(this).attr('data-cc', 1);
                $("body").removeClass('highcontrast');
                $(this).removeClass("active");
                localStorage.setItem("contrast", '');
            }
            e.preventDefault();

        });

        var contrast = localStorage.getItem("contrast");

        if ((contrast != undefined || contrast != null) && contrast == 'highcontrast') {
            $('.contrast').attr('data-cc', 0);
            $("body").addClass("highcontrast");
            $(".contrast a.highcontrast").addClass("active");
            $("body").attr("class", 'highcontrast');
        }

        $('.list-tab .nav-link.pills-calendar-tab').click(function () {
            setTimeout(function () {
                // calendar.render();
            }, 1000);
        });


        $('.fileUpload .uploadBtn').change(function () {
            var filename = $(this).val().replace(/.*(\/|\\)/, '');
            $(this).parent().find('.uploadFile').val(filename);
        });

        $('.search-wrapper .search-top .form-control').click(function (e) {
            e.preventDefault();
            // $(this).stop().toggleClass('active');
            $(this).parents('.search-wrapper').find('.search-advanced').stop().toggleClass('on');
            $(this).parents('.search-wrapper').find('.search-advanced').stop().slideToggle('slow');
        });

        $('.search-wrapper .search-advanced .close').click(function (e) {
            $(this).parents('.search-wrapper').find('.search-advanced').stop().slideUp('slow');
            e.preventDefault();
        });

        $('.btn-search').click(function () {
            $('.page-search').stop().toggleClass('on');
        });

        $('.clear-filter').on("click", function (e) {
            e.preventDefault();
            $('.multiSelect-2').val('').trigger("change").trigger('select2:close');
            $('.single-select').val('all').trigger("change").trigger('select2:close');
            $('.advanced-filter .btn').removeClass('active');
            $(".single-select").parents('.dropdown').find('.btn').removeClass("active-select");
        });

        $('.search .btn-filter').click(function () {
            $(this).stop().toggleClass('on');
            $(this).parents('.search-outer').find('.advanced-filter').stop().slideToggle();
        });


        $(".showmore").on("click", function (e) {
            $(this).stop().toggleClass('on');
            $(".social ul.hidden").stop().slideToggle();
            e.preventDefault();
        });

        if ($.fn.fancybox) {
            $("[data-fancybox]").fancybox({});
        }

        $('[data-bs-toggle="tooltip"]').tooltip({
            html: true,
            container: ".info"
        });

        if ($(".select2")[0]){
            $('select.select2').select2();
        }

        if ($(".select2-multi")[0]){
            $(".select2-multi").select2({
                closeOnSelect: false,
                placeholder: "Filter by",
                allowHtml: true,
                allowClear: true,
                tags: false
            });
        }

        $('.footer-bottom').on('inview', function (event, isInView) {
            if (isInView) {
                $('.btn-chat, body #fc_frame.fc-widget-normal').addClass('lift');
            } else {
                $('.btn-chat, body #fc_frame.fc-widget-normal').removeClass('lift');
            }
        });

        $(document).ready(function () {
            $(document).on("scroll", onScroll);

            function onScroll(event) {
                var scrollPos = $(document).scrollTop();

                $('.single-nav .navbar-nav a').each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                        $(this).parent().removeClass("active");
                        currLink.parent().addClass("active");
                    } else {
                        currLink.parent().removeClass("active");
                    }
                });
            }
        })


        function chatFunc() {
            $('.btn-chat, body #fc_frame.fc-widget-normal').addClass('pull-right');
        }

        $(document).on('click', '.pagination .page-link', function (e) {
            var pc = $(this).parents('.container');
            console.log(pc)
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $(pc).offset().top - 200
                }, 'fast');
            }, 500);
            // e.preventDefault();
        });


		$(".collapse-title").click(function(e) {
			var thisDT = $(this).attr('data-target');
			var thisDTD = $(this).parents('.card');
			setTimeout(function(){
				$('html, body').animate({
					scrollTop: $(thisDTD).offset().top -100
				}, 'fast');
			}, 500);
			e.preventDefault();
		});

        $('.btn-scrollTop').click(function (e) {
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $('.req-form').offset().top - 100
                }, 'fast');
            }, 500);
            e.preventDefault();
        });



		// $('.industry-wheel .wheel-block').hover(function(){
		// 	$(this).addClass('selected').siblings().removeClass('selected');
		// 	var hid = $(this).attr('data-id');
		// 	$('.industry-wheel .wheel-circle, .wheel-dots').find('.'+hid).addClass('selected');
		// }, function(){
		// 	var hid = $(this).attr('data-id');
		// 	$('.industry-wheel .wheel-circle, .wheel-dots').find('.'+hid).removeClass('selected');
		// });
		// $('.wheel-dots .wheel-dot').hover(function(){
		// 	var hdhref = $(this).attr('data-href');
		// 	$('.wheel .wheel-block[data-id='+ hdhref +']').addClass('selected');
		// 	$('.industry-wheel .wheel-circle').find('.'+hdhref).addClass('selected');
		// }, function(){
		// 	var hdhref = $(this).attr('data-href');
		// 	$('.wheel .wheel-block[data-id='+ hdhref +']').removeClass('selected');
		// 	$('.industry-wheel .wheel-circle').find('.'+hdhref).removeClass('selected');
		// });

        $('.industry-wheel .wheel-block').click(function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            var hid = $(this).attr('data-id');
            $('.industry-wheel .wheel-circle, .wheel-dots').find('.' + hid).addClass('selected').siblings().removeClass('selected');
            $('.industry-wheel .wheel-circle, .wheel-dots').find('.' + hid).addClass('active').siblings().removeClass('active');
        });

        $('.wheel-dots .wheel-dot').click(function () {
            var hdhref = $(this).attr('data-href');
            $('.wheel .wheel-block[data-id=' + hdhref + ']').addClass('selected').siblings().removeClass('selected');
            $('.industry-wheel .wheel-circle').find('.' + hdhref).addClass('selected').siblings().removeClass('selected');

            $('.wheel .wheel-block[data-id=' + hdhref + ']').addClass('active').siblings().removeClass('active');
            $('.industry-wheel .wheel-circle').find('.' + hdhref).addClass('active').siblings().removeClass('active');
        });

        $(document).ready(function () {

            function wheelClick() {
                $('.industry-wheel .wheel-block').click(function () {
                    var clickId = $(this).attr('data-id');

                    $('.metrics').find('#' + clickId).addClass('active activated').siblings().removeClass('active activated');

                    if ($(window).outerWidth() < 992) {
                        $('html, body').animate({
                            scrollTop: $(".industry-holderInner").offset().top
                        });
                    }
                });
            }

            wheelClick();

            function wheelHover() {
                $('.industry-wheel .wheel-block').hover(function () {
                    var clickId = $(this).attr('data-id');

                    $('.metrics').find('#' + clickId).addClass('active').siblings().removeClass('active');
                }, function () {
                    var clickId = $(this).attr('data-id');

                    $('.metrics').find('#' + clickId).removeClass('active').siblings().removeClass('active');
                });
            }

            $('.industry-wheel .wheel-block').hover(function () {
                if ($('.wheel-block').hasClass('selected')) {

                    $('.metrics .metrics-box').addClass('d-hide');
                } else {
                    wheelHover();
                }
            });

            $('.metrics-box .close').click(function () {
                $(this).parents('.metrics-box').removeClass('active');
                $('.industry-wheel .wheel-block, .industry-wheel .wheel-dots .wheel-dot').removeClass('selected');
                $('.industry-wheel .wheel-dots .wheel-dot').removeClass('active');

                $('.metrics .metrics-box').removeClass('d-hide active activated');
            });

            $('.metrics-box').each(function () {
                // $(this).prepend("<div class='nav-holder'><button class='btn-prev'></button><button class='btn-next'></button></div>");

            });


            $('.metrics-box').find('.btn-next').click(function (e) {
                if ($(".industry-wheel .wheel-block.selected").next().length != 0) {
                    $(".industry-wheel .wheel-block.selected").next().trigger('click');
                } else {
                    $(".industry-wheel .wheel-block.selected").removeClass('selected');
                    $(".industry-wheel .wheel-block").first().trigger('click');
                }
                e.preventDefault();
            });

            $('.metrics-box').find('.btn-prev').click(function (e) {
                if ($(".industry-wheel .wheel-block.selected").prev().length != 0) {
                    $(".industry-wheel .wheel-block.selected").prev().trigger('click');
                } else {
                    $(".industry-wheel .wheel-block.selected").removeClass('selected');
                    $(".industry-wheel .wheel-block:last").trigger('click');
                }
                e.preventDefault();
            });

        });

        $('.section-industries').next().next().addClass("wheel-pop-hider");
        if ($(window).outerWidth() < 991) {
            $('.wheel-pop-hider').on('inview', function (event, isInView) {
                if (isInView) {
                    $('.metrics-box .close').trigger('click');
                }
            });
        }
        $(window).resize(function () {
            $('.wheel-pop-hider').on('inview', function (event, isInView) {
                if (isInView) {
                    $('.metrics-box .close').trigger('click');
                }
            });
        });
        var $affectedElements = $("div, p, h1, h2, h3, h4, h5, h6");

        $affectedElements.each(function () {
            var $this = $(this);
            $this.data("orig-size", $this.css("font-size"));
        });

        var countI = 1;
        $("#increasetext").click(function (i) {
            $("#decreasetext").removeClass('disabled');
            if (countI++ == 3) {
                countI = 1;
                $(this).addClass('disabled');
            }
            changeFontSize(1);
        })

        var countD = 1;
        $("#decreasetext").click(function () {
            changeFontSize(-1);
            $("#increasetext").removeClass('disabled');
            if (countD++ == 3) {
                countD = 1;
                $(this).addClass('disabled');
            }
        })

        $("#resettext").click(function () {
            $("#increasetext, #decreasetext").removeClass('disabled');
            $affectedElements.each(function () {
                var $this = $(this);
                $(this).parents('.nav-item').siblings().find('.nav-link').removeClass('disabled');
                $this.css("font-size", $this.data("orig-size"));
            });
        })

        function changeFontSize(direction) {
            $affectedElements.each(function () {
                var $this = $(this);
                $this.css("font-size", parseInt($this.css("font-size")) + direction);
            });
        }

		// $('.list .item, .article-list article').each(function() {
		// 	var tagcount = $(this).find('.tag-list .tag').length;

		// 	$(this).find('.total').text("+" + tagcount - 1);
		// 	if (tagcount < 2) {
		// 		$(this).find('.total').hide();
		// 	}
		// });

        $('.list .item, .article-list article').each(function () {
            var tagcount = $(this).find('.tag-list .tag').length;

            $(this).find('.total').text("+" + (tagcount - 1));
            if (tagcount < 2) {
                $(this).find('.total').hide();
            }
        });

        $('.section-industries').on('inview', function (event, isInView) {
            if (isInView) {
                $('.industry-wheel').addClass('activate');
            } else {
                $('.industry-wheel').removeClass('activate');
            }
        });

        $('.hours-holder .btn').click(function () {
            var hId = $(this).attr('id');
            $('.map figure').removeClass().addClass(hId);
        });

        $('.section-mapTab .map figure svg .point, .section-mapTab .map figure svg .connect').hover(function () {
            var pointId = $(this).attr('id');
            $('.point-holder').find('.' + pointId).addClass('active');
        }, function () {
            var pointId = $(this).attr('id');
            $('.point-holder').find('.' + pointId).removeClass('active');
        });

        $('.connect-check .item').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var connectId = $(this).attr('data-target');
            $('.connect-map').find('.' + connectId).addClass('active').siblings().removeClass('active');
        });

        (function ($) {
            $.fn.countTo = function (options) {
                options = options || {};

                return $(this).each(function () {
                    var settings = $.extend({}, $.fn.countTo.defaults, {
                        from: $(this).data('from'),
                        to: $(this).data('to'),
                        speed: $(this).data('speed'),
                        refreshInterval: $(this).data('refresh-interval'),
                        decimals: $(this).data('decimals')
                    }, options);

                    var loops = Math.ceil(settings.speed / settings.refreshInterval),
                        increment = (settings.to - settings.from) / loops;

                    var self = this,
                        $self = $(this),
                        loopCount = 0,
                        value = settings.from,
                        data = $self.data('countTo') || {};

                    $self.data('countTo', data);

                    if (data.interval) {
                        clearInterval(data.interval);
                    }
                    data.interval = setInterval(updateTimer, settings.refreshInterval);

                    render(value);

                    function updateTimer() {
                        value += increment;
                        loopCount++;

                        render(value);

                        if (typeof (settings.onUpdate) == 'function') {
                            settings.onUpdate.call(self, value);
                        }

                        if (loopCount >= loops) {
                            // remove the interval
                            $self.removeData('countTo');
                            clearInterval(data.interval);
                            value = settings.to;

                            if (typeof (settings.onComplete) == 'function') {
                                settings.onComplete.call(self, value);
                            }
                        }
                    }

                    function render(value) {
                        var formattedValue = settings.formatter.call(self, value, settings);
                        $self.html(formattedValue);
                    }
                });
            };

            $.fn.countTo.defaults = {
                from: 0,
                to: 0,
                speed: 1000,
                refreshInterval: 100,
                decimals: 0,
                formatter: formatter,
                onUpdate: null,
                onComplete: null
            };

            function formatter(value, settings) {
                return value.toFixed(settings.decimals);
            }
        }(jQuery));

        jQuery(function ($) {
            $('.count-number').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            });

            $('.timer').each(count);

            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }
        });
        $('.pills-map .nav-link').click(function () {
            jQuery(function ($) {
                $('.count-number').data('countToOptions', {
                    formatter: function (value, options) {
                        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    }
                });

                $('.timer').each(count);

                function count(options) {
                    var $this = $(this);
                    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    $this.countTo(options);
                }
            });
        });
    },

    wizard: function () {
        var count = 1;
        $('.req-form .send-req').click(function (e) {
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.success-stage').addClass('active').length;
            if (v1 == 0) {
                $('.settingUp-stage').last().addClass('active');
            }
            e.preventDefault();
        });
        $('.section-settingUpBusiness .next').click(function (e) {
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.form-stage').addClass('active').length;
            if (v1 == 0) {
                $('.settingUp-stage').last().addClass('active');
            }

            e.preventDefault();
            if (v1 > 0) {
                var nextItem = $('.settingUp-stage.active').outerHeight();
                $('.settingUp-stages').css({
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            }
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                $('.settingUp-stage.active').slideDown();
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    // 'height': itemL*totH,
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            });
            count += 1;
        });
        $('.flow-2 .select-sector .next').click(function (e) {
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-2-form').addClass('active').length;
            if (v1 == 0) {
                $('.settingUp-stage').last().addClass('active');
            }

            e.preventDefault();
            if (v1 > 0) {
                var nextItem = $('.settingUp-stage.active').outerHeight();
                $('.settingUp-stages').css({
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            }
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                $('.settingUp-stage.active').slideDown();
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    // 'height': itemL*totH,
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            });
            count += 1;
        });
        $('.flow-3 .select-sector .next').click(function (e) {
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-3-form').addClass('active').length;
            if (v1 == 0) {
                $('.settingUp-stage').last().addClass('active');
            }

            e.preventDefault();
            if (v1 > 0) {
                var nextItem = $('.settingUp-stage.active').outerHeight();
                $('.settingUp-stages').css({
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            }
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                $('.settingUp-stage.active').slideDown();
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    // 'height': itemL*totH,
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            });
            count += 1;
        });
        $('.flow-4 .select-sector .next').click(function (e) {
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-4-form').addClass('active').length;
            if (v1 == 0) {
                $('.settingUp-stage').last().addClass('active');
            }

            e.preventDefault();
            if (v1 > 0) {
                var nextItem = $('.settingUp-stage.active').outerHeight();
                $('.settingUp-stages').css({
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            }
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                $('.settingUp-stage.active').slideDown();
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    // 'height': itemL*totH,
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            });
            count += 1;
        });
        $('.flow-5 .next').click(function (e) {
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-5-form').addClass('active').length;
            if (v1 == 0) {
                $('.settingUp-stage').last().addClass('active');
            }

            e.preventDefault();
            if (v1 > 0) {
                var nextItem = $('.settingUp-stage.active').outerHeight();
                $('.settingUp-stages').css({
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            }
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                $('.settingUp-stage.active').slideDown();
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    // 'height': itemL*totH,
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            });
            count += 1;
        });

        $('.form-stage .back').click(function (e) {
            e.preventDefault();
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-1').addClass('active').length;
            var nextItem = $('.settingUp-stage').outerHeight();
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    '-webkit-transform': 'translateY(-' + nextItem / 2 + 'px) '
                });
            });
            count -= 1;
        });
        $('.flow-2-form .back').click(function (e) {
            e.preventDefault();
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-2').addClass('active').length;
            var nextItem = $('.settingUp-stage').outerHeight();
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    '-webkit-transform': 'translateY(-' + nextItem / 2 + 'px) '
                });
            });
            count -= 1;
        });

        $('.flow-3-form .back').click(function (e) {
            e.preventDefault();
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-3').addClass('active').length;
            var nextItem = $('.settingUp-stage').outerHeight();
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    '-webkit-transform': 'translateY(-' + nextItem / 2 + 'px) '
                });
            });
            count -= 1;
        });
        $('.flow-4-form .back').click(function (e) {
            e.preventDefault();
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-4').addClass('active').length;
            var nextItem = $('.settingUp-stage').outerHeight();
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    '-webkit-transform': 'translateY(-' + nextItem / 2 + 'px) '
                });
            });
            count -= 1;
        });
        $('.flow-5-form .back').click(function (e) {
            e.preventDefault();
            var v1 = $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.flow-5').addClass('active').length;
            var nextItem = $('.settingUp-stage').outerHeight();
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    '-webkit-transform': 'translateY(-' + nextItem / 2 + 'px) '
                });
            });
            count -= 1;
        });

        $('.business-list .item').click(function (event) {
            var flowVar1 = $(this).attr('data-target');
            var v1 = $(this).addClass('active').siblings().removeClass('active').length;
            console.log(flowVar1)
            if ($(flowVar1).length == 0) {
                $("." + flowVar1).addClass('active').siblings().removeClass('active');
            }
            if (v1 == 0) {
                $('.settingUp-stage').last().addClass('active');
            }

            event.preventDefault();

            count += 1;
        });

        $('.flow-1 .back, .flow-2 .back, .flow-3 .back, .flow-4 .back, .flow-5 .back').click(function (e) {
            e.preventDefault();
            $(this).parents('.settingUp-stage').removeClass('active').parents('.settingUp-stagess').find('.settingUp-stage-1').addClass('active');

            var nextItem = $('.settingUp-stage').outerHeight();
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    '-webkit-transform': 'translateY(-' + nextItem / 2 + 'px) '
                });
            });
            count -= 1;
        });
        $('.restart-wizard').click(function (e) {
            $('.settingUp-stage').removeClass('active').first().addClass('active');
            $('.business-list-2 .item, .business-list-cube .item, .select-sector .sector-item').removeClass('active');

            var nextItem = $('.settingUp-stage').outerHeight();
            var itemL = $('.settingUp-stage').length;
            $('.settingUp-stage').each(function () {
                // $('.settingUp-stage').slideDown();
                var totH = $(this).outerHeight();

                $('.settingUp .parallax').css({
                    // 'height': itemL*totH,
                    '-webkit-transform': 'translateY(-' + nextItem / 2 + 'px) '
                });
            });
            count -= 1;
            e.preventDefault();
        });
        $('.settingUp-stage .back').click(function (e) {
            $('.business-list-2 .item, .business-list-cube .item, .select-sector .sector-item, .business-list .item').removeClass('active');
            $('.settingUp-stage .next').addClass('disabled');
        });

        // $('.business-list-cube .item').click(function(){
        $('.business-list-cube .item, .business-list-2 .item').click(function () {
            var itemCube = $(this).attr('data-target');
            $(this).addClass('active').siblings().removeClass('active');
            // $('.select-sector').find(itemCube).addClass('.active').siblings().removeClass('.active');
            console.log(itemCube)
            if ($(itemCube).length == 0) {
                console.log(itemCube)
                $("." + itemCube).addClass('active').siblings().removeClass('active');
            }
        });
        $('.select-sector .business-list li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
        $('.business-list-2 .item').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            if ($('.business-list-2 .item.active').length > 0) {
                $(this).parents('.sector-item').find('.next').removeClass('disabled');
            }
        });
        $('.flow-4 .business-list .item').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            if ($('.flow-4 .business-list .item.active').length > 0) {
                $(this).parents('.settingUp-content').next('.select-sector').find('.next').removeClass('disabled');
            }
        });

        $('.settingUp-stage .sector-item textarea').on("keyup paste", function () {
            if ($(this).val() != '') {
                $(this).parents('.sector-item').find('.next').removeClass('disabled');
            }
        });
        $('.business-list-cube .item').click(function () {
            $(this).parents('.settingUp-stage').find('textarea').val('');
            $(this).parents('.settingUp-stage').find('.next').addClass('disabled');
        });


        $(".business-list-cube .item").click(function () {
            var scrollDiv = $(this).parents('.stage-wrapper').find('.select-sector');
            $('html,body').animate({
                scrollTop: $(scrollDiv).offset().top - 150
            }, 'slow');
        });
        $(".section-settingUpBusiness .next").click(function () {
            setTimeout(function () {
                $('html,body').animate({
                    scrollTop: $(".settingUp-stagess").offset().top - 150
                }, 'slow');
            }, 1000);
        });
        if ($('.settingUp-stage-1').hasClass('active')) {
            $('.settingUp-pagination ul li:nth-child(1)').addClass('active').siblings().removeClass('active');
        }
        if ($('.form-stage, .flow-2-form, .flow-3-form, .flow-4-form, flow-5-form').hasClass('active')) {
            $('.settingUp-pagination ul li:nth-child(last)').addClass('active').siblings().removeClass('active');
        }
        if ($('.flow-1, .flow-2, flow-3, .flow-4, .flow-5').hasClass('active')) {
            $('.settingUp-pagination ul li:nth-child(2)').addClass('active').siblings().removeClass('active');
        }
        if ($('.success-stage').hasClass('active')) {
            $('.settingUp-pagination').addClass('d-none');
        } else {
            $('.settingUp-pagination').removeClass('d-none');
        }
        $('.business-list-2 .item, .business-list-cube .item, .business-list .item, .settingUp-stage .back, .section-settingUpBusiness .next, .restart-wizard').click(function () {
            if ($('.settingUp-stage-1').hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(1)').addClass('active').siblings().removeClass('active');
            }
            if ($('.form-stage, .flow-2-form, .flow-3-form, .flow-4-form, flow-5-form').hasClass('active')) {
                $('.settingUp-pagination ul li:last-child').addClass('active').siblings().removeClass('active');
            }
            if ($('.flow-1, .flow-2, flow-3, .flow-4, .flow-5').hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(2)').addClass('active').siblings().removeClass('active');
            }
            if ($('.success-stage').hasClass('active')) {
                $('.settingUp-pagination').addClass('d-none');
            } else {
                $('.settingUp-pagination').removeClass('d-none');
            }
        });
        $('.send-req').click(function () {
            if ($('.success-stage').hasClass('active')) {
                $('.settingUp-pagination').addClass('d-none');
            } else {
                $('.settingUp-pagination').removeClass('d-none');
            }
        });
    },

	// wizardSetting: function() {
	// 	var count = 1;

	// 	function pagination() {
	// 		if ($(".section-1 .business-list").hasClass('active')) {
	// 			$('.settingUp-pagination ul li:nth-child(1)').addClass('active').siblings().removeClass('active')
	// 		}
	// 		if ($(".section-2 .business-list").hasClass('active')) {
	// 			$('.settingUp-pagination ul li:nth-child(2)').addClass('active').siblings().removeClass('active')
	// 		}
	// 		if ($(".section-3 .business-list").hasClass('active')) {
	// 			$('.settingUp-pagination ul li:nth-child(3)').addClass('active').siblings().removeClass('active')
	// 		}
	// 		if ($(".section-4 .business-list").hasClass('active')) {
	// 			$('.settingUp-pagination ul li:nth-child(4)').addClass('active').siblings().removeClass('active')
	// 		}
	// 		if ($(".section-5 .business-list").hasClass('active')) {
	// 			$('.settingUp-pagination ul li:nth-child(5)').addClass('active').siblings().removeClass('active')
	// 		}
	// 		if ($(".section-6 .business-list").hasClass('active')) {
	// 			$('.settingUp-pagination ul li:nth-child(6)').addClass('active').siblings().removeClass('active')
	// 		}
	// 	}


	// 	$('.setting .settingUp-content .item, .setting .settingUp-content .next').click(function(e){
	// 		e.preventDefault();

	// 		var sDataTarget = $(this).attr('data-target');
	// 		if($(this).attr('data-target')) {
	// 			$(this).parents('.business-list').removeClass('active').addClass('previous').siblings().removeClass('previous');
	// 			$(this).find('.'+sDataTarget).parents('.settingUp-content').addClass('active').siblings().removeClass('active');
	// 			$('.setting-section').find('.'+sDataTarget).addClass('active');
	// 		}

	// 		if ($(this).attr('data-target')) {
	// 			var nextItem = $('.setting .business-list.active').outerHeight();
	// 			var itemL = $('.setting .settingUp-stage').length;
	// 			$('.setting .settingUp-stage').each(function() {
	// 				// $('.setting .business-list.active').slideDown();
	// 				var totH = $(this).outerHeight();

	// 				$('.setting .settingUp .parallax').css({
	// 					'-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
	// 				});
	// 			});
	// 			count += 1;
	// 		}

	// 		pagination();
	// 	});




	// 	$('.setting .back').click(function(){
	// 		$(this).parents('.business-list').removeClass('active');
	// 		$(this).parents('.settingUp-content').prev('.settingUp-content').find('.previous').addClass('active').removeClass('previous');

	// 		var nextItem = $('.stage-wrapper').outerHeight();
	// 		console.log(nextItem)
	// 		$('.setting .settingUp-stage').each(function() {
	// 			// $('.setting .business-list.active').slideDown();
	// 			var totH = $(this).outerHeight();

	// 			$('.setting .settingUp .parallax').css({
	// 				// "-webkit-transform": "translateY(-" + nextItem / 2 + "px) "
	// 				'-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
	// 			});
	// 		});
	// 		count -= 1;

	// 		pagination();
	// 	});

	// 	$('.section-2 .back').click(function(){
	// 		$('.setting .parallax').css({
	// 			"-webkit-transform": "translateY(0)"
	// 		});
	// 	});

	// 	$('.setting .next').click(function(){
	// 		$(this).parents('.business-list').removeClass('active');
	// 		$(this).parents('.content-wrap').find('.section-form .business-list').addClass('active');
	// 	});

	// 	$('.section-form .send-req').click(function(){
	// 		$(this).parents('.business-list').removeClass('active');
	// 		$(this).parents('.content-wrap').find('.section-finish .business-list').addClass('active');
	// 	});

	// 	$('.section-finish .restart-wizard').click(function(){
	// 		$(this).parents('.business-list').removeClass('active');
	// 		$(this).parents('.content-wrap').find('.landing .business-list').addClass('active');

	// 		pagination();
	// 	});

    // },

    wizardSetting: function () {
        var count = 1;

        function pagination() {
            if ($(".section-1 .business-list").hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(1)').addClass('active').siblings().removeClass('active')
            }
            if ($(".section-2 .business-list").hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(2)').addClass('active').siblings().removeClass('active')
            }
            if ($(".section-3 .business-list").hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(3)').addClass('active').siblings().removeClass('active')
            }
            if ($(".section-4 .business-list").hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(4)').addClass('active').siblings().removeClass('active')
            }
            if ($(".section-5 .business-list").hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(5)').addClass('active').siblings().removeClass('active')
            }
            if ($(".section-6 .business-list").hasClass('active')) {
                $('.settingUp-pagination ul li:nth-child(6)').addClass('active').siblings().removeClass('active')
            }
        }


        $('.setting .settingUp-content .item, .setting .settingUp-content .next').click(function (e) {
            e.preventDefault();

            var sDataTarget = $(this).attr('data-target');
            if ($(this).attr('data-target')) {
                $(this).parents('.business-list').removeClass('active').addClass('previous').siblings().removeClass('previous');
                $(this).find('.' + sDataTarget).parents('.settingUp-content').addClass('active').siblings().removeClass('active');
                $('.setting-section').find('.' + sDataTarget).addClass('active');
            }

            if ($(this).attr('data-target')) {
                var nextItem = $('.setting .business-list.active').outerHeight();
                var itemL = $('.setting .settingUp-stage').length;
                $('.setting .settingUp-stage').each(function () {
                    // $('.setting .business-list.active').slideDown();
                    var totH = $(this).outerHeight();

                    $('.setting .settingUp .parallax').css({
                        '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                    });
                });
                count += 1;
            }

            pagination();
        });


        $('.setting .back').click(function () {
            $(this).parents('.business-list').removeClass('active');
            $(this).parents('.settingUp-content').prev('.settingUp-content').find('.previous').addClass('active').removeClass('previous');

            var nextItem = $('.stage-wrapper').outerHeight();
            console.log(nextItem)
            $('.setting .settingUp-stage').each(function () {
                // $('.setting .business-list.active').slideDown();
                var totH = $(this).outerHeight();

                $('.setting .settingUp .parallax').css({
                    // "-webkit-transform": "translateY(-" + nextItem / 2 + "px) "
                    '-webkit-transform': 'translateY(-' + (nextItem * count) + 'px) '
                });
            });
            count -= 1;

            pagination();
        });

        $('.section-2 .back').click(function () {
            $('.setting .parallax').css({
                "-webkit-transform": "translateY(0)"
            });
        });

        $('.setting .next').click(function () {
            $(this).parents('.business-list').removeClass('active');
            $(this).parents('.content-wrap').find('.section-form .business-list').addClass('active');
        });

        $('.section-form .send-req').click(function () {
            $(this).parents('.business-list').removeClass('active');
            $(this).parents('.content-wrap').find('.section-finish .business-list').addClass('active');
        });

        $('.section-finish .restart-wizard').click(function () {
            $(this).parents('.business-list').removeClass('active');
            $(this).parents('.content-wrap').find('.landing .business-list').addClass('active');

            pagination();
        });

        $(".show-pass").click(function () {
            var x = $(this).parent('.input-group').find('input');
            console.log(x.attr('type'));
            if (x.attr('type') === "password") {
                x.attr('type', "text");
                $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
            } else {
                x.attr('type', "password");
                $(this).children('i').removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
            }
        });


    },

    eqHeight: function () {

		// $('.industry-wheel .wheel-block').click(function(){
		// 	setTimeout(function() {
		// 		var maxHeight1 = 0;
		// 		$('.industry-contentInner .indus-panel.active').each(function() {
		// 			maxHeight1 = ($(this).outerHeight() > maxHeight1) ? $(this).outerHeight() : maxHeight1;
		// 		});
		// 		$('.industry-contentInner .indus-panel.active').css("height", maxHeight1);
		// 	}, 1000);
		// });
	},

    resize: function () {
        $(window).on('resize', function () {

            // $('.about-slider .item .content, .our-services .service-list-holder').css("height", 'auto');
            // siteScript.eqHeight();
        });
    },
    tab: function () {
        $('#custom-dropdown a').click(function () {
            $('#custom-selected').html($(this).text())
        })
    },

    slickslider: function() {
        $('.slider-items-inner').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
        });

        $('.slider-items').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            swipe: false,
            infinite: false,
            asNavFor: '.slider-menu',

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        swipe: true,
                    }
                }
            ]
        });

        $('.slider-menu').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-items',
            dots: false,
            arrows: false,
            centerMode: false,
            infinite: false,
            swipe: false,
            focusOnSelect: true,

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 490,
                    settings: {
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]

        });

        $('.slider-items-2').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            swipe: false,
            infinite: false,
            asNavFor: '.slider-menu-2',

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        swipe: true,
                    }
                }
            ]
        });

        $('.slider-menu-2').slick({
            rtl: ($('html').attr('lang') == 'ar') ? true : false,
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-items-2',
            dots: false,
            arrows: false,
            centerMode: false,
            infinite: false,
            swipe: false,
            focusOnSelect: true,

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 490,
                    settings: {
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]

        });

        $(".about-member").each(function() {
            $(this).slick({
                rtl: ($('html').attr('dir') == 'rtl') ? true : false,
                slidesToShow: 1,
                infinite: true,
                arrows: true,
                // dots: true,
                //dots: ($('.about-member li').length > 1) ? true : false,
                dots: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                focusOnSelect: true,

                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        infinite: false,
                        centerMode: false,
                    }
                }
                ]
            });
        });


    }
}

$(function () {
    siteScript.init();
});
