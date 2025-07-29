// 2번 : var 키워드


var data1 = '10';
var data2 = 10;

// typeof 연산자, typeof 함수
console.log(data1, typeof data1, typeof(data1));
console.log(data2, typeof data2, typeof(data2));

var data1 = true;
console.log(data1, typeof data1, typeof(data1));

// 호이스팅(hoisting) : 선언의 위치와 상관없이 존재하면 무조건 메모리에 할당된다.
// 초기화 작업은 호이스팅 되지않고, 선언만 호이스팅된다.
console.log(name, typeof name);
var name = '이남혁';
console.log(name, typeof name);

console.log(age1, typeof age1); // 아직 선언이 되지 않은 상태라서 error
var age1;