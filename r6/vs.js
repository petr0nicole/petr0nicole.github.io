/* vs.js : visual slider by NumberButton */
$(document).ready(function(){
    var vs_wd = parseInt($("#visual").width());
    $(".vs_btn_box li").click(function(){
        var tar = $(this).index();
        $(".pic_box").not(":animated").animate({"margin-left" : tar*vs_wd*-1+"px"}, 500);
        $(".vs_btn_box li button").removeClass("on");
        $(this).find("button").addClass("on");
    }); 
});