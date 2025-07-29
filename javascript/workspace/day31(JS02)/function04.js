// 4번 : 즉시실행함수


(function(){
  console.log("자바스크립트 2일차 수업 - 즉시실행함수")
})();


let result = (function(num1, num2){
  return num1+num2;
})(10,20);

console.log(result);

// 모듈패턴(private scope)
const Counter = (function(){
  let count = 0;
  return{ // 객체의 property에 함수가 들어갈 수 있다.
    increment : function(){
      count++;
      return count;
    }, 
    decrement : function(){
      count--;
      return count;
    }, 
  };
})();

// count : 은닉화 되어있기 때문에 직접 값을 변경할 수 없는데,
// 이 구조를 바로 모듈 패턴이라고한다.
// 자바 스크립트에서 자주 사용하는 패턴이고,
// 자바에서는 private로 필드를 설정하는 방식과 비슷하다.
console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.decrement()); // 1

count = 10;
console.log(count);

// 즉시실행함수는 초기화 코드에서도 자주 사용한다.
(function(){
  const name='짱구';
  console.log(`${name}, 안녕!`);
})();