//slider2.js
$(document).ready(function(){
    var wd2 = parseInt($(window).width());
    function bigNext(){
        $(".big_img_box").not(":animated").animate({"margin-left":-wd2+"px"}, 700, function(){
            $(".big_img_box li").eq(0).appendTo($(".big_img_box"));
            $(".big_img_box").css("margin-left","0px");
            $(".thum_box").animate({"margin-left":"-130px"}, 10, function(){
                $(".thum_box li").eq(0).appendTo($(".thum_box"));
                $(".thum_box").css("margin-left", "0px");
                $(".thum_box li").removeClass("on");
                $(".thum_box li").eq(0).addClass("on");
            });
        });
    }
    var intv2 = setInterval(function(){ bigNext(); }, 3600);

    $(".thum_box li").click(function(){
        var idx2 = $(this).index()-1;
        clearInterval(intv2);
        for(var i=0;i<idx2;i++){
            $(".thum_box li").eq(0).appendTo($(".thum_box"));
            $(".big_img_box li").eq(0).appendTo($(".big_img_box"));
        }
        bigNext();
        intv2 = setInterval(function(){
            bigNext();
        }, 3600);
    });
});    