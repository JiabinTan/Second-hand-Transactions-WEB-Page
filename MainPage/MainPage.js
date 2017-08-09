var state = 0;
var isclick=false;
$(function () {
    $("div.top-bar").css(
        {
            "width":String(document.body.offsetWidth)+"px"
        });
    $("div.content").css(
        {
            "max-width": String(1226) + "px",
            "left": String(document.body.offsetWidth / 2 - 613) + "px"
        });
    $("div.search-bar").css(
        {
            "left": String(document.body.offsetWidth/2-243) + "px"
        });

    $("div.foot").css(
        {
            "width": String(document.body.offsetWidth) + "px",
            "left": "10px",
        });
    $("div.ex-requires").css(
        {
            "left": String(document.body.offsetWidth / 2 -110) + "px"
        });
    $("a.qq").css(
        {
            "top": String(window.innerHeight / 2 + 90) + "px",
            "left": String(document.body.offsetWidth-47.29) + "px"
        });
    window.onresize = function () {
        $("div.content").css(
        {
            "max-width": String(1226) + "px",
            "left": String(document.body.offsetWidth / 2 - 613) + "px"
        });
        $("div.ex-requires").css(
        {
            "left": String(document.body.offsetWidth / 2 - 145) + "px"
        });
        $("a.qq").css(
        {
            "left": String(document.body.offsetWidth-47.29) + "px",
            "top": String(window.innerHeight / 2 + 90) + "px"
        });
        $("div.top-bar").css(
           {
               "width": String(document.body.offsetWidth) + "px"
           }
           );
        $("div.search-bar").css(
            {
                "left": String(document.body.offsetWidth / 2 - 243) + "px"
            }
            );
        $("div.foot").css(
            {
                "width": String(document.body.offsetWidth) + "px",
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
    $(".collection-amount").mouseenter(function(){
        $(".collection-amount img").addClass("imgenter").removeClass("origin");
    });
    $(".collection-amount").mouseleave(function () {
        if (!isclick) {
            $(".collection-amount img").removeClass("imgenter").addClass("origin");
        }
        isclick = false;
    });
    $(".dec-price").mouseenter(function () {
        $(".dec-price img").addClass("imgenter").removeClass("origin");
    });
    $(".dec-price").mouseleave(function () {
        if (!isclick) {
            $(".dec-price img").removeClass("imgenter").addClass("origin");
        }
        isclick = false;
    });
    $(".collection-amount").click(function () {
        if (1 == state)
        {
            $(".dec-price img").removeClass("imgenter").removeClass("imgclick").addClass("origin");
            $(".dec-price").css({
                "background-color": "white",
                "color": "black"
            });
        }
        state = 0;
        $(".collection-amount img").addClass("imgclick").removeClass("imgenter").removeClass("origin");
        $(".collection-amount").css({
            "background-color": "#e99009",
            "color": "white",
            "cursor": "pointer"
        });
        isclick = true;
    });
    $(".dec-price").click(function () {
        if (0 == state) {
            $(".collection-amount img").removeClass("imgenter").removeClass("imgclick").addClass("origin");
            $(".collection-amount").css({
                "background-color": "white",
                "color": "black"
            });
        }
        state = 1;
        $(".dec-price img").addClass("imgclick").removeClass("imgenter").removeClass("origin");
        $(".dec-price").css({
            "background-color": "#e99009",
            "color": "white",
            "cursor": "pointer"
        });
        isclick = true;
    });
    $("img.collection").click(function () {
        var color = RGBtoHEX($(this).css("background-color"));
        if ("#FFFFFF" == color)
            $(this).css("background-color", "yellow");
        else
            $(this).css("background-color", "white");
    });
    $(document).scroll(function () {
        if (parseInt(window.pageYOffset) >= 40) {
            $(".search-box").css({
                "top": "0px",
                "position": "fixed"
            });
        }
        else {
            $(".search-box").css({
                "top": "40px",
                "position": "absolute"
            });
        }
    });
})
function toHex(N) {
    if (N == null) return "00";
    N = parseInt(N); if (N == 0 || isNaN(N)) return "00";
    N = Math.max(0, N); N = Math.min(N, 255); N = Math.round(N);
    return "0123456789ABCDEF".charAt((N - N % 16) / 16) + "0123456789ABCDEF".charAt(N % 16);
}

//Function to convert rgb() format values into normal hex values
function RGBtoHEX(str) {
    if (str.substring(0, 3) == 'rgb') {
        var arr = str.split(",");
        var r = arr[0].replace('rgb(', '').trim(), g = arr[1].trim(), b = arr[2].replace(')', '').trim();
        var hex = [
            toHex(r),
            toHex(g),
            toHex(b)
        ];
        return "#" + hex.join('');
    }
    else {
        return str;
    }
}
