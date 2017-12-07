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
		//滑动事件
		var  firsttab=document.getElementById('first');
		firsttab.addEventListener("swipeleft",function(){
			$(".first").css("display","none");
			$(".second").css("display","block");
			$(".tabdisc span").removeClass('tabdiscact');
			$(".tabdisc span").eq(1).addClass('tabdiscact');
		});
		var  secondtab=document.getElementById('second');
		secondtab.addEventListener("swipeleft",function(){
			$(".second").css("display","none");
			$(".third").css("display","block");
			$(".tabdisc span").removeClass('tabdiscact');
			$(".tabdisc span").eq(2).addClass('tabdiscact');
		});
		secondtab.addEventListener("swiperight",function(){
			$(".second").css("display","none");
			$(".first").css("display","block");
			$(".tabdisc span").removeClass('tabdiscact');
			$(".tabdisc span").eq(0).addClass('tabdiscact');
		});
		var  thirdtab=document.getElementById('third');
		thirdtab.addEventListener("swiperight",function(){
			$(".second").css("display","block");
			$(".third").css("display","none");
			$(".tabdisc span").removeClass('tabdiscact');
			$(".tabdisc span").eq(1).addClass('tabdiscact');
		});
		// 各种云切换
		$(".yuntabs .yuntabsbox ul.first").on("click","li",function(){
			showTab($(this).index());
			if($(this).index()===0){
				$('.yuntabs .yuntabsbox ul li').eq(0).css("background","url('./images/phone/pic_32_01.jpg') no-repeat");
				$('.yuntabs .yuntabsbox ul li').eq(0).css("backgroundSize","100% 100%");
			}else{
				$('.yuntabs .yuntabsbox ul li').eq(0).css("background","url('./images/phone/pic_32.png') no-repeat");
				$('.yuntabs .yuntabsbox ul li').eq(0).css("backgroundSize","100% 100%");
			}
			if($(this).index()===1){
				$('.yuntabs .yuntabsbox ul li').eq(1).css("background","url('./images/phone/pic_33_01.png') no-repeat center");
				$('.yuntabs .yuntabsbox ul li').eq(1).css("backgroundSize","100% 100%");
			}else{
				$('.yuntabs .yuntabsbox ul li').eq(1).css("background","url('./images/phone/pic_33.png') no-repeat center");			
				$('.yuntabs .yuntabsbox ul li').eq(1).css("backgroundSize","100% 100%");
			}
			if($(this).index()===2){
				$('.yuntabs .yuntabsbox ul li').eq(2).css("background","url('./images/phone/pic_34_01.png') no-repeat center");
				$('.yuntabs .yuntabsbox ul li').eq(2).css("backgroundSize","100% 100%");
			}else{
				$('.yuntabs .yuntabsbox ul li').eq(2).css("background","url('./images/phone/pic_34.jpg') no-repeat center");			
				$('.yuntabs .yuntabsbox ul li').eq(2).css("backgroundSize","100% 100%");			
			}
		})
		$(".yuntabs .yuntabsbox ul.second").on("click","li",function(){
			showTab($(this).index()+3);
			if($(this).index()===0){
				$('.yuntabs .yuntabsbox ul.second li').eq(0).css("background","url('./images/phone/pic_35_01.png') no-repeat");
				$('.yuntabs .yuntabsbox ul.second li').eq(0).css("backgroundSize","100% 100%");
			}else{
				$('.yuntabs .yuntabsbox ul.second li').eq(0).css("background","url('./images/phone/pic_35.png') no-repeat");
				$('.yuntabs .yuntabsbox ul.second li').eq(0).css("backgroundSize","100% 100%");
			}
			if($(this).index()===1){
				$('.yuntabs .yuntabsbox ul.second li').eq(1).css("background","url('./images/phone/pic_36_01.png') no-repeat center");
				$('.yuntabs .yuntabsbox ul.second li').eq(1).css("backgroundSize","100% 100%");
			}else{
				$('.yuntabs .yuntabsbox ul.second li').eq(1).css("background","url('./images/phone/pic_36.png') no-repeat center");			
				$('.yuntabs .yuntabsbox ul.second li').eq(1).css("backgroundSize","100% 100%");
			}
			if($(this).index()===2){
				$('.yuntabs .yuntabsbox ul.second li').eq(2).css("background","url('./images/phone/pic_37_01.png') no-repeat center");
				$('.yuntabs .yuntabsbox ul.second li').eq(2).css("backgroundSize","100% 100%");
			}else{
				$('.yuntabs .yuntabsbox ul.second li').eq(2).css("background","url('./images/phone/pic_37.png') no-repeat center");			
				$('.yuntabs .yuntabsbox ul.second li').eq(2).css("backgroundSize","100% 100%");			
			}
		})
		$(".yuntabs .yuntabsbox ul.third").on("click","li",function(){
			showTab($(this).index()+6);
			if($(this).index()===0){
				$('.yuntabs .yuntabsbox ul.third li').eq(0).css("background","url('./images/phone/pic_38_01.png') no-repeat");
				$('.yuntabs .yuntabsbox ul.third li').eq(0).css("backgroundSize","100% 100%");
			}else{
				$('.yuntabs .yuntabsbox ul.third li').eq(0).css("background","url('./images/phone/pic_38.png') no-repeat");
				$('.yuntabs .yuntabsbox ul.third li').eq(0).css("backgroundSize","100% 100%");
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