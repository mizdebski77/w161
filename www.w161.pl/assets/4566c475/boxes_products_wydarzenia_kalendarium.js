
function Fill_Calendar(){
   $( ".kalendarium_box" ).each(function( index ) {        
       $(".choose_day[data-all='"+$(this).data('product')+"']").removeClass("offday").addClass("active");
   });  
   $('.choose_day').click(function () {     
       
       if ($(this).hasClass("active")){
           
        var selected_data = $(this).data('all');
        $("#kalendarium_boxes_product").isotope({ filter: function(){
                       var content =  $(this).data("product");;
                       return selected_data == content;   
                    }
                });          
        /*$(".kalendarium_boxes_product").css('display','none');           
        $( ".kalendarium_box" ).css('display','none');
        
        $( ".kalendarium_box[data-product='"+$(this).data('all')+"']" ).css('display','block');
        
        
        $(".category_title[data-belong]").css('display','block');
        $( ".kalendarium_boxes_product" ).each(function( index ) { $(this).css('height','auto').isotope("destroy")});
        setTimeout(function(){Start_Slicks();},100);        
        */

       }
       

        //setTimeout(function(){Check_Categories();},0);        
       
    });   
    
   
}
function Check_Categories(){
    var KS = false;
    $( ".kalendarium_box[data-belong='kolorystyka_standardowa']" ).each(function( index ) { 
        if ($(this).css('display')=="block"){KS = true;}
     });  
     if (KS == false){$(".category_title[data-belong='kolorystyka_standardowa']").css('display','none');}
     else{
         $(".category_title[data-belong='kolorystyka_standardowa']").css('display','block');;    
         $(".kalendarium_boxes_product[data-belong='kolorystyka_standardowa']").css('display','block');;    
     }
     
    var KM = false;
    $( ".kalendarium_box[data-belong='kolorystyka_muzyczna']" ).each(function( index ) { 
        if ($(this).css('display')=="block"){KM = true;}
     });  
     if (KM == false){$(".category_title[data-belong='kolorystyka_muzyczna']").css('display','none');}
     else{
         $(".category_title[data-belong='kolorystyka_muzyczna']").css('display','block');;    
         $(".kalendarium_boxes_product[data-belong='kolorystyka_muzyczna']").css('display','block');;    
         
     }     
     
    var KW = false;
    $( ".kalendarium_box[data-belong='kolorystyka_wizualna']" ).each(function( index ) {
        if ($(this).css('display')=="block"){KW = true;}
     });  
     if (KW == false){$(".category_title[data-belong='kolorystyka_wizualna']").css('display','none');}
     else{
         $(".category_title[data-belong='kolorystyka_wizualna']").css('display','block');;    
         $(".kalendarium_boxes_product[data-belong='kolorystyka_wizualna']").css('display','block');;    
         
     }      
}
function Start_Slicks(){
    
    if ($(".kalendarium_boxes_product").hasClass("connected_products")){
     
    }
    else{
    if ($('.kalendarium_boxes_product').length === 1){

        $("#kalendarium_boxes_product_1").css('padding-right','0px').isotope({
            itemSelector: '.box_placing',
            layoutMode: 'packery',
            //transformsEnabled: false,
            filter: '*',
            /*percentPosition: true,
            isFitWidth: true,
            animationOptions: {
                duration: 750,
                easing: 'linear'

            }*/
        });        
    } 
    else{
    for (i = 1; i <= $('.kalendarium_boxes_product').length; i++) { 
    if($("#kalendarium_boxes_product_"+i).hasClass('slick-initialized')){        
        //$("#kalendarium_boxes_product_"+i).slick("unslick");
    }    
    else{
        
    $("#kalendarium_boxes_product_"+i).slick({/*lazyLoad: 'ondemand',*/  dots:false,infinite: false,fade:false, adaptiveHeight:true,autoplaySpeed: 2500,speed: 500,slidesToShow: 4, slidesToScroll: 1, nextArrow: '<span class="museum_next"><span>', prevArrow: '<span class="museum_prev"><span>',
        responsive: [
    { 
     breakpoint: 950,
      settings: {
        //lazyLoad: 'ondemand',          
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
    }
    },
  /*  {
      breakpoint: 1800,
      settings: {
       // lazyLoad: 'ondemand',          
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
    }
    }, */   
    {
      breakpoint: 1200,
      settings: {
       // lazyLoad: 'ondemand',          
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
    }
    },
    {
      breakpoint: 450,
      settings: {
        //lazyLoad: 'ondemand',          
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        }).css('height','auto');  
    }
    }   
      
    }
    }
}  
  
  
function Make_History_State(){
    $filters_1 = "";
    $filters_2 = "";
    history.pushState({}, null, "/?filter_1="+$("#filter_first_hidden").val()+"&filter_2="+$("#filter_second_hidden").val());         
}

function  Start_Wydarzenia_Kalendarium(){
    Fill_Calendar();
    //Start_Slicks();
    $slick = $('#calendar_month_choose');    
    //$slick.slick({infinite: false,slidesToShow: 5,slidesToScroll: 1});   
    $slick.slick({dots:false,infinite: false,fade:false, autoplay: false,speed: 500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="calendar_next"><span>', prevArrow: '<span class="calendar_prev"><span>'});           
    $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        event.preventDefault();
        event.stopPropagation();
       // $( ".kalendarium_box" ).velocity("fadeIn",{duration:100}); 
         
        $month = $(".month_title[data-slick-index='" + nextSlide + "']").data('type');
        $("section").velocity("fadeOut",{duration:100}); 
        $("section[data-number='"+nextSlide+"']").velocity("fadeIn",{duration:100}); 
                
    });          
    
    $("#wydarzenia_boxes_product").css('padding-right','0px').isotope({
            itemSelector: '.box_placing',
            layoutMode: 'fitRows'
            //transformsEnabled: false,
            //filter: '*',
            //filter: ':nth-child(-n+12)'            
            /*percentPosition: true,
            isFitWidth: true,
            animationOptions: {
                duration: 750,
                easing: 'linear'

            }*/
        });   
    $("#kalendarium_boxes_product").css('padding-right','0px').isotope({
            itemSelector: '.box_placing',
            layoutMode: 'fitRows',
            //transformsEnabled: false,
            filter: '*',
            /*percentPosition: true,
            isFitWidth: true,
            animationOptions: {
                duration: 750,
                easing: 'linear'

            }*/
        });    
        $('.simple_filter').click(function () {            
            var myparameter = $(this).data("text-converted");
            if (myparameter == "ALL"){                                
                $("#wydarzenia_boxes_product").isotope({ filter: function(){
                        
                       return true;                  
                    }
                });
            }  
            else{
                $("#wydarzenia_boxes_product").isotope({ filter: function(){
                       var content =  $(this).data("belong");;
                       return content.includes(myparameter);                   
                    }
                });  
            }
        });  
        
    $("#komunikaty_boxes_product").slick({/*lazyLoad: 'ondemand',*/  dots:false,infinite: false,fade:false, adaptiveHeight:true,autoplaySpeed: 2500,speed: 500,slidesToShow: 4, slidesToScroll: 1, nextArrow: '<span class="museum_next"><span>', prevArrow: '<span class="museum_prev"><span>',
        responsive: [
    {
      breakpoint: 950,
      settings: {
        //lazyLoad: 'ondemand',          
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
    }
    },
    /*{
      breakpoint: 1800,
      settings: {
       // lazyLoad: 'ondemand',          
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
    }
    }, */   
    {
      breakpoint: 1200,
      settings: {
       // lazyLoad: 'ondemand',          
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
    }
    },
    {
      breakpoint: 450,
      settings: {
        //lazyLoad: 'ondemand',          
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<span class="museum_next"><span>', 
        prevArrow: '<span class="museum_prev"><span>'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        });        
        
        /*$("#komunikaty_boxes_product").css('padding-right','0px').isotope({
            itemSelector: '.box_placing',
            layoutMode: 'fitRows',
            //transformsEnabled: false,
            filter: '*',
            /*percentPosition: true,
            isFitWidth: true,
            animationOptions: {
                duration: 750,
                easing: 'linear'

            }
        }); */          
      $('.simple_filter_komunikaty').click(function () {            
            var myparameter = $(this).data("text-converted");
            if (myparameter == "ALL"){                                
                $("#komunikaty_boxes_product").isotope({ filter: function(){
                        
                       return true;                  
                    }
                });
            }  
            else{
                $("#komunikaty_boxes_product").isotope({ filter: function(){
                       var content =  $(this).data("belong");;
                       return content.includes(myparameter);                   
                    }
                });  
            }
        });          
        
    $(".filter_button").click(function(){
            var myparameter = $(this).data("text-converted");
            if (myparameter == "ALL"){                                
                $("#kalendarium_boxes_product").isotope({ filter: function(){
                        
                       return true;                  
                    }
                });
            }  
            else{
                $("#kalendarium_boxes_product").isotope({ filter: function(){
                       var content =  $(this).data("belong");;
                       return content.includes(myparameter);                   
                    }
                });  
            }        
        
    });    
        
   /* $('.filter_button').click(function () { 
            $( ".kalendarium_box" ).css('display','none');
            $( ".kalendarium_boxes_product" ).css('display','none');
            
            var myparameter = $(this).data("text-converted");
            
            $(".kalendarium_box[data-belong='"+myparameter+"']").css('display','block');
            $( ".kalendarium_boxes_product[data-belong='"+myparameter+"']").css('display','block');
            if (myparameter == "ALL"){  
                $( ".kalendarium_boxes_product" ).each(function( index ) { $(this).css('height','auto').isotope("destroy")});                
                $( ".kalendarium_boxes_product").css('display','block');                 
                $(".kalendarium_box").css('display','block');
                setTimeout(function(){Start_Slicks();},50);
            }   
            else{
                $id_slick_selected = $(".kalendarium_boxes_product[data-belong='"+myparameter+"']").attr('id');   
                if($('#'+$id_slick_selected).hasClass('slick-initialized')){
                    setTimeout(function(){
                      $("#"+$id_slick_selected).slick("unslick").isotope({
                          itemSelector: '.box_placing',
                          layoutMode: 'packery',                
                          filter: '*',
                      });              
                  },0);
                }                  
                
            }
            setTimeout(function(){;Check_Categories();},50);        
            
            
            
    });*/
        $('.OFFfilter_button').click(function () {  
            //$( ".kalendarium_box" ).velocity("fadeIn",{duration:0}); 
       
            var myparameter = $(this).data("text-converted");
            //alert(myparameter);
            if (myparameter == "ALL"){                                
                $(".kalendarium_boxes_product").velocity("slideDown", { duration: 100 });    
                $(".category_title[data-belong]").velocity("slideDown", { duration: 200 });                                 
                $( ".kalendarium_boxes_product" ).each(function( index ) { $(this).css('height','auto').isotope("destroy")});
                setTimeout(function(){Start_Slicks();},200);
                
            }
            else{
                $id_slick_selected = $(".kalendarium_boxes_product[data-belong='"+myparameter+"']").attr('id');   
                //alert($id_slick_selected);
//              alert($id_slick_selected);
                $(".kalendarium_box[data-belong!='"+myparameter+"']").css('display','block');
                //$(".kalendarium_boxes_product[data-belong!='"+myparameter+"']").velocity("slideUp", { duration: 200 }); 
                $(".category_title[data-belong!='"+myparameter+"']").velocity("slideUp", { duration: 200 });                                 
                //if(!$('#'+$id_slick_selected).hasClass('slick-initialized')){
                    $("#"+$id_slick_selected).velocity("slideDown", { duration: 100 });
                    //$(".category_title[data-belong='"+myparameter+"']").velocity("slideDown", { duration: 200 });                                 
                    
                //}
                
                if($('#'+$id_slick_selected).hasClass('slick-initialized')){
                    setTimeout(function(){
                      $("#"+$id_slick_selected).slick("unslick").isotope({
                          itemSelector: '.box_placing',
                          layoutMode: 'packery',                
                          filter: '*',
                      });              
                  },400);
                }            
                else{

                }            
            }
        setTimeout(function(){Check_Categories();},120);        

            
        });        
         
        $('.slide_button').click(function () {       
        if ($(this).hasClass("active")){
            $(this).removeClass("active");            
            $(".photo_category").addClass("active");
            $(".text_slide").velocity("slideUp", { duration: 500 });;            
        }
        else{
            $(this).addClass("active");
            $(".photo_category").removeClass("active");
            $(".text_slide").velocity("slideDown", { duration: 500 });;            
           /* var target_offset = $("#filters_list_preview").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true)-15}, 1000, 'linear');                                         */
        }        
});
}

function Filter_Actions_Start(){    
    
        $('#search_active').on('keyup',function () {       

            
            
        })      
        
        $(".text_slide").velocity("slideUp", { duration: 0 });;            
    

    
        
}


$.fn.descendantOf = function(element) {
    element = $(element)[0];
    var current = this;
    var body    = document.body;
    while (current && current != element && current != document.body) {
        current = $(current).parent()[0];
    }
    if (typeof(current) == "undefined" || typeof(current) == "null") {
        return false;
    } else if (current == element) {
        return true;
    } else if (current == document.body) {
        return false;
    }
}
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top-80;
    //return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    return ((elemTop >= docViewTop));
}
$(window).scroll(function() {
        
      
}); 
$(window).load(function() {
        Start_Wydarzenia_Kalendarium();    
    /*    $(".content_arrow_back").on('click', function(e){window.history.back();});
        $(".content_arrow_back img").on('touchstart mouseenter', function(e){
            var src = $(this).attr("src").match(/[^\.]+/) + "_over.svg";
            $(this).attr("src", src);
        });

        $(".content_arrow_back img").on('mouseleave touchmove click', function(e){
            var src = $(this).attr("src").replace("_over.svg", ".svg");
            $(this).attr("src", src);
        });          
    */
    var loading = "data:image/gif;base64,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";
    $("img.lazy").Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 100,
        delay: 200,
        visibleOnly: false,
        defaultImage: loading,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
                                $(element).css('width','100%');
                                Start_Slicks(); 

        },
        onFinishedAll: function() {
            setTimeout(function(){Start_Slicks();},200);
           // if( !this.config("autoDestroy") )
            //    this.destroy();
        }
    });    
    

             
    
    $("#text_desc").mCustomScrollbar({
        theme: "dark"
    }); 
    $(".mCSB_dragger_bar").css("background-color", "black").css('width','6px');  
    $(".mCSB_draggerRail").css("background-color", "black").css("width", "1px");        



     
});