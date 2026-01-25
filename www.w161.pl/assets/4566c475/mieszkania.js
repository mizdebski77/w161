/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(window).load(function () {
    $(window).resize( function() {
                $("#mojamapa").mapster('resize',$(".budynek").width());
            
        });    
    
 $(".s_pietro").click(function () {
        var pietro = "poziom"+$(this).data('select');
        $('area[data-key="'+pietro+'"]').mapster('select');
        $(".floor").velocity("fadeOut",{duration:400});
        $("."+pietro).velocity("fadeIn",{duration:400});
        
        //$(".mieszkanie_back").velocity("fadeIn",{duration:200});                
        $(".table_data_intro").css('display','block');
        $(".table_data").removeClass("active");              

        $(".show_floor4").velocity("slideUp",{duration:200});        
        $(".show_floor3").velocity("slideUp",{duration:200});                
        $(".show_floor2").velocity("slideUp",{duration:200});        
        $(".show_floor1").velocity("slideUp",{duration:200});        
        $(".show_floor0").velocity("slideUp",{duration:200});
        $(".show_floor"+$(this).data('select')).velocity("slideDown",{duration:200});
        
        setTimeout(function () {
            //$("."+thisid).addClass("active");              
            //var target_offset = $("."+"budynki").offset();
            //var target_top = target_offset.top;
            $('html, body').animate({scrollTop: 0}, 1000, 'linear');
            }, 700);               
    });    
    
    
    function Mieszkania_Start_Select(){
        $(".poziom1").velocity("slideDown",{duration:400});
        //$(".show_floor1").velocity("slideDown",{duration:400});
        
    }
    function state_change(data) {
        //alert(data.state+":"+data.selected);
    }
    function mapsterClick(data) {
        
        //$("h2").html(data.key);
        var split = data.key.split("poziom");
        $("h2").html("POZIOM_"+split[1]);
        $(".floor").velocity("fadeOut",{duration:400});
        $("."+data.key).velocity("fadeIn",{duration:400});
        
        $(".show_floor4").velocity("slideUp",{duration:200});        
        $(".show_floor3").velocity("slideUp",{duration:200});                
        $(".show_floor2").velocity("slideUp",{duration:200});        
        $(".show_floor1").velocity("slideUp",{duration:200});        
        $(".show_floor0").velocity("slideUp",{duration:200});        
        
        $(".show_floor"+split[1]).velocity("slideDown",{duration:200});


    }    
    $('b').bind('mouseover', function() {
        $('img').mapster('tooltip',this,"The text is: " + $(this).text());

    }); 
$('#mojamapa').mapster({
  clickNavigate: false,    
  fillColor: 'b7c64d ',
  stroke: true,
  singleSelect: true,
  scaleMap: true,  
  mapKey: 'data-key',  
  noHrefIsMask: true,
  areas : [{key : 'poziom1', selected : true}],  
  onStateChange: state_change,
  onClick: mapsterClick,
        fillOpacity: 0.7,
        strokeWidth: 0,
        strokeColor: 'b7c64d '
       /* render_select: {
            fillColor: 'adadad',
            fillOpacity: 0.5

        }*/
});   
Mieszkania_Start_Select();

   
    
     $('.go_back').on('click', function (e) {e.preventDefault();e.stopPropagation();window.history.back();});

    $(".poziom0 g").click(function () {
        $(".mieszkanie_back").velocity("fadeIn",{duration:200});        
        
        $(".table_data_intro").css('display','block');        
        $(".table_data").removeClass("active");              
        var thisid = $(this).attr('id');
        $(".show_floor4").velocity("slideUp",{duration:200});        
        $(".show_floor3").velocity("slideUp",{duration:200});                
        $(".show_floor2").velocity("slideUp",{duration:200});        
        $(".show_floor1").velocity("slideUp",{duration:200});        
        $(".show_floor0").velocity("slideDown",{duration:200});
        setTimeout(function () {
            $("."+thisid).addClass("active");              
            var target_offset = $("."+thisid).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
    });
    $(".poziom1 g").click(function () {
        $(".mieszkanie_back").velocity("fadeIn",{duration:200});        
        
        $(".table_data_intro").css('display','block');
        $(".table_data").removeClass("active");              

        var thisid = $(this).attr('id');
        $(".show_floor4").velocity("slideUp",{duration:200});        
        $(".show_floor3").velocity("slideUp",{duration:200});                
        $(".show_floor2").velocity("slideUp",{duration:200});        
        $(".show_floor1").velocity("slideDown",{duration:200});        
        $(".show_floor0").velocity("slideUp",{duration:200});
        setTimeout(function () {
            $("."+thisid).addClass("active");              
            var target_offset = $("."+thisid).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                

    });
    $(".poziom2 g").click(function () {
        $(".mieszkanie_back").velocity("fadeIn",{duration:200});        

        $(".table_data_intro").css('display','block');
        
        $(".table_data").removeClass("active");              
        $(".show_floor4").velocity("slideUp",{duration:200});        
        $(".show_floor3").velocity("slideUp",{duration:200});                
        $(".show_floor2").velocity("slideDown",{duration:200});        
        $(".show_floor1").velocity("slideUp",{duration:200});        
        $(".show_floor0").velocity("slideUp",{duration:200});                
        var thisid = $(this).attr('id');
        setTimeout(function () {
            $("."+thisid).addClass("active"); 
            var target_offset = $("."+thisid).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
    });    
    
    $(".poziom3 g").click(function () {
        $(".mieszkanie_back").velocity("fadeIn",{duration:200});        

        $(".table_data_intro").css('display','block');
        
        $(".table_data").removeClass("active");              
        $(".show_floor4").velocity("slideUp",{duration:200});        
        $(".show_floor3").velocity("slideDown",{duration:200});                
        $(".show_floor2").velocity("slideUp",{duration:200});        
        $(".show_floor1").velocity("slideUp",{duration:200});        
        $(".show_floor0").velocity("slideUp",{duration:200});               
        var thisid = $(this).attr('id');
        setTimeout(function () {
            $("."+thisid).addClass("active"); 
            var target_offset = $("."+thisid).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
    });    
    $(".poziom4 g").click(function () {
        $(".mieszkanie_back").velocity("fadeIn",{duration:200});        

        $(".table_data_intro").css('display','block');
        
        $(".table_data").removeClass("active");              
        $(".show_floor4").velocity("slideDown",{duration:200});        
        $(".show_floor3").velocity("slideUp",{duration:200});                
        $(".show_floor2").velocity("slideUp",{duration:200});        
        $(".show_floor1").velocity("slideUp",{duration:200});        
        $(".show_floor0").velocity("slideUp",{duration:200});
        var thisid = $(this).attr('id');
        setTimeout(function () {
            $("."+thisid).addClass("active"); 
            var target_offset = $("."+thisid).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
    });       
    
    
    
    $("#poziom1").click(function () {
        $(".show_floor0").velocity("slideUp",{duration:0});        
        $(".show_floor1").velocity("slideUp",{duration:0});        
        $(".show_floor2").velocity("slideUp",{duration:0});         
        $(".table_data_intro").css('display','none');        
        $(".table_data").removeClass("active");         
        $(".floor").velocity("slideUp",{duration:100});        

        $(".floor_details").velocity("slideDown",{duration:200});        
        $(".poziom1").velocity("slideDown",{duration:500});        
        setTimeout(function () {
             
            var target_offset = $(".floor_details").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
        });
        
    $("#poziom2").click(function () {
        $(".show_floor0").velocity("slideUp",{duration:0});        
        $(".show_floor1").velocity("slideUp",{duration:0});        
        $(".show_floor2").velocity("slideUp",{duration:0}); 
        $(".table_data_intro").css('display','none');        
        $(".table_data").removeClass("active");           
        $(".floor").velocity("slideUp",{duration:100});                
        $(".floor_details").velocity("slideDown",{duration:200});        
        $(".poziom2").velocity("slideDown",{duration:500});   
        
        setTimeout(function () {
             
            var target_offset = $(".floor_details").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
        });
        
        
    $("#poziom3").click(function () {
        $(".show_floor0").velocity("slideUp",{duration:0});        
        $(".show_floor1").velocity("slideUp",{duration:0});        
        $(".show_floor2").velocity("slideUp",{duration:0});       
        $(".table_data_intro").css('display','none');        
        $(".table_data").removeClass("active");         
        $(".floor").velocity("slideUp",{duration:100});                
        $(".floor_details").velocity("slideDown",{duration:200});        
        $(".poziom3").velocity("slideDown",{duration:500});        
        
        setTimeout(function () {
             
            var target_offset = $(".floor_details").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                




});


// DODATKI NA PRZYCISKI

    $("#poziom_1").click(function () {
        alert(1)
        $(".show_floor0").velocity("slideUp",{duration:0});        
        $(".show_floor1").velocity("slideUp",{duration:0});        
        $(".show_floor2").velocity("slideUp",{duration:0});         
        $(".table_data_intro").css('display','none');        
        $(".table_data").removeClass("active");         
        $(".floor").velocity("slideUp",{duration:100});        

        $(".floor_details").velocity("slideDown",{duration:200});        
        $(".poziom1").velocity("slideDown",{duration:500});        
        setTimeout(function () {
             
            var target_offset = $(".floor_details").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
        });
        
    $("#poziom_2").click(function () {
        $(".show_floor0").velocity("slideUp",{duration:0});        
        $(".show_floor1").velocity("slideUp",{duration:0});        
        $(".show_floor2").velocity("slideUp",{duration:0}); 
        $(".table_data_intro").css('display','none');        
        $(".table_data").removeClass("active");           
        $(".floor").velocity("slideUp",{duration:100});                
        $(".floor_details").velocity("slideDown",{duration:200});        
        $(".poziom2").velocity("slideDown",{duration:500});   
        
        setTimeout(function () {
             
            var target_offset = $(".floor_details").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                
        });
        
        
    $("#poziom_3").click(function () {
        $(".show_floor0").velocity("slideUp",{duration:0});        
        $(".show_floor1").velocity("slideUp",{duration:0});        
        $(".show_floor2").velocity("slideUp",{duration:0});       
        $(".table_data_intro").css('display','none');        
        $(".table_data").removeClass("active");         
        $(".floor").velocity("slideUp",{duration:100});                
        $(".floor_details").velocity("slideDown",{duration:200});        
        $(".poziom3").velocity("slideDown",{duration:500});        
        
        setTimeout(function () {
             
            var target_offset = $(".floor_details").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);
                




});


$("g#poziom1").mouseover(function() {
    $(this).children('g').css('opacity','1').css('cursor','pointer');;
}).mouseout(function() {
    $(this).children('g').css('opacity','0');
});
$("g#poziom2").mouseover(function() {
    $(this).children('g').css('opacity','1').css('cursor','pointer');
}).mouseout(function() {
    $(this).children('g').css('opacity','0');
});
$("g#poziom3").mouseover(function() {
    $(this).children('g').css('opacity','1').css('cursor','pointer');;
}).mouseout(function() {
    $(this).children('g').css('opacity','0');
});


$(".wroc_mieszkanie").click(function () {                
        setTimeout(function () {
            var target_offset = $("."+"floor_details").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);                
    });
    
    
    
$(".wroc_poziom").click(function () {
               
        setTimeout(function () {
            var target_offset = $("."+"mieszkania_container").offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - $(".menu_container").outerHeight(true)-0}, 1000, 'linear');
            }, 700);                
    });    

    });
