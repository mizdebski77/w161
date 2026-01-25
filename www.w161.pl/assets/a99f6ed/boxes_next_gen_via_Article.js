var dir ="";
$( document ).ready(function() {
        //history.pushState("", document.title, window.location.pathname);
});
function Start_Boxes(){
     $("#boxes_product_1").css('padding-right','0px').isotope({
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
$(window).load(function () {
   Start_Boxes();
      
    $('#boxes_product_1').on('click','.box_content',function (e) {
        if ($(this).data('one_element_flag')==="TAK_GALERIA"){
            e.preventDefault();
            e.stopPropagation();

            $(".gallery_next_gen_via_article").html($(this).children(".gallery_next_gen_content").html());
            $(".gallery_next_gen_via_article").css('display','block');
            $(".gallery_next_gen_via_article").addClass('fullscreen');

            $slick1 = $(".gallery_next_gen_via_article").children('.gallery_first');
            $slick1.slick({dots:false,infinite: false,fade:false, adaptiveHeight:false,autoplaySpeed: 3000,speed: 1500,slidesToShow: 1, slidesToScroll: 1, nextArrow: '<span class="extended_next"><span>', prevArrow: '<span class="extended_prev"><span>'});        
            return false;
         }
        //var image = $(this).children('img').attr('src');
        //alert(image);
       // $(".gallery_hidden").children("a[href='"+image+"']").trigger('click');
        
    }); 
    $('.gallery_next_gen_via_article').on('click','video', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $('.gallery_next_gen_via_article').on('click','.type_film', function(e) {
        
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
       $(this).children(".video_overlay").html(html).velocity("fadeIn", { duration: 100 });;
       
       //$("#films_overlay").velocity("fadeIn", { duration: 500 });
       
       return false;
   });       
 $('.gallery_next_gen_via_article').on('click','.type_youtube', function(e) {        
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
       $(this).children(".video_overlay").html(html).velocity("fadeIn", { duration: 100 });;
       
       //$("#films_overlay").velocity("fadeIn", { duration: 500 });
       
       return false;
   });          
    
    $('.gallery_next_gen_via_article').on('click','.close_gallery', function(e) {
        
        e.preventDefault();
        e.stopPropagation();
        $(".gallery_next_gen_via_article").css('display','none').removeClass('fullscreen');
        $slick = $(".gallery_next_gen_via_article").children('.gallery_first');
        $slick.slick('unslick');
        $(".gallery_next_gen_via_article").html("");
        document.getElementById('someVideo').pause();        
        
        return false;
    });     
  
});
function Start_Gallery_Next_Gen(){
 
  

    $( window ).resize(function() {

 
    });
    
  
    if ($("#test_rwd").css('display') !== 'none')
    {
       // $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'fast', overlay_gallery: false, deeplinking: false, keyboard_shortcuts: false, social_tools: false, allow_resize: true, allow_expand: false});
    }

    


}