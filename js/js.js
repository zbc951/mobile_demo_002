$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
    })
    //footer
    $("footer ul li").click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    })
})