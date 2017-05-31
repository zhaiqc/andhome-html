/**
 * Created by zqc on 2017/5/3.
 */
//保证全屏
$.ajaxSetup({cache: false});
!function (a) {
    function b() {
        var b = g.getBoundingClientRect().width;
        a.rem = (b / 6.4 > 100 ? 100 : (b / 6.4 < 50 ? 50 : b / 6.4)), g.style.fontSize = a.rem + "px"
    }

    var g = a.document.documentElement, e;
    a.addEventListener("resize", function () {
        clearTimeout(e), e = setTimeout(b, 300)
    }, !1),
        a.addEventListener("pageshow", function (a) {
            a.persisted && (clearTimeout(e), e = setTimeout(b, 300))
        }, !1), b()
}(window);


function intnetWritten() {
    var postUrl = "http://118.190.71.51/property/index.php/PropertyMessage/index";
    var accessToken = $.cookie("hejia");
    $.ajax({
        //提交数据的类型 POST GET
        type: "POST",
        //提交的网址
        url: postUrl,

        //提交的数据
        data: {
            accessToken: accessToken

        },
        //返回数据的格式
        datatype: "json",//"xml", "html", "script", "json", "jsonp", "text".
        success: function (data) {
            console.log(data);
            if (data.done == true) {
                $.each(data.messages, function (index, content) {
                    // $(".ul_list").append('<li><button id="btn' + content.id + '" class="btn' + content.id + '"><div><img id="imgleft" class="imgleft" src="images/yezhu.png"> <p>' + content.msg_body + '<br>' + UnixToDate(content.add_time, true) + '</p><img id="imgright" class="imgright" src="images/chakan.png"></div> </button> </li>')
                    $(".ul_list").append(' <li> <button id="btn' + content.id + '" class="btn' + content.id + '"> <div id="divlist" class="divlist_1"><p>' + content.msg_body + '<br>' + UnixToDate(content.add_time, true) + '</p></div> <div class="divlist_2"><p class="innerP' + content.id + '" id="innerP' + content.id + '"></p><img class="img_look' + content.id + '"></div> </button> </li>')
                    if (content.msg_reply !== "") {
                        $(".innerP" + content.id).text("已回复");
                        $(".img_look" + content.id).attr("src", "images/yes.png");

                    } else {
                        $(".innerP" + content.id).text("未回复");
                        $(".img_look" + content.id).attr("src", "images/no.png");

                    }
                })
                $.each(data.messages, function (index, content) {
                    $(".btn" + content.id).click(function () {
                        console.log(content.msg_body);
                        $(".dialogue").show();
                        $(".ul_list").hide();
                        $(".p_yezhu").text(content.msg_body);
                        if (content.msg_reply == "") {
                            $(".p_guanli").text("管理员暂未回复")
                        } else {
                            $(".p_guanli").text(content.msg_reply)

                        }
                    })
                    $(".noticeList").click(function () {
                        $(".dialogue").hide();
                        $(".ul_list").show();


                    });


                })
            } else {
                var parsedJson = jQuery.parseJSON(data);
                alert(parsedJson.msg)
            }
        }
    })

}


function uploadWritten() {
    $(".upload_write").show();
    $(".btnWriteRight").click(function () {
        $(".upload_write").hide();

    })
    $(".btnWriteLeft").click(function () {
        var postUrl = "http://118.190.71.51/property/index.php/PropertyMessage/addMessage"
        var msg_body = document.getElementById("upLoadText").value;
        var accessToken = $.cookie("hejia");
        $.ajax({
            //提交数据的类型 POST GET
            type: "POST",
            //提交的网址
            url: postUrl,

            //提交的数据
            data: {
                msg_body: msg_body,
                accessToken: accessToken
            },
            //返回数据的格式
            datatype: "json",//"xml", "html", "script", "json", "jsonp", "text".
            success: function (data) {
                var parsedJson = jQuery.parseJSON(data);
                console.log(parsedJson);
                alert(parsedJson.msg);
                document.getElementById("upLoadText").value = "";
                $(".upload_write").hide();
                location.reload();

            }
        })

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
