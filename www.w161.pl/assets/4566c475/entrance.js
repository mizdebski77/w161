/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().not('.base').length > 0) ? $active.next().not('.base') : $('#cycler img').not('.base').first();
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	      $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(window).load(function() {
new WOW().init();    
    $( ".mozaic_gallery" ).each(function( index , element ) {        
        $(this).slick({dots:false,infinite: false, pauseOnHover:false,fade:false, adaptiveHeight:false,autoplay: true,autoplaySpeed: 3000,speed: 1500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="art_next"><span>', prevArrow: '<span class="art_prev"><span>'});  
    });
    

    
    $(".faq_title").click(function (e) {

            if ($(this).hasClass("slider_faq_active")){
                $(this).next(".faq_answer").velocity("slideUp",{duration:400});
                $(this).removeClass("slider_faq_active");
                $(this).children(".plus").removeClass("rotate");
            }
            else{
                $(".faq_answer").velocity("slideUp",{duration:400});
                $(".faq_title").removeClass("slider_faq_active");
                $(".plus").removeClass("rotate");
                
                $(this).children(".plus").addClass("rotate");
                $(this).next(".faq_answer").velocity("slideDown",{duration:400});
                $(this).addClass("slider_faq_active");
                
                
            }
    
        
           
        });    
    
    //$slick = $(".animation_miejsca");
    //$slick.slick({pauseOnHover: false,dots:false,infinite: true,fade:true, adaptiveHeight:true,autoplay: true,autoplaySpeed: 100,speed: 2000,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="banner_next"><span>', prevArrow: '<span class="banner_prev"><span>'});    
    $slick = $(".slide_gallery");
    $slick.slick({pauseOnHover: true,dots:false,infinite: true,fade:false, adaptiveHeight:true,autoplay: true,autoplaySpeed: 3000,speed: 1500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="banner_next"><span>', prevArrow: '<span class="banner_prev"><span>'});    
        
    $(".slider_more").click(function (e) {

            if ($(this).hasClass("slider_active")){
                $(this).next(".slide_content").velocity("slideUp",{duration:400});
                $(this).removeClass("slider_active");
            }
            else{
                $(this).next(".slide_content").velocity("slideDown",{duration:400});
                $(this).addClass("slider_active");
            }
    
        
           
        });
 $(".slide_arrow").click(function (e) {
            if ($(this).hasClass("slider_active")){
                $(this).next(".slide_text").velocity("slideUp",{duration:400});
                $(this).removeClass("slider_active");
            }
            else{
                $(this).next(".slide_text").velocity("slideDown",{duration:400});
                $(this).addClass("slider_active");
            }
            return false;
        });        
        
        
var countDownDate = new Date("Feb 19, 2020 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    $(".days").html(days+"<br/>"+$(".days").attr('data-text'));
    $(".hours").html(hours+"<br/>"+$(".hours").attr('data-text'));
    $(".minutes").html(minutes+"<br/>"+$(".minutes").attr('data-text'));
    $(".seconds").html(seconds+"<br/>"+$(".seconds").attr('data-text'));
    });
    
        
});
