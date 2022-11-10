document.addEventListener("DOMContentLoaded", function() {
    let slideSearch = document.querySelector(".me-2");
    function showBar() {
        slideSearch.style.display = "block";
    }
    $('.menu-btn').on('click', function (){
        $('.slide-header').addClass('brek');
        $('body').addClass('fixed');
        $('.overlay').show().addClass('nor');

        $('.overlay').on('click', function (){
          $('.slide-header').removeClass('brek')
          $('body').removeClass('fixed');
          $(this).hide().removeClass('nor');
        })
    });

    $('.slide-header .close').on('click', function (){
        $('.slide-header').removeClass('brek');
        $('body').removeClass('fixed');
        $('.overlay').hide().removeClass('nor');
        $('.header').removeClass('zlow')
    });
    $('.lang').on('click', function (){
        $(this).find('ul').addClass('active');
        $('body').on('click',function(event){
            if(!$(event.target).is('.lang *')){
                $(".lang ul").removeClass('active');

            }
        });
    })
    $('.showbar').on('click', function(){
        $(this).siblings('form').show();
        $(this).siblings('.pop').show();
        $(this).hide();
        $('body').on('click',function(event){
            if(!$(event.target).is('.search-block *')){
                $(".showbar + form").hide();
                $(".showbar + form + .pop").hide();
                $('.showbar').show();
            }
        });
    })
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 'auto',
        slidesPerView: 4,
        slidesPerGroup: 4,
        setWrapperSize: true,
        breakpoints: {
            // when window width is >= 320px
            360: {
                slidesPerView: 'auto',
                allowTouchMove: true,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 'auto',
                allowTouchMove: true,
                spaceBetween: 20
            },
            700: {
                slidesPerView: 'auto',
                allowTouchMove: true,
                spaceBetween: 20
            },
            // when window width is >= 640px
            1100: {
                slidesPerView: 6,
                spaceBetween: 30,
                allowTouchMove: true

            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 30,
                // allowTouchMove: false,

            }
        },
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        allowTouchMove: false,
        setWrapperSize: true,
        thumbs: {
            swiper: swiper,
        },
    });
    $('.ask').on('click', function (){
        $(this).toggleClass('active');
        $(this).siblings('.answer').slideToggle(200);
    });

    let swipere;
    function myFunction() {
        if (window.matchMedia("(max-width: 1100px)").matches) {

            $('.mySwiper3 .row').addClass('swiper-wrapper');
            $('.mySwiper3 .row > div ').addClass('swiper-slide');
            $('.mySwiper3 .row .col-lg-4').removeClass('col-lg-4')
            $('.mySwiper3 .row').removeClass('row');
            swipere = new Swiper(".mySwiper3", {
                spaceBetween: 10,
                allowTouchMove: true,
                slidesPerView: "auto",
                // centeredSlides: true,
                loopFillGroupWithBlank: false,
                observer: true,
                observeParents: true,

                // centeredSlides: true,
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 'auto',
                        allowTouchMove: true,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 'auto',
                        spaceBetween: 20
                    },
                    // when window width is >= 640px

                },
            });

            $(".main-menu > li > a").on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.overlay').show();
                $(this).parent('li').toggleClass('opened');
                // $('body').addClass('fixed')
                $(this).parent().siblings('li').removeClass('opened');
                $('.overlay').on('click', function (){
                    $(".main-menu > li").removeClass('opened');
                    $(this).hide().removeClass('nor');
                })
            });
            $('.sub-menu .close').on('click', function (){
                $(".main-menu > li").removeClass('opened');
                $('.overlay').hide();
            });

        } else {
            $('.mySwiper3 .swiper-wrapper').removeClass('swiper-wrapper').addClass('row');
            $('.mySwiper3 div ').removeClass('swiper-slide');
            $('.mySwiper3 .row  > div').addClass('col-lg-4');
            $(".main-menu > li").mouseover(function(e){
                // e.stopPropagation(e);
                $(this).addClass('opened');
                $('.overlay:not(.nor)').show();
                // $('body').addClass('fixed')
            });
            $(".main-menu > li").mouseleave(function(e){
                // e.stopPropagation(e);
                $(this).removeClass('opened');
                $('.overlay:not(.nor)').hide();
                // $('body').removeClass('fixed');
            });
            if (typeof swipere !== 'undefined') {
                swipere.destroy(true, true);
            }


        }
    }
    window.addEventListener("resize", myFunction);

    window.addEventListener("load", myFunction);
    // $(window).on('load resize', windowSize);
    $('.mobs .title').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle();
    });
    var elementHeights = $('section.steps .steps-wrap>div .step .step-inn .group').map(function() {
        return $(this).height();
    }).get();

    // Math.max takes a variable number of arguments
    // `apply` is equivalent to passing each height as an argument
    var maxHeight = Math.max.apply(null, elementHeights);

    // Set each height to the max height
    $('section.steps .steps-wrap>div .step .step-inn .group').height(maxHeight);
    $(window).resize(function() {
        // Get an array of all element heights
        $('section.steps .steps-wrap>div .step .step-inn .group').removeAttr("style")
        var elementHeights = $('section.steps .steps-wrap>div .step .step-inn .group').map(function() {
            return $(this).height();
        }).get();

        // Math.max takes a variable number of arguments
        // `apply` is equivalent to passing each height as an argument
        var maxHeight = Math.max.apply(null, elementHeights);

        // Set each height to the max height
        $('section.steps .steps-wrap>div .step .step-inn .group').height(maxHeight);
    });
});
