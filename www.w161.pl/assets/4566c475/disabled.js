/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).load(function() {

    $(".switch_contrast").click(function () {
           
            if(!$("body").hasClass("invertme")){

                $( ".image_link" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                });
                $( ".link" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                });
                $( ".arrow" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                });                
                $( ".content_arrow_back" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                });
                $( ".product_arrow_back" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                });  
                $( ".product_information" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                }); 
                $( ".file" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                });                   
                $( ".banner_rekrutacja" ).each(function( index ) {
                    $(this).children('a').children("img").attr("src", function(index, attr){
                        return attr.replace(".svg", "_contrast.svg");
                    });                  
                });                
               
                $("body").addClass("invertme");
            }
            else{  
                $( ".banner_rekrutacja" ).each(function( index ) {
                    $(this).children('a').children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });                
                $( ".arrow" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });                
                $( ".image_link" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });
                $( ".link" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });
                $( ".content_arrow_back" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });                                 
                $( ".product_arrow_back" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });   
                $( ".product_information" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });    
                $( ".file" ).each(function( index ) {
                    $(this).children("img").attr("src", function(index, attr){
                        return attr.replace("_contrast.svg", ".svg");
                    });                  
                });                 
                $("body").removeClass("invertme");

            }
        
            if(!$(".cart_container").hasClass("inverted_contrast")){
                
                $(".cart_container").addClass("inverted_contrast");
            }
            else{
               
                $(".cart_container").removeClass("inverted_contrast");
            }        
        
            if(!$(".aboutus_container").hasClass("inverted_contrast")){
                
                $(".aboutus_container").addClass("inverted_contrast");
            }
            else{
               
                $(".aboutus_container").removeClass("inverted_contrast");
            }
            
            if(!$(".contact_container").hasClass("inverted_contrast")){
                $(".contact_container").addClass("inverted_contrast");
            }
            else{
                $(".contact_container").removeClass("inverted_contrast");
            }            

            if(!$(".menu_static_container").hasClass("inverted_contrast")){
                $(".menu_static_container").addClass("inverted_contrast");
            }
            else{
                $(".menu_static_container").removeClass("inverted_contrast");
            }    
            
            if(!$(".boxes_common_container").hasClass("inverted_contrast")){
                $(".boxes_common_container").addClass("inverted_contrast");
            }
            else{
                $(".boxes_common_container").removeClass("inverted_contrast");
            }       
            if(!$(".boxes_banners_container").hasClass("inverted_contrast")){
                $(".boxes_banners_container").addClass("inverted_contrast");
            }
            else{
                $(".boxes_banners_container").removeClass("inverted_contrast");
            }  
            
            if(!$(".boxes_product_container").hasClass("inverted_contrast")){
                $(".boxes_product_container").addClass("inverted_contrast");
            }
            else{
                $(".boxes_product_container").removeClass("inverted_contrast");
            }                
            if(!$(".boxes_product_container2").hasClass("inverted_contrast")){
                $(".boxes_product_container2").addClass("inverted_contrast");
            }
            else{
                $(".boxes_product_container2").removeClass("inverted_contrast");
            }  
            if(!$(".boxes_partners_container").hasClass("inverted_contrast")){
                $(".boxes_partners_container").addClass("inverted_contrast");
            }
            else{
                $(".boxes_partners_container").removeClass("inverted_contrast");
            }  
            if(!$(".bip_container").hasClass("inverted_contrast")){
                $(".bip_container").addClass("inverted_contrast");
            }
            else{
                $(".bip_container").removeClass("inverted_contrast");
            }                          
            
            
            if(!$("#product_item").hasClass("inverted_contrast")){
            
                $("#product_item").addClass("inverted_contrast");
            }
            else{
                   
                $("#product_item").removeClass("inverted_contrast");
            }   
            
            if(!$("#external_container").hasClass("inverted_contrast")){
            
                $("#external_container").addClass("inverted_contrast");
            }
            else{
                   
                $("#external_container").removeClass("inverted_contrast");
            }                
            
        });

    $(".big2").click(function () {
       // alert(1);
        $(":root").css('font-size','72.5%');
        $(".aboutus_text").css('width','50%');
        //$('#boxes_product_0').isotope( 'reloadItems' ).isotope();
        //$('#boxes_product_1').isotope( 'reloadItems' ).isotope();
        //$("#boxes_banners").slick('reinit');
    });
    $(".big1").click(function () {
        $(":root").css('font-size','68.5%');
        $(".aboutus_text").css('width','45%%');
       // $('#boxes_product_0').isotope( 'reloadItems' ).isotope();
       // $('#boxes_product_1').isotope( 'reloadItems' ).isotope();
       // $("#boxes_banners").slick('reinit');
    });
    $(".normal").click(function () {
        $(":root").css('font-size','62.5%');
        $(".aboutus_text").css('width','40%');
        //$('#boxes_product_0').isotope( 'reloadItems' ).isotope();
        //$('#boxes_product_1').isotope( 'reloadItems' ).isotope();
        //$("#boxes_banners").slick('reinit');
        
    });



});
