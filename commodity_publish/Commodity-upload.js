var Page = {
    MAIN_PAGE: 0,
    ABOUT_US: 1,
    LAB: 2
}
var page = Page.MAIN_PAGE;
var now, past;//记录不同时刻的滚动条位置
var _isScrolling = false;//标记是否处于滚动状态
function GetNowPos() {
    now = document.documentElement.scrollTop;
    if (now > past) {
        $("html,body").animate({ scrollTop: (parseInt(now / window.innerHeight) + 1) * window.innerHeight }, 800, function () { _isScrolling = false; });
    }
    else if (now < past) {
        $("html,body").animate({ scrollTop: (parseInt(now / window.innerHeight)) * window.innerHeight }, 800, function () { _isScrolling = false; });
    }
    else
        _isScrolling = false;
}
function PageScr() {

    if (page == Page.ABOUT_US) {
        if (!_isScrolling) {
            _isScrolling = true;
            past = document.documentElement.scrollTop;
            setTimeout(GetNowPos, 50);
        }
    }
}
$(document).ready(function () {
    //页面跳转后处理
    $.post("here is target file", function (data) {
        //处理函数，去除登录注册，换为头像与用户名
        if (data == "OK") {
            $("div.top_bar input , div.top_bar a").remove();
            var src = "'" + data.src + "'";
            src = "Pic/1.jpg";
            $("<img class='headshot' src=" + src + "/>").css().appendTo("div.top_bar");
            $("<div class='info_block'><p class='name'>make</p><p class='ID'>125345</p></div>").appendTo("div.top_bar");
        }
    });
        //处理函数，去除登录注册，换为头像与用户名
        $("div.top_bar input , div.top_bar a").remove();
        var src = "'" + data.src + "'";
        src = "Pic/1.jpg";
        $("<img class='headshot' src=" + src + "/>").css().appendTo("div.top_bar");
        $("<div class='info_block'><p class='name'>make</p><p class='ID'>125345</p></div>").appendTo("div.top_bar");
    //登录处理
    $("div#log_info form div#submitcontain input#submit").click(function () {
        
        //var src = "'" + data.src + "'";
        src = "'Pic/1.jpg'";
        $("<img class='headshot' src=" + src + "/>").appendTo("div.top_bar");
        $("<div class='info_block'><p class='name'>make</p><p class='ID'>125345</p></div>").appendTo("div.top_bar");
        var passMsg = $("div#log_info form").serialize();
        $.post("here is target file", passMsg, function (data) {
            //$("div.top_bar input , div.top_bar a").remove();
            //处理函数，去除登录注册，换为头像与用户名
            $("div.top_bar input , div.top_bar a").remove();
            var src = "'" + data.src + "'";
            src = "Pic/1.jpg";
            $("<img class='headshot' src=" + src + "/>").css().appendTo("div.top_bar");
            $("<div class='info_block'><p class='name'>make</p><p class='ID'>125345</p></div>").appendTo("div.top_bar");
        })
    });
    $(document).on("mouseenter", "div.top_bar img.headshot , div.top_bar div.info_block", function () {
        $("div.top_bar div.info_block p.name").css("font-size", "14px");
        $("div.top_bar div.info_block p.ID").css("font-size", "15px");
        $("div.top_bar .info_block").css({
            'height': '111px',
            'width': '108px',
            'border': 'dotted'
        });
    });
    $(document).on("mouseout", "div.top_bar img.headshot , div.top_bar div.info_block", function () {
        $("div.top_bar div.info_block p.name").css("font-size", "0px");
        $("div.top_bar div.info_block p.ID").css("font-size", "0px");
        $("div.top_bar .info_block").css({
            'height': '0px',
            'width': '0px',
            'border': 'none'
        });
    });
    
    
   });
$(function () {
    $(window).scroll(PageScr);
    $("div.outer form input.commodity_up").click(function () {
        alert($("div.outer form").serialize());
    });
    $("#log_info").css(
            {
                "left": String(window.innerWidth / 2 - 420) + "px",
                "top": String(window.innerHeight / 2 - 260) + "px"
            }
            );
    $("div.foot").css(
        {
            "width": String(document.body.offsetWidth) + "px",
            "left": "10px",
        });
    $("div.outer").css(
        {
            "left": String(document.body.offsetWidth/2 - 469) + "px",
        });
    $("a.qq").css(
        {
            "top": String(window.innerHeight / 2 + 90) + "px",
            "left": String(document.body.offsetWidth - 47.29) + "px"
        });
    $("div.top_bar").css(
           {
               "width": String(document.body.offsetWidth) + "px"
           }
           );
    window.onresize = function () {
        $("#log_info").css(
            {
                "left": String(window.innerWidth / 2 - 420) + "px",
                "top": String(window.innerHeight / 2 - 260) + "px"
            }
            );
        $(".nav_main .slidetoggle").css(
       {
           "top": String(window.innerHeight / 2 - 50) + "px",
       });
        $("div.outer").css(
        {
            "left": String(document.body.offsetWidth/2 - 469) + "px",
        });
        $("a.qq").css(
        {
            "left": String(document.body.offsetWidth - 47.29) + "px",
            "top": String(window.innerHeight / 2 + 90) + "px"
        });
        $("div.top_bar").css(
           {
               "width": String(document.body.offsetWidth) + "px"
           }
           );

        $("div.foot").css(
            {
                "width": String(document.body.offsetWidth) + "px",
                "left": "0px",
                "top": String(window.innerHeight - $("div.foot").height()) + "px"
            }
            );
    }
    var thisTime;
    $('.nav_ul li').mouseleave(function (even) {
        thisTime = setTimeout(thisMouseOut, 1000);
    })

    $('.nav_ul li').mouseenter(function () {
        clearTimeout(thisTime);
        var thisUB = $('.nav_ul li').index($(this));
        if ($.trim($('.nav_slide_o').eq(thisUB).html()) != "") {
            $('.nav_slide').addClass('hover');
            $('.nav_slide_o').hide();
            $('.nav_slide_o').eq(thisUB).show();
        }
        else {
            $('.nav_slide').removeClass('hover');
        }

    })

    function thisMouseOut() {
        $('.nav_slide').removeClass('hover');
    }

    $('.nav_slide').mouseenter(function () {
        clearTimeout(thisTime);
        $('.nav_slide').addClass('hover');
    })
    $('.nav_slide').mouseleave(function () {
        $('.nav_slide').removeClass('hover');
    })
    $(".nav_ul a.myinfo").click(

        function () {

            $(".nav_ul li a span.person_info").text("个人主页");
            $(".nav_ul li a .headshot img").attr("src", "Pic/2014001313895746404551930294844.jpg");
        }
        );

    $(".nav_box ").on("mouseenter", function () {
        $(".nav_main").css("left", "0px");
    });
    $(".nav_box").on("mouseleave", function () {
        $(".nav_main").css("left", "-100px");
    });

    $(document).scroll(function () {
        if (parseInt(window.pageYOffset) >= 40) {
            $(".search_box").css({
                "top": "0px",
                "position": "fixed"
            });
        }
        else {
            $(".search_box").css({
                "top": "40px",
                "position": "absolute"
            });
        }
    });
})
function UserLog() {
    $("#log_info").show();

}
function UserReg() {
    //js操作文档location
    //window.open("http://baidu.com");
}
