// 요소 선택
const slideBox = document.querySelector(".slide-box");
const slideImg = document.querySelectorAll(".slide-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideWrap = document.querySelector(".slide-wrap");

// 슬라이드 설정
const slideWidth = 800;
let currentIdx = 0;
const slideCnt = slideImg.length;

// 처음과 마지막 슬라이드 체크 함수
function checkEnd() {
  prevBtn.style.display = currentIdx <= 0 ? "none" : "block";
  nextBtn.style.display = currentIdx >= slideCnt - 1 ? "none" : "block";
}

// 다음 슬라이드로 이동 함수
function nextMove() {
  currentIdx++;
  if (currentIdx >= slideCnt) {
    currentIdx = 0;
  }
  slideBox.style.left = -(currentIdx * slideWidth) + "px";
  slideBox.style.transition = "0.5s ease";
  checkEnd();
}

// 이전 슬라이드로 이동 함수
function prevMove() {
  currentIdx--;
  if (currentIdx < 0) {
    currentIdx = slideCnt - 1;
  }
  slideBox.style.left = `-${currentIdx * slideWidth}px`;
  slideBox.style.transition = "0.5s ease";
  checkEnd();
}

// 자동 슬라이드 시작 함수
function startSlide() {
  slideInterval = setInterval(() => {
    nextMove();
  }, 3000)
}


// 자동 슬라이드 정지 함수
function stopSlide() {
  clearInterval(slideInterval);
  nextMove();
  stopSlide();
  // startSlide();
}


// 버튼 클릭시 자동슬라이드 재시작 함수
nextBtn.addEventListener("click", () => {
  stopSlide();
  prevMove();
});

// 슬라이드에 마우스 올리면 멈추는 함수
slideWrap.addEventListener("mouseover", stopSlide);


// 슬라이드에서 마우스가 벗어나면 다시 시작하는 함수
slideWrap.addEventListener("mouseout", startSlide);


startSlide();
