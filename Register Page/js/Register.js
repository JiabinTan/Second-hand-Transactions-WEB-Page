function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
function AnimationContinue(e, w) {
    $(e).animate({ left: "0px" }, GetRandomNum(2, 6) * 1000).animate({ left: String(window.innerWidth) + "px" }, GetRandomNum(2, 6) * 1000, 'swing', function () {
        AnimationContinue(this, w);
    });
}
$(document).ready(
    function () {
        var Rcolor = new Array("red", "green", "blue", "black", "orange", "#c7c7c7", "#7a378b", "yellow");
        var wid = new Array();
        var Wmax = window.innerWidth;
        for (var i = 0; i <= 7; i++) {
            var a = String(i);
            wid[i] = GetRandomNum(200, Wmax);
            $(".color" + a).css(
                {
                    "height": String(window.innerHeight / 20) + "px",
                    "width": String(wid[i]) + "px",
                    "background-color": Rcolor[i],
                    "opacity": .6,
                    "left": String(-wid[i]) + "px"
                }
                );

            $(".color" + a).delay(GetRandomNum(0, 1) * 1000).animate({ left: String(window.innerWidth) + "px" }, GetRandomNum(2, 6) * 1000, 'swing', function () {
                AnimationContinue(this, -wid[i]);
            });
        }

        $("#log-info").css(
            {
                "left": String(window.innerWidth / 2 - 270) + "px",
                "top": String(window.innerHeight / 2 - 360) + "px"
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
                "left": String(window.innerWidth / 2 - 270) + "px",
                "top":String(window.innerHeight/2-360)+"px"
            }
            );
	}
    });
