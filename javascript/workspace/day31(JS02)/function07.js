// 7번 : 재귀함수

// 팩토리얼계산 : n! 3! => 3 x 2 x 1

function factorial(n){
  // 재귀함수에서는 종료조건이 반드시 필요함
  if(n === 0){
    return 1;
  }
  // 재귀호출 : n * (n-1)의 팩토리얼
  return n * factorial(n-1);
}

console.log(factorial(3));
console.log(factorial(5));

// 1) 재귀함수를 이용해서 문자열 뒤집기
// hello -> olleh 출력
// 함수명 : reverseStr

function reverseStr(str, index=0){
  // 종료조건 : 모든 문자가 처리되었을 때=> index===str.length
  if(index === str.length) return "";

  return reverseStr(str, index+1) + str[index];
}

console.log(reverseStr('hello'));

// 2) slice 사용
function reverseStr1(str){
  // 종료조건
  if(str===""|| str.length===1){
    return str;
  }
  // 문자열을 하나씩 처리
  return reverseStr1(str.slice(1)) + str[0];
}

// 3) substr 사용
function reverseStr2(str){
  // 종료조건
  if(str===""||str.length===1){
    return str;
  }

  // substring(1) : 첫번째 문자열을 제거하고 나머지 문자열을 리턴
  return reverseStr2(str.substr(1)) + str[0];
}