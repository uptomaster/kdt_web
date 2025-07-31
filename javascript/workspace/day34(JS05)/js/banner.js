
// js

let slideBox = document.querySelector(".slide-box");
let slideImg = document.querySelectorAll(".slide-img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

// 슬라이드 너비, 현재 인덱스, 슬라이드 개수 설정
let slideWidth = 800;
let currentIdx = 0;
let slideCnt = slideImg.length;

// 슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 숨김처리 or 표시처리

function checkEnd(){
  if(currentIdx <= 0){
    prevBtn.style.display = "none";
  }
  else{
    prevBtn.style.display = "block";
  }

  if(currentIdx >= slideCnt - 1){
    nextBtn.style.display = "none";
  }
  else{
    nextBtn.style.display = "block";
  }
}

checkEnd();

nextBtn.style.cursor="pointer";
prevBtn.style.cursor="pointer";

nextBtn.style.transition="bright(180%)";

// 다음 버튼 클릭 시 발생하는 이벤트
nextBtn.addEventListener('click', function(){
  currentIdx++;
  slideBox.style.left=-(currentIdx * slideWidth) + "px";
  slideBox.style.transition = '0.5s ease';
  checkEnd();
});

// 이전 버튼 클릭 시 발생하는 이벤트
prevBtn.addEventListener('click', function(){
  currentIdx--;
  slideBox.style.left=-(currentIdx * slideWidth) + "px";
  slideBox.style.transition = '0.5s ease';
  checkEnd();
});

// 상태           left값    보여지는 슬라이드   prev    next
// current=0      0px       1번               숨김    보임
// current=1      -800px    2번               보임    보임
// current=2      -1600px   3번               보임    숨김