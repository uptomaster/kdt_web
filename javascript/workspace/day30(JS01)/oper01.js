// 7번 : 연산자
// 

let data1 = "1";
let data2 = 1;

console.log(data1, typeof data1, data2, typeof data2);

console.log(data1 == data2);
console.log(data1 === data2);

// false로 취급되는 값을 falsy라고 부른다.
console.log(Boolean(""), Boolean(''), Boolean(``), Boolean(0), Boolean(0.0), Boolean(-0), typeof Boolean(-0),
typeof Boolean(-0.0), null, undefined);

console.log(Boolean(1), Boolean(null), Boolean(undefined));

let data;
console.log(data, typeof data);
if(data){
  console.log("true의 값");
}else{ // data를 초기화하지 않아서 undefined이므로 false
  console.log("false의 값");
}