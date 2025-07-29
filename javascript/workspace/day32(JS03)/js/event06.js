//전체동의
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.filter = Array.prototype.filter;

const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");
console.log(all);
console.log(terms);

//전체동의 체크박스를 클릭할 때 마다 실행되는 이벤트 리스너
all.addEventListener('click', () => {
  terms.forEach((term) => {
    console.log(term);
    term.checked = all.checked;
  });
});

//약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스터
terms.forEach((term) => {
  term.addEventListener('click', () =>{
    all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === terms.length;
    //terms.map((term) => term.checked) : 3개의 약관동의 체크박스들의 checked 속성값을 배열로 매핑
    //.filter((checked) => checked) : checked가 true인 요소만 걸러냄
    //.length === 3 : 체크박스에 선택된 개수가 3개인지 확인
  });
});