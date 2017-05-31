$.ajaxSetup({cache:false});

!function(a){
	function b(){
		var b=g.getBoundingClientRect().width;
		a.rem=(b/6.4>100?100:(b/6.4<50?50:b/6.4)),g.style.fontSize=a.rem+"px"}
		var g=a.document.documentElement,e;
		a.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(b,300)},!1),
		a.addEventListener("pageshow",function(a){
			a.persisted&&(clearTimeout(e),e=setTimeout(b,300))},!1),b()}(window);


$(function(){

	$.ajaxSetup({cache:false});


	//提交表单
	$("#regSubmit").click(function(){
	    //手机号
	    var phone_mob = $('#phone_mob').val();
	    //验证码
	    var mobile_code = $('#temppwd').val();
	    var password = $('#pwd').val();
	    var terminal = "web unkown";
	    console.log(phone_mob + "," + mobile_code);

	    //判定两次密码输入是否一致
	    if ($("#pwd").val()=='' || $("#pwd1").val() == '') {
			showMessage("温馨提示：密码不能为空!");
			return false;
		}

		if($("#pwd").val()==$("#pwd2").val()){
			showMessage("");
			// return true;
		}else{
			showMessage("温馨提示：两次输入的密码不一致!");
			return false;
		}

		if ($("#phone_mob").val() == '') {
		    showMessage("请您填写您注册的手机号收取验证码！");
		    return false;
		}
	        
	    $.ajax({
	        type: 'POST',
	        url : 'http://118.190.71.51/property/index.php/Register/newPsd',
	        // cache:false,
	        dataType: "json",
	        data : {user_name : phone_mob, mobile_code : mobile_code, newpsd : password},

	        success: function(data){
	            console.log(data);
	            if(true == data.done){
					$(".register").hide();
					$("#reg-ok").show();
					return true;
	            } else {
	            	showMessage(data.msg + "！");
	            	return false;
	            }
	        },
	        
	        //success end
	        error : function(data) {
	        	console.log(data);
	            // alert("登陆失败！");
	           // showMessage("请输入正确的账号或者密码！","mloginNameV");
	            return false;
	        }
	    });
	    
	});
	//提交表单事件结束


	//顶部返回箭头事件判定
    $(".left").click(function(){
    	if($(".register").is(':hidden')) {
    		$("#reg-ok").hide(); 
			$(".register").show();
    	} else {
    		$('.left').attr('href','javascript:history.go(-1)'); 
    	}
    });

});
//jquery初始事件结束


//提示信息框
function showMessage($message){
	$("#pi-three").html($message);
	//返回页面顶部
	$("html,body").animate({scrollTop: $("#pi-three").offset().top}, 200);
}	

//验证码按钮
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendMessage() {

	if ($("#phone_mob").val() == '') {
		curCount = 0;
		showMessage("请您填写注册的手机号收取验证码！");
		return false;
	} else {
		curCount = count;
	}
　　//设置button效果，开始计时
	 $("#sjPasswordBtn").attr("disabled", "true");
	 $("#sjPasswordBtn").val("请在" + curCount + "秒内输入验证码");
	 InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
　　 
    //调用接口向手机发送短信
    var phone_mob = $("#phone_mob").val();
    // console.log(phone_mob);
    var from = "web unkown";
    $.ajax({
        type: 'POST',
        url : 'http://118.190.71.51/property/index.php/Register/Verify',
        dataType: "json",
        data : {user_name : phone_mob, from : from, type : '1'},

        success: function(data){
            console.log(data);
         	if(false == data.done){
				curCount = 0;
				showMessage(data.msg + "！");
				return false;
            }
        },
        
        //success end
        error : function() {
            // alert("登陆失败！");
           // showMessage("请输入正确的账号或者密码！","mloginNameV");
            return false;
        }
    });
}

//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {                
        window.clearInterval(InterValObj);//停止计时器
        $("#sjPasswordBtn").removeAttr("disabled");//启用按钮
        $("#sjPasswordBtn").val("重新发送验证码");
    }
    else {
        curCount--;
        $("#sjPasswordBtn").val("请在" + curCount + "秒内输入验证码");
    }
}
