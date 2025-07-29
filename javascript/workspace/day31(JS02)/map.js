// 13번 : map() 함수 : 기존 배열값을 매핑할때 사용

// 배열명.map(callback(element[, index[, array]][, thisArgs]));

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

// 배열의 각 요소에 2를 곱한 값을 새로운 배열로 반환
const newArr1 = arr.map(function(element, index, array){
  return element*2;
});

console.log(newArr1);

// 배열의 각 요소(문자열)를 문자열의 길이만 담은 새로운 배열로 반환
const arr2 = ['java', 'git', 'javascript', 'dbms', 'web'];

const newArr2 = arr2.map(function(element){
  return element.length;
});

console.log(newArr2); // [ 4, 3, 10, 4, 3 ]

// 배열의 각 객체 특정 프로퍼티 값을 새로운 배열로 반환
const users1 = [
  {name : '짱구', age : 5},
  {name : '철수', age : 5},
  {name : '훈이', age : 5},
  {name : '맹구', age : 5},
  {name : '유리', age : 5},
  
];

console.log(users1);
// [
//   { name: '짱구', age: 5 },
//   { name: '철수', age: 5 },
//   { name: '훈이', age: 5 },
//   { name: '맹구', age: 5 },
//   { name: '유리', age: 5 }
// ]

const names = users1.map(function(element){
  return element.name;
})

// 원하는 요소를 출력하고 싶을 때 map 을 쓴다.
console.log(names); // [ '짱구', '철수', '훈이', '맹구', '유리' ]

// thisArgs는 콜백함수 내에서 this 키워드를 사용할 때 참조할 객체를 지정할 수 있다.
const mul = {multi : 2};
const number = [1,2,3,4,5];
const numberIdx = number.map(function(element,index,array){
  return{
    element : element * this.multi,
    index : index,
    array : array
  }
}, mul);

console.log(numberIdx);

// [
//   { element: 2, index: 0, array: [ 1, 2, 3, 4, 5 ] },
//   { element: 4, index: 1, array: [ 1, 2, 3, 4, 5 ] },
//   { element: 6, index: 2, array: [ 1, 2, 3, 4, 5 ] },
//   { element: 8, index: 3, array: [ 1, 2, 3, 4, 5 ] },
//   { element: 10, index: 4, array: [ 1, 2, 3, 4, 5 ] }
// ]