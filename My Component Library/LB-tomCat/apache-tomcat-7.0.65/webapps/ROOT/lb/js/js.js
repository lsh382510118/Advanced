// JavaScript Document
$(function(){
	//Math.abs  取绝对值
	//头部导航栏滑动效果-鼠标覆盖
	var li_w=$("ul.nav>li").width();
	var time=50;
	$("ul.nav>li").mouseover(function(){
		$(".mainnav-bl").clearQueue();
		$(".mainnav-bl").animate({
			left:$(this).index()*li_w,
			}
		,300
		);
	});
	//头部导航栏滑动效-鼠标离开
	$("ul.nav>li").mouseleave(function(){
		$(".mainnav-bl").clearQueue();
		$(".mainnav-bl").animate({
			left:$("ul.nav>li.on").index()*li_w,
			}
		,300
		);
		var x=$("ul.nav>li.on").index();
		var y=$(this).index();
		roundabout(x,y,li_w);
	});
	//滚动条超过80%时，导航栏背景变白
	$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 70) {
		//console.info(scrollTop);

		$("header").addClass("scrollDown").css('display','none');
	} else {
		$("header").removeClass("scrollDown");
	}
	});
	// 左右树状tab(NAV必须和右边的conten排序一致，因为是通过index控制的。)
	var firindex=0,subindex=0;
	$('.lefttree>ul>li').click(function(){
		firindex=$(this).index();
		$('.lefttree>ul>li').removeClass('on');
		$(this).addClass('on');
		$('.rightcontent .treecontent').removeClass('current').eq(firindex).addClass('current');
		$('.rightcontent .treecontent').eq(firindex).children('.subtreecontent').eq(subindex).addClass('current');
	});
	$('.subtree p').click(function(){
		subindex=$(this).index();
		$('.lefttree>ul>li').removeClass('on');
		$('.subtree p').removeClass('on');
		$(this).addClass('on');
		firindex=$(this).closest("li").index();
		$(this).closest("li").addClass('on');
		$('.subtreecontent').removeClass('current');
		$('.rightcontent .treecontent').removeClass('current');
		$('.rightcontent .treecontent').eq(firindex).addClass('current');
		$('.rightcontent .treecontent').eq(firindex).children('.subtreecontent').eq(subindex).addClass('current');
		console.info(firindex+' '+subindex);
});
});
//弹性运动-
function roundabout(x,y,li_w){
	if(y>x){
	$(".mainnav-bl").animate({
			left:$("ul.nav>li.on").index()*li_w-60,
			}
		,200
		);
	$(".mainnav-bl").animate({
			left:$("ul.nav>li.on").index()*li_w+30,
			}
		,300
		);
	$(".mainnav-bl").animate({
			left:$("ul.nav>li.on").index()*li_w,
			}
		,500
		);
		console.info($("ul.nav>li.on").index()*li_w);
		}
		else{
		$(".mainnav-bl").animate({
			left:$("ul.nav>li.on").index()*li_w+60,
			}
		,200
		);
	$(".mainnav-bl").animate({
			left:$("ul.nav>li.on").index()*li_w-50,
			}
		,300
		);
	$(".mainnav-bl").animate({
			left:$("ul.nav>li.on").index()*li_w,
			}
		,500
		);}
	$(".mainnav-bl").stop();
}
		