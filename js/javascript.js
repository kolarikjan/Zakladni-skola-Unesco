function fix_homepage_slider() {
    var height =$(".homepage-slider .slider-text").height() - $(".homepage-slider .item img").height();
    $(".homepage-categories").css("margin-top", height);
    height = height.toString().replace('-','');
    $(".homepage-categories .counters-row .counters-col").css("height", height + "px");
}
$(document).ready(function () {
    $('.about-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        items:1,
        margin:1
    });
    $('.news-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/slider-arrow1.svg' alt='arrow'>","<img src='img/slider-arrow.svg' alt='arrow'>"],
        dots: false,
        margin:30,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            993:{
                items:3,
                nav:false
            },
            1200:{
                items:4,
                nav:false
            }
        }
    });
    $('.partners-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/slider2-arrow1.svg' alt='arrow'>","<img src='img/slider2-arrow.svg' alt='arrow'>"],
        dots: false,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            993:{
                items:3,
                nav:false
            },
            1200:{
                items:5,
                nav:false
            }
        }
    });
});
$(window).resize(function () { 
    
});
