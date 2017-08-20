
$(document).ready(
    function () {
        $("#log-info").css(
            {
                "left": String(window.innerWidth / 2 - 400) + "px",
                "top": String(window.innerHeight / 2 - 222) + "px"
            }
            );
        $("#remLB").click(
            function () {
                if ($("#remmember").prop("checked"))
                    $("#remmember").prop("checked", false);
                else
                    $("#remmember").prop("checked", true);
            });
	window.onresize=function()
	{
		$("#log-info").css(
            {
                "left": String(window.innerWidth / 2 -400 ) + "px",
                "top":String(window.innerHeight/2-222)+"px"
            }
            );
	}
    });
