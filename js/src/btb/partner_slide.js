// partner_slide.js
(function($){
// jQuery

var win = $(window);
var winWidth = win.width();

var partBox = $('#partnerBox');
var partArea = partBox.find('.partner_area');
var partPhoto = partBox.find('.partner_photo');
var partUl = partPhoto.children('ul');
var partLi = partUl.children('li');
var btnArea = partBox.find('.button_area');
var nextBtn = btnArea.children('.next_btn');
var prevBtn = btnArea.children('.prev_btn');

var liWidth = partLi.outerWidth(true);

var time = 400;
var permission = true;

// 브라우저 가로값 / li 가로값 -> li 보이는 개수만큼 가로길이 조정
var viewLiLen = parseInt(winWidth / liWidth);
var liMargin = parseInt(partLi.css('marginRight'))
var viewWidth = (liWidth * viewLiLen) - liMargin;
var btnviewWidth = viewWidth - liWidth;
partArea.css({width: btnviewWidth + 'px', margin: 'auto', marginTop: 90 + 'px'});

partUl.css({transform:'translateX('+ -liWidth +'px)'});
partLi.eq(-1).prependTo(partUl);
partLi = partUl.find('li');


// 다음버튼 / 이전버튼 클릭시 li 이동
nextBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;

    partUl.stop().animate({marginLeft: -liWidth + 'px'}, function(){
      partUl.css({marginLeft:0});
      partLi.eq(0).appendTo(partUl);
      partLi = partUl.find('li');
      permission = true;
    });
  }
});

prevBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;

    partUl.stop().animate({marginLeft: liWidth + 'px'}, function(){
      partUl.css({marginLeft:0});
      partLi.eq(-1).prependTo(partUl);
      partLi = partUl.find('li');
      permission = true;
    });
  }
});


var moveSlide;
var slideGoFn = function(){
  moveSlide = setInterval(function(){
    nextBtn.trigger('click');
  }, time*4);
};
slideGoFn();

var setClear = function(){  clearInterval(moveSlide);  
    console.log('?'); }
var setStop = function(){ slideGoFn(); }
var setArr = [partPhoto ,nextBtn ,prevBtn];

$.each(setArr, function(i,select){
  select.on('mouseenter', setClear);
});
// partPhoto.on('mouseenter', setClear);
// nextBtn.on('mouseenter', setClear);
// prevBtn.on('mouseenter', setClear);

$.each(setArr, function(i,select){
  select.on('mouseleave', setStop);
});
// partPhoto.on('mouseleave', setStop);
// nextBtn.on('mouseleave', setStop);
// prevBtn.on('mouseleave', setStop);


})(jQuery);