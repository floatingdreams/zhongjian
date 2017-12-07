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
		/**********************************滑动事件***********************************/
		// var  firsttab=document.getElementById('first');
		// firsttab.addEventListener("swipeleft",function(){
		// 	$(".first").css("display","none");
		// 	$(".second").css("display","block");
		// 	$(".tabdisc span").removeClass('tabdiscact');
		// 	$(".tabdisc span").eq(1).addClass('tabdiscact');
		// });
		// var  secondtab=document.getElementById('second');
		// secondtab.addEventListener("swipeleft",function(){
		// 	$(".second").css("display","none");
		// 	$(".third").css("display","block");
		// 	$(".tabdisc span").removeClass('tabdiscact');
		// 	$(".tabdisc span").eq(2).addClass('tabdiscact');
		// });
		// secondtab.addEventListener("swiperight",function(){
		// 	$(".second").css("display","none");
		// 	$(".first").css("display","block");
		// 	$(".tabdisc span").removeClass('tabdiscact');
		// 	$(".tabdisc span").eq(0).addClass('tabdiscact');
		// });
		// var  thirdtab=document.getElementById('third');
		// thirdtab.addEventListener("swiperight",function(){
		// 	$(".second").css("display","block");
		// 	$(".third").css("display","none");
		// 	$(".tabdisc span").removeClass('tabdiscact');
		// 	$(".tabdisc span").eq(1).addClass('tabdiscact');
		// });
		/*滑动切换云*/
		// var spabox=document.getElementById("spabox");
		// spabox.addEventListener("swiperight",function(){
		// 		spabox2
		// })
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
			if($(this).index()>0&&$(this).index()<=3){
				$(".yuntabsbox ul").css({"transform":"translateX("+-($(this).index()-1)* 5.875+"rem)"});
			}else if($(this).index()>=4&&$(this).index()<6){
				$(".yuntabsbox ul").css({"transform":"translateX("+-(($(this).index()-1)* 5.875+0.8)+"rem)"});
			}
			showTab($(this).index());
			changebg($(this).index());
		})
		// 云的数据
		// var yunarr=['HR云','营销云','分析云','中小企业云','差旅云','采购云','平台云'];
		// var yunarr2=['SAP Success Factors','SAP Hybris Cloud for Customer','SAP Analytice Cloud','SAP Busness by Design','SAP Concur','SAP Ariba Network','SAP Cloud Platform  Paas'];
		// var yunarr3=[
		// 		'基于云的人力资源管理产品',
		// 		'重新定义客户互动的下一代CRM云软件',
		// 		'提供一站式分析体验的SaaS解决方案',
		// 		'最完善适应性最强的按需配置ERP云',
		// 		'重差旅和费用管理解决方案的市场领导者',
		// 		'面向买家和供应商的云端采购解决方案',
		// 		'开放的平台即服务（PaaS）的解决方案'
		// 		];
		// var yunarr4=[
		// 	'提供全方位的绩效和人才管理解决方案<br/>解决方案涵盖：目标管理，绩效管理，薪酬管理，接班人管理，学习发展，360度评估，招聘管理，员工档案，人力分析，统计分析报告。<br/>通过SuccessFactors，企业能够提升员工朝着正确方向前行，最终实现企业的目标。',
		// 	'一款基于云的服务客户关系管理解决方案。<br/>无缝整合营销、销售、商务、客户服务和社交媒体客户关系管理。<br/>通过提供丰富的预测性洞察、完美执行和基于情景的客户体验，重新定义客户互动。',
		// 	'将商务智能、计划、预测集于单一的SaaS解决方案之中。<br/>提供一站式分析体验，帮助用户轻松将分析转化为洞察与行动力。',
		// 	'针对中型企业的集成云套件，可以凭借此单一解决方案运营整个公司。<br/>产品支持销售、采购、库存、财务、人力资源多种业务场景。<br/>通过最大程度简化IT、优化业务流程集成。实现按需支配。随需应变',
		// 	'帮助企业及员工轻松管理差旅和费用报销<br/>让企业更有效地与服务供应商进行议价、计划预算方案。<br/>以管理自动化的方式有效降低费用报告处理成本。',
		// 	'让采购、执行和财务供应链管理更简单高效的云端采购解决方案。<br/>帮助快速发现削减成本、降低风险和增加收入的机会，安全高效地在云端开展合作。<br/>帮助买家以有助于促进竞争与法规遵从度高的方式采购货物和服务，节约成本并降低风险。',
		// 	'SAP HANA 云平台基于开放标准构建，支持企业利用已掌握的开发技能，比如JavaScript和HTML5，开发支持移动设备的现代化轻量级云应用。<br/>SAP HANA平台利用内存计算技术，转变了事务处理、分析处理、文本分析、预测分析和空间处理模式，从而帮助企业实现数字化转型。'
		// ];
		//云数据切换函数
		// function yunchange(ind){
		// 	$('.yun span').html(yunarr[ind]);
		// 	$('.yuncontent h2').html(yunarr2[ind]);
		// 	$('.yuncontent h3').html(yunarr[ind]);
		// 	$('.yunct h4').html(yunarr3[ind]);
		// 	$('.yunct p').html(yunarr4[ind]);
		// }
		// 云切换第二种方式
		// function yuncg(ind){
		// 	if(ind===2){
		// 		$(".yuntabs .yuntabsbox ul.first").css('transform','translateX(-100px)');
		// 		$(".yuntabs .yuntabsbox ul.second").css('transform','translateX(100px)');
		// 	}
		// }
		// 各种云切换
		$(".yuntabs .yuntabsbox ul.first").on("click","li",function(){
			showTab($(this).index());
			// yuncg($(this).index());
			$('.yun span').css({'left':"6.2rem"});
			if($(this).index()===0){
				$('.yuntabs .yuntabsbox ul li').eq(0).css("background","url('./images/phone/pic_32_01.jpg') no-repeat");
				$('.yuntabs .yuntabsbox ul li').eq(0).css("backgroundSize","100% 100%");
				// yunchange($(this).index());
			}else{
				$('.yuntabs .yuntabsbox ul li').eq(0).css("background","url('./images/phone/pic_32.png') no-repeat");
				$('.yuntabs .yuntabsbox ul li').eq(0).css("backgroundSize","100% 100%");
			}
			if($(this).index()===1){
				$('.yuntabs .yuntabsbox ul li').eq(1).css("background","url('./images/phone/pic_33_01.png') no-repeat center");
				$('.yuntabs .yuntabsbox ul li').eq(1).css("backgroundSize","100% 100%");
				// yunchange($(this).index());

			}else{
				$('.yuntabs .yuntabsbox ul li').eq(1).css("background","url('./images/phone/pic_33.png') no-repeat center");			
				$('.yuntabs .yuntabsbox ul li').eq(1).css("backgroundSize","100% 100%");
			}
			if($(this).index()===2){
				$('.yuntabs .yuntabsbox ul li').eq(2).css("background","url('./images/phone/pic_34_01.png') no-repeat center");
				$('.yuntabs .yuntabsbox ul li').eq(2).css("backgroundSize","100% 100%");
				// yunchange($(this).index());
			}else{
				$('.yuntabs .yuntabsbox ul li').eq(2).css("background","url('./images/phone/pic_34.jpg') no-repeat center");			
				$('.yuntabs .yuntabsbox ul li').eq(2).css("backgroundSize","100% 100%");			
			}
		})

		// $(".yuntabs .yuntabsbox ul.second").on("click","li",function(){
		// 	showTab($(this).index()+3);
		// 	if($(this).index()===0){
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(0).css("background","url('./images/phone/pic_35_01.png') no-repeat");
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(0).css("backgroundSize","100% 100%");
		// 		// yunchange($(this).index()+3);
		// 		// $('.yun span').css({'left':"5rem"});
		// 		// $('.spabox .yuncontent h3').css({'width':'7rem'});
		// 		// $(".yuncontentborder").css({'width':"11rem"})
		// 	}else{
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(0).css("background","url('./images/phone/pic_35.png') no-repeat");
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(0).css("backgroundSize","100% 100%");
		// 		// $('.yun span').css({'left':"6.2rem"});
		// 		// $('.spabox .yuncontent h3').css({'width':'4.4rem'});
		// 		// $(".yuncontentborder").css({'width':"13rem"})
		// 	}
		// 	if($(this).index()===1){
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(1).css("background","url('./images/phone/pic_36_01.png') no-repeat center");
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(1).css("backgroundSize","100% 100%");
		// 		// yunchange($(this).index()+3);
		// 	}else{
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(1).css("background","url('./images/phone/pic_36.png') no-repeat center");			
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(1).css("backgroundSize","100% 100%");
		// 	}
		// 	if($(this).index()===2){
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(2).css("background","url('./images/phone/pic_37_01.png') no-repeat center");
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(2).css("backgroundSize","100% 100%");
		// 		// yunchange($(this).index()+3);
		// 	}else{
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(2).css("background","url('./images/phone/pic_37.png') no-repeat center");			
		// 		$('.yuntabs .yuntabsbox ul.second li').eq(2).css("backgroundSize","100% 100%");			
		// 	}
		// })
		// $(".yuntabs .yuntabsbox ul.third").on("click","li",function(){
		// 	showTab($(this).index()+6);
		// 	if($(this).index()===0){
		// 		$('.yuntabs .yuntabsbox ul.third li').eq(0).css("background","url('./images/phone/pic_38_01.png') no-repeat");
		// 		$('.yuntabs .yuntabsbox ul.third li').eq(0).css("backgroundSize","100% 100%");
		// 		// yunchange($(this).index()+6);
		// 		// $('.yun span').css({'left':"6.2rem"});
		// 	}else{
		// 		$('.yuntabs .yuntabsbox ul.third li').eq(0).css("background","url('./images/phone/pic_38.png') no-repeat");
		// 		$('.yuntabs .yuntabsbox ul.third li').eq(0).css("backgroundSize","100% 100%");
		// 	}
		// })
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