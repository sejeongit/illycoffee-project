// hheader_mobile.js
(function($){
// jQuery

var gnb = $('.gnb_area');
var gnbBtn = gnb.find('button');
var gnbList = gnb.find('.gnb_box');
var time = 500;

// 1. 스마트폰, 타블렛 기반에서 동작하게 하자
// 1-1. gnbBtn을 클릭시 gnbList가 나타나게/사라지게
// 스마트폰, 타블렛 각 기능 따로 파일 나누기

gnbBtn.on('click', function(e){
  e.preventDefault();
  // gnb요소의 'act' 클래스의 유무 판단
  var hasAct = gnb.hasClass('act');
  if(hasAct){
    gnbList.stop().fadeOut(time/2);
    gnb.removeClass('act');
  }else{
    gnbList.stop().fadeIn(time/2);
    gnb.addClass('act');
  }
});



})(jQuery);