//slider1.js    
$(document).ready(function(){
    var wd = parseInt($(window).width()); //창의 너비를 계산하여 wd변수에 저장
    var intv = setInterval(function(){
        nextAni();  //주기적으로 3초마다 nextAni() 함수를 실행
    }, 3000);
    function nextAni(){
        //.img_box를 0.8초 동안 창의 너비 만큼만큼 왼쪽으로 슬라이딩
        $(".img_box").not(":animated").animate({"margin-left":-wd+"px"}, 800, function(){
            //첫 번째 .img_box의 자식인 li를 맨 끝으로 보냄
            $(".img_box li").eq(0).appendTo($(".img_box")); 
            //.img_box의 왼쪽 마진을 0으로 설정
            $(".img_box").css("margin-left", "0px");
            $(".btn_box li").eq(0).appendTo($(".btn_box")); 
            $(".btn_box li").removeClass("on");
            $(".btn_box li").eq(0).addClass("on");
        });
    }
    var sw = true;
    $(".play").click(function(){ //play 버튼을 누르면 재생/정지를 교대로
         if(sw==true){
             $(this).addClass("on");
             clearInterval(intv);
         } else {
             $(this).removeClass("on");
             nextAni();
            intv = setInterval(function(){
                nextAni();
            }, 3000);
         }
         sw= !sw;
    });
    //누른 버튼의 앞에 있는 요소는 모두 뒤로 보내고, 누른 해당 버튼의 모션이 실행
    $(".btn_box li").click(function(){
        var idx = $(this).index()-1;
        clearInterval(intv);
        for(var i=0;i<idx;i++){
            $(".btn_box li").eq(0).appendTo($(".btn_box"));
            $(".img_box li").eq(0).appendTo($(".img_box"));
        }
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 3000);
    });
});    