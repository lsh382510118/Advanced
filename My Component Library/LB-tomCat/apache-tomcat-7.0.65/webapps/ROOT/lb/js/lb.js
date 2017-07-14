$(function(){
	//SidleNav----侧边栏显示及其交互效果
    setTimeout(function(){
		$('.sidlenav-btn-wrap').removeClass('open');
		$('.sidlenav').removeClass('show');
	},2000);
	
	$('.sidlenav-btn-wrap').click(function(){
		$('.sidlenav-btn-wrap').toggleClass('open');
		$('.sidlenav').toggleClass('show');
	});
	$('.side-nav>div').click(function(){
		var acTop = $(this).position().top;
		$('.side-nav>div').not(this).removeClass('active').addClass('nm');
		$(this).css('top',acTop).addClass('active');
		$(this).animate({
			top:0},300);
		$('.sub-nav').addClass('open');
	});
	$('.sidenav-info-open').click(function(){
		$('.side-nav>div').removeClass('nm');
		$('.sub-nav').removeClass('open');
	}); 
});
