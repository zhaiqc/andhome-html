$.ajaxSetup({cache:false});
!function(a){
    function b(){
        var b=g.getBoundingClientRect().width;
        a.rem=(b/6.4>100?100:(b/6.4<50?50:b/6.4)),g.style.fontSize=a.rem+"px"}
        var g=a.document.documentElement,e;
        a.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(b,300)},!1),
        a.addEventListener("pageshow",function(a){
            a.persisted&&(clearTimeout(e),e=setTimeout(b,300))},!1),b()
    }(window);


$(function(){
    $.ajaxSetup({cache:false});
    //获取社区通知

    var accessToken = $.cookie("hejia");
    // accessToken = "NDRjNGM2YmY5YjRiNTJlYWNkOTc5NTE5OWUwNTBjNzAxM2FiZmZhMDoyNzg1";
    // console.log($.cookie("hejia"));
    if (accessToken) {
        $.ajax({
            type: 'GET',
            url : 'http://118.190.71.51/property/index.php/PropertyTel/index?accessToken='+accessToken,
            // cache:false,
            dataType: "json",
            success: function(data){
                console.log(data);
                if(true == data.done){
                    $.each(data, function(index, content) {
                        $.each(content, function(nk, nv) {
                            if (typeof(nv.name) != "undefined") {
                                // var publish_time = UnixToDate(nv.publish_time,true);
                                $(".div1").append("<li class='li2" + nv.id + "'><div class='p-link-title-con  pa-z9 fl'><p class='p-link-title'>" + nv.name + "</p><p class='p-link-txt'>" + nv.tel +"</p></div><div class='fr'><a href='tel:" + nv.tel + "'><img src='images/tel.png' alt='' class='liuliang-2'></a></div></li>");
                            }       
                        });
                        
                    });

                    //电话拨打按钮点击事件
                    $.each(data, function(index, content) {
                        $.each(content, function(nk, nv) {
                            $(".liuliang-2" + nv.id).click(function(){                
                            });

                                
                        });
                        
                    });
                    
                    //返回按钮点击事件
                    // $("#noticeList").click(function(){
                    //     $(".commentcenter").hide(); 
                    //     $(".p-recharge-li").show();
                    // }); 


                    
                } 
                else if('2' == data.error_status){
                    //若物业还没有审核用户通过
                    event.preventDefault();
                    $(".unin").fadeIn('fast');
                    // return false;
                }
                else if('0' == data.login_stauts){
                    //若是accessToken失效状态
                    event.preventDefault();
                    $(".pop").fadeIn('fast');
                    // return false;
                }
                // else {
                //     //若done返回为false,则弹出框显示
                //     event.preventDefault();
                //     $(".pop").fadeIn('fast');
                //     // return false;
                // }
            },
            
            //success end
            error : function() {
                return false;
            }
        });

        //顶部返回箭头事件判定
        $(".pre").click(function(){
            if($(".p-recharge-li").is(':hidden')) {
                $(".commentcenter").hide(); 
                $(".p-recharge-li").show();
                // history.go(-1);
            } else {
                $('.pre').attr('href','javascript:history.go(-1)'); 
            }
            // console.log($(".p-recharge-li").is(':hidden'));
        });
    } else{
        location.href ="login.html";
        // return false;
    }
    


    //注销按钮事件判定
    $("#logout").click(function(){
        //清除cookie
        $.cookie("hejia",null,{path:"/"});
        location.href ="login.html";
    });



    //登陆状态失效弹出框按钮点击事件
    $(".pop").children(".popMain").children(".popBottom").on('click', 'span', function(event) {
        event.preventDefault();
        if($(this).hasClass('confirm')){
            // $(".demo1 ul li").eq(num).remove();
            location.href ="login.html";       
            // $(".pop").fadeOut();
        }else{
            $(".pop").fadeOut();           
        }
    });

    //物业没有审核弹出框按钮点击事件
    $(".unin").children(".popMain").children(".popBottom").on('click', 'span', function(event) {
        event.preventDefault();
        if($(this).hasClass('confirm')){
            $(".unin").fadeOut();
            location.href ="index.html";       
        }
    });

});
//jquery初始事件结束

/**              
 * 时间戳转换日期              
 * @param <int> unixTime    待时间戳(秒)              
 * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)              
 * @param <int>  timeZone   时区              
 */
function UnixToDate(unixTime, isFull, timeZone) {
    timeZone = 8;
    if (typeof (timeZone) == 'number')
    {
        unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
    }
    var time = new Date(unixTime * 1000);
    var ymdhis = "";
    ymdhis += time.getUTCFullYear() + "年";
    ymdhis += (time.getUTCMonth()+1) + "月";
    ymdhis += time.getUTCDate() + "日";
    if (isFull === true)
    {
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