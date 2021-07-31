// banner_slide.js
(function($){
// jQuery

// 1. 일정시간마다 광고배너 영역이 움직이도록 처리
// 2. 인디케이터 클릭시 해당 광고배너로 이동
// 3. 일정시간마다 움직이다 마우스 올리면 정지, 벗어나면 다시 동작

// 변수
var viewBox = $('#viewBox');
var indicator = viewBox.find('.indicator');
var indiUl = indicator.find('ul');
var indiLi = indiUl.find('li');
var indiLink = indiLi.find('a');

var viewArea = viewBox.find('.view_area');
var viewUl = viewArea.find('ul');
var viewLi = viewUl.find('li');

var indiLiLen = indiLi.length;
var n = 0;
var time = 500;

// 마지막 요소를 앞에 붙여넣기, ul의 가로길이 & li의 가로길이 조정
var cloneLi = viewLi.eq(-1).clone(); // eq(-1) : 뒤에서 첫번째. 뒤에서부터 수를 센다.
viewUl.prepend(cloneLi);
var newViewLi = viewUl.find('li');
var newLiLen = newViewLi.length;
console.log(indiLiLen, newLiLen);
viewUl.css({width: (100 * newLiLen) + '%', left: -100 + '%', position:'relative'});
newViewLi.css({width: (100 / newLiLen) + '%'});


// 함수 생성
var slideMoveFn = function(n, interval){
  // setInterval 기능 및 마지막 위치에서 처음으로 이동시
  if(n <=0 && interval){ viewUl.css({marginLeft: 100 + '%'}); }
  // 광고이동
  viewUl.stop().animate({marginLeft: (-100 * n) + '%'}, time);
  // act 처리
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
};

// 이벤트
indiLink.on('click', function(e){
  e.preventDefault();
  n = $(this).parent().index();
  slideMoveFn(n, false);
})

// 반복기능 -> clearInterval에서 제어하기 위해 변수로 지정
// 변수로 지정하더라도 함수 자체는 동작을 한다.
  // 함수이름(); -> 쓰면 무조건 동작
  // ex. var 변수 = 함수이름(); -> 함수 동작
  // 그래서 그걸 막기 위해 closure 를 씀 ex. var 변수 = function(){ return 함수이름(); }; 변수;

var autoMoveFn;
// setInterval 함수를 넣었다 뺐다 가능하도록 제작 -> 함수처리

var slideGoFn = function(){
  autoMoveFn = setInterval(function(){
    n += 1;
    if( n >= indiLiLen ){ n = 0 };
    slideMoveFn(n, true);
  }, time * 4);
  return autoMoveFn;
};

var slideStopFn = function(){
  clearInterval(autoMoveFn);
};

slideGoFn();

viewBox.on({'mouseenter': slideStopFn, 'mouseleave': slideGoFn });


})(jQuery);