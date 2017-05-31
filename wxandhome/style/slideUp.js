/**
 * Created by pang on 2015/10/18.
 */

(function($){
    $.fn.extend({
        "slideUp":function(value){

            var docthis = this;
            //默认参数
            value=$.extend({
                "li_h":"10",        //px
                "time":3000,
                "movetime":1000
            },value)

            //向上滑动动画
            function autoani(){
                $("li:first",docthis).animate({"margin-top":-value.li_h+'rem'},value.movetime,function(){
                    $(this).css("margin-top",0).appendTo(".p-mes-list");
                })
            }

            //自动间隔时间向上滑动
            var anifun = setInterval(autoani,value.time);

            //悬停时停止滑动，离开时继续执行
            $(docthis).children("li").hover(function(){
                clearInterval(anifun);			//清除自动滑动动画
            },function(){
                anifun = setInterval(autoani,value.time);	//继续执行动画
            })
        }
    })
})(jQuery)