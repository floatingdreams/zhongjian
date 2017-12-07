var tabs=$(".tb");
		$(".tabs .tabsbox ul li").on("mouseenter",function(){
			$(this).addClass("tabact");
			$(this).siblings().removeClass("tabact");
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
		/******************************tab动态切换第二版***************************/

	var bg1=[
				"url('./images/phone/pic_32_01.jpg') no-repeat"
				,"url('./images/phone/pic_33_01.png') no-repeat center"
				,"url('./images/phone/pic_34_01.png') no-repeat center"
				,"url('./images/phone/pic_35_01.png') no-repeat"
				,"url('./images/phone/pic_36_01.png') no-repeat center"
				,"url('./images/phone/pic_37_01.png') no-repeat center"
				,"url('./images/phone/pic_38_01.png') no-repeat"
		];
		var bg2=[
				"url('./images/phone/pic_32.png') no-repeat"
				,"url('./images/phone/pic_33.png') no-repeat center"
				,"url('./images/phone/pic_34.jpg') no-repeat center"
				,"url('./images/phone/pic_35.png') no-repeat"
				,"url('./images/phone/pic_36.png') no-repeat center"
				,"url('./images/phone/pic_37.png') no-repeat center"
				,"url('./images/phone/pic_38.png') no-repeat"
		];
		function changebg(ind){
			for(var i=0;i<=6;i++){
				if(ind===i){
					$('.yuntabsbox ul li').eq(i).css("background",bg1[i]);
					$('.yuntabsbox ul li').eq(i).css("backgroundSize","100% 100%");
				}else{
					$('.yuntabsbox ul li').eq(i).css("background",bg2[i]);
					$('.yuntabsbox ul li').eq(i).css("backgroundSize","100% 100%");
				}
			}
		}
		$(".yuntabsbox ul").on("click","li",function(){
			if($(this).index()>0&&$(this).index()<3){
				$(".yuntabsbox ul").css({"transform":"translateX("+-($(this).index()-1)* 5.875+"rem)"});
			}else if($(this).index()>=3&&$(this).index()<6){
				$(".yuntabsbox ul").css({"transform":"translateX("+-(($(this).index()-1)* 5.875+1.1)+"rem)"});
			}
			showTab($(this).index());
			changebg($(this).index());
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
/*返回顶层*/
$(".backtop").on("click",function(){
	$("body,html").animate({
		scrollTop:0
	});
})