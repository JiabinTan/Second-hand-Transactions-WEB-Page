var username = "", password = "", passwordagain = "", school = "", email = "", contact = "";
var suffix = new Array("@gmail.com","@yahoo.com","@msn.com","@hotmail.com","@qq.com","@163.com","@163.net","@googlemail.com","@mail.com");
function checking_name()
{
    //AJAX处理，纯js操作
    if(xmlhttp.readyState==4&&xmlhttp.status==200)
    {
        if (xmlhttp.responseText == "OK") {
            document.getElementById("usernamepass").style.visibility = "visible";
            document.getElementById("usernamewrong").style.visibility = "hidden";
            $("#usernamecontain .username_load").css("visibility", "hidden");
            $("#usernamecontain .username_tip").text("");
            $(this).attr("flag", "1");
        }
        else if (xmlhttp == "NO") {
            document.getElementById("usernamepass").style.visibility = "hidden";
            document.getElementById("usernamewrong").style.visibility = "visible";
            $("#usernamecontain .username_load").css("visibility", "hidden");
            $("#usernamecontain .username_tip").text("用户名已存在!");
            $(this).attr("flag", "0");
        }
        else {
            var err = "ReadyState:" + String(xmlhttp.readyState) + "\n" + "Status:" + String(xmlhttp.status) + "\n" + "responseText:" + xmlhttp.responseText;
            alert("发生未知错误！请重试\n若一直出现改状况，请将此页面截图发送至客服（含该弹窗）\n" + err);
        }
    }
}
$(function () {
    $("#username").focus(
        function () {
            $("#username").blur(
            function () {
                username = $(this).val();
                if ("" == username) {
                    document.getElementById("usernamepass").style.visibility = "hidden";
                    document.getElementById("usernamewrong").style.visibility = "visible";
                    $("#usernamecontain .username_load").css("visibility", "hidden");
                    $("#usernamecontain .username_tip").text("请输入非空用户名!");
                    $(this).attr("flag","0");
                }
                else {
                    document.getElementById("usernamepass").style.visibility = "hidden";
                    document.getElementById("usernamewrong").style.visibility = "hidden";
                    $("#usernamecontain .username_load").css("visibility", "visible");
                    $("#usernamecontain .username_tip").text("正在检查用户名是否可用...").css("color","orange");
                    var xmlhttp=null;
                    if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
                        xmlhttp = new XMLHttpRequest();
                    }
                    else if (window.ActiveXObject) {// code for IE6, IE5
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    if (xmlhttp == null)
                        alert("Sorry,your browser does not support AJAX,some functions stop working!");
                    else {
                        var url = null;
                        xmlhttp.open("GET", url, true);
                        xmlhttp.onreadystatechange = checking_name;
                        xmlhttp.send(null);
                    }
                }
            });
        }
    );
    $("#password").focus(
        function () {
            $("#password").blur(
            function () {
                password = $(this).val();
                var h = password[0];
                if (h >= 'A' && h <= 'Z' || h >= 'a' && h <= 'z') {
                    document.getElementById("passwordpass").style.visibility = "visible";
                    document.getElementById("passwordwrong").style.visibility = "hidden";
                    $("#passwordcontain .password_tip").text("");
                    $(this).attr("flag", "1");
                }
                else if (h == '') {
                    document.getElementById("passwordpass").style.visibility = "hidden";
                    document.getElementById("passwordwrong").style.visibility = "visible";
                    $("#passwordcontain .password_tip").text("请输入有效的密码!");
                    $(this).attr("flag", "0");
                }
                else {
                    $(this).val("");
                    document.getElementById("passwordpass").style.visibility = "hidden";
                    document.getElementById("passwordwrong").style.visibility = "visible";
                    $("#passwordcontain .password_tip").text("请输入有效的密码!");
                    $(this).attr("flag", "0");
                }
            });
        }
    );
    $("#password_again").focus(
        function () {
            $("#password_again").blur(
            function () {

                passwordagain = $(this).val();
                if (password != passwordagain) {
                    document.getElementById("password_againpass").style.visibility = "hidden";
                    document.getElementById("password_againwrong").style.visibility = "visible";
                    $("#password_againcontain .passwordagain_tip").text("输入的两次密码不同！");
                    $(this).attr("flag", "0");
                    $(this).val("");
                }
                else if (passwordagain == '') {
                    document.getElementById("password_againpass").style.visibility = "hidden";
                    document.getElementById("password_againwrong").style.visibility = "visible";
                    $("#password_againcontain .passwordagain_tip").text("密码不能为空！");
                    $(this).attr("flag", "0");
                }
                else {
                    document.getElementById("password_againpass").style.visibility = "visible";
                    document.getElementById("password_againwrong").style.visibility = "hidden";
                    $("#password_againcontain .passwordagain_tip").text("");
                    $(this).attr("flag", "1");
                    //增加提示
                }
            });
        }
    );
    function check()
    {
        email = $("#email").val();
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        isok = reg.test(email);
        if (!isok) {
            document.getElementById("emailwrong").style.visibility = "visible";
            document.getElementById("emailpass").style.visibility = "hidden";
            $("#emailcontain .email_tip").text("请输入正确的邮箱！");
            $("#email").attr("flag", "0");
        }
        else {
            document.getElementById("emailpass").style.visibility = "visible";
            document.getElementById("emailwrong").style.visibility = "hidden";
            $("#emailcontain .email_tip").text("");
            $("#email").attr("flag", "1");
            //增加提示
        }
    }
    $("#email").focus(
        function () {
            $("#email").blur(function(){
                check();
                $("#emaillist").empty();
            });
        }
    );
    $("#email").focus(
        function () {
            $("#email").keyup(
                function () {
                    email = $(this).val();
                    if ("" == email)
                    {
                        $("#emaillist").empty();
                        return;
                    }
                    var idx = email.indexOf('@');
                    if (-1 == idx)
                    {
                        $("#emaillist").empty();
                        $.each(suffix, function (i) {
                            var str = "<p>" + email + suffix[i] + "</p>";
                            $("#emaillist").append(str);
                        });
                        
                    }
                    else if (email.length - 1 == idx) {
                        $("#emaillist").empty();
                        $.each(suffix, function (i) {
                            var subsuffix = suffix[i].substring(1);
                            var str = "<p>" + email + subsuffix + "</p>";
                            $("#emaillist").append(str);
                        });
                    }
                    else {
                        var subemail = email.substring(idx);
                        var valemail = email.substring(0, idx);
                        $("#emaillist").empty();
                        $.each(suffix, function (i) {
                            var flag = suffix[i].indexOf(subemail);
                            if (0 == flag) {
                                var str = "<p>" + valemail + suffix[i] + "</p>";
                                $("#emaillist").append(str);
                            }
                        });
                    }
                }
                );
        }
        );
    $(document).on("mousedown", "#emaillist p", function () {
        var val = $(this).text();
        $("#email").val(val);
        $("#emaillist").empty();
        check();
    }
        );
    $("input#school").focus(function ()
    {
        $(this).blur(function ()
        {
            school = $(this).val();
            if ("" == school) {
                document.getElementById("schoolpass").style.visibility = "hidden";
                document.getElementById("schoolwrong").style.visibility = "visible";
                $("schoolcontain .school_tip").text("请输入正确的校名！");
                $(this).attr("flag", "0");
            }
            else {
                document.getElementById("schoolpass").style.visibility = "visible";
                document.getElementById("schoolwrong").style.visibility = "hidden";
                $("schoolcontain .school_tip").text("");
                $(this).attr("flag", "1");
                //增加提示
            }
        });
    });
    $("input#contact").focus(function () {
        $(this).blur(function () {
            contact = $(this).val();
            if ("" == contact) {
                $(this).attr("flag", "0");
            }
            else {
                $(this).attr("flag", "1");
                //增加提示
            }
        });
    });

    //$("input#submit").on("click", function (e) {
    $("input#submit").click(function (e) {
        var flag = '1' == $("#username").attr("flag") && '1' == $("#password").attr("flag") && '1' == $("#password_again").attr("flag") && '1' == $("#email").attr("flag") && '1' == $("#school").attr("flag");
        if (!flag) {
            alert("请将带星号的信息填补完全后提交！")
            e.preventDefault();
        }
        else {
            //AJAX处理
            $.post("here is url",
                $("#log_info form").serialize(),
                function (data, status) {
                    if (status == "success")
                    {
                        alert("注册成功！即将转跳至首页...");
                        window.location.href = "../MainPage/MainPage.html";
                    }
                    else {
                        alert("注册失败！请检查你的网络！");
                        e.preventDefault();
                    }
                });
            //提交表单操作
        }
    });
});