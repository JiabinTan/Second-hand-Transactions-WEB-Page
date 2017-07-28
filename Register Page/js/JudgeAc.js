var username = "", password = "", passwordagain = "", school = "", email = "", contact = "";
var suffix = new Array("@gmail.com","@yahoo.com","@msn.com","@hotmail.com","@qq.com","@163.com","@163.net","@googlemail.com","@mail.com");
$(function () {
    $("#username").focus(
        function () {
            $("#username").blur(
            function () {

                username = $(this).val();
                if ("" == username) {
                    document.getElementById("usernamepass").style.visibility = "hidden";
                    document.getElementById("usernamewrong").style.visibility = "visible";
                    $(this).attr("placeholder", "请输入非空用户名").addClass("TextRed");
                    $(this).attr("flag","0");
                }
                else {
                    document.getElementById("usernamepass").style.visibility = "visible";
                    document.getElementById("usernamewrong").style.visibility = "hidden";
                    $(this).attr("placeholder", "输入用户名").removeClass("TextRed");
                    $(this).attr("flag", "1");
                    //增加提示
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
                    $(this).attr("placeholder", "输入密码").removeClass("TextRed");
                    $(this).attr("flag", "1");
                }
                else if (h == '') {
                    document.getElementById("passwordpass").style.visibility = "hidden";
                    document.getElementById("passwordwrong").style.visibility = "visible";
                    $(this).attr("placeholder", "请输入有效的密码").addClass("TextRed");
                    $(this).attr("flag", "0");
                }
                else {
                    $(this).val("");
                    document.getElementById("passwordpass").style.visibility = "hidden";
                    document.getElementById("passwordwrong").style.visibility = "visible";
                    $(this).attr("placeholder", "请输入字母开头的密码").addClass("TextRed");
                    $(this).attr("flag", "0");
                }
            });
        }
    );
    $("#password-again").focus(
        function () {
            $("#password-again").blur(
            function () {

                passwordagain = $(this).val();
                if (password != passwordagain) {
                    document.getElementById("password-againpass").style.visibility = "hidden";
                    document.getElementById("password-againwrong").style.visibility = "visible";
                    $(this).attr("placeholder", "两次输入的密码不一致").addClass("TextRed");
                    $(this).attr("flag", "0");
                    $(this).val("");
                }
                else if (passwordagain == '') {
                    document.getElementById("password-againpass").style.visibility = "hidden";
                    document.getElementById("password-againwrong").style.visibility = "visible";
                    $(this).attr("placeholder", "密码不能为空").addClass("TextRed");
                    $(this).attr("flag", "0");
                }
                else {
                    document.getElementById("password-againpass").style.visibility = "visible";
                    document.getElementById("password-againwrong").style.visibility = "hidden";
                    $(this).attr("placeholder", "输入密码").removeClass("TextRed");
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
            $("#email").attr("placeholder", "请输入正确的邮箱").addClass("TextRed");
            $("#email").attr("flag", "0");
        }
        else {
            document.getElementById("emailpass").style.visibility = "visible";
            document.getElementById("emailwrong").style.visibility = "hidden";
            $("#email").attr("placeholder", "输入邮箱").removeClass("TextRed");
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
                $(this).attr("placeholder", "请输入非空校名").addClass("TextRed");
                $(this).attr("flag", "0");
            }
            else {
                document.getElementById("schoolpass").style.visibility = "visible";
                document.getElementById("schoolwrong").style.visibility = "hidden";
                $(this).attr("placeholder", "").removeClass("TextRed");
                $(this).attr("flag", "1");
                //增加提示
            }
        });
    });
    $("input#contact").focus(function () {
        $(this).blur(function () {
            contact = $(this).val();
            if ("" == contact) {
                document.getElementById("contactpass").style.visibility = "hidden";
                document.getElementById("contactwrong").style.visibility = "visible";
                $(this).addClass("TextRed");
                $(this).attr("flag", "0");
            }
            else {
                document.getElementById("contactpass").style.visibility = "visible";
                document.getElementById("contactwrong").style.visibility = "hidden";
                $(this).removeClass("TextRed");
                $(this).attr("flag", "1");
                //增加提示
            }
        });
    });

    //$("input#submit").on("click", function (e) {
        $("input#submit").click(function(e){    
        var flag = '1' == $("#username").attr("flag") && '1' == $("#password").attr("flag") && '1' == $("#password-again").attr("flag") && '1' == $("#email").attr("flag") && '1' == $("#school").attr("flag") && '1' == $("#contact").attr("flag");
        if (!flag)
        {
            e.preventDefault();
        }
    });
});