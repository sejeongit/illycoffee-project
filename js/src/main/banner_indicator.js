// banner_indicator.js
(function($){
// jQuery

// 1. 인디케이터 클릭시 해당하는 광고내용이 움직이게

// 변수
var viewBox = $('#viewBox');
var indicator = viewBox.find('.indicator');
var indiUl = indicator.find('ul');
var indiLi = indiUl.find('li');
var indiLink = indiLi.find('a');

var viewArea = viewBox.find('.view_area');
var viewUl = viewArea.find('ul');

var n = 0;


// 이벤트
indiLink.on('click', function(e){
  e.preventDefault();
  var _thisI = $(this).parent().index();
  n = _thisI;

  // 광고이동
  viewUl.stop().animate({marginLeft: (-100*n) + '%'});
  
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');

});


})(jQuery);