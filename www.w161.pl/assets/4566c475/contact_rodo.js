 function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
var dir = "";
$(window).resize(function(){
    var counted_offset = $('.email_button').offset().top - $('.contact_rodo').offset().top;        
    document.documentElement.style.setProperty('--special_top', (counted_offset - 30) + 'px')            
});
$(window).load(function () {
    var counted_offset = $('.email_button').offset().top - $('.contact_rodo').offset().top;        
    document.documentElement.style.setProperty('--special_top', (counted_offset - 30) + 'px')            
    $('.head').click(function () {
        var counted_offset = $('.email_button').offset().top - $('.contact_rodo').offset().top;        
        document.documentElement.style.setProperty('--special_top', (counted_offset - 30) + 'px')        
        
        if($(this).children('img').hasClass('rotate')){
            $(this).children('img').removeClass('rotate');
            $(this).next('.slide_text').velocity("slideUp",{duration:400});            
        }
        else{
            $(this).children('img').addClass('rotate');
            $(this).next('.slide_text').velocity("slideDown",{duration:400});
        }
    });
    

    
  
});

