
    
var actual_news_isotope="";
var only_news_isotope="";

function Run_Boxes_Periods(){
    

    var boxes_isotope_period = $('#boxes_periods_0');    
    boxes_isotope_period.isotope({
        itemSelector: '.box_placing',
        layoutMode: 'packery',
        transformsEnabled: false,
        filter: '*',
        percentPosition: true,
        isFitWidth: true,
        animationOptions: {
            duration: 750,
            easing: 'linear'

        }
    });  
    $('.filter_oferta').on('click',function (e) {
            $("#boxes_periods_0").isotope({filter: '.oferta'});
            $(".filter_oferta").addClass('active');
            $(".filter_uslugi").removeClass('active');
            Start_Slicks_Periods_Again();     
            history.pushState({}, null, "/#filter_oferta");                     
                
     });    
    $('.filter_uslugi').on('click',function (e) {
            $("#boxes_periods_0").isotope({filter: '.uslugi'});
            $(".filter_oferta").removeClass('active');
            $(".filter_uslugi").addClass('active');            
            Start_Slicks_Periods_Again();         
            history.pushState({}, null, "/#filter_uslugi");                     
                
     });     
        
}
 
    
$(window).load(function() {
    
    
    
    Run_Boxes_Periods();

    //Start_Slicks_Periods();

   
    var url = window.location.href;
    var hash = url.substring(url.indexOf("#") + 1);
    if (url.indexOf("#") != -1){
    if (hash === "filter_oferta"){ setTimeout(function () {$(".filter_oferta").trigger("click");},200);}
    else if (hash === "filter_uslugi"){ setTimeout(function () {$(".filter_uslugi").trigger("click");},200);}
    else if (hash === "promocje"){ setTimeout(function () {filter_promocje();},200);}
    else if (hash === "realizacje"){ setTimeout(function () {$(".filter_element#43").trigger("click");},200);}
    else if (hash === "blog"){ setTimeout(function () {$(".filter_element#45").trigger("click");},200);}
    
    else{
    var target_offset = $("." + hash).offset(); 
           setTimeout(function () {    
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
            if ($(".menu_static_container").hasClass("option")){
                $(".menu_static_container").css('border-color','black');
            }    
        } 
    }
});