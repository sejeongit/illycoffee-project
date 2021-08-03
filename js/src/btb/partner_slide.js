// partner_slide.js
(function($){
// jQuery

var win = $(window);
var winWidth = win.width();

var partnerBox = $('#partnerBox');
var partenerArea = partnerBox.find('.partner_photo');
var partnerUl = partenerArea.children('ul');
var partnerLi = partnerUl.children('li');

var liWidth = partnerLi.outerWidth(true);
// var liWidthMove = partnerLi.width();

var time = 400;


// 브라우저 가로값 / li 가로값 -> li 보이는 개수만큼 가로길이 조정
var viewLiLen = parseInt(winWidth / liWidth );
var limargin = parseInt(liWidth.css('marginLeft'));
var viewWidth = (liWidth * viewLiLen); 
// var snsLi_01 = snsUl.find('.sns_photo_01');
// snsLi_01.css({marginLeft: 0 });
partenerArea.css({width: viewWidth, margin: 'auto'});

setInterval(function(){
  partnerUl.stop().animate({marginLeft: -liWidth + 'px'}, function(){
    partnerLi.eq(0).appendTo(partnerUl);
    $(this).css({marginLeft: 0});
    partnerLi = partnerUl.find('li');
  });
}, time*4);


// 버튼눌렀을때, 마우스 올리면 멈추게

})(jQuery);