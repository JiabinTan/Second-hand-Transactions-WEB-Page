
$(function () {
    $("div.top-bar").css(
        {
            "width": String(document.body.offsetWidth) + "px"
        });
    $("div.info-black").css(
        {
            "left": String(document.body.offsetWidth/2-457.5) + "px"
        });
    $("div.foot").css(
        {
            "width": String(document.body.offsetWidth) + "px",
            "left": "10px",
        });

    $("a.qq").css(
        {
            "top": String(window.innerHeight / 2 + 90) + "px",
            "left": String(document.body.offsetWidth - 47.29) + "px"
        });
    window.onresize = function () {
        $("div.info-black").css(
        {
            "left": String(document.body.offsetWidth / 2 - 457.5) + "px"
        });
        $("a.qq").css(
        {
            "left": String(document.body.offsetWidth - 47.29) + "px",
            "top": String(window.innerHeight / 2 + 90) + "px"
        });
        $("div.top-bar").css(
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
    $(".basic-info a,.basic-info p").click(
        function () {
            if ($(this).is($(".basic-info a:first"))) {
                //需要使用AJAX更新头像
                // $(this).append("<input type=>");
            }
            else {
                var ele = $(this).parent().children("p");
                var text = ele.text();
                str = "<input type='text'class='com_input' value=" + text + " />"+"<input type='image'src='Pic/ok.png'/>";
                ele.replaceWith(str);
            }
        });
    $("input[type = 'file']").change(
        function () {
            alert($(this).val());
        }
        );
    $(document).on("click", "input[type='image']", function () {
        var ele_t = $(this).parent().children("input[type='text']");
        var text = ele_t.val();
        str = "<p>" +text+ "</p>";
        ele_t.replaceWith(str);
        $(this).remove();
    });
})
