function Make_History_State($param){
   // $filters_1 = "";
  //  $filters_2 = "";
    history.pushState({}, null, "/#"+$param);         
}

$(window).bind('hashchange', function(e) {
            e.preventDefault();
            e.stopPropagation();
            setTimeout(function () {
                $(".slide_menu").velocity("fadeOut",{duration:200});
                $('section.body_overlay').velocity("fadeOut",{duration:400});    
                hash = location.hash;

                var url = hash
                if (url.indexOf("#oinwestycji") >= 0)
                   {
                       var target_offset = $(".w161_start_info_container").offset();
                       var target_top = target_offset.top;
                       $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                  
                   }     
                   if (url.indexOf("#aktualnosci") >= 0)
                   {
                       var target_offset = $(".aktualnosci_w161").offset();
                       var target_top = target_offset.top;
                       $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                          
                   }   
                   if (url.indexOf("#lokalizacja") >= 0)
                   {
                       var target_offset = $(".boxes_product_container").offset();
                       var target_top = target_offset.top;
                       $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                           
                   }  
                   if (url.indexOf("#contactus") >= 0)
                   {
                       var target_offset = $(".contact_rodo").offset();
                       var target_top = target_offset.top;
                       $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                                   
                   }     
             
                
            }, 700);     
            return false;       
});

$(window).load(function() {

    setTimeout(function () {

    var url = window.location.href;
   
    if (url.indexOf("#oinwestycji") >= 0)
    {
            $(".slide_menu").velocity("fadeOut",{duration:200});
        $('section.body_overlay').velocity("fadeOut",{duration:400});        
        var target_offset = $(".w161_start_info_container").offset();
        var target_top = target_offset.top;
        $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                  
    }     
    if (url.indexOf("#aktualnosci") >= 0)
    {
            $(".slide_menu").velocity("fadeOut",{duration:200});
        $('section.body_overlay').velocity("fadeOut",{duration:400});                
        var target_offset = $(".aktualnosci_w161").offset();
        var target_top = target_offset.top;
        $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                          
    }   
    if (url.indexOf("#lokalizacja") >= 0)
    {
            $(".slide_menu").velocity("fadeOut",{duration:200});
        $('section.body_overlay').velocity("fadeOut",{duration:400});        
        var target_offset = $(".boxes_product_container").offset();
        var target_top = target_offset.top;
        $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                           
    }  
    if (url.indexOf("#contactus") >= 0)
    {
            $(".slide_menu").velocity("fadeOut",{duration:200});
        $('section.body_overlay').velocity("fadeOut",{duration:400});        
        var target_offset = $(".contact_rodo").offset();
        var target_top = target_offset.top;
        $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)+5}, 1000, 'linear');                                                                   
    }     
    if (url.indexOf("#aktualnosci1") >= 0)
    {       
            $(".slide_menu").velocity("fadeOut",{duration:200});
        $('section.body_overlay').velocity("fadeOut",{duration:400});        
        var target_offset = $(".aktualnosci_w1611").offset();
        var target_top = target_offset.top;
        $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-15}, 1000, 'linear');                                                 
    }
        
        else{
            setTimeout(function () {
            $(".slide_menu").velocity("fadeOut",{duration:200});
                $('section.body_overlay').velocity("fadeOut",{duration:400});    
                hash = location.hash.replace("#", "#goto_");
                
                
                var target_offset = $(hash).offset();
                var target_top = target_offset.top;
                $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-10}, 1000, 'linear');
            }, 700);     
            return false;              
        }
       }, 900);     
       
       
 });