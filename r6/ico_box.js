/* ico_box.js : .ico_box content Slider by NextButton and PrevButton  */
$(document).ready(function(){
    var ico_wd = parseInt($("#ico_slider").width());
    var ico_cnt = $(".ico_box li.data").length;
    function icoPrev(){
        $(".ico_box li.data").eq(ico_cnt-1).prependTo($(".ico_box"));
        $(".ico_box").css("margin-left", -ico_wd+"px");
        $(".ico_box").not(":animated").animate({"margin-left" : "0px"}, 500);
    }
    function icoNext(){
        $(".ico_box").not(":animated").animate({"margin-left" : -ico_wd+"px"}, 500, function(){
            $(".ico_box li.data").eq(0).appendTo($(".ico_box"));
            $(".ico_box").css("margin-left", "0px");
        });
    }
    $(".ico_btn_box li.right").click(function(){
       icoNext(); 
    });
    $(".ico_btn_box li.left").click(function(){
       icoPrev(); 
    });
});    