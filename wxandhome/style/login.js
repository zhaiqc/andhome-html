//保证全屏

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


function singin() {
    
    var username = document.getElementById("username").value;//得到username
    var password = document.getElementById("password").value;//得到password
    // console.log(username);
    // console.log(password);

    if($.trim(username)==''){

        showMessage("账号填写不能为空！");
        $('#username').val('');
        return false;
    }

    if($.trim(password)==''){

        showMessage("密码填写不能为空！");
        $('#password').val('');
        return false;
    }

    var postUrl = "http://118.190.71.51/property/index.php/Login/do_login";
    var username = username.toString();
    var password = password.toString();
    $.ajax({
        //提交数据的类型 POST GET
        type: "POST",
        //提交的网址
        url: postUrl,

        //提交的数据
        data: {
            username: username,
            password: password
        },
        //返回数据的格式
        datatype: "json",//"xml", "html", "script", "json", "jsonp", "text".
        success: function (data) {
            data = eval("'" + data + "'");
            console.log(data);
            var parsedJson = jQuery.parseJSON(data);

            if (parsedJson.done == true) {
                // var CookieName = parsedJson.user_name;
                var CookieAccessToken = parsedJson.accessToken;
                $.cookie("hejia", CookieAccessToken,{ expires: 365, path: '/' });
                // console.log(CookieAccessToken);
                // console.log($.cookie("hejia"));
                location.href ="index.html";
            } else {
                // console.log(parsedJson.msg);
                showMessage("登录失败，请您重新输入！");
            }

        }
    });
}


function youke_singin() {
    
    var username = "hejia";//得到username
    var password = "hejia";//得到password
    // console.log(username);
    // console.log(password);

    var postUrl = "http://118.190.71.51/property/index.php/Login/do_login";
    var username = username.toString();
    var password = password.toString();
    $.ajax({
        //提交数据的类型 POST GET
        type: "POST",
        //提交的网址
        url: postUrl,

        //提交的数据
        data: {
            username: username,
            password: password
        },
        //返回数据的格式
        datatype: "json",//"xml", "html", "script", "json", "jsonp", "text".
        success: function (data) {
            data = eval("'" + data + "'");
            console.log(data);
            var parsedJson = jQuery.parseJSON(data);            
            if (parsedJson.done == true) {
                var CookieName = parsedJson.user_name;
                var CookieAccessToken = parsedJson.accessToken;
                // console.log(CookieAccessToken);
                $.cookie("hejia", CookieAccessToken,{ expires: 365, path: '/' });
                console.log($.cookie("hejia"));
                location.href ="index.html";
                // alert("保存完毕");
            } else {
                showMessage(parsedJson.msg)
            }

        }
    });
}


//登录框信息展示
function showMessage($message){
    $("#TipSMS").html($message);
}

//记住用户名选中框选中与否
function checkedSelect() {
var username =document.getElementById("username").value.toString();
    
    if(typeof($("#loginCheckBox2").attr("checked")) == "undefined") {
        $.cookie("username", null, {path: "/"});
        // alert("取消");
    } else {
        $.cookie("username", username, {expires: 365, path: '/'})
        // alert("选中");
    }
    //需要填写name='chk'属性
    // if ($('input[name="chk"]').prop("checked")) {
    //     alert("选中");
    //     $.cookie("username", username, {expires: 365, path: '/'})
    // } else {
    //     alert("取消");
    // }


}

//读取记住的用户名
function readUsername() {
    var username = $.cookie("username");
    if (username !== null) {
        document.getElementById("username").value = username.toString();
    }
}





    


