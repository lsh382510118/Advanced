$(function(){
    //对话框
    $('.dialog-btn').click(function(){
        $('.pop-box').remove();
        var that=$(this);
        var dialog={
            type:'dialog',              //(1.select,2.loading,3.aticle,4.dialog,5.tips)
            title:'',                   //(1.none,2.'标题')       
            content:'苍老师和骚军妹子是弯的吗？',
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
    var html=''+'<div class="pop-box">'+
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
