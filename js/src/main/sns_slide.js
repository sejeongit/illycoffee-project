// sns_slide.js
(function($){
// jQuery

// 1. 브라우저 크기에 따라 보이는 li의 개수

var win = $(window);
var winWidth = win.width();

var snsBox = $('#snsBox');
var snsArea = snsBox.find('.sns_photo');
var snsUl = snsArea.children('ul');
var snsLi = snsUl.children('li');

var snsWidth = snsLi.outerWidth(true);
console.log(snsWidth);

var snsLiLen = snsLi.length;
var n = 0;
var time = 300;



// 브라우저 가로값 / li 가로값 -> li 보이는 개수만큼 가로길이 조정
var viewLiLen = parseInt(winWidth / snsWidth );
// console.log(viewLiLen);
var limargin = parseInt(snsLi.css('marginLeft'));
// console.log(limargin);
var viewWidth = (snsWidth * viewLiLen) - limargin + 'px'; 
// console.log(viewWidth);
var snsLi_01 = snsUl.find('.sns_photo_01');
snsLi_01.css({marginLeft: 0 });
snsArea.css({width: viewWidth, margin: 'auto'});

var right = snsArea.css('marginRight');
console.log(right);


// 마지막 요소를 앞에 붙여넣기
var cloneLi = snsLi.eq(-1).clone();
snsUl.prepend(cloneLi);
var newSnsLi = snsUl.find('li');
var newLiLen = newSnsLi.length;
// console.log(snsLiLen ,newLiLen);
snsUl.css({position:'relative', left: -snsWidth + 'px' });


// 함수 생성
var slideMoveFn = function(n){
  // setInterval 기능 및 마지막 위치에서 처음으로 이동시
  if( n <= 0){snsUl.css({marginLeft: -snsWidth + 'px'}); }
  // 광고이동
  snsLi.stop().animate({marginLeft: (-snsWidth * n) + 'px'}, time);
};


// setInterval(function(){
//     n+=1;
//     if()
//     { n = 0; }
//     slideMoveFn(n);
//   }, time*4);


})(jQuery);