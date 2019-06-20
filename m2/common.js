//common.js    
$(document).ready(function(){
    $(".lst").click(function(){
        $(".collap").addClass("on");
        $(".wrap").addClass("on");
    });
    $(".close").click(function(){
        $(".collap").removeClass("on"); 
        $(".wrap").removeClass("on"); 
    });
    $(window).scroll(function(){
        var par = parseInt($(window).scrollTop());
        if(par>=200){
            $(".hd").addClass("on");
            $(".to_top").fadeIn(500);
        } else {
            $(".hd").removeClass("on");
            $(".to_top").fadeOut(500);
        }
    });
    $(".to_top").click(function(){
        $("body, html").animate({"scrollTop" : 0}, 1000);
    });
});