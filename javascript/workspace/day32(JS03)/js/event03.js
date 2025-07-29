const input = document.querySelector("input[type='button']");
const p = document.querySelector("p");

console.log(input)
console.log(p);

input.addEventListener("click", function(){
  with(p.style){
    // 자바스크립트에서 객체의 프로퍼티를 
    // 더 간단하게 접근할 수 있게 해주는 구문이다.
    // 특정 객체를 지정하여 그 객체의 프로퍼티를 코드 블록안에서 직접
    // 참조할 수 있다.
    // 카멜표기법을 사용한다.
    fontSize = "30PX";
    border = "2px dashed blue";
    width = "100px";
    backgroundColor = "skyblue";
  }
})