$(function(){
    $('.navbar-btn').on('click', function (e) { 
        e.preventDefault();
        $('.navbar-mobile').slideToggle();
        $('.navbar-mobile').css('display', 'flex');
    });
    
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        fade: true,
        cssEase: 'linear'
      });
    
    $('.modal-close__icon').click(function (e) { 
        e.preventDefault();
        $('.wrapper-modal').fadeOut('slow')
    });

    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
         scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
       });
       return false; 
});