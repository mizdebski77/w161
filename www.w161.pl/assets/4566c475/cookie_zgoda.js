/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(window).load(function () {
    //ZGODA NA COOKIE
 $('a.zgoda')
    .click(function() {
        createCookie("ZGODA_NA_COOKIE_FOODIE","1",180);
        $("div.cookie_zgoda").velocity("slideUp",{duration:600});    
        return false;
        
    });
  if (!readCookie("ZGODA_NA_COOKIE_FOODIE"))
    {
        $("div.cookie_zgoda").velocity("fadeIn",{duration:600});
	
    }
    else{
        $("div.cookie_zgoda").velocity("fadeOut",{duration:600});    
    }

    
});
    function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}


function eraseCookie(name) {
    createCookie(name, "", -1);
}
