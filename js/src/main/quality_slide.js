// quality_slide.js
(function($){
// jQuery

// 1. 이전,다음버튼을 클릭하면 이전,다음 li가 나타나게
// 2. 해당 페이지 / 총 페이지 표시

var qualBox = $('#qualityBox');
var qualDown = qualBox.find('.quality_part_down');
var qualP = qualDown.children('p');
var qualNow = qualP.children('.now');
var qualTotal = qualP.children('.total');

var nextBtn = qualDown.find('.next_btn');
var prevBtn = qualDown.find('.prev_btn');
var qualArea = qualBox.find('.quality_area');
var qualUl = qualArea.children('ul');
var qualLi = qualUl.children('li');

var qualLiLen = qualLi.length;

var areaWidth = qualArea.width();
// console.log(areaWidth);

var countUp = 0;

// 1. -------------------------------------------------
nextBtn.on('click', function(e){
  e.preventDefault();

  countUp += 1;

  if( countUp >= qualLiLen ){
    countUp = qualLiLen - 1; // 멈춤
    // countUp = 0; // 처음으로
  }

  qualNow.text( countUp + 1 ); // 클릭 이후

  var mvWidth = -(areaWidth * countUp) + 'px';
  qualUl.stop().animate({marginLeft: mvWidth});
  // console.log(countUp);
});

prevBtn.on('click', function(e){
  e.preventDefault();
  countUp -= 1;

  if( countUp < 0 ){
    countUp = 0; // 멈춤
    // countUp = qualLiLen - 1; // 마지막으로
  }

  var mvWidth = -(areaWidth * countUp) + 'px';
  qualUl.stop().animate({marginLeft: mvWidth});

  qualNow.text( countUp + 1 );
});


})(jQuery);