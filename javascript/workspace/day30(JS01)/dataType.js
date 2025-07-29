// 3번 : 데이터 타입

// number, boolean, string, undefined, Symbol, null

// number
console.log("number타입");
console.log(3.14, typeof 3.14, -50, typeof(-50));
console.log(Infinity, typeof Infinity); // Infinity는 number타입이다.
console.log(-Infinity, typeof -Infinity); // Infinity는 양수와 음수 모두 표현가능하다.
console.log(NaN, typeof(NaN)); // NaN은 number타입이다.

// number타입으로 형변환
let str1 = "123";
let str2 = "abc";
let num1 = Number(str1);
let num2 = Number(str2);
console.log(str1, typeof str1, str2, typeof str2);
console.log(str2, typeof str2, num2, typeof(num2)); // abc string NaN number

// string타입으로 형변환
console.log("string 타입");
console.log("hello", typeof "hello");
console.log('hello', typeof 'hello');
console.log(`he
  llo`, typeof `hello`); // 백틱(`)은 줄바꿈이 유일하게 가능

let numStr = String(10);
console.log(numStr, typeof(numStr));

let numStr2 = String(Infinity);
console.log(numStr2, typeof(numStr2)); // Infinity string

// boolean
console.log(true, typeof true);
console.log(false, typeof false);
console.log("", typeof "");
console.log(Boolean(""), typeof Boolean("")); // false boolean => 빈문자열이므로 false
console.log(Boolean(" "), typeof Boolean(" ")); //true boolean => 띄어쓰기도 값이므로 true
console.log(Boolean(undefined), typeof Boolean(undefined)); //false boolean => 미정의는 값이 없으므로 false

// Falsy  : 자바스크립트에서 논리적으로 거짓으로 평가되는 값
      // false, 0, -0(음수 0), 0n(BigInt형식의 0), ""(빈문자열), null, undefined, NaN
// Truthy : 자바스크립트에서 논리적으로 참으로 평가되는 값
      // true, 1, -1, " ", ...
// boolean 타입으로 참과 거짓을 명확하게 나타낼 수 있는 값.
// false 


// Symbol
console.log(Symbol(), typeof(Symbol())); // Symbol() symbol
console.log(Symbol("description"), typeof(Symbol("description"))); // Symbol(description) symbol

// Symbol은 고유함을 보장하며, 객체의 키로 심볼을 사용할 수 있다.
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1, sym2); // Symbol(id) Symbol(id)

// Object
// 객체 : 키-값 쌍의 집합 (파이썬의 딕셔너리와 유사)
let person = {name : "이남혁", isStudent : false};
console.log(person, typeof person); // { name: '이남혁', isStudent: false } object
console.log(person.name, typeof(person.name));
// 객체.key로 해당 value에 접근할 수 있다.

// array 배열
let arr = [1,2,3];
console.log(arr, typeof arr); // [ 1, 2, 3 ] object

// function 함수
function printNum(){
  console.log(1, typeof 1);
}

console.log(printNum, typeof printNum); // [Function: printNum] function
// function이 반환되지만, 특별한 객체로 취급된다.