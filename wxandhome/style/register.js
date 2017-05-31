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

	//选择小区点击事件
	$("#liveChooseSubmit").click(function(){
	    $(".liveChoose").hide();
	    $(".register").show();
	    showMessage("");
	});

	//提交表单
	$("#regSubmit").click(function(){
	    //手机号
	    var phone_mob = $('#phone_mob').val();
	    //小区id
	    var plot_id = $('#community').val();
	    //房间号id
	    var doorplate_id = $('#room').val();
	    //验证码
	    var mobile_code = $('#temppwd').val();
	    //昵称
	    var real_name = $('#real_name').val();
	    var sex = $('.sex').val();
	    var password = $('#pwd').val();
	    var terminal = "web unkown";
	    console.log(plot_id + ',' + doorplate_id + "," + phone_mob + "," + mobile_code + "," + real_name + "," + sex);


		if ($.trim($("#real_name").val()) == "") {
		    showMessage("请您填写姓名！");
		    return false;
		}


		//判定是否选择业主
	    if ("0" == plot_id || "0" == doorplate_id) {
	    	showMessage("请您选择小区，并绑定楼号、单元和房间号！");
	    	return false;
	    }

	    //判定两次密码输入是否一致
	    if ($.trim($("#pwd").val())=='' && $.trim($("#pwd1").val()) == '') {
			showMessage("温馨提示：密码填写不能为空!");
			return false;
		}

		if($("#pwd").val()==$("#pwd2").val()){
			showMessage("");
			// return true;
		}else{
			showMessage("温馨提示：两次输入的密码不一致!");
			return false;
		}

		if ($.trim($("#phone_mob")).val() == "") {
		    showMessage("请您填写手机号收取验证码！");
		    return false;
		}

		//判定是否同意协议
		if(typeof($("#xieyi").attr("checked")) == "undefined") {
			showMessage("温馨提示：请先同意注册协议！");
			// alert("请先同意注册协议！");
			return false;
		}else{
			showMessage("");
			// return true;
		}
	        
	    $.ajax({
	        type: 'POST',
	        url : 'http://118.190.71.51/property/index.php/Register/do_register_two',
	        // cache:false,
	        dataType: "json",
	        data : {real_name : real_name, sex : sex, password : password, phone_mob : phone_mob, mobile_code : mobile_code, plot_id : plot_id, doorplate_id : doorplate_id,terminal : terminal},

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




	//选择小区级联
	// var parent_id = "";
	// var plot_id = "";
	// {"done":true,"citys":[{"id":"7","name":"淄博","parent_id":"0","plot":[{"plot_name":"春申君临天下","address":"张店昌国西路86号","plot_id":"59"},{"plot_name":"春天里","address":"山东省淄博市张店区山泉路221号","plot_id":"60"},{"plot_name":"高青芦湖物业管理有限公司","address":"高青县高苑路51号","plot_id":"66"},{"plot_name":"高青双杰物业管理有限公司","address":"高青县青城路11号","plot_id":"67"},{"plot_name":"高青县安旭物业管理有限公司","address":"高青县黄河路东首维纳斯小区","plot_id":"64"},{"plot_name":"高青县隆兴物业管理有限公司","address":"高青县黄河路100号","plot_id":"65"},{"plot_name":"高青县智慧城市筹建办公室","address":"高青县白酒质检中心北邻","plot_id":"68"},{"plot_name":"冠宇物业管理有限公司","address":"山东省淄博市博山区山头路9号","plot_id":"58"},{"plot_name":"和家社区","address":"张店区华光路139号","plot_id":"1"},{"plot_name":"鸿嘉星城","address":"桓台县黄山路399号","plot_id":"43"},{"plot_name":"佳和园","address":"淄博市张店区世纪路北首","plot_id":"71"},{"plot_name":"金石绿城","address":"张店华光路与南京路路口西南","plot_id":"57"},{"plot_name":"凯瑞溪园社区","address":"张店西八路人民西路路口东南","plot_id":"54"},{"plot_name":"丽水景苑","address":"张店区金晶大道209号","plot_id":"13"},{"plot_name":"南沣小区","address":"张店区沣水镇南沣小区","plot_id":"73"},{"plot_name":"其他社区","address":"未开通小区体验入口","plot_id":"52"},{"plot_name":"泉山小区","address":"付家镇苏村","plot_id":"62"},{"plot_name":"世纪嘉苑","address":"张店世纪路南首","plot_id":"61"},{"plot_name":"世纪康城","address":"淄博市周村区丝绸路124号","plot_id":"70"},{"plot_name":"颐臻园","address":"张店中润大道与西十路东北角","plot_id":"55"},{"plot_name":"宜居家园","address":"张店区世纪路328号","plot_id":"63"},{"plot_name":"张一小区","address":"张店区沣水镇张一小区","plot_id":"72"},{"plot_name":"中房青年城","address":"高新区金晶大道与兰雁大道交汇处北200米","plot_id":"69"},{"plot_name":"中房翡翠山景","address":"沂源县博沂路东段","plot_id":"51"}]},{"id":"2","name":"青岛","parent_id":"0","plot":[{"plot_name":"春申君临天下","address":"张店昌国西路86号","plot_id":"59"},{"plot_name":"春天里","address":"山东省淄博市张店区山泉路221号","plot_id":"60"},{"plot_name":"高青芦湖物业管理有限公司","address":"高青县高苑路51号","plot_id":"66"},{"plot_name":"高青双杰物业管理有限公司","address":"高青县青城路11号","plot_id":"67"},{"plot_name":"高青县安旭物业管理有限公司","address":"高青县黄河路东首维纳斯小区","plot_id":"64"},{"plot_name":"高青县隆兴物业管理有限公司","address":"高青县黄河路100号","plot_id":"65"},{"plot_name":"高青县智慧城市筹建办公室","address":"高青县白酒质检中心北邻","plot_id":"68"},{"plot_name":"冠宇物业管理有限公司","address":"山东省淄博市博山区山头路9号","plot_id":"58"},{"plot_name":"和家社区","address":"张店区华光路139号","plot_id":"1"},{"plot_name":"鸿嘉星城","address":"桓台县黄山路399号","plot_id":"43"},{"plot_name":"佳和园","address":"淄博市张店区世纪路北首","plot_id":"71"},{"plot_name":"金石绿城","address":"张店华光路与南京路路口西南","plot_id":"57"},{"plot_name":"凯瑞溪园社区","address":"张店西八路人民西路路口东南","plot_id":"54"},{"plot_name":"丽水景苑","address":"张店区金晶大道209号","plot_id":"13"},{"plot_name":"南沣小区","address":"张店区沣水镇南沣小区","plot_id":"73"},{"plot_name":"其他社区","address":"未开通小区体验入口","plot_id":"52"},{"plot_name":"泉山小区","address":"付家镇苏村","plot_id":"62"},{"plot_name":"世纪嘉苑","address":"张店世纪路南首","plot_id":"61"},{"plot_name":"世纪康城","address":"淄博市周村区丝绸路124号","plot_id":"70"},{"plot_name":"颐臻园","address":"张店中润大道与西十路东北角","plot_id":"55"},{"plot_name":"宜居家园","address":"张店区世纪路328号","plot_id":"63"},{"plot_name":"张一小区","address":"张店区沣水镇张一小区","plot_id":"72"},{"plot_name":"中房青年城","address":"高新区金晶大道与兰雁大道交汇处北200米","plot_id":"69"},{"plot_name":"中房翡翠山景","address":"沂源县博沂路东段","plot_id":"51"}]}]}

	$("#xq").click(function(){

		$(".liveChoose").show(); 
		$(".register").hide();
		$("#reg-ok").hide();
		// className = $(this).attr('class');
		// $('#dialogBg').fadeIn(300);
		// $('#dialog').removeAttr('class').addClass('animated '+className+'').fadeIn();

		//判定城市选择框是否是初始化值,若是，清空；若已经选择了城市，则初始化城市名称
		if ($("#city").val() == "0") {
		    $("#city").empty();
		} else {
		    $("#city").html("<option value='"+$('#city option:selected').val()+"'>" + $('#city option:selected').text() + "</option>");  
		}

		$.get("http://118.190.71.51/property/index.php/Register/getCity", function(data){
		    data = eval("'" + data + "'");
		    //JSON.parse()方法用于将一个JSON字符串转换为对象，获得最外围json对象
		    data = JSON.parse(data);
		    
		    $("#city").prepend("<option value='0'>----请选择城市----</option>");

		    // console.log(data.done);
		    //遍历data得到citys(index):对象数组(content)
		    $.each(data, function(index, content) {
		        
		        //index对应done和citys
		        // console.log(index);
		        //获得citys对应对象content对象数组，遍历content，获得每个v json对象
		        $.each(content, function(k, v) {
		            if ($('#city option:selected').text() != v.name) {
		               //将选中城市名称之外的城市放入option
		                $("#city").append("<option value='"+v.id+"'>"+v.name+"</option>");
		                // console.log(v.name + "："); 
		            } 
		        });
		    });

			           
		    $('#city').change(function(){
		        
		        $("#building").html('<option value="0">----请选择楼号----</option>');
		        $("#community").html('<option value="0">----请选择社区----</option>');
		        $("#unity").html('<option value="0">----请选择单元号----</option>');
		        $("#room").html('<option value="0">----请选择房间号----</option>');
		        $.each(data,function(index, content){
		            $.each(content, function(dk, dv) {
		                //获得城市名称
		                // console.log(v.name + "：");
		                 //获得plot对象数组，遍历plot，获得每个v1 json对象
		                 //判定如果所选城市等于对象
		                if($('#city option:selected').text()==dv.name){
		                    // parent_id = dv.parent_id;
		                    // console.log(parent_id);
		                    $.each(dv.plot, function(dk1, dv1) {
		                        //获得社区名称
		                        $("#community").append("<option value='"+dv1.plot_id+"'>"+dv1.plot_name+"</option>"); 
		                        // console.log( dv1.plot_name);
		                    });

		                    //小区点击事件
		                    $('#community').change(function(){
		                        // $("#city").html('<option>请选择城市</option>');
		                        $("#building").html('<option value="0">----请选择楼号----</option>');
		                        $("#unity").html('<option value="0">----请选择单元号----</option>');
		                        $("#room").html('<option value="0">----请选择房间号----</option>');
		                        $.each(dv.plot, function(dk1, dv1) {
		                            if($('#community option:selected').text()==dv1.plot_name){
		                            	//选择小区文本框赋值所选社区名称
		                            	$("#xq").val(dv1.plot_name);
		                                // plot_id = dv1.plot_id;
		                                // console.log(dv1.plot_id);
		                                //根据获得的parent_id 和 plot_id 调用新借口获得楼房信息
		                                $.get("http://118.190.71.51/property/index.php/Register/getBuild?parent_id=" + dv.parent_id + "&plot_id=" + dv1.plot_id, function(building_data){
		                                    building_data = eval("'" + building_data + "'");
		                                    // console.log(building_data);
		                                    //JSON.parse()方法用于将一个JSON字符串转换为对象，获得最外围json对象
		                                    building_data = JSON.parse(building_data);
		                                    // console.log(building_data);
		                                    // {"done":true,"build":[{"id":"51052","plot_id":"57","name":"1号楼","parent_id":"0","build_title":""},{"id":"51167","plot_id":"57","name":"2号楼","parent_id":"0","build_title":""},{"id":"51253","plot_id":"57","name":"3号楼","parent_id":"0","build_title":""},{"id":"51356","plot_id":"57","name":"4号楼","parent_id":"0","build_title":""},{"id":"51527","plot_id":"57","name":"5号楼","parent_id":"0","build_title":""},{"id":"51583","plot_id":"57","name":"6号楼","parent_id":"0","build_title":""},{"id":"51658","plot_id":"57","name":"7号楼","parent_id":"0","build_title":""},{"id":"51733","plot_id":"57","name":"8号楼","parent_id":"0","build_title":""},{"id":"51819","plot_id":"57","name":"9号楼","parent_id":"0","build_title":""},{"id":"51914","plot_id":"57","name":"10号楼","parent_id":"0","build_title":""},{"id":"51989","plot_id":"57","name":"11号楼","parent_id":"0","build_title":""}]}
		                                    $.each(building_data, function(bk, bv) {
		                                        // console.log(bv);
		                                        $("#building").html('<option value="0">----请选择楼号----</option>');
		                                        $("#unity").html('<option value="0">----请选择单元号----</option>');
		                                        $("#room").html('<option value="0">----请选择房间号----</option>');
		                                        $.each(bv, function(bk1, bv1) {
		                                            //获得楼号
		                                            if(typeof(bv1.name) == "undefined") {
		                                            	// console.log("该小区还没有导入楼号！");
		                                            	return false;
		                                            }
		                                            
		                                            $("#building").append("<option value='"+bv1.plot_id+"'>"+bv1.name+"</option>"); 
		                                            // console.log(bv1.name);
		                                        });
		                                        
		                                    });

			                                    //当选择楼号的时候
			                                    $('#building').change(function(){
			                                        // $("#unity").empty();
			                                        // $("#room").empty();
			                                        $("#unity").html('<option value="0">----请选择单元号----</option>');
			                                        $("#room").html('<option value="0">----请选择房间号----</option>');
			                                        $.each(building_data, function(bk, bv) {
			                                            // console.log(building_data);
			                                            $.each(bv, function(bk1, bv1) {
			                                                if($('#building option:selected').text()==bv1.name){

			                                                    // console.log(bv1.parent_id + "," + bv1.plot_id + "," + bv1.name);
			                                                    //调用借口获得单元信息
			                                                    $.get("http://118.190.71.51/property/index.php/Register/getBuild?parent_id=" + bv1.id + "&plot_id=" + bv1.plot_id, function(unity_data){
			                                                        unity_data = eval("'" + unity_data + "'");
			                                                        // console.log(unity_data);
			                                                        //JSON.parse()方法用于将一个JSON字符串转换为对象，获得最外围json对象
			                                                        unity_data = JSON.parse(unity_data);
			                                                        // console.log(data.done);
			                                                        $.each(unity_data, function(uk, uv) {
			                                                            //清空option
			                                                            $("#unity").html('<option value="0">----请选择单元号----</option>');
			                                                            $("#room").html('<option value="0">----请选择房间号----</option>');
			                                                            //index对应done和citys
			                                                            // console.log(index);
			                                                            $.each(uv, function(uk1, uv1) {
			                                                                //获得单元名称
			                                                                $("#unity").append("<option value='"+uv1.id+"'>"+uv1.name+"</option>");
			                                                            });

			                                                            $('#unity').change(function(){
			                                                                $("#room").html('<option value="0">----请选择房间号----</option>');
			                                                                $.each(uv, function(uk1, uv1) {
			                                                                if ($('#unity option:selected').text()==uv1.name) {
			                                                                	// $("#xq").val(dv1.plot_name + bv1.name + uv1.name);
			                                                                    //调用借口获得房间信息
			                                                                    $.get("http://118.190.71.51/property/index.php/Register/getBuild?parent_id=" + uv1.id + "&plot_id=" + uv1.plot_id, function(room_data){
			                                                                        room_data = eval("'" + room_data + "'");
			                                                                        //console.log(room_data);
			                                                                        room_data = JSON.parse(room_data);
			                                                                        $.each(room_data, function(rk, rv) {
			                                                                            $("#room").html('<option value="0">----请选择房间号----</option>');
			                                                                            $.each(rv, function(rk1, rv1) {
			                                                                                //获得房间号名称
			                                                                                $("#room").append("<option value='"+rv1.id+"'>"+rv1.name+"</option>");
			                                                                            });
			                                                                        });
			                                                                    });
			                                                                }
			                                                            });

		                                                            });

		                                                        });
		                                                    });	                                                
		                                                }
		                                            });    
		                                        });	                                             
		                                    });
		                                });
		                            }	                            
		                        });
		                    });
		                }    
		            });
		        });
				
		    });
			//选择城市事件结束
		});
		//调用获得城市接口结束		
	});
	//#xq选择小区点击事件结束


	//顶部返回箭头事件判定
    $(".left").click(function(){
    	if($(".register").is(':hidden')) {
    		$(".liveChoose").hide(); 
			$(".register").show();
			// history.go(-1);
    	} else {
    		$('.left').attr('href','javascript:history.go(-1)'); 
    	}
    });


    //注册成功界面按钮
	$("#loginHJ").click(function(){
	    location.href ="login.html";
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
  　curCount = count;
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
        url : 'http://118.190.71.51/property/index.php/Register/getVerify',
        dataType: "json",
//                        jsonp:'jsoncallback',
        data : {phone : phone_mob, from : from, type : '1'},

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
