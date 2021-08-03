// sns_slide.js
(function($){
// jQuery

var win = $(window);
var winWidth = win.width();

var snsBox = $('#snsBox');
var snsArea = snsBox.find('.sns_photo');
var snsUl = snsArea.children('ul');
var snsLi = snsUl.children('li');

var snsWidth = snsLi.outerWidth(true);
var snsWidthMove = snsLi.width();

var time = 400;


// 브라우저 가로값 / li 가로값 -> li 보이는 개수만큼 가로길이 조정
var viewLiLen = parseInt(winWidth / snsWidth );
var limargin = parseInt(snsLi.css('marginRight'));
var viewWidth = (snsWidth * viewLiLen) - limargin + 'px'; 
// var snsLi_01 = snsUl.find('.sns_photo_01');
// snsLi_01.css({marginLeft: 0 });
snsArea.css({width: viewWidth, margin: 'auto'});

setInterval(function(){
  snsUl.stop().animate({marginLeft: -snsWidth + 'px'}, function(){
    snsLi.eq(0).appendTo(snsUl);
    $(this).css({marginLeft: 0});
    snsLi = snsUl.find('li');
  });
}, time*4);



})(jQuery);