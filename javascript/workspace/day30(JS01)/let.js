// 2번 : let 키워드(var와 같이 보기)

let data1 = 'let변수';
console.log(data1, typeof data1, typeof(data1));

// let 키워드는 같은 영역 내에서 재선언이 불가능하다.
// let data1 = true;

// 값 수정
data1 = 'let변수 값 수정';
console.log(data1, typeof data1, typeof(data1));

console.log(number1, typeof number1); // let 키워드는 호이스팅 불가능.
let number1;

// 호이스팅은 자바스크립트에서 변수와 함수 선언을 코드의 최상단으로 끌어올리는 것을 의미한다.
// 코드를 실행하기전에 변수, 함수등의 선언이 메모리에 저장되기 때문에 가능한데,
// var로 선언된 변수는 선언과 동시에 undefined로 초기화되고, 이후에 실제 값으로 할당된다.
// 따라서 var로 선언된 변수는 선언 전에도 접근이 가능하며 undefined의 값을 가진다.

// let과 const는 호이스팅이 되지만, 초기화는 되지 않는다.
// 초기화 전에 접근하려고하면 레퍼런스 에러가 발생한다.
// 그 이유는 let과 const는 선언이 코드의 실행 흐름에 도달했을 때 초기화되기 때문이다.
// 