// header_pc.js
(function($){
// jQuery

var gnb = $('.gnb_area');
var gnbBtn = gnb.find('button');
var gnbDl = gnb.find('dl');
var gnbList = gnbDl.find('dd');
var gnbTitle = gnbDl.find('dt');
var newsTitle = gnb.find('.news_title');
var time = 200;

// 2. 노트북, pc 기반에서 동작하게 하자
// 2-1. gnbDl 내부 gnbTitle에 마우스 올리면 하위 dd가 나타나게
// 2-2. gnbDl 내부 gnbTitle에 focus처리시 하위 dd가 나타나게
// 2-3. gnbBtn은 1280 이상의 기기에선 동작하지 않으므로 코드 삭제

// 2-1. 마우스 제어
gnbTitle.on('mouseenter', function(){
  $(this).parents('li').siblings().find(gnbList).stop().slideUp(time);
  $(this).siblings(gnbList).stop().slideDown(time);
});
newsTitle.on('mouseenter', function(){
  $(this).siblings('li').find(gnbList).stop().slideUp(time);
});
gnb.on('mouseleave', function(){
  gnbList.delay(time/3).stop().slideUp();
});

// 2-2. 키보드 제어 
gnbTitle.find('a').on('focus', function(){
  var _this = $(this).parents('li');
  _this.siblings().find(gnbList).stop().slideUp(time);
  _this.find(gnbList).stop().slideDown(time);
});
newsTitle.find('a').on('focus', function(){
  var _this = $(this).parent().siblings('li');
  _this.find(gnbList).stop().slideUp(time);
});

gnb.find('a').on('keyup', function(e){
  var evtKey = e.key.toLowerCase();
  var isEsc = evtKey === 'escape';
  if(isEsc){
    $(this).blur();
    gnbList.stop().slideUp(time);
  }
});

// 2-3. 
// gnbBtn.parent().remove();


})(jQuery);