 var dir ="";
 
 
function Click_Mieszkanie(){
    $(".floor g").click(function () {               
        var thisid = $(this).attr('id');
        window.location.href = "/Mieszkanie/"+thisid;
        /*setTimeout(function () {
            $("."+thisid).addClass("active");              
            var target_offset = $("."+thisid).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);*/                
    });
   $(".floor polygon").click(function () {               
        var thisid = $(this).attr('id');
        window.location.href = "/Mieszkanie/"+thisid;
        /*setTimeout(function () {
            $("."+thisid).addClass("active");              
            var target_offset = $("."+thisid).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_static_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);*/                
    });    
} 
 
function Adjust_Color_Line()
{
    
    $(window).on('orientationchange', function(){
        var diff = ($("#article_item").outerHeight() - 50 ) - $("#fly_content").outerHeight(true) ;
        // $(".fly_content .content_absolute").css('height',$("#article_item").outerHeight() + "px");
        if (diff<0){
           
            $("#connected_container").css('margin-top',(Math.abs(diff)+30) + 'px');
            $(".fly_content .content_absolute").css('height','auto');
           
        }
        else{
            $(".fly_content .content_absolute").css('height',($("#article_item").outerHeight()-50) + "px");            
            $(".fly_content .content_absolute").css('border-bottom-width','0px');            
            $("#connected_container").css('margin-top',0 + 'px');
        }      
    });
   $( window ).resize(function() {

        var diff = ($("#article_item").outerHeight() - 50 ) - $("#fly_content").outerHeight(true) ;
        // $(".fly_content .content_absolute").css('height',$("#article_item").outerHeight() + "px");
        if (diff<0){
            $("#connected_container").css('margin-top',(Math.abs(diff)+30) + 'px');
            $(".fly_content .content_absolute").css('height','auto');  
            $(".fly_content .content_absolute").css('border-bottom-width','100px');        
            
        }
        else{
            $(".fly_content .content_absolute").css('height',($("#article_item").outerHeight()-50) + "px");            
            $(".fly_content .content_absolute").css('border-bottom-width','0px');        
            
            $("#connected_container").css('margin-top',0 + 'px');
        }         

    }); 
    
    var diff = ($("#article_item").outerHeight() - 100) - $("#fly_content").outerHeight(true) ;
    //alert($("#fly_content").outerHeight(true) );
    
    //$(".fly_content .content_absolute").css('height',$("#article_item").outerHeight()  + "px");
    
    if (diff<0){
        $(".fly_content .content_absolute").css('height','auto');        
        $("#connected_container").css('margin-top',(Math.abs(diff)+30) + 'px');
        $(".fly_content .content_absolute").css('border-bottom-width','100px');    
    }
    else{
            $(".fly_content .content_absolute").css('height',($("#article_item").outerHeight(true) - 50) + "px");            
            $(".fly_content .content_absolute").css('border-bottom-width','0px');        
            $("#connected_container").css('margin-top',0 + 'px');
    }       
    
}
function ADD_PRINT(){
        
        $(".printme").on('click', function(e) {
             $("#article_item").print({
            globalStyles:true ,
            mediaPrint: false,
            stylesheet: $("[media='print']").attr('href'),
            noPrintSelector: ".no-print",
            iframe: true,
            append: null,
            prepend: null,
            manuallyCopyFormValues: true,
            deferred: $.Deferred(),
            timeout: 400
            });
    });
}
 
 $( document ).ready(function() {
        //history.pushState("", document.title, window.location.pathname);
        $(".content_arrow_back").on('click', function(e){window.history.back();});
        $(".product_content_arrow_back").on('click', function(e){window.location.href="/Mieszkania";});
        
        $(".content_arrow_back img").on('touchstart mouseenter', function(e){
            var src = $(this).attr("src").match(/[^\.]+/) + "_over.svg";
            $(this).attr("src", src);
        });

        $(".content_arrow_back img").on('mouseleave touchmove click', function(e){
            var src = $(this).attr("src").replace("_over.svg", ".svg");
            $(this).attr("src", src);
        });           
});


$(window).load(function () {
    $('.goBackArrow').on('click', function (e) {e.preventDefault();e.stopPropagation();window.history.back();});
    Click_Mieszkanie();
    Start_All();
    ADD_PRINT();
    Adjust_Color_Line();
});
function Start_All(){
 $('.song').on('click', function() { 
       $(".song").removeClass("active_song");
       $(this).addClass("active_song");
       var audio = $(this).data('music');
       var audio_el = $("#audio_player");
       var video_link = "";
       var audio_mp3 = audio + ".mp3";
       var html = "";
        html += '<audio id="someAudio" controls="controls" autoplay>';
        html += '<source src="'+audio_mp3+'"  type="audio/mp3" />';        
        html += '</audio>';                     
       
       var html ="";
       //html += ' <iframe src="'+video+'?html5=1&rel=0&controls=0&showinfo=0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"> </iframe> ';
       $("#audio_player").children('source').attr('src',audio);
        audio_el[0].pause();
        audio_el[0].load();//suspends and restores all audio element
        audio_el[0].play();
    //audio[0].play(); changed based on Sprachprofi's comment below
        audio_el[0].oncanplaythrough = audio[0].play();       
       //alert($("#audio_player").children('source').attr('src'));
       //$("#video_container").html(html); 
       //$("#films_overlay").velocity("fadeIn", { duration: 500 });
       
       return false;
   });       
   
  /* $(".color").click(function(e) {
        e.preventDefault();
       
        var src = $("#panty_photo").attr('src');
        
        if (src.indexOf("_")===-1){var txt = src.substr(0,src.indexOf(".png"));}
        else{var txt = src.substr(0,src.indexOf("_"));}        
        
        var ending = $(this).data('ending');        
        src = txt +ending+".png";
        var image = new Image();
        document.body.appendChild(image);
        $(image).on('load',function(){
            $("#panty_photo").fadeOut(400, function() {
                       $("#panty_photo").attr('src',src);                
                       $("#panty_photo").fadeIn(400);
                       $("#zoomimg").trigger('zoom.destroy').zoom({'magnify':1.1,
                           onZoomIn : function(){ $("#panty_photo").css('display','none');},
                           onZoomOut : function(){$("#panty_photo").css('display','block');}
                           }); 
                           image.remove();
            });
        });
        image.src = src;

        
       
    });  */  
    
   

     //$("#product_gallery_photo").zoom({'magnify':2,
        //onZoomIn : function(){ $("#panty_photo").css('display','none');},
        //onZoomOut : function(){$("#panty_photo").css('display','block');}
       // });     
        
     

    
    
   /* $(".article_content").mCustomScrollbar({
        theme: "dark"
    });
    $(".mCSB_dragger_bar").css("background-color", "#4a4037");
    $(".mCSB_draggerRail").css('background-color',"transparent");
    $(".mCSB_dragger_bar").css('width',"5px");
*/
    if ($("#test_rwd").css('display') !== 'none')
    {
       // $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'fast', overlay_gallery: false, deeplinking: false, keyboard_shortcuts: false, social_tools: false, allow_resize: true, allow_expand: false});
    }

    $slick1 = $('#boxes_fragment');
    $slick1.slick({
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<span class="news_next"><span>', 
        prevArrow: '<span class="news_prev"><span>'
    });
    $('head').append('<style type="text/css">.fly_content .content_absolute::before{bottom' + $("#article_item").outerHeight(true)+ '!important;}</style>');
    
    

    $slick = $('.scroller_gallery');
    //$slick = $('#gallery_first');    
    //$slick.slick({infinite: false,slidesToShow: 5,slidesToScroll: 1});
    if ($slick.children().length > 0){
        $slick.css('display','block');       
        $slick.slick({infinite:false, slidesToShow: 1,   variableWidth: true, slidesToScroll: 1, nextArrow: '<span class="product_next"><span>', prevArrow: '<span class="product_prev"><span>'});
    }
    else
    {
        $slick.css('display','none');
    }
    
    $('.gallery_image').on('click', function (e) {
        var image = $(this).children('img').attr('src');
        //alert(image);
        $(".gallery_hidden").children("a[href='"+image+"']").trigger('click');
        
    });
    $('.scroller_gallery div.scroller_element').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var nextSlide = parseInt($(this).attr('data_image_slide')) ;

        //$(".photo_description").children('section').fadeOut('fast');
        //alert($(".scroller_gallery div[data_image_slide='" + nextSlide + "']").css('background-image'));
        $("#product_gallery_photo").fadeOut('fast', function () {
            //$("#product_gallery_photo").css('background-image', $(".scroller_gallery div[data_image_slide='" + nextSlide + "']").css('background-image'));
            //$("#product_gallery_photo a").attr('href', $("#scroller_gallery div[data_image_slide='" + nextSlide + "'] img").attr('data_big_photo'));
            $("#product_gallery_photo img").attr('src', $("#scroller_gallery div[data_image_slide='" + nextSlide + "'] img").attr('data_big_photo'));            
            //$(".photo_desc").html("").html($("#scroller_gallery div[data_image_slide='" + nextSlide + "'] img").data('photo-desc'));                        
            //$(".exhibition_description").show().children('section:nth-child(' + nextSlide + ')').fadeIn('fast');
            //$(".photo_description section:nth-child(" + (nextSlide + 1) + ")").fadeIn("fast");
            $("#product_gallery_photo").fadeIn('fast',function () {});            
        });


    });

    $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        event.preventDefault();
        event.stopPropagation();
        //var nextSlide = parseInt($(this).attr('data_image_slide')) + 1;

        $(".photo_description").children('section').fadeOut('fast');
        //alert($(".scroller_gallery div[data_image_slide='" + nextSlide + "']").css('background-image'));
        $("#product_gallery_photo").fadeOut('fast', function () {
            //$("#product_gallery_photo").css('background-image', $(".scroller_gallery div[data_image_slide='" + nextSlide + "']").css('background-image'));
            //$("#product_gallery_photo a").attr('href', $("#scroller_gallery div[data_image_slide='" + nextSlide + "'] img").attr('data_big_photo'));
            $("#product_gallery_photo img").attr('src', $("#scroller_gallery div[data_image_slide='" + nextSlide + "'] img").attr('src'));
            //$(".photo_desc").html("").html($("#scroller_gallery div[data_image_slide='" + nextSlide + "'] img").data('photo-desc'));                        
            //$(".exhibition_description").show().children('section:nth-child(' + nextSlide + ')').fadeIn('fast');
            //$(".photo_description section:nth-child(" + (nextSlide+1) + ")").fadeIn("fast");
            $("#product_gallery_photo").fadeIn('fast',function () {});           
        });
    });    

    //$('.close_article').on('click', function (e) {/*window.location.reload(false);history.go(-1);return false;*/});
    $('.go_back').on('click', function (e) {e.preventDefault();e.stopPropagation();window.history.back();});

}

 function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}