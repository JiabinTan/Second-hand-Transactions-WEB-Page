var idx = 1;//图片位置
var end = 3;//图片数量
var _isOpen = false;
var left;//记录相框的位置
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
        if (data == "OK") {
            //处理函数，去除登录注册，换为头像与用户名
            $("div.top_bar input , div.top_bar a").remove();
            var src = "'" + data.src + "'";
            src = "Pic/1.jpg";
            $("<img class='headshot' src=" + src + "/>").css().appendTo("div.top_bar");
            $("<div class='info_block'><p class='name'>make</p><p class='ID'>125345</p></div>").appendTo("div.top_bar");
        }
    });
    //登录处理
    $("div#log_info form div#submitcontain input#submit").click(function () {
        $("div.top_bar input , div.top_bar a").remove();
        //var src = "'" + data.src + "'";
        src = "'Pic/1.jpg'";
        $("<img class='headshot' src=" + src + "/>").appendTo("div.top_bar");
        $("<div class='info_block'><p class='name'>make</p><p class='ID'>125345</p></div>").appendTo("div.top_bar");
        var passMsg = $("div#log_info form").serialize();
        $.post("here is target file", passMsg, function (data) {

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
    $(window).scroll(PageScr);
    left = parseInt(StringProcess($(".commodity_detail .commodity .pictures .picture_container").css("left")));});
$(function () {
    $("#log_info").css(
            {
                "left": String(window.innerWidth / 2 - 420) + "px",
                "top": String(window.innerHeight / 2 - 260) + "px"
            }
            );
    $("div.top_bar").css(
        {
            "width": String(document.body.offsetWidth) + "px"
        });
    $(".sale_detail .MyGoods,.purchase_detail .MyGoods").css(
        {
            "left": String(document.body.offsetWidth/2 - 400) + "px",
            "top": String(window.innerHeight / 2 -26.8) + "px"
        });
    $("div.info_black").css(
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
        $(".nav_main .slidetoggle").css(
       {
           "top": String(window.innerHeight / 2 - 50) + "px",
       });
        $("#log_info").css(
            {
                "left": String(window.innerWidth / 2 - 420) + "px",
                "top": String(window.innerHeight / 2 - 260) + "px"
            }
            );
        $(".sale_detail .MyGoods,.purchase_detail .MyGoods").css(
        {
            "left": String(document.body.offsetWidth/2 - 400) + "px",
            "top": String(window.innerHeight / 2 - 26.8) + "px"
        });
        $("div.info_black").css(
        {
            "left": String(document.body.offsetWidth / 2 - 457.5) + "px"
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
        $(".commodity_detail .close_table").css(
            {
                "visibility": "hiddden",
                "left": String(document.body.offsetWidth / 2 + 400 - 35) + "px",
                "top": String(window.innerHeight / 2 - 35) + "px"
            });
        $(".commodity_detail").css(
            {
                "left": String(document.body.offsetWidth / 2 - 400) + "px",
                "top": String(window.innerHeight / 2 - 175.5) + "px"
            });
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
    $(document).on("click",".basic_info a,.basic_info p",
        function () {
            if ($(this).is($(".basic_info a:first"))) {
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
            //alert($(this).val());
        }
    );
    //处理信息更新
    $(document).on("click", "input[type='image']", function () {
        var ele_t = $(this).parent().children("input[type='text']");
        var text = ele_t.val();
        $.post("url", function (data) {
            if ("OK") {
                str = "<p>" + text + "</p>";
                ele_t.replaceWith(str);
                $(this).remove();
            }
        });
    });
    //AJAX 点击我在售物品
    $(document).on("click", ".MyGoods tr td a", function () {
        $(".top_bar ,.bkground_image,.slogan,.nav_main,.info_black,.foot,.qq").css("filter", "blur(10px)");
        var res = $(this).parent().prevAll().eq(2).text();
        var expire = $(this).parent().prevAll().eq(1).text();
        var state = $(this).parent().prevAll().eq(0).text();
        var buyer = "Tim";
        var contact = "1035844563"
        var school = "电子科技大学";
        var email = "mr.tankomo@foxmail.com";
        var tr = document.createElement("tr");
        var str = '<td>' + res + '</td>' + "<td>" + expire + "</td>" + "<td>" + state + "</td>" + '<td>' + buyer + '</td>' + '<td>' + contact + '</td>' + "<td>" + school + "</td>" + "<td>" + email + "</td>";
        $(tr).html(str);
        $(".sale_detail .MyGoods").css("visibility", "visible").append(tr);
        $(".sale_detail .close_table").css(
       {
           "visibility":"visible",
           "left": String(document.body.offsetWidth / 2 + 400-35) + "px",
           "top": String(window.innerHeight / 2 - 26.8-35) + "px"
       });
    });
    $(".sale_detail .close_table").click(function () {
        $("div.sale_detail table tr").eq(0).siblings().remove();
        $(".top_bar ,.bkground_image,.slogan,.nav_main,.info_black,.foot,.qq").css("filter", "none");
        //
        $(".sale_detail .MyGoods").css("visibility", "hidden").find("td").remove();
        $(".sale_detail .close_table").css("visibility", "hidden");
    });
    //AJAX显示已购买物品
    $(document).on("click", ".purchase_info .MyPurchase  tr td a", function () {
        $(".top_bar ,.bkground_image,.slogan,.nav_main,.info_black,.foot,.qq").css("filter", "blur(10px)");
        var res = $(this).parent().prevAll().eq(2).text();
        var expire = $(this).parent().prevAll().eq(1).text();
        var buyer = $(this).parent().prevAll().eq(0).text();
        var contact = "1035844563"
        var school = "电子科技大学";
        var email = "mr.tankomo@foxmail.com";
        var tr = document.createElement("tr");
        var str = '<td>' + res + '</td>' + "<td>" + expire + "</td>" + '<td>' + buyer + '</td>' + '<td>' + contact + '</td>' + "<td>" + school + "</td>" + "<td>" + email + "</td>"+"<td>"+" "+"</td>";
        $(tr).html(str);
        $(".purchase_detail .MyGoods").css("visibility", "visible").append(tr);
        $(".purchase_detail .close_table").css(
       {
           "visibility": "visible",
           "left": String(document.body.offsetWidth / 2 + 400 - 35) + "px",
           "top": String(window.innerHeight / 2 - 26.8 - 35) + "px"
       });
    });
    $(".purchase_detail .close_table").click(function () {
        $("div.purchase_detail table tr").eq(0).siblings().remove();
        $(".top_bar ,.bkground_image,.slogan,.nav_main,.info_black,.foot,.qq").css("filter", "none");
        //
        $(".purchase_detail .MyGoods").css("visibility", "hidden").find("td").remove();
        $(".purchase_detail .close_table").css("visibility", "hidden");
    });
    $("#remLB").click(
            function () {
                if ($("#remmember").prop("checked"))
                    $("#remmember").prop("checked", false);
                else
                    $("#remmember").prop("checked", true);
        });

    $(".commodity_detail .close_table").css(
        {
            "visibility": "hidden",
            "left": String(document.body.offsetWidth / 2 + 400 - 35) + "px",
            "top": String(window.innerHeight / 2 - 35) + "px"
        });
        
    $(".commodity_detail").css(
        {
            "left": String(document.body.offsetWidth / 2 - 400) + "px",
            "top": String(window.innerHeight / 2 - 175.5) + "px"
        });
    //AJAX处理商品页
    $(document).on("click", "div.purchase_detail table tr th a", function () {
        $(".top_bar ,.search_box,.blank_,.content,.slogan,.nav_main,.foot,.qq").css("filter", "blur(10px)");
        $(".commodity_detail").css("visibility", "visible");
        $(".commodity_detail .close_table").css("visibility", "visible");
        var info = {
            com: "杯子",
            likes: "100",
            expire: "2017 - 6 - 5",
            name: "komo",
        }
        $(".commodity_detail .commodity .title").text(info.com);
        $(".commodity_detail .commodity .likes .amount").text(info.likes);
        $(".commodity_detail .commodity .expire .expire_time").text(info.expire);
        $(".commodity_detail .commodity .name").text(info.name);
        var str1 = "<img src='Pic/fill.png' />";
        $(str1).appendTo(".commodity_detail .commodity .pictures .picture_container");
        var str2 = "Pic/2016";
        for (var i = 1; i <= 3; i++) {
            var str = str2 + "000" + String(i) + ".jpg";
            var img = document.createElement("img");
            $(img).attr({ "src": str, "title": "点击查看大图" }).appendTo(".commodity_detail .commodity .pictures .picture_container");
        }
        $(str1).appendTo(".commodity_detail .commodity .pictures .picture_container");
        $(".commodity_detail .commodity .pictures .picture_container").css("width", String(352 * 5) + "px");
        $(".content div .content_img").on("click", evenstop);
        $(".commodity_detail .commodity .pictures img").eq(1).css("border", "2px orange solid");
    });
    $(".commodity_detail .close_table").click(function () {
        $(".top_bar ,.search_box,.blank_,.content,.slogan,.nav_main,.foot,.qq").css("filter", "none");
        //
        $(".content div .content_img").off("click", evenstop);
        $(".commodity_detail").css("visibility", "hidden");
        $(".commodity_detail .close_table").css("visibility", "hidden");
        $(".commodity_detail .commodity .pictures .picture_container").html("");
    });
    $(".commodity_detail .commodity input[type='button']").on('click', function () {
        if (confirm("是否确认发送购买意愿（以及您的联系方式）至对方邮箱，同时您也将获取对方联系方式？"))
            alert("信息已发送！\n之后你们可以通过联系确认交易地址，如对该订单存在疑惑请即使客服！");
    })
    $(document).on("click", ".commodity_detail .commodity .before",
        function () {
            if (1 == idx)
                return false;
            else {
                $(".commodity_detail .commodity .pictures img").eq(idx).css("border", "0px");
                idx--;
                $(".commodity_detail .commodity .pictures img").eq(idx).css("border", "2px orange solid");
                left += 352;
                $(".commodity_detail .commodity .pictures .picture_container").css("left", String(left) + 'px');
            }
        }
    );
    $(document).on("click", ".commodity_detail .commodity .after",
        function () {
            if (end == idx)
                return false;
            else {
                $(".commodity_detail .commodity .pictures img").eq(idx).css("border", "0px");
                idx++;
                $(".commodity_detail .commodity .pictures img").eq(idx).css("border", "2px orange solid");
                left  -= 352;
                $(".commodity_detail .commodity .pictures .picture_container").css("left", String(left) + 'px');
            }
        }
    );
    $(document).on("click", ".commodity_detail .commodity .pictures .picture_container img", function () {
        var src = $(this).attr("src");
        if (src == "Pic/fill.png")
            return;
        var body_img = document.createElement("img");
        $(body_img).attr({ "src": src, "title": "如显示存在问题或者需要对图片进行操作,\n请右键保存至本地操作。(再次点击图片关闭)", "id": "bigImgClick"}).appendTo("body");
        var img_height = $(body_img).height();
        var img_width = $(body_img).width();
        if (1.20 < parseFloat(img_width) / parseFloat(img_height) < 1.45) {
            if (img_height > "558") {
                $(body_img).css("width", img_width + "px");
                $(body_img).css("height", "558px");
                img_height = "558";
            }
            if (img_width > "744") {
                $(body_img).css("height", img_height + "px");
                $(body_img).css("width", "744px");
                img_width = "744";
            }
        }
        else {
            if (img_height > "576") {
                $(body_img).css("width", img_width + "px");
                $(body_img).css("height", "576px");
                img_height = "576";
            }
            if (img_width > "1024") {
                $(body_img).css("height", img_height + "px");
                $(body_img).css("width", "1024px");
                img_width = "1024";
            }
        }
        $(body_img).css({
            "position": "fixed",
            "left": String(document.body.offsetWidth / 2 - parseFloat(img_width) / 2) + "px",
            "top": String(window.innerHeight / 2 - parseFloat(img_height) / 2) + "px",
            "z-index": 100
        });
        $(".commodity_detail").css("filter", "blur(10px)");
        _isOpen = true;
        return false;
    });
    $(document).click(function (e) {
        if (_isOpen == true) {
            if (e.target.id == 'bigImgClick') {
                $(".commodity_detail").css("filter", "none");
                $("body>img#bigImgClick").remove();
                _isOpen = false;
            }
        }
    });
})
function UserLog()
{
    $("#log_info").show();
    
}
function UserReg() {
    //js操作文档location
    //window.open("http://baidu.com");
}
function evenstop() {
    return false;
}
function StringProcess(str) {
    return str.substring(0, str.length - 2);
}