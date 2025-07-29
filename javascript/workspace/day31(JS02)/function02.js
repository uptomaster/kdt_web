//  2번 : 익명함수(함수의 이름이 없는 함수)

let printAll = function (num) {
  console.log(num);
}

// 이름이 없기 때문에 변수에 저장해서 사용하고 호출한다.
printAll(100); // 100

// 매개변수로 전달한 값이 짝수라면 +10을 더한값을 출력하고,
// 아니라면 전달된 값만 출력하기.
// result 변수, 익명함수 이용

// 1) let 변수명 = function(num) 익명함수 정의 매개변수 1개
// 2) 조건문 if~else문 사용해서 분기하기
// if(타입 number이고 2로 나눈 나머지가 0이라면) 매개변수 + 10출력
// else 매개변수 출력

// 값과 타입까지 같으려면 등호를 세개 써야함 ===
let result = function (num) {
  if (typeof (num) === 'number' && num % 2 === 0) { console.log(num + 10); }
  else { console.log(num); };
};

result(100);
result(101);

let square = function(x){
  return x * x;
};

console.log(square(100));

setTimeout(function(){
  console.log("2초뒤 출력")
},2000);

