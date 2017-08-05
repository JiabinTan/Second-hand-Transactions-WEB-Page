$(function () {
    $("div.top-bar").css(
        {
            "width":String(window.innerWidth)+"px"
    });
    $("div.search-bar").css(
        {
            "left": String(window.innerWidth/2-243) + "px"
        });

    $("div.foot").css(
        {
            "width": String(window.innerWidth) + "px",
            "left": "10px",
            "top": String(window.innerHeight - $("div.foot").height()) + "px"
        });
    window.onresize = function () {
        $("div.top-bar").css(
           {
               "width": String(window.innerWidth) + "px"
           }
           );
        $("div.search-bar").css(
            {
                "left": String(window.innerWidth / 2 - 243) + "px"
            }
            );
        $("div.foot").css(
            {
                "width": String(window.innerWidth) + "px",
                "left":"0px",
                "top": String(window.innerHeight - $("div.foot").height()) + "px"
            }
            );
    }
    var thisTime;
    $('.nav-ul li').mouseleave(function (even) {
        thisTime = setTimeout(thisMouseOut, 1000);
    })

    $('.nav-ul li').mouseenter(function () {
        clearTimeout(thisTime);
        var thisUB = $('.nav-ul li').index($(this));
        if ($.trim($('.nav-slide-o').eq(thisUB).html()) != "") {
            $('.nav-slide').addClass('hover');
            $('.nav-slide-o').hide();
            $('.nav-slide-o').eq(thisUB).show();
        }
        else {
            $('.nav-slide').removeClass('hover');
        }

    })

    function thisMouseOut() {
        $('.nav-slide').removeClass('hover');
    }

    $('.nav-slide').mouseenter(function () {
        clearTimeout(thisTime);
        $('.nav-slide').addClass('hover');
    })
    $('.nav-slide').mouseleave(function () {
        $('.nav-slide').removeClass('hover');
    })
    $(".nav-ul a.myinfo").click(
        
        function () {
            
            $(".nav-ul li a span.person-info").text("个人主页");
            $(".nav-ul li a .headshot img").attr("src", "Pic/2014001313895746404551930294844.jpg");
        }
        );

    $(".nav-box ").on("mouseenter", function () {
        $(".nav-main").css("left", "0px");
    });
    $(".nav-box").on("mouseleave", function () {
        $(".nav-main").css("left", "-100px");
    });
    $(".search-bar .category , ul.tog").on("mouseenter", function () {
        $(".search-bar .category").empty();
        $(".search-bar .category").append("<style>.category::after{visibility:visible}</style>");
        $(".search-bar .category").append("<style>.category::before{visibility:hidden}</style>");
        $("ul.tog .good").css("border-radius", "12px 12px 0 0");
        $("ul.tog .user").css({
            "border-radius": "0 0 12px 12px",
            "visibility": "visible",
            "top":"40px"
        });
    });
    $(".search-bar .category , ul.tog").on("mouseleave", function () {
        $(".search-bar .category").empty();
        $(".search-bar .category").append("<style>.category::after{visibility:hidden}</style>");
        $(".search-bar .category").append("<style>.category::before{visibility:visible}</style>");
        $("ul.tog li").css("border-radius", "12px");
        $("ul.tog .user").css({
            "visibility": "hidden",
            "top":"0px"
        });
    });
    $("ul.tog .user , ul.tog .good").click(
        function () {
            var str = $(this).text();
            if ('物品' == str) {
                $("ul.tog .good").text("物品");
                $("ul.tog .user").text("用户");
                $("input.search-content").attr("placeholder","输入你需要的物品");
            }
            else {
                $("ul.tog .good").text("用户");
                $("ul.tog .user").text("物品");
                $("input.search-content").attr("placeholder", "输入你寻找的卖家的用户名");
            }
        });
})
