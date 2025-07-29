//3번 : 콜백함수
//함수의 매개변수로 전달되어 특정 이벤트가 발생하거나 다른 함수가 호출될 때 실행되는 함수

//콜백함수에 익명함수 정의
function userInput(name, callback){
  console.log("userInput함수 호출"); //1번 출력문
  callback(name); //2번 콜백함수 호출
  console.log("callback 함수 호출 후"); //6번 출력문
}

userInput("김영선", function(name){
  console.log("익명함수 호출중"); //3번 출력문
  for(let i = 0; i < 5; i++){ 
    console.log(name);          //4번 5번 출력문
  }
  console.log("익명함수 반복문 끝"); //5번 출력문
});
console.log("함수호출 끝"); //7번 출력문


// 두 정수의 덧셈 결과를 출력
function add(num1, num2, callback){
  if(callback){
    callback(num1+num2);
  }
  return num1 + num2;
}

let print = function(result){
  console.log(`print 익명함수 : ${result}`);
}

const result = add(10, 5, print);
console.log(result); 
// print익명함수는 콜백함수로 사용되고있다.
// 단순히 값을 받아서 console.log를 이용해서 출력하는 역할만 하고 있다.
// 콜백함수로 전달될때 함수이름만 전달하는데 add함수는 전달된 print함수를 호출하는 시점에서
// print(result)와 같이 호출하게 된다.
// 함수를 즉시 호출하는 경우는 함수를 즉시 실행시키고 반환값을 전달하는 것을 의미한다.
// print함수는 반환값이 없다.