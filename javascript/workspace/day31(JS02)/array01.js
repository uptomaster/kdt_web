// 11번 : 배열1

// 1. 배열생성
// 1) 배열 리터럴 대괄호 사용한 배열 생성
let arr1 = [];
console.log(arr1, typeof arr1); // [] object

arr1[0] = 10;
arr1[1] = '가나다';
arr1[2] = true;
console.log(arr1, typeof arr1); // [ 10, '가나다', true ] object => 배열에 다른 타입이 들어갈 수도 있다.

let arr2 = [10, 0.5, '안녕'];
console.log(arr2, typeof arr2); // [ 10, 0.5, '안녕' ] object

// 배열의 길이 출력
console.log(`arr2 배열의 길이 : ${arr2.length}`); // arr2 배열의 길이 : 3

// 배열의 크기를 지정한 배열 생성(콤마 개수만큼 공간 생성)
let arr3 = [, , , ,];
console.log(arr3); // [ <4 empty items> ]
console.log(`arr3의 배열 길이 확인 : ${arr3.length}`); // arr3의 배열 길이 확인 : 4
arr3[10] = 100;
console.log(arr3); //[ <5 empty items>, 10, <4 empty items>, 100 ]

// 2) Array() 생성자 함수로 배열 생성

let arr4 = new Array();
console.log(arr4, arr4.length, typeof arr4); // [] 0 object

arr4[0] = '사과';
arr4[1] = '체리';
arr4[2] = '복숭아';
console.log(arr4, arr4.length, typeof arr4); // [ '사과', '체리', '복숭아' ] 3 object

// Array() 생성자 함수로 초기값 할당
let arr5 = new Array('0번째 인덱스', 1, true);
console.log(arr5); //[ '0번째 인덱스', 1, true ]

// Array() 생성자 함수로 칸 수 지정
let arr6 = new Array(10);
console.log(arr6); // [ <10 empty items> ]

let arr7 = ['a', 'b', 'c', 'd'];

// 배열 순회 시 사용할 수 있는 반복ㅁ누

// for ... in
for(let i in arr7){
  console.log(i); // 인덱스 출력
}

// for ... of
for(let j of arr7){
  console.log(j); // 값 출력
}

