// 5번 : 화살표함수(Arrow Function)★★★★★
// ES6에서 도입된 간결한 함수 작성 방식

const add1 = function(num1, num2){
  return num1 + num2;
};

// 화살표함수로 바꿔보자
const add2 = (num1, num2) => num1 + num2;

console.log(add2(100,200));

// 이름과 나이를 매개변수로 받아 출력하는 화살표 함수
// 함수명 : printInfo
// 매개변수 : 2개, 리턴값 : X

// 익명함수부터 만들고 화살표 함수로 만든다.
// 익명함수 : printInfo1
const printInfo1 = function(name, age){
  console.log(`이름 : ${name}, 나이 : ${age}`);
}

// 화살표함수 : printInfo2
const printInfo2 = (name, age) => console.log(`제 이름은 ${name}이고 나이는 ${age}살입니다.`);

printInfo2('짱구', 5);

// 매개변수가 1개인경우 소괄호 () 생략가능.
const square = x => x * x;

// 매개변수가 없는 경우, 비어있는 소괄호 () 사용
const greet = () => "hello! 2025!";

// 여러줄의 코드가 필요한 경우 중괄호{} 사용.
const sumArray = (arr) => {
  let sum = 0;
  for(let num of arr){ // 빠른 for문
    sum += num;
  }
  return sum;
}

// 두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기*화살표함수만 이용하기
// 함수명 : mul

const mul = (num1, num2) => console.log((num1*num2)*3);
mul(2,2);

// 두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기
// 화살표함수와 콜백함수 이용하기
const mul1 = (num1, num2, callback) => {
  const product = num1 * num2;
  callback(product);
};

// 결과에 3을 곱해서 출력하는 콜백함수
const multi = result => console.log(result*3);

mul1(10,20,multi);
