/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mobileHover = function () {
        $('*').on('touchstart', function () {
            $(this).trigger('hover');
        }).on('touchend', function () {
            $(this).trigger('hover');
        });
    };
function Ikona_Powrot(){
        $(".arrow_back").click(function () {
            $('html, body').animate({scrollTop: 0}, 1000, 'linear');
        });    
        $(".arrow_back_bottom").click(function () {
            $('html, body').animate({scrollTop: 0}, 1000, 'linear');
        });        
       /*var scrollTop = $(document).scrollTop();
        if ($("#test_rwd").css('display')!=="none"){
            if (scrollTop > 0){
                $(".arrow_back").css('display','block');
            }
            else
            {
                $(".arrow_back").css('display','none');
            }
        }
        else
        {

        }*/
}
function Hover_Ikon(){
    
        $(".menu_list .shop img, .menu_list .social img").on('touchstart mouseenter', function(e){
            var src = $(this).attr("src").match(/[^\.]+/) + "_over.svg";
            $(this).attr("src", src);
        });

        $(".menu_list .shop img, .menu_list .social img").on('mouseleave touchmove click', function(e){
            var src = $(this).attr("src").replace("_over.svg", ".svg");
            $(this).attr("src", src);
        });  
        
       /* $(".menu_line .menu_elements img").on('touchstart mouseenter', function(e){
            var src = $(this).attr("src").match(/[^\.]+/) + "_over.svg";
            $(this).attr("src", src);
        });

        $(".menu_line .menu_elements img").on('mouseleave touchmove click', function(e){
            var src = $(this).attr("src").replace("_over.svg", ".svg");
            $(this).attr("src", src);
        });         
        */
}
function Zwijaczek(){
        if($(".menu_trigger").outerWidth() >= 620){
            $(".on_menu_item").css('display','block');
            $(".icon_position").css('display','none');
            $(".icon_position_elements").removeClass('hide');            
            //$(".menu_separated").css('display','block');            
        }
        else{
            $(".on_menu_item").css('display','none');
            $(".icon_position").css('display','block');
            $(".icon_position_elements").addClass('hide');

            //$(".menu_separated").css('display','none');            
            
        }
}
function Wlacz_Menu(){
     $("#menu_trigger").click(function (e) {
        e.stopPropagation();
        if ($('.slide_menu').is(':visible')) {
            $(".slide_menu").velocity("fadeOut",{duration:200});
            //$('section.body_overlay').velocity("fadeOut",{duration:100});
        }
        else
        {
            $(".slide_menu").velocity("fadeIn",{duration:200});
            //$('section.body_overlay').velocity("fadeIn",{duration:100});
        }       
    });
}
function Zamknij_Menu(){
     $(".menu_content_close").click(function (e) {
        e.stopPropagation();      
        $(".slide_menu").velocity("fadeOut",{duration:200});
        $('section.body_overlay').velocity("fadeOut",{duration:100});

    });
}
function Slide_Link_Menu(){
     $(".slide_me").click(function (e) {
         e.stopPropagation();              
         e.preventDefault();         
         if ($(this).hasClass("open")){
             $(this).removeClass("open");
            $(this).next(".slider").velocity("slideUp",{duration:200});             
         }
         else{
             $(this).addClass("open");
             $(".slider").velocity("slideUp",{duration:200});             
             $(this).next(".slider").velocity("slideDown",{duration:200});             
         }
         
        //$(".slider").velocity("slideUp",{duration:200});         
        
       
        //$('section.body_overlay').velocity("fadeOut",{duration:100});
        return false;
    });
}
function Zmien_Jezyk(){
    $(".lang_choice").click(function () {
        var check_cookie = getCookie("portal_language");
        $language_to_choose = $(this).data('lang');
        if ($language_to_choose == "PL"){setCookie("portal_language", "PL", 60);}
        else if ($language_to_choose == "EN"){setCookie("portal_language", "EN", 60);}
        location.reload();
    });    
}
    $( window ).resize(function() {
       Zwijaczek(); 
       
    });
    $(window).load(function() {
        Wlacz_Menu();        
        Hover_Ikon();        
        Zamknij_Menu();        
        Zwijaczek();
        mobileHover();
        Ikona_Powrot();
        Zmien_Jezyk();
        Slide_Link_Menu();
    
    });
    $(window).scroll(function(){
     
    });    
