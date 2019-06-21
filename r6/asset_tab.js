/* asset_tab.js : asset content switching by TabButton  */
$(document).ready(function(){    
    $(".asset_tit_box .asset_tit").click(function(){
        var tg = $(this).index();
        $(".asset_tit_box .asset_tit").removeClass("on");
        $(this).addClass("on");
        $(".asset_ban_box .asset_ban").removeClass("on");
        $(".asset_ban_box .asset_ban").eq(tg).addClass("on");
        $(".asset_con_box .asset_row").removeClass("on");
        $(".asset_con_box .asset_row").eq(tg).addClass("on");
    });
});  