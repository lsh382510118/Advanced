//-----------------------------------banner 滚动图----------------------------------------------------------------
$(function(){
	var Disable=false,
      Start_X,End_X,Move_,
	    k,jsq=-1,yzjsq,//自动轮播计时
	    myInterval,//自动轮播banner的变量
	    banNum=$('.banner-box>div').length;
	$('.ban-left').click(function(){
		var type='left';
		if(Disable==false){
		  bannerScroll(type);
		}
        k=0 ;
        if(jsq!=-1){
            clearInterval( jsq );
        }
        jsq= setInterval(function(){bannertime();},1000);
        clearInterval( myInterval );
	});
	$('.ban-right').click(function(){
		var type='right';
		if(Disable==false){
		  bannerScroll(type);}
    k=0 ;
    if(jsq!=-1){
    clearInterval( jsq );
  }
  jsq= setInterval(function(){bannertime();},1000);
    clearInterval( myInterval );  
	});
	
  var bannum_html='';
  for(var i=0;i<banNum;i++){
	if(i==0){
		  bannum_html=bannum_html+'<span class="current">'+'</span>';
	}else{
		  bannum_html=bannum_html+'<span>'+'</span>';
	}
	  }
  $('.banner-number').append(bannum_html);
	
  /*手触摸起始*/
  $(".banner-box").on("touchstart", function(e) {
    e.preventDefault();
	console.info('star');
    startX = e.originalEvent.changedTouches[0].pageX;
	k=0;
  });
  /*手触摸离开*/
  $(".banner-box").on("touchend", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    Move_ = moveEndX - startX;
	if( Move_ < 0 && Disable==false){
		  bannerScroll('left');
		} 
    else if ( Move_ > 0 && Disable==false  ) {
		  bannerScroll('right');
    }
	
	if(jsq!=-1){
		clearInterval( jsq );
	}
	jsq= setInterval(function(){bannertime();},1000);
    clearInterval( myInterval );  
	
});
 	autobanner();
//滚动动画
function bannerScroll(type){
		Disable=true;
    $('.ban-btn button').attr('disabled',true);
		var index=$('.banner-box>div.current').index();
		var curpart='-',nextpart=' ',x=1;		
		if(type=='right'){
			curpart='';
			nextpart='-';
			x=-1
			}
		$('.banner-box>div.current').animate({"left":curpart+'100%'},300).removeClass('current');
		$('.banner-box>div').eq((index+banNum-1) % banNum).css('left',nextpart+'100%').animate({"left":"0"},300).addClass('current');
		setTimeout(function () { 
		  Disable=false;
    $('.ban-btn button').attr('disabled',false);
		},300);
		var cirindex=$('.banner-number span.current').index();
		$('.banner-number span.current').removeClass('current');
		cirindex=(cirindex+x+banNum)%4;
		$('.banner-number span').eq(cirindex).addClass('current'); 
	};
function bannertime(){
    k++;
	if(k>5){
		autobanner();
		clearInterval( jsq );
		jsq=-1;	
	}
}

function autobanner(){
    //自动轮播
      myInterval=setInterval(function(){
		  bannerScroll('left');
    },3000)
}
	
});
//-----------------------------------layer-层----------------------------------------------------------------
var settime;
$(function(){
    //对话框
    $('.dialog-btn').click(function(){
        $('.pop-box').remove();
        var that=$(this);
        var dialog={
            type:'dialog',              //(1.select,2.loading,3.aticle,4.dialog,5.tips)
            title:'',                   //(1.none,2.'标题')       
            content:'这是一个选择题吗？',
            button:['是','不不是']                      //
        };
        pop(dialog,that);
    });
    //文章/协议弹窗
    $('.aticle-btn').click(function(){
        $('.pop-box').remove();
        var that=$(this);
        var aticle={
            type:'aticle',              //(1.select,2.loading,3.aticle,4.dialog,5.tips)
            title:'文章标题',                   //(1.none,2.'标题')       
            content:'好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容好多内容',
            button:['确定','取消']                      //
        };
        pop(aticle,that);
    });
    //关闭弹窗
    $('.pop-box .pop-bg').click(function(){
        $('.pop-box').remove();
    });
    //下拉框(select)弹窗
    $('.select input').click(function(){
        $('.pop-box').remove();
        var that=$(this);
        var sel={
            type:'select',              //(1.select,2.loading,3.aticle,4.dialog,5.tips)
            title:'请选择XXXXX',                   //(1.none,2.'标题')       
            content:'',
            button:[]                       //
        };
        pop(sel,that);
    });
    //加载(loading)弹窗
    $('.loading-btn').click(function(){
        $('.pop-box').remove();
        var that=$(this);
        var loading={
            type:'loading',             //(1.select,2.loading,3.aticle,4.dialog,5.tips)
            title:'',                   //(1.none,2.'标题')       
            content:'',
            button:[]                   //
        };
        pop(loading,that);
    });
    //关闭加载(loading)弹窗
    $('.loadingclose-btn').click(function(){
        $('.loading').remove();
    });
    //提示框-tips
    $('.tips-btn').click(function(){
      $('.pop-box').remove();
      var that=$(this);
      var tips={
        type:'tips',            //(1.select,2.loading,3.aticle,4.dialog,5.tips)
        title:'',           //(1.none,2.'标题')   
        content:'电话号码正确格式：021-53519888',
        button:[]             //
      };
      pop(tips,that);
  });
})
//关闭弹窗
function closePop(){
    var $popAnm = $('.layer-main'), $popMsk = $('.pop-bg');
    $popMsk.removeClass('mask-in'); //遮罩消失
    $popMsk.addClass('mask-out');
    $popAnm.removeClass('pop-in'); //弹框消失
    $popAnm.addClass('pop-out');
    $popAnm[0].addEventListener('webkitAnimationEnd', function(){$('.pop-box').remove();}, true);
    $popAnm[0].removeEventListener('webkitAnimationEnd', '',true);
}
//创建框架
function creatPopUi(){
    var html=''
      +'<div class="pop-box">'+
          '<div class="layer-main pop-in">'+
            '<div class="pop-title"></div>'+
            '<div class="pop-content"></div>'+
            '<div class="pop-btn"></div>'+
          '</div>'+
          '<div class="pop-bg mask-in" onClick="closePop()"></div>'+
      '</div>';
    $('body').append(html);
}
//layer布局
function layerLayout(e){
    var p_title='',p_content='',p_btn='';
    //pop-title
    if(e.title){
        p_title=''+'<h1>'+e.title+'</h1>';
        $('.pop-title').append(p_title);
        }
    //pop-content
    if(e.content){
        p_content=''+e.content;
        $('.pop-content').append(p_content);
        }
    //pop-button
    if(e.button.length>0){
        //console.info(e.button.length);
        p_btn=''+'<div class="btn-wrap">';
        for(var i=0;i<e.button.length;i++){
            p_btn=p_btn+'<button>'+e.button[i]+'</button>';
            }
        p_btn=p_btn+'</div>';
        $('.pop-btn').append(p_btn);
        }
}
function pop(e,that){
  switch(e.type){
      case('select'):
    creatPopUi();     //创建基本框架
    layerLayout(e);     //判断头部、内容和按钮
        var html = '<ul class="pop-select">';
    var selname=that.attr('name');
    var mapp = {
      '111': 'aaa',
      '222':'bbb'
    };
    var selTag=$('select[name="'+mapp[selname]+'"] option');
    for(var i=0;i<selTag.length;i++){
      if(i==0){
        html=html+'<li class="sel">'+selTag.eq(i).text()+'</li>';
      }else{
        html=html+'<li>'+selTag.eq(i).text()+'</li>';}
      }
    html=html+'</ul>';    
        $('.pop-content').append(html);
    $('.pop-select>li').each(function(index){
          $(this).on('click',function(){
        var selindex =$(this).index();
        selTag.attr('selected',false);
        selTag.eq(selindex).attr('selected',true);
              $('.pop-select li').removeClass('sel');
              $(this).addClass('sel');
        var temp=$(this).html();
              that.val(temp);
        closePop()
          });
        });
        break;
        
      case('loading'):
    $('.loading').remove();
      //console.info('loading');
      var html =''+
      '<div class="loading">'+
        '<div class="loading-center">'+
          '<div id="loading-center-absolute">'+
            '<div class="object" id="object_four"></div>'+
            '<div class="object" id="object_three"></div>'+
            '<div class="object" id="object_two"></div>'+
            '<div class="object" id="object_one"></div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $('body').append(html);
        break;
        case('aticle'):
      creatPopUi();     //创建基本框架
      layerLayout(e);     //判断头部、内容和按钮
          $('.pop-content').addClass('aticle-content');
        break;
        case('dialog'):
      creatPopUi();     //创建基本框架
      layerLayout(e);     //判断头部、内容和按钮
          $('.pop-content').addClass('dialog-content');
          console.info($('.pop-content').text());
        break;
        case('tips'):
        console.info(1);
          window.clearTimeout(settime)
          $('.tips-content').remove();
          var html = '';
          html += '<div class="tips-content tips-in" onclick="">' + e.content +'</div>';
          $('body').append(html);
          settime=setTimeout("$('.tips-content').remove()",2500)
        break;
      default :
      console.info('没有这个类型，或者你输入错误类型');
  }
}
  // if(callback && typeof callback != 'undefined' && callback != undefined){
  //   callback();  
  // };   

//-----------------------------------pageSlide-页面滑动----------------------------------------------------------------
$(function(){
   var curIndex,nextIndex,curPage={},pageNum,x='';
  $('.page-nav li').click(function(){
      pageNum=$('.page-nav li').length;
      curIndex=$('.page-nav>li.current').index();
      nextIndex=$(this).index();
    posi(curIndex);
    if(curIndex<nextIndex){
      x='-';
    }else{x='';}
    $('.nav-content>.nav-page.current').stop(true, true).animate({'left':x+'100%'},300);
    $('.nav-content>.nav-page').eq(nextIndex).stop(true, true).animate({"left":0}, 200);
      $('.page-nav li.current').removeClass('current')
      $(this).addClass('current');
    $('.nav-content>.nav-page').removeClass('current');
    $('.nav-content>.nav-page').eq(nextIndex).addClass('current');
  })
  //Page定位--left定位，可决定从什么方向滑动。
  function posi(aa){
    $('.nav-content>.nav-page').each(function(index) {
        var tin=$(this).index();
    if(tin>aa){
      $(this).css('left','100%');
    }else if(tin<aa){
      $(this).css('left','-100%');
    }else{
      $(this).css('left',0);
      }
    });
  }
})
