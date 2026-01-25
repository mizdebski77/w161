function Get_Diet(diet){
    $(".diet_program").removeClass("clicked");
    $(".diet_program[data-diet='"+diet+"']").addClass("clicked");
    //$(".harmonogram_diet_title").html(diet);
    var dietAPI = "/DietApi";    
    $.getJSON( "/Diet_Api",     {
        diet_name: diet,        
     },  function( data ) {
         console.log(data);
        $.each( data, function( key, val ) {
            var $dish_name = key;
            var $element =  $.trim(key);            
            var $value = val;
            $.each( $value, function( key_diet, diet_value ) {
                if (key_diet == "harmonogram_content"){
                    diet_data = $.parseJSON(diet_value);
                
                    //console.log(diet_data);
                    var dishday = $element.replace(/ /g, '')+"_";
                    $("#"+dishday+"Monday_title").html("<span>"+$dish_name+"</span>"+diet_data.Monday.title);
                    $("#"+dishday+"Monday_text").html(diet_data.Monday.text);
                    
                    $("#"+dishday+"Tuesday_title").html("<span>"+$dish_name+"</span>"+diet_data.Tuesday.title);
                    $("#"+dishday+"Tuesday_text").html(diet_data.Tuesday.text);

                    $("#"+dishday+"Wednesday_title").html("<span>"+$dish_name+"</span>"+diet_data.Wednesday.title);
                    $("#"+dishday+"Wednesday_text").html(diet_data.Wednesday.text);

                    $("#"+dishday+"Thursday_title").html("<span>"+$dish_name+"</span>"+diet_data.Thursday.title);
                    $("#"+dishday+"Thursday_text").html(diet_data.Thursday.text);      

                    $("#"+dishday+"Friday_title").html("<span>"+$dish_name+"</span>"+diet_data.Friday.title);
                    $("#"+dishday+"Friday_text").html(diet_data.Friday.text);

                    $("#"+dishday+"Saturday_title").html("<span>"+$dish_name+"</span>"+diet_data.Saturday.title);
                    $("#"+dishday+"Saturday_text").html(diet_data.Saturday.text);

                    $("#"+dishday+"Sunday_title").html("<span>"+$dish_name+"</span>"+diet_data.Sunday.title);
                    $("#"+dishday+"Sunday_text").html(diet_data.Sunday.text); 
                }
                else{
                    $(".description_diet_slide").html(diet_value);
                }
            });
        });
    
    });
}

$(window).on('load',function(){
        Get_Diet("LOW FAT");
        $("#packages").click(function (e) {
                e.preventDefault();
                e.stopPropagation();                               
                setTimeout(function () {                
                    var target_offset = $(".order_container").offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                    $(".delivery_cost_diet_slide").velocity("slideDown",{duration:400});
                    $(".delivery_cost_diet").addClass("clicked");
                }, 200);                
        });          
        $(".goto_order").click(function (e) {
             e.preventDefault();
             e.stopPropagation();
             window.location.href = "/Diet/Buy/?diet="+$(".diet_program.clicked").attr("data-diet"); 
        });        
        $(".d_order").click(function (e) {
             e.preventDefault();
             e.stopPropagation();
             var link = "/Diet/Buy/?diet="+encodeURIComponent($(this).attr("data-diet"));
             window.location.href = link;
        });                
        $("#diet_menu_button").click(function (e) {
                e.preventDefault();
                e.stopPropagation();                               
                setTimeout(function () {                
                    var target_offset = $(".harmonogram_container").offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                }, 200);                
        });    
        $("#diet_order_button").click(function (e) {
                e.preventDefault();
                e.stopPropagation();                               
                setTimeout(function () {                
                    var target_offset = $(".order_container").offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                }, 200);                
        });    
        $("#delivery_cost_button").click(function (e) {
                e.preventDefault();
                e.stopPropagation();                               
                setTimeout(function () {                
                    var target_offset = $(".harmonogram_container").offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                    $(".delivery_cost_diet_slide").velocity("slideDown",{duration:400});
                    $(".delivery_cost_diet").addClass("clicked");
                }, 200);                
        });         
        
        $(".mozaic_element.blue").click(function (e) {
                e.preventDefault();
                e.stopPropagation();                               
                setTimeout(function () {                
                    var target_offset = $(".harmonogram_container").offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                }, 200);                
        });   
        $(".mozaic_element.orange").click(function (e) {
                e.preventDefault();
                e.stopPropagation();  
                setTimeout(function () {                
                    var target_offset = $(".order_container").offset();
                    var target_top = target_offset.top;                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                }, 200);                
         });         
        
        $(".foodie_diet").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();                               
                    Get_Diet($(this).data('diet'));     
                    setTimeout(function () {                
                    var target_offset = $(".harmonogram_container").offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                    }, 200);                     
        });   
        $(".diet_program").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();                               
                    Get_Diet($(this).data('diet'));     
                    setTimeout(function () {                
                    var target_offset = $(".harmonogram_container").offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                    }, 200);                     
        });          
        $(".description_diet").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();     
                    if ($(this).hasClass("clicked")){
                        $(this).removeClass('clicked')
                        $(this).next().velocity("slideUp",{duration:400});

                    }
                    else{
                        $(this).addClass('clicked')
                        $(this).next().velocity("slideDown",{duration:400});
                        
                    }
        });
        $(".delivery_cost_diet").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();     
                    if ($(this).hasClass("clicked")){
                        $(this).removeClass('clicked')
                        $(this).next().velocity("slideUp",{duration:400});

                    }
                    else{
                        $(this).addClass('clicked')
                        $(this).next().velocity("slideDown",{duration:400});
                        
                    }
        });        
        $(".dayweek_slide").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();     
                    if ($(this).hasClass("clicked")){
                        $(this).removeClass('clicked')
                        $(this).next().velocity("slideUp",{duration:400});

                    }
                    else{
                        $(this).addClass('clicked')
                        $(this).next().velocity("slideDown",{duration:400});
                        
                    }
        }); 
        $(".dish_title").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();     
                    if ($(this).hasClass("clicked")){
                        $(this).removeClass('clicked')
                        $(this).next().velocity("slideUp",{duration:400});

                    }
                    else{
                        $(this).addClass('clicked')
                        $(this).next().velocity("slideDown",{duration:400});
                        
                    }
        });    
        $(".dish_content_slide").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();     
                    if ($(this).prev().hasClass("clicked")){
                        $(this).prev().removeClass('clicked')
                        $(this).velocity("slideUp",{duration:400});

                    }
                    else{
                        //$(this).praddClass('clicked')
                        //$(this).next().velocity("slideDown",{duration:400});
                        
                    }
        });           
        
        
        
        $(".harmonogram_part").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(".boxes_program").children(".box_placing").children(".box_content").css("display","block");
                if ($(this).children(".harmonogram_info").children('.h_icon').children("img").hasClass("rotate_plus")){
                    $('.h_desc').velocity("slideUp",{duration:400});
                    $('.harmonogram_content').velocity("slideUp",{duration:400});
                    $("img").removeClass('rotate_plus');
                }
                else{
                    $('.h_desc').velocity("slideUp",{duration:400});
                    $('.harmonogram_content').velocity("slideUp",{duration:400});

                    $(this).children(".harmonogram_info").children('.h_icon').children("img").addClass('rotate_plus');

                    $(this).children(".harmonogram_info").children('.h_desc').velocity("slideDown",{duration:400});     
                    $(this).children('.harmonogram_content').velocity("slideDown",{duration:400});     
                    var full_url = $(this);

                    setTimeout(function () {                
                    var target_offset = $(full_url).offset();
                    var target_top = target_offset.top;
                    
                    $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true) + 1}, 700, 'linear');                
                    }, 500);                    
                }                
                

    });
    $(".box_content a").click(function (e) {
                e.preventDefault();
                e.stopPropagation();                               
                window.location.href = ($(this).attr('href'));
    });
    $(".boxes_program").children(".box_placing").children(".box_content").click(function (e) {
          e.preventDefault();
          e.stopPropagation();
            
            //$('.gallery_part').css('opacity','0');       
            if ($(this).children('.box_slidedown').css('display')==="block"){
                $(this).children('.title_part').children('.title_content').children('.h_icon').children("img").removeClass("rotate");
                $('.box_slidedown').velocity("slideUp",{duration:1000});         
                $(".plus_white").removeClass('rotate_plus');
                $(".x_blue").removeClass('rotate_plus');
                return;
            }
            else{
                $('.box_slidedown').velocity("slideUp",{duration:1000});         
                $(this).children('.title_part').children('.title_content').children('.h_icon').children("img").addClass("rotate");
                $(".plus_white").removeClass('rotate_plus');   
                $(".x_blue").removeClass('rotate_plus');
            }
                    
            var element = $(this).children('.box_slidedown');
            if ($(this).children('.box_slidedown').children('.text_part').text().length<10){return;}   

                //$(this).children(".title_part").css('background-color',"#ffffff");
                //$(this).children(".date_part").css('background-color',"#ffffff");                
            $(this).children('.box_slidedown').velocity("slideDown",{duration:500,complete: function() { 

                                
                    
                var target_offset = $(element).parent().offset();
                var target_top = target_offset.top;
                $('html, body').animate({scrollTop: target_top }, 1000, 'linear');
               // element.matchHeight({byRow: true});
 
                
                if ($global_program_slick !== ""){$global_program_slick.slick("unslick");}
                //$global_program_slick = $(element).children('.gallery_part');
            //$slick.slick({infinite: false,slidesToShow: 5,slidesToScroll: 1});               
                //$global_program_slick.slick({dots:false,infinite: true,fade:false, autoplay: true,autoplaySpeed: 4000,speed: 500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="art_next"><span>', prevArrow: '<span class="art_prev"><span>'});            
                setTimeout(function () {     
                  
                    $('.gallery_part').velocity("fadeIn",{duration:200});
                   if ($("#test_rwd").css('display')==="block"){
                     var height_left = element.children('.gallery_part').outerHeight(true);
                     var height_right = element.children('.text_part').outerHeight(true);
                     //alert(height_left + " " + height_right);
                     if (height_left<height_right){
                         element.children('.gallery_part').css('height',element.children('.text_part').css('height'));                    
                     }
                     else{
                         //alert(1);
                         element.children('.text_part').css('height',element.children('.gallery_part').css('height'));                                        
                     }    
                    }
                },100);            
            }});
            $(this).children('.title_part').children('.plus_white').addClass('rotate_plus');
            $(this).find(".x_blue").addClass('rotate_plus');            
        
            
            //$(this).children('.box_slidedown').velocity("slideDown",{duration:400});

            /*$('section.body_overlay').velocity("fslideUp",{duration:400});*/    
        });  
  




    function Filter_Diet_Harmonogram($diet){
            //$diet = $(this).data("diet");
            $(".chosen_diet").children("span.name").html($(this).data("diet_title"));
            $(".chosen_diet").children("span.kcal").html($(this).data("diet_kcal"));
            //alert($(".opis_diety[data-filter='"+$diet+"']").data("photo"));
            $(".h_desc").html($(".opis_diety[data-filter='"+$diet+"']").html());
            $("#diet_photo > img").attr("src",$(".opis_diety[data-filter='"+$diet+"']").data("photo"));
            $(".menu_tygodniowe").css('display','none');
            $(".menu_tygodniowe."+$diet).css('display','block'); 
            //alert(".menu_tygodniowe."+$diet);
    }
    
    
    $('#load_data_here').on('click','.click_box_diet',function (e) {  
            e.preventDefault();
            e.stopPropagation();
            $diet = $(this).data("diet");
            $diet_id = $(this).data('diet-id');
            $("#main_zamow_diete").attr("href","/Diet/Buy?diet="+$diet_id);
            $(".chosen_diet").children("span.name").html($(this).data("diet_title"));
            $(".chosen_diet").children("span.kcal").html($(this).data("diet_kcal"));
            //alert($(".opis_diety[data-filter='"+$diet+"']").data("photo"));
            $(".h_desc").html($(".opis_diety[data-filter='"+$diet+"']").html());
            $("#diet_photo > img").attr("src",$(".opis_diety[data-filter='"+$diet+"']").data("photo"));
            $(".menu_tygodniowe").css('display','none');
            $(".menu_tygodniowe."+$diet).css('display','block');
            var target_offset = $("#goto_opis_diety").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true)-15}, 1000, 'linear');                                         
            
    }); 
    $( window ).resize(function() {
                     
    });
    
Filter_Diet_Harmonogram("standard");    
});