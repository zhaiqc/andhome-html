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

function repairInternet() {
    var postUrl = "http://118.190.71.51/property/index.php/PropertyRepair/index";
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
            if (data.done == true) {
                $.each(data.repairs, function (index, content) {
                    console.log(content)
                    $(".ul_list").append(' <li> <button id="btn' + content.id + '" class="btn' + content.id + '"> <div id="divlist" class="divlist_1"><p>' + content.title + '<br>' + UnixToDate(content.create_time, true) + '</p></div> <div class="divlist_2"><p class="innerP' + content.id + '" id="innerP' + content.id + '"></p><img class="img_look' + content.id + '"></div> </button> </li>');
                    // $(".img_div").append('<div class="div'+content.id+'"><img class="img_details" id="img_details" src="'+content.+'">    <img class="img_details1" id="img_details1">   <img class="img_details2" id="img_details2">  </div>')
                    if (content.status.indexOf(0)) {
                        $(".innerP" + content.id).text("已处理");
                        $(".img_look" + content.id).attr("src", "images/yes.png");

                    } else {
                        $(".innerP" + content.id).text("未处理");
                        $(".img_look" + content.id).attr("src", "images/no.png");


                    }

                })

                $.each(data.repairs, function (index, content) {
                    $(".btn" + content.id).click(function () {
                        $(".list").hide();
                        $(".details").show();
                        $("#notice_title").text(content.title);
                        $("#public_time").text("发布时间：" + UnixToDate(content.create_time, true));
                        $(".TRS_Editor").text("详情：" + content.descrip);
                        // $(".user").text("联系人："+content)
                        $(".phoneNumber").text("联系电话：" + content.tel);
                        // if (content.pictures!==""){
                        //     $(".img_div").append('')
                        //     $(".img_details").attr("src", content.pictures);
                        // }
                        // if (content.pictures1!==""){
                        //     $(".img_div").append('<img class="img_details1" id="img_details2">')
                        //     $(".img_details1").attr("src", content.pictures1);
                        // }
                        // if (content.pictures2!==""){
                        //     $(".img_div").append('<img class="img_details2" id="img_details2">')
                        //     $(".img_details2").attr("src", content.pictures2);
                        // }
                        $(".img_details").attr("src", content.pictures);
                        $(".img_details1").attr("src", content.pictures1);
                        $(".img_details2").attr("src", content.pictures2);

                        $(".img_details").error(function () {
                            $(this).attr("src", "images/andhome.png")

                        })
                        $(".img_details1").error(function () {
                            $(this).attr("src", "images/andhome.png")
                        })
                        $(".img_details2").error(function () {
                            $(this).attr("src", "images/andhome.png")
                        })

                        // if (content.pictures !== "") {
                        //     $(".div"+content.id).append('<img id="img_details" class="img_details" src="'+content.pictures+'">')
                        // }
                        // if (content.pictures1 !== "") {
                        //     $(".div"+content.id).append('<img id="img_details1" class="img_details1" src="'+content.pictures1+'">')
                        // }
                        // if (content.pictures2 !== "") {
                        //     $(".div"+content.id).append('<img id="img_details2" class="img_details2" src="'+content.pictures2+'">')
                        // }


                        $(".noticeList").click(function () {
                            $(".details").hide();
                            $(".list").show();
                            // $(".TRS_Editor").flexText();

                        });
                    })
                })

            } else {
                var parsedJson = jQuery.parseJSON(data);
                alert(parsedJson.msg);
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
