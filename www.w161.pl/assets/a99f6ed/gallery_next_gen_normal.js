var dir ="";
function Make_History_Push_State(){
   // $filters_1 = "";
  //  $filters_2 = "";
    history.pushState({}, null, window.location.href.split('?')[0]+"#opened_gallery");     
    history.pushState({}, null, window.location.href.split('?')[0]+"|fullscreen");     
    //$("#return_search").val($param);
}
$(window).bind('hashchange', function(e) {
    var url = window.location.href;
    if (url.indexOf("#opened_gallery") >= 0)
    {
        $('.close_gallery').trigger("click");
    }    
    });
$( document ).ready(function() {
    
 //   history.pushState("", document.title, window.location.pathname);
/*var audio = document.getElementById('audio_player');
audio.addEventListener('play', function() { /*alert("song_started"); });            
audio.addEventListener('ended', function() { $(".active_song").parent().next().children(".song").trigger('click');});            
        */
});
$(window).load(function () {
    

/*
if (myAudio.duration > 0 && !myAudio.paused) {

    //Its playing...do your job
} else {


}*/  
$('.song').on('click', function() { 
       $(".song").removeClass("active_song");
       $(this).addClass("active_song");
       var audio = $(this).data('music');
       var audio_el = $("#audio_player");
       var video_link = "";
       var audio_mp3 = audio + ".mp3";
       //alert(audio_mp3);
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
        var myAudio = document.getElementById('audio_player');

        if (myAudio.duration > 0 && !myAudio.paused) {

            //Its playing...do your job

        } else {

        }        
       return false;
   });           
    
    $('.go_back').on('click', function (e) {e.preventDefault();e.stopPropagation();window.history.back();});
    
$('.fullscreen').on('click','.type_film', function(e) {
        e.preventDefault();
        e.stopPropagation();

       var video = $(this).data('video');
       var video_link = "";
       var video_mp4 = video_link + video + "";
       var video_webm = video_link + video + ".webm";   
       var html = "";
        html += '<video id="someVideo" controls="controls" autoplay>';
        html += '<source src="'+video_mp4+'"  type="video/mp4" />';
        html += '<source src="'+video_mp4.replace(".mp4",".webm")+'"  type="video/webm" />';        
        html += '</video>';                     
       //var html ="";
       //html += ' <iframe src="'+video+'?html5=1&rel=0&controls=0&showinfo=0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"> </iframe> ';
       //$("#video_container").children('video').children('source').attr('src',video);
       //$("#video_container").html(html);
       $(this).children('a').children('img').css('opacity','0');
       $(this).children(".video_overlay").html(html).velocity("fadeIn", { duration: 500 });;
       //$("#films_overlay").velocity("fadeIn", { duration: 500 });
       
       return false;
   }); 
   
$('.fullscreen').on('click','.type_youtube', function(e) {
        e.preventDefault();
        e.stopPropagation();
       var video = $(this).data('video');
       var video_link = "";
       var video_mp4 = video_link + video + "";
       var video_webm = video_link + video + ".webm";   
       /*var html = "";
        html += '<video id="someVideo" controls="controls" autoplay>';
        html += '<source src="'+video_mp4+'"  type="video/mp4" />';
        html += '<source src="'+video_mp4.replace(".mp4",".webm")+'"  type="video/webm" />';        
        html += '</video>';                     */
       var html ="";
       html += ' <iframe src="'+video+'?html5=1&rel=0&controls=0&showinfo=0&autoplay=1" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"> </iframe> ';
       //$("#video_container").children('video').children('source').attr('src',video);
       //$("#video_container").html(html);
       $(this).children('a').children('img').css('opacity','0');
       $(this).children(".video_overlay").html(html).velocity("fadeIn", { duration: 500 });;
       //$("#films_overlay").velocity("fadeIn", { duration: 500 });
       
       return false;
   });        
       
    
    $('.close_gallery').on('click', function(e) {          
        e.preventDefault();
        e.stopPropagation();
        //history.pushState({}, null, window.location.href.split('#')[0]);     
        history.back(3);
        
        $(".gallery_next_gen").removeClass('fullscreen');        
        
        $slick = $('#gallery_pierwsza');
        $slick.slick('unslick');     
        $slick = $('#gallery_pierwsza');        
        $slick.slick({infinite:false, slidesToShow: 1,   variableWidth: true, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});

        $slick = $('#gallery_druga');
        $slick.slick('unslick');     
        $slick = $('#gallery_druga');        
        $slick.slick({infinite:false, slidesToShow: 1,   variableWidth: true, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});        
        
        $("#someVideo").trigger('pause');
        $(".video_overlay").html("").velocity("fadeOut", { duration: 500 });;;
        
        $(".gallery_next_gen_element").removeClass("slide_active");         
        $(".gallery_next_gen_element[data-slick-index='" + global_slick_index + "']").addClass("slide_active"); 
        
        $("#photo_desc_pierwsza").html($("#gallery_pierwsza .gallery_next_gen_element[data-slick-index='" + 0 + "']").children(".next_gen_desc").html());  
        $("#photo_desc_druga").html($("#gallery_druga .gallery_next_gen_element[data-slick-index='" + 0 + "']").children(".next_gen_desc").html());                
        
        //$(".photo_description").html($(".gallery_next_gen_element[data-slick-index='" + global_slick_index + "']").children(".next_gen_desc").html());        
        //$("#films_overlay").velocity("fadeOut", { duration: 500 });   
       
    }); 
$(".gallery_next_gen").on('click','video', function(e) {
      e.preventDefault();
      e.stopPropagation();
});
$(".gallery_next_gen").on('click','.gallery_next_gen_element', function(e) {
       e.preventDefault();
       e.stopPropagation();
       $galeria=$(this).parent().parent().parent().attr("data-gallery");
    
        if ($(".gallery_next_gen").is('.fullscreen')){
            
        }
        else{
       var initial_slide = $(this).data('slick-index');
        $slick = $('#gallery_pierwsza');
        $slick.slick('unslick');
        if ($('#gallery_druga').length){
            $slick = $('#gallery_druga');
            $slick.slick('unslick');        
        }
        $(this).parent().parent().addClass('fullscreen');
        Make_History_Push_State();        
        $slick = $('#gallery_'+$galeria);
        $slick.slick({initialSlide: initial_slide, dots:false,infinite: false,fade:false, adaptiveHeight:false,autoplay: false,autoplaySpeed: 3000,speed: 500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});        
        //VERSION CENTER MODE FULLSCREEN
        //$slick.slick({initialSlide: initial_slide, dots:false,infinite: false,fade:false,autoplay: false,slidesToShow: 1, centerMode: true,variableWidth: true, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});                
          
        $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $("#someVideo").trigger('pause');
            $(".video_overlay").html("").velocity("fadeOut", { duration: 500 });;;            
        });        
        
        //var image = $(this).children('img').attr('src');
        //alert(image);
       // $(".gallery_hidden").children("a[href='"+image+"']").trigger('click');
        }
        
        var self = $(this);
            if (self.is('.type_film')){
                var video = $(this).data('video');
                var video_link = "";
                var video_mp4 = video_link + video + "";
                var video_webm = video_link + video + ".webm";   
                var html = "";
                 html += '<video id="someVideo" controls="controls" autoplay>';
                 html += '<source src="'+video_mp4+'"  type="video/mp4" />';
                 html += '<source src="'+video_mp4.replace(".mp4",".webm")+'"  type="video/webm" />';        
                 html += '</video>';                     
                $(this).children(".video_overlay").html(html).velocity("fadeIn", { duration: 500 });;

            }   
            else if (self.is('.type_youtube')){
                var video = $(this).data('video');                 
                var html ="";
                html += ' <iframe src="'+video+'?html5=1&rel=0&controls=0&showinfo=0&autoplay=1" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"> </iframe> ';                  
                $(this).children(".video_overlay").html(html).velocity("fadeIn", { duration: 500 });;

            }   
        
    });        
    Start_Gallery_Next_Gen();
    
  
});
function Start_Gallery_Next_Gen(){
 
 
   
   /* $('.close_gallery').on('click', function(e) {  
        e.preventDefault();
        e.stopPropagation();
        $slick = $('#gallery_first');
        $slick.slick('unslick');     
        $slick = $('#gallery_first');        
        $slick.slick({infinite:false, slidesToShow: 1,   variableWidth: true, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});
        
        $(".gallery_next_gen").removeClass('fullscreen');        
        $("#someVideo").trigger('pause');
        $("#video_container").html("");
        $("#films_overlay").velocity("fadeOut", { duration: 500 });   
       
    });   */

    $( window ).resize(function() {

 
    });
    
  
    if ($("#test_rwd").css('display') !== 'none')
    {
       // $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'fast', overlay_gallery: false, deeplinking: false, keyboard_shortcuts: false, social_tools: false, allow_resize: true, allow_expand: false});
    }

    

    //$slick = $('.gallery_first');
   
    $slick = $('#gallery_pierwsza');    
   // $slick.slick({dots:false,infinite: false,fade:false, adaptiveHeight:false,autoplay: true,autoplaySpeed: 3000,speed: 1500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class=extended_prev"><span>'});
    if ($slick.children().length > 0){
        
        $slick.css('display','block');       
        $slick.slick({infinite:false, slidesToShow: 1,   variableWidth: true, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});
        /*$(".gallery_next_gen_element[data-slick-index='" + last_slide + "']").addClass("slide_active"); 
        
        let photo = $(".gallery_next_gen_element[data-slick-index='" + last_slide + "']").children('a').attr('href');
        $("#photo_filename").attr("href","/Download_Asset?photo="+photo);                              
         */
        $("#photo_desc_pierwsza").html($("#gallery_pierwsza .gallery_next_gen_element[data-slick-index='" + 0 + "']").children(".next_gen_desc").html());        
    }
    else
    {
        $slick.css('display','none');
    }
    $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
     /*    
        //$("#photo_filename")
        event.preventDefault();
        event.stopPropagation();
        let photo = $(".gallery_next_gen_element[data-slick-index='" + nextSlide + "']").children('a').attr('href');
        $("#photo_filename").attr("href","/Download_Asset?photo="+photo);
        //alert(photo);
        //var nextSlide = parseInt($(this).attr('data_image_slide')) + 1;
        $(".gallery_next_gen_element").removeClass("slide_active");
        $(".gallery_next_gen_element[data-slick-index='" + nextSlide + "']").addClass("slide_active");
        $(".photo_description").html($(".gallery_next_gen_element[data-slick-index='" + nextSlide + "']").children(".next_gen_desc").html());
        
       */ 
        $("#photo_desc_pierwsza").html($("#gallery_pierwsza .gallery_next_gen_element[data-slick-index='" + nextSlide + "']").children(".next_gen_desc").html());  
    });        
    
    $slick = $('#gallery_druga');    
   // $slick.slick({dots:false,infinite: false,fade:false, adaptiveHeight:false,autoplay: true,autoplaySpeed: 3000,speed: 1500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class=extended_prev"><span>'});
    if ($slick.children().length > 0){
        
        $slick.css('display','block');       
        $slick.slick({infinite:false, slidesToShow: 1,   variableWidth: true, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});
       /* $(".gallery_next_gen_element[data-slick-index='" + last_slide + "']").addClass("slide_active"); 
        $(".photo_description").html($(".gallery_next_gen_element[data-slick-index='" + last_slide + "']").children(".next_gen_desc").html());
        let photo = $(".gallery_next_gen_element[data-slick-index='" + last_slide + "']").children('a').attr('href');
        $("#photo_filename").attr("href","/Download_Asset?photo="+photo);                      
         * 
        */
        $("#photo_desc_druga").html($("#gallery_druga .gallery_next_gen_element[data-slick-index='" + 0 + "']").children(".next_gen_desc").html());        
       
    }
    else
    {
        $slick.css('display','none');
    }
    
    $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
     /*    
        //$("#photo_filename")
        event.preventDefault();
        event.stopPropagation();
        let photo = $(".gallery_next_gen_element[data-slick-index='" + nextSlide + "']").children('a').attr('href');
        $("#photo_filename").attr("href","/Download_Asset?photo="+photo);
        //alert(photo);
        //var nextSlide = parseInt($(this).attr('data_image_slide')) + 1;
        $(".gallery_next_gen_element").removeClass("slide_active");
        $(".gallery_next_gen_element[data-slick-index='" + nextSlide + "']").addClass("slide_active");
        $(".photo_description").html($(".gallery_next_gen_element[data-slick-index='" + nextSlide + "']").children(".next_gen_desc").html());
        
       */ 
        $("#photo_desc_druga").html($("#gallery_druga .gallery_next_gen_element[data-slick-index='" + nextSlide + "']").children(".next_gen_desc").html());        
      
    });    
    


}