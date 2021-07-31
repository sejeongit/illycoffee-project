// banner_touch.js

(function($){
// jQuery

var viewBox = $('#viewBox');
var viewArea = viewBox.find('.view_area');
var viewLi = viewArea.find('li');

var viewLiLen = viewLi.length;

var startPoint;
var endPoint;
var resultPoint;

var newN = 0;
var beforeN = newN;

// 함수
var evtPositionFn = function(e){
  var evt = e.originalEvent;
  var eType = e.type.slice(0,5)
  console.log(eType);

  var checkPoint;

  (eType === 'touch') ?
   checkPoint = evt.changedTouches[0].pageX :
   checkPoint = evt.pageX;

   return checkPoint;
};

// 이벤트
viewArea.on('mousedown touchstart', function(e){
  startPoint = evtPositionFn(e);
});
viewArea.on('mouseup touchend', function(e){
  endPoint = evtPositionFn(e);
  resultPoint = startPoint - endPoint;
  if(resultPoint > 50){
    newN += 1;
  }else if(resultPoint < -50){
    newN -=1;
  }

  if( newN > viewLiLen-1 ){
    newN = 0;
  }else if( newN < 0 ){
    newN = viewLiLen - 1;
  }

  if(beforeN !== newN){
    viewLi.eq(newN).show();
    viewLi.eq(beforeN).fadeOut(function(){
      viewLi.eq(beforeN).removeClass('act');
      viewLi.eq(newN).addClass('act');
      beforeN = newN;
    });
  }
  
});

})(jQuery);