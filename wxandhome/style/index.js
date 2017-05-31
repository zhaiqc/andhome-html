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
    getHomeData();
    //右边列表下拉效果

    $('.header-nav-btn').on('click',function(){
        if($(this).attr('t') == "0"){
            $('.p-wrap .header-nav').slideDown();
            $(this).attr('t',1);
        }else{
            $('.p-wrap .header-nav').hide();
            $(this).attr('t',0);
        }
    });


    //图片轮播代码
    $("#container").PageSwitch({
        direction: 'horizontal',
        easing: 'ease-in',
        duration: 1000,
        autoPlay: true,
        loop: 'false'
    });


    

    // 更多内容
    var len = 0;
    var clickN = 0;
    $('.click-more a').on('click',function(){
        clickN++;
        $('.more-con').show();

         var li1,li2,li3,li4,li5,li6,li7,li8;  
            for(len;len<5*clickN;len++){
                li1=$( 
                    '<li class="clear">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-5.png" alt=""/>'+
                            '<div class="img-txt">'+
                                '<p>乐视会员流量包</p>'+
                                '<p class="p2">1GB流量+乐视会员</p>'+
                                '<p class="p3">9.9元/次<span></span></p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://service.bj.10086.cn/m/sjyw/product/queryProductItemInfo.action?PACKAGECODE=LSSPHYLL&PACKAGEID=300050&PRODUCTSHOWCODE=lssphyll&dateFlag=&isCheck=1">订购</a>'+
                        '</div>'+
                    '</li>'
                    );
                li2=$( 
                    '<li class="clear">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-1.png" alt=""/>'+
                            '<div class="img-txt">'+
                                '<p>假日流量包</p>'+
                                '<p class="p2">1GB全国流量</p>'+
                                '<p class="p3">10元/次<span></span></p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://touch.10086.cn/goods/100_100_1029331_1020062.html" id="jrllb">订购</a>'+
                        '</div>'+
                    '</li>'
                    );
                  li3=$( 
                    '<li class="clear">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-2.png" alt=""/>'+
                            '<div class="img-txt">'+
                              ' <p>和4G套餐</p>'+
                               ' <p class="p2">办套餐，实惠又省心</p>'+
                                '<p class="p3">38元-888元<span></span></p>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://service.bj.10086.cn/m/h4g/" id="h4gtc">订购</a>'+
                        '</div>'+
                    '</li>'
                    );
                  li4=$( 
                    '<li class="clear">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-3.png" alt=""/>'+
                            '<div class="img-txt">'+
                                '<p>流量可选包</p>'+
                                '<p class="p2">多档位数据流量套餐</p>'+
                                '<p class="p3">30元/500MB<span></span></p>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://service.bj.10086.cn/m/sjll/kxb.html" id="llkxb">订购</a>'+
                        '</div>'+
                    '</li>'
                    );
                  li5=$( 
                    '<li class="clear">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-4.png" alt=""/>'+
                            '<div class="img-txt">'+
                                '<p>流量安心包</p>'+
                                '<p class="p2">开通免费，流量不怕超</p>'+
                                '<p class="p3">0元/月<span></span></p>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://service.bj.10086.cn/m/sjll/axb.html" id="llaxb">订购</a>'+
                        '</div>'+
                    '</li>'
                    );
               
                  li6=$( 
                    '<li class="clear">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-6.png" alt=""/>'+
                            '<div class="img-txt">'+
                              ' <p>和家庭分享</p>'+
                               ' <p class="p2">流量共享，通话免费</p>'+
                                '<p class="p3">10元/月起<span></span></p>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://service.bj.10086.cn/m/4g/hjt/" id="hjtfx">订购</a>'+
                        '</div>'+
                    '</li>'
                    );
                  li7=$( 
                    '<li class="clear">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-7.png" alt=""/>'+
                            '<div class="img-txt">'+
                              ' <p>移动光宽带</p>'+
                               ' <p class="p2">百兆宽带优惠享</p>'+
                                '<p class="p3">0元起<span></span></p>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://service.bj.10086.cn/m/jsp/bb/kdzq.jsp" id="ydgkd">订购</a>'+
                        '</div>'+
                    '</li>'
                    );
                  li8=$( 
                    '<li class="clear 88">'+
                        '<div class="l clear">'+
                            '<img src="images/pang/more-4.png" alt=""/>'+
                            '<div class="img-txt">'+
                              ' <p>流量直充</p>'+
                               ' <p class="p2">像充话费一样充流量</p>'+
                                '<p class="p3">10元/100MB<span>9折特惠</span></p>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="r">'+
                            '<a href="http://service.bj.10086.cn/m/p/llzcMore/cpb/" id="llzc">订购</a>'+
                        '</div>'+
                    '</li>'
                    );

                var arr = [li1,li2,li3,li4,li5,li6,li7,li8];
                var arrLen = arr.length; 
                $(".more-list").append(arr[len]);
              
                if(len == arrLen-1){
                    $('.click-more').hide();
               }                    
            }                
            
    });

    //搜索框效果
    // $('.header-seach-btn').on('click',function(){
    //     $('.p-wrap .header-seach').show();
    // });


//                回到顶部
    // $('.p-index .click-d .top-btn').on('click',function(){
    //     $('html,body').animate({scrollTop:"0"},200);
    // });
//                关闭下载
    // $('.p-down-tis .tis-con .close').on('click',function(){
    //     $('.p-down-tis').hide();
    // });
    
    //消息走马灯
    $(".p-mes-list").slideUp({
        li_h:'.4'
    });

    //注销按钮事件判定
    $("#logout").click(function(){
        //清除cookie
        $.cookie("hejia",null,{path:"/"});
        // $.cookie("username", null, {path: "/"});
        location.href ="login.html";
    });

    

});


//调用主页接口
function getHomeData() {
    var getUrl = "http://118.190.71.51/property/index.php/Home/home15";
    var accessToken = $.cookie("hejia");
    // var accessToken = "ZWE1MTdhM2M0MTM1MzIwNDFiYjMzMTNkNjA4NDY1MDdkMTQ2YTZjMToyNjUz";
    $.ajax({
        //提交数据的类型 POST GET
        type: "get",
        //提交的网址
        url: getUrl,
        //提交的数据
        data: {
            "accessToken": accessToken
        },
        //返回数据的格式
        datatype: "json",//"xml", "html", "script", "json", "jsonp", "text".
        success: function (data) {
            // data = eval("'" + data + "'");
            console.log(data);
            if (data.done == true) {

                $("#number").text(data.plot_name);
                $("#change_plot").show();

                //#change_plot选择小区点击事件
                $("#change_plot").click(function(){
                    $(".p-wrap").hide();
                    $("#liveChoose").show(); 
                    //判定城市选择框是否是初始化值,若是，清空；若已经选择了城市，则初始化城市名称
                    // if ($("#city").val() == "0") {
                    //     $("#city").empty();
                    // } else {
                    //     $("#city").html("<option value='"+$('#city option:selected').val()+"'>" + $('#city option:selected').text() + "</option>");  
                    // }

                    $.get("http://118.190.71.51/property/index.php/Register/getCity", function(data){
                        data = eval("'" + data + "'");
                        //JSON.parse()方法用于将一个JSON字符串转换为对象，获得最外围json对象
                        data = JSON.parse(data);
                        
                        // $("#city").prepend("<option value='0'>----请选择城市----</option>");

                        console.log(data.done);
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
                //#change_plot选择小区点击事件结束

                //确定切换点击事件
                $("#liveChooseSubmit").click(function(){

                    //小区id
                    var plot_id = $('#community').val();
                    //房间号id
                    var doorplate_id = $('#room').val();

                    $.ajax({
                        type: 'POST',
                        url : 'http://118.190.71.51/property/index.php/PropertyMember/change_plot?accessToken=' + accessToken,
                        // cache:false,
                        dataType: "json",
                        data : {plot_id : plot_id, doorplate_id : doorplate_id},

                        success: function(data){
                            console.log(data);
                            if(true == data.done){
                                //若是切换小区成功
                                event.preventDefault();
                                $(".pop").fadeIn('fast');
                            } else {
                                return false;
                            }
                        },
                        
                        //success end
                        error : function() {
                            return false;
                        }
                    });

                    // $(".p-wrap").show();
                    // $("#liveChoose").hide();
                });


                //切换小区成功弹出框点击事件
                $(".popBottom").on('click', 'span', function(event) {
                    event.preventDefault();
                    if($(this).hasClass('confirm')){
                        $(".pop").fadeOut();
                        location.href ="index.html";       
                    }
                });
 
            } else {
                return false;
            }
        }
    });
}
