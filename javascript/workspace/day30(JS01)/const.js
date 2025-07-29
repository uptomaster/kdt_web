// 2번 : const 상수(var.js, let.js랑 같이 보기)

// console.log(data1); // 참조오류 발생
// 호이스팅은 가능하지만(메모리에 먼저 올려놓는 것),초기화 이전에는 접근할 수 없다. => ReferenceError발생
// 선언 자체는 위쪽으로 끌어올려지지만, 일시적 사각지대(TDZ)에 갇혀 있어서 초기화 전에는 접근하면 안됨. 
const data1 = 10;
console.log(data1, typeof data1);

data1 = 20;
console.log(data1, typeof data); // data1은 const 상수로 선언되어있기 때문에 값 변경이 불가능하다.