$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if(this.scrollY > 100) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // scroll up btn script

    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    
    var typed = new Typed('.typing', {
        strings: ['Ютубер', 'Разработчик', 'Блогер', 'Дизайнер', 'Фрилансер'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed('.typing-2', {
        strings: ['Ютубер', 'Разработчик', 'Блогер', 'Дизайнер', 'Фрилансер'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toogle menu/navbar script

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
        $('body').toggleClass('modal');
    });

    $('.menu-link').click(function() {
        $('.navbar .menu').removeClass('active');
        $('.menu-btn i').removeClass('active');
        $('body').removeClass('modal');
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});