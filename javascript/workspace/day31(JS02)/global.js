// 8번 : global

globalThis.num; // 전역객체에 num 변수를 선언
console.log(globalThis.num);

let num1 = 10;
let num2 = 20;
console.log(num1, num2);

function changeNumber(num1, num2){
  globalThis.num = num1; // globalThis를 통해 전역변수 num을 num1값으로 설정
  console.log(globalThis.num);

  num1 = num2;
  num2 = globalThis.num;
  console.log(num1, num2);
}

changeNumber(num1, num2);
console.log(globalThis.num); // 10

// globalThis 객체를 사용하여 전역변수를 설정하고 함수 내부에서 변수 값을 변경
// globalThis는 자바 스크립트 환경에 따라 전역객체에 접근하는 방법이 달라 코드의 이식성이 떨어지는 것을 극복하기 위해
// 도입된 표준화된 방법*(ES11에서 도입된 표준 객체)

// globalThis를 이용한 전역 문자열
globalThis.str = 'hello'; // 전역 객체에 str변수를 선언
console.log(globalThis.str);

function data(){
  globalThis.str = "값 변경"; 
  let number = "숫자"; // 지역변수 : 블록스코프 변수
}

console.log(globalThis.str); // 값 변경 출력 => 전역객체에 변수를 설정할 수 있고 함수 밖에서도 접근 가능.
console.log(globalThis.number); // undefined : 블록스코프 변수이므로 globalThis.number로 설정 안됨.
