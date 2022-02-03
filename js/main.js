var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});


$('.swiper_arrow_next').click(function(){
    $(this).css('background-image','url("./images/on_next.png")');
});

$('.swiper_arrow_prev').click(function(){
    $(this).css('background-image','url("./images/on_prev.png")');
});


swiper.on('slideChange', function () {
    $('.swiper_arrow_next').css('background-image','url("./images/off_next.png")');
    $('.swiper_arrow_prev').css('background-image','url("./images/off_prev.png")');

    console.log('slide changed');
});



$('.bg-holder').parallaxScroll({
    friction: 0.15
});