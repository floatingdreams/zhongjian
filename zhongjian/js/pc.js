// 返回顶层
$(".backtop").on("click",function(){
	$("body,html").animate({
		scrollTop:0
	});
})
// spa和hana的切换
var tabs=$(".tb");

$(".tabs .tabsbox ul li").on("mouseenter",function(){
	$(this).addClass("tabact");
	$(this).siblings().removeClass("tabact");
	// console.log($(this).index());
	if($(this).index()===1){
		$(".design").show();
	}else{
		$(".design").hide();
	}
	showtab($(this).index());
})
function showtab(num){
	for(var i=0;i<tabs.length;i++){
		if(num===i){
			tabs[i].style.display="block";
		}else{
			tabs[i].style.display="none";
		}
	}
}
// 各种云的左右切换
$('.yuntabs .yuntabsbox .tleft').on("click",function(){
	$(".yuntabsbox ul li").show();
	$(".yuntabsbox ul div").hide();
})
$('.yuntabs .yuntabsbox .tright').on("click",function(){
	$(".yuntabsbox ul li").hide();
	$(".yuntabsbox ul div").show();
})
// 各种云切换
$(".yuntabs .yuntabsbox ul").on("click","li",function(){
	showTab($(this).index());
	// console.log($('.yuntabs .yuntabsbox ul li').eq(0));
	if($(this).index()===0){
		$('.yuntabs .yuntabsbox ul li').eq(0).css("background","url('./images/tabs_03.png') no-repeat center");
	}else{
		$('.yuntabs .yuntabsbox ul li').eq(0).css("background","url('./images/tab_03.png') no-repeat center");
	}
	if($(this).index()===1){
		$('.yuntabs .yuntabsbox ul li').eq(1).css("background","url('./images/tabs_05.png') no-repeat center");
	}else{
		$('.yuntabs .yuntabsbox ul li').eq(1).css("background","url('./images/tab_05.jpg') no-repeat center");
	}
	if($(this).index()===2){
		$('.yuntabs .yuntabsbox ul li').eq(2).css("background","url('./images/tabs_07.png') no-repeat center");			
	}else{
		$('.yuntabs .yuntabsbox ul li').eq(2).css("background","url('./images/tab_07.jpg') no-repeat center");
	}
	if($(this).index()===3){
		$('.yuntabs .yuntabsbox ul li').eq(3).css("background","url('./images/tabs_09.png') no-repeat center");			
	}else{
		$('.yuntabs .yuntabsbox ul li').eq(3).css("background","url('./images/tab_09.jpg') no-repeat center");
	}
	if($(this).index()===4){
		$('.yuntabs .yuntabsbox ul li').eq(4).css("background","url('./images/tabs_11.jpg') no-repeat center");			
	}else{
		$('.yuntabs .yuntabsbox ul li').eq(4).css("background","url('./images/tabs_11.png') no-repeat center");
	}
})
$(".yuntabs .yuntabsbox ul").on("click","div",function(){
	showTab($(this).index());
	if($(this).index()===5){
		$('.yuntabs .yuntabsbox ul div').eq(0).css("background","url('./images/tabs_13.png') no-repeat center");
	}else{
		$('.yuntabs .yuntabsbox ul div').eq(0).css("background","url('./images/tab_13.jpg') no-repeat center");			
	}
	if($(this).index()===6){
		$('.yuntabs .yuntabsbox ul div').eq(1).css("background","url('./images/tab_15.png') no-repeat center");			
	}else{
		$('.yuntabs .yuntabsbox ul div').eq(1).css("background","url('./images/tabs_15.png') no-repeat center");
	}
})
var bottomtab=$( '.cloud');
function showTab(num){
	for(var i=0;i<bottomtab.length;i++){
		if(num===i){
			bottomtab[i].style.display="block";
		}else{
			bottomtab[i].style.display="none";
		}
	}
}