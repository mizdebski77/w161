/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(window).load(function() {
    
$   (".banner_rekrutacja img").on('touchstart mouseenter', function(e){
            var src = $(this).attr("src").match(/[^\.]+/) + "_over.svg";
            $(this).attr("src", src);
        });

        $(".banner_rekrutacja img").on('mouseleave touchmove click', function(e){
            var src = $(this).attr("src").replace("_over.svg", ".svg");
            $(this).attr("src", src);
        });     
    
    $slick = $('#boxes_banners');
    //$slick.velocity("fadeIn",{duration:500});
    
    //$slick.slick({infinite: false,slidesToShow: 5,slidesToScroll: 1});   
    $slick.slick({dots:true,infinite: true,fade:false, adaptiveHeight:false,autoplay: true,autoplaySpeed: 5000,speed: 2500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="art_next"><span>', prevArrow: '<span class="art_prev"><span>'});
    /*$slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        event.preventDefault();
        event.stopPropagation();

     
       var left = $('.mask_circle_down').offset().left;  // Get the calculated left position
       var left2 = $('.mask_circle_up').offset().left;       
        $(".mask_circle_down").css('left',left)  // Set the left to its calculated position
             .animate({"left":left2}, "slow").animate({"left":left}, "slow");
    });*/
    $( window ).resize(function() {
      /*var left2 = $('.mask_circle_up').offset().left;
        $(".mask_circle_down").clearQueue();
        $(".mask_circle_down").stop();
        $(".mask_circle_down").css('left',left2-10);*/
    })    
    $(window).scroll(function(){
        if ($("#boxes_banners").outerHeight(true) < $(window).scrollTop()){
             //$("#boxes_banners").slick('slickPause');
         }
        else{
            //$("#boxes_banners").slick('slickPlay');
        }
    });
    
});
