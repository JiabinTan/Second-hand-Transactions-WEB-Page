var suffix = new Array("@gmail.com", "@yahoo.com", "@msn.com", "@hotmail.com", "@qq.com", "@163.com", "@163.net", "@googlemail.com", "@mail.com");
$(function () {
    $(".part5 a").click(
            function () {
                $(".part5 input[type='text']").keyup(
                    function () {
                        email = $(this).val();
                        if ("" == email) {
                            $("#emaillist").empty();
                            return;
                        }
                        var idx = email.indexOf('@');
                        if (-1 == idx) {
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
            });
    $(document).on("mousedown", "#emaillist p", function () {
        var val = $(this).text();
        $(".part5 input[type='text']").val(val);
        $("#emaillist").empty();
    }
        );
});