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
    //居住具体地址
    var plot_name = '';
    var room_name = '';
    var username = '';
    var yezhu = '';
    var bill_total = '';
    var paid_total = '';
    var accessToken = $.cookie("hejia");
    // var accessToken = "NGRkOTQwZmQ5MzNiY2UzNTNhNTEzY2U4MWUxNWRkNGVhZGZkNjRjMjoyNzg1";
    // console.log(accessToken);
    if (accessToken) {
        //获取物业账单
        $.ajax({
            type: 'GET',
            url : 'http://118.190.71.51/property/index.php/PropertyCheck/unPaidOrders?accessToken=' + accessToken,
            // cache:false,
            dataType: "json",
            success: function(data){
                console.log(data);
                if(true == data.done){

                    //用户注册姓名
                    username = data.real_name;
                    $(".username").text(username);
                    //居住具体地址
                    plot_name = data.plot_name;
                    room_name = data.room_name;
                    $(".live").html(plot_name + "<br>" + room_name);
                    //未支付缴费总额
                    bill_total = data.amount;
                    $(".sum").text(bill_total + "元");
                    $(".bill_main").html("");
                    $(".bill_main").append("<li><h4 onoff='false'><img src='images/bill_06.png' alt=''>以下是您的物业<font color='red'>未支付</font>账单：</div></h4></li>");

                    $.each(data, function(index, content) {
                        $.each(content, function(bk, bv) { 
                            if (typeof(bv.remark) != "undefined") {
                                // var publish_time = UnixToDate(nv.publish_time,true);
                                $(".bill_main").append("<li class='btn" + bv.id + "'><h4 onoff='false'><img src='images/bill_05.png' alt=''>" + bv.remark + "<div class='fr'>" + bv.order_amount + "元<span class='icon icon-up'></span></div></h4></li>");
                            }       
                        });
                        
                    });


                    //未缴费账单详情点击事件
                    $.each(data, function(index, content) {
                        $.each(content, function(bk, bv) {
                            $(".btn" + bv.id).click(function(){
                                $.ajax({
                                    type: 'GET',
                                    url : 'http://118.190.71.51/property/index.php/PropertyCheck/order?order_id=' + bv.id + '&accessToken=' + accessToken,
                                    // cache:false,
                                    dataType: "json",
                                    success: function(bill_data){
                                        // console.log(bill_data);
                                        if(true == bill_data.done){
                                            $.each(bill_data, function(index, content) {
                                                $.each(content, function(bk1, bv1) {  
                                                    // console.log(bv1);
                                                    $(".sum").text(bv1.order_amount + "元");
                                                    $(".bill_details").html("");
                                                    // $(".bill_details").append("<li><h4 onoff='false'><img src='images/bill_05.png' alt=''>帐单状态<div class='fr'><font color='red'>未支付</font><span class='icon icon-up'></span></div></h4></li>"); 
                                                    $(".bill_details").html("<li><h4 onoff='false'><img src='images/bill_06.png' alt=''>帐单状态<div class='fr'><font color='red'>未支付</font><span class='icon icon-up'></span></div></h4></li><li><h4 onoff='false'><img src='images/bill_06.png' alt=''>账期<div class='fr'>" + bv1.remark + "<span class='icon icon-up'></span></div></h4></li>");
                                                    if (typeof(bv1.remark) != "undefined") {
                                                        // console.log(bk1);
                                                        $.each(bv1, function(bk2, bv2) {
                                                            // 判定是是否是账单条目项
                                                            if (bk2 == 'order_item') {
                                                                $.each(bv2, function(bk3, bv3) {

                                                                    $(".bill_details").append("<li><h4 onoff='false'><img src='images/bill_05.png' alt=''>" + bv3.cost_name + "<div class='fr'>" + bv3.cost_charge + "元<span class='icon icon-up'></span></div></h4></li>");
                                                                });
                                                            } 

                                                            // 判定是是否是业主信息项
                                                            if (bk2 == 'property_owner') {
                                                                $.each(bv2, function(bk3, bv3) {
                                                                    if (bk3 == 'name') {
                                                                        // console.log(bk3 + bv3);
                                                                        //替换用户注册姓名为业主姓名
                                                                        yezhu = bv3;
                                                                        $(".username").text(username + "(" + yezhu + ")");
                                                                    } 
                                                                    
                                                                });
                                                            } 

                                                             
                                                        });                                                
                                                    } else {
                                                        return false;
                                                    }

                                                });
                                                
                                            });

                                            $("#bill_main").hide();
                                            $("#bill_details").show();
                                            
                                        } else {
                                            
                                            return false;
                                        }
                                    },
                                    
                                    //success end
                                    error : function() {
                                        return false;
                                    }
                                });
                                    
                            });
                            
                                
                        });
                        
                    });
                    //未缴费账单详情点击事件结束

                    //返回按钮点击事件
                    $("#mbill_btn").click(function(){
                        $("#bill_record").hide();
                        $("#bill_main").show();
                        $("#bill_details").hide();
                        $(".sum").text(data.amount + "元");
                    }); 
                    
                } else if('3' == data.error_status){
                    //若是没有导入账单状态或者账单已经结清
                    $("#bill_main").hide();
                    $("#no_bill").show();
                } else if('2' == data.error_status){
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
            },
            
            //success end
            error : function() {
                return false;
            }
        });

        //缴费记录按钮事件（还有未支付账单）
        $('#record_btn').click(function(){
            //获取物业账单
            $.ajax({
                type: 'GET',
                url : 'http://118.190.71.51/property/index.php/PropertyCheck/hasPaidOrders?id=1&accessToken=' + accessToken,
                // cache:false,
                dataType: "json",
                success: function(data){
                    console.log(data);
                    if(true == data.done){
                        $(".bill_record").html("");
                        //居住具体地址
                        $(".live").html(plot_name + "<br>" +room_name);
                        $(".bill_record").append("<li><h4 onoff='false'><img src='images/bill_06.png' alt=''>以下是您的物业<font color='green'>已支付</font>账单：</div></h4></li>");
                     
                        var sum = 0;
                        $.each(data.data, function(index, content) {       
                            sum += parseFloat(content.order_amount);
                            console.log(content);
                            if (typeof(content.remark) != "undefined") {
                                $(".bill_record").append("<li class='rbtn" + content.id + "'><h4 onoff='false'><img src='images/bill_05.png' alt=''>" + content.remark + "<div class='fr'><font color='green'>" + content.pay_way + "：" + content.order_amount + "元</font><span class='icon icon-up'></span></div></h4></li>");                    
                            }    
                        });

                        //已支付缴费总额
                        paid_total = sum.toFixed(2);
                        $(".sum").text(paid_total + "元");

                        $("#bill_main").hide();
                        // $("#bill_details").hide();
                        $("#bill_record").show();


                        // 已缴费账单详情点击事件
                        $.each(data.data, function(index, content) {
                            $(".rbtn" + content.id).click(function(){ 
                                $(".bill_record_details").html("");
                                $(".sum").text(content.order_amount + "元");
                                $(".bill_record_details").html("<li><h4 onoff='false'><img src='images/bill_06.png' alt=''>帐单状态<div class='fr'><font color='green'>已支付</font><span class='icon icon-up'></span></div></h4></li><li><h4 onoff='false'><img src='images/bill_06.png' alt=''>账期<div class='fr'>" + content.remark + "<span class='icon icon-up'></span></div></h4></li>");
                                $.each(content, function(rbk, rbv) {
                                    // console.log(rbv);
                                    if ("order_item" == rbk) {
                                        $.each(rbv, function(rbk1, rbv1) {  
                                            $(".bill_record_details").append("<li><h4 onoff='false'><img src='images/bill_05.png' alt=''>" + rbv1.cost_name + "<div class='fr'><font color='green'>" + rbv1.cost_charge + "元</font><span class='icon icon-up'></span></div></h4></li>");
                                        });
                                    }                                    
                                    
                                });

                                // $("#bill_main").hide();
                                // $("#bill_details").hide();
                                $("#bill_record").hide();  
                                $("#bill_record_details").show();  
                            });
                            
                        });
                        //账单详情点击事件结束

                        //缴费记录返回按钮点击事件
                        $("#rbill_btn").click(function(){
                            $("#bill_record").hide();
                            $("#bill_main").show();
                            // $("#bill_details").hide();
                            $(".sum").text(bill_total + "元");
                        }); 

                        //已缴费账单明细返回按钮点击事件
                        $("#rdbill_btn").click(function(){
                            $("#bill_record_details").hide();
                            // $("#bill_main").hide();
                            $("#bill_record").show();
                            $(".sum").text(paid_total + "元");
                        });
                        
                    } else {
                        $("#no_paid").show();
                        $("#bill_main").hide();
                        // return false;
                    }
                },
                
                //success end
                error : function() {
                    return false;
                }
            });
        });


        //缴费记录按钮事件（账单都已经结清，可以查看缴费记录）
        $('#paid_record_btn').click(function(){
            //获取物业账单
            $.ajax({
                type: 'GET',
                url : 'http://118.190.71.51/property/index.php/PropertyCheck/hasPaidOrders?id=1&accessToken=' + accessToken,
                // cache:false,
                dataType: "json",
                success: function(data){
                    console.log(data);
                    if(true == data.done){
                        $(".bill_record").html("");
                        //居住具体地址
                        $(".live").html(plot_name + "<br>" +room_name);
                        $(".bill_record").append("<li><h4 onoff='false'><img src='images/bill_06.png' alt=''>以下是您的物业<font color='green'>已支付</font>账单：</div></h4></li>");
                     
                        var sum = 0;
                        $.each(data.data, function(index, content) {       
                            sum += parseFloat(content.order_amount);
                            console.log(content);
                            if (typeof(content.remark) != "undefined") {
                                $(".bill_record").append("<li class='rbtn" + content.id + "'><h4 onoff='false'><img src='images/bill_05.png' alt=''>" + content.remark + "<div class='fr'><font color='green'>" + content.pay_way + "：" + content.order_amount + "元</font><span class='icon icon-up'></span></div></h4></li>");                    
                            }    
                        });

                        //已支付缴费总额
                        // paid_total = sum.toFixed(2);
                        // $(".sum").text(paid_total + "元");

                        $("#no_bill").hide();
                        // $("#bill_details").hide();
                        $("#bill_record").show();


                        // 已缴费账单详情点击事件
                        $.each(data.data, function(index, content) {
                            $(".rbtn" + content.id).click(function(){ 
                                $(".bill_record_details").html("");
                                $(".sum").text(content.order_amount + "元");
                                $(".bill_record_details").html("<li><h4 onoff='false'><img src='images/bill_06.png' alt=''>帐单状态<div class='fr'><font color='green'>已支付</font><span class='icon icon-up'></span></div></h4></li><li><h4 onoff='false'><img src='images/bill_06.png' alt=''>账期<div class='fr'>" + content.remark + "<span class='icon icon-up'></span></div></h4></li>");
                                $.each(content, function(rbk, rbv) {
                                    // console.log(rbv);
                                    if ("order_item" == rbk) {
                                        $.each(rbv, function(rbk1, rbv1) {  
                                            $(".bill_record_details").append("<li><h4 onoff='false'><img src='images/bill_05.png' alt=''>" + rbv1.cost_name + "<div class='fr'><font color='green'>" + rbv1.cost_charge + "元</font><span class='icon icon-up'></span></div></h4></li>");
                                        });
                                    }                                    
                                    
                                });

                                // $("#bill_main").hide();
                                // $("#bill_details").hide();
                                $("#bill_record").hide();  
                                $("#bill_record_details").show();  
                            });
                            
                        });
                        //账单详情点击事件结束

                        //缴费记录返回按钮点击事件
                        $("#rbill_btn").click(function(){
                            // $("#bill_record").hide();
                            // $("#bill_main").show();
                            // $(".sum").text(bill_total + "元");
                            location.href ="index.html";
                        }); 

                        //已缴费账单明细返回按钮点击事件
                        $("#rdbill_btn").click(function(){
                            $("#bill_record_details").hide();
                            // $("#bill_main").hide();
                            $("#bill_record").show();
                            $(".sum").text(paid_total + "元");
                        });
                        
                    } else {
                        $("#no_paid").show();
                        $("#bill_main").hide();
                        // return false;
                    }
                },
                
                //success end
                error : function() {
                    return false;
                }
            });
        });
        
        // 没有账单页面返回按钮事件判定
        $("#returnHome").click(function(){
            location.href ="index.html";
        });

        // 没有已支付账单页面返回按钮事件判定
        $("#returnBill").click(function(){
            $("#no_paid").hide();  
            $("#bill_main").show();
            $(".sum").text(bill_total + "元");
        });

        // 返回箭头事件判定
        $(".pre").click(function(){

            //如果没有账单或者账单结清界面显示
            if (!($("#no_bill").is(':hidden'))) {
                location.href ="index.html";
            }

            //如果没有已支付账单页面界面显示
            else if (!($("#no_paid").is(':hidden'))) {
                $("#no_paid").hide();
                $("#bill_main").show();
                $(".sum").text(bill_total + "元");
            }

            //如果未支付账单页面界面显示
            else if (!($("#bill_main").is(':hidden'))) {
                location.href ="index.html";
            }

            //如果未支付账单明细页面界面显示
            else if (!($("#bill_details").is(':hidden'))) {
                $("#bill_details").hide();
                $("#bill_main").show();
                $(".sum").text(bill_total + "元");
            }

            //如果已支付账单页面界面显示
            else if (!($("#bill_record").is(':hidden'))) {
                location.href ="index.html";
                // $("#bill_record").hide();
                // $("#bill_main").show();
                // $(".sum").text(bill_total + "元");
            }
            //如果已支付账单明细页面界面显示
            else if (!($("#bill_record_details").is(':hidden'))) {
                $("#bill_record_details").hide();
                $("#bill_record").show();
                $(".sum").text(paid_total + "元");
            } else {
                $('.pre').attr('href','javascript:history.go(-1)'); 
            }
        });
    } else {
        //accessToken存在判定
        location.href ="login.html";
        // return false;
    }

    //登陆状态失效弹出框按钮点击事件
    $(".pop").children(".popMain").children(".popBottom").on('click', 'span', function(event) {
        event.preventDefault();
        if($(this).hasClass('confirm')){
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