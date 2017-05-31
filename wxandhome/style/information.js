/**
 * Created by zqc on 2017/4/27.
 */

!function (a) {
    function b() {
        var b = g.getBoundingClientRect().width;
        a.rem = (b / 6.4 > 100 ? 100 : (b / 6.4 < 50 ? 50 : b / 6.4)), g.style.fontSize = a.rem + "px"
    }

    var g = a.document.documentElement, e;
    a.addEventListener("resize", function () {
        clearTimeout(e), e = setTimeout(b, 300)
    }, !1), a.addEventListener("pageshow", function (a) {
        a.persisted && (clearTimeout(e), e = setTimeout(b, 300))
    }, !1), b()
}(window);

window.addEventListener("load", function () {
    setTimeout(function () {
        window.scrollTo(0, 1);
    }, 0);
});
function intnet() {

    var TIME;
    var strBtn;
    var addTime;
    var year;
    var month;
    var day;
    var hour;
    var minute;
    var second;
    var str;
    var strContent;
    var getUrl = "http://118.190.71.51/property/index.php/PropertyNews";
    var accessToken = $.cookie("hejia")
    console.log(accessToken)
    $.ajax({
        //提交数据的类型 POST GET
        type: "GET",
        //提交的网址
        url: getUrl,
        //提交的数据
        data: {
            "accessToken": accessToken
        },
        //返回数据的格式
        datatype: "html",//"xml", "html", "script", "json", "jsonp", "text".
        success: function (data) {
            var parsedJson = jQuery.parseJSON(data);
            console.log(parsedJson);
            if (parsedJson.done == true) {
                var listObj = parsedJson.news;
                console.log(listObj)

                $.each(listObj, function (index, content) {
                    addTime = parseInt(this.add_time) * 1000;
                    var date = new Date(addTime);
                    year = date.getFullYear();
                    month = date.getMonth() + 1;
                    day = date.getDate();
                    hour = date.getHours();
                    minute = date.getMinutes();
                    second = date.getSeconds();
                    TIME = year + "年" + month + "月" + day + "日  " + hour + ":" + minute + ":" + second;
                    str = this.title;
                    strContent = this.content;
                    strBtn = this.id;
                    $(".title").append("<div id='list' class='list'> <button id='btn" + strBtn + "' class='btn" + strBtn + "' > <li><a class='img_dd' id='img_dd'></a><p class='innerA' id='innerA'>" + str + "</p>" + TIME + "</li></button><hr><br></div>")
                })
                var img = new Image
                img.src = "http://www.10086.cn/favicon.ico";
                $(".img_dd").append(img)
                $.each(listObj, function (index, content) {
                    strBtn = this.id;
                    $(".btn" + this.id).click(function () {
                        console.log(content)
                        $(".list").hide();
                        $(".content").show();
                        $("#notice_title").text(content.title);
                        $("#public_time").text("发布时间：" + UnixToDate(content.add_time, true));
                        $(".TRS_Editor").text(content.content);

                        // var replaceStr =
                        // console.log(content.content)
                        $(".noticeList").click(function () {
                            $(".content").hide();
                            $(".list").show();
                            // $(".TRS_Editor").flexText();

                        });
                    })
                })
            } else {
            }

        }
    })

}
//jquery初始事件结束

/**
 * 时间戳转换日期
 * @param <int> unixTime    待时间戳(秒)
 * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
 * @param <int>  timeZone   时区
 */
function UnixToDate(unixTime, isFull, timeZone) {
    timeZone = 8;
    if (typeof (timeZone) == 'number') {
        unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
    }
    var time = new Date(unixTime * 1000);
    var ymdhis = "";
    ymdhis += time.getUTCFullYear() + "年";
    ymdhis += (time.getUTCMonth() + 1) + "月";
    ymdhis += time.getUTCDate() + "日";
    if (isFull === true) {
        ymdhis += " " + time.getUTCHours() + ":";
        ymdhis += time.getUTCMinutes() + ":";

        if (time.getUTCSeconds() < 10 && time.getUTCSeconds() >= 0) {
            ymdhis += "0" + time.getUTCSeconds();
        } else {
            ymdhis += time.getUTCSeconds();
        }

    }
    return ymdhis;
}

