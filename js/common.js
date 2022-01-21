$('.menu > li').on({
    "mouseenter" : function() {
        $('.menu > li .lnb').show();
        $('#header_sub_inner').show();

    }
});

$("#header_sub_inner").on({
    "mouseleave" : function() {
        $('.menu > li .lnb').hide();
        $('#header_sub_inner').hide();
    }
});

$('.content').click(function(){
    //메뉴 리스트 보이게
});