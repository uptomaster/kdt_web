//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력

//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용
//참고 : split(), reverse(), join()

// let str = "hello";

// function printStr(str, callback){
//   console.log(str[0]); 
//   callback()
// };

// printStr(str);

//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기 (O)
//함수명 welcomeUser

function welcomUser(firstname, lastname){
  const str = firstname + lastname + '님 환영합니다.';
  return str;
}

console.log(welcomUser("이","남혁"));


//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환 (O)
//함수명 isAdult

function isAdult(age){
  if(age >= 20){
    return true;
  }
  else return false;
}

if(isAdult(30)){
  console.log("성인입니다.")
}
else{
  console.log("미성년자입니다.")
}


//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다

const student_info = [
  {name : "둘리", age : 5, score : 80},
  {name : "도우너", age : 6, score : 50},
  {name : "또치", age : 5, score : 90}
];

console.log(student_info); 
console.log(student_info[1]); 
console.log(student_info.name); // undefined

for(let i=0; i < student_info.length; i++){
  console.log('이름 : ' + student_info[i].name + student_info[i].score)
}

//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라

// 

//1. 학생의 정보를 저장하는 객체를 만들고 그 학생의 정보를 출력하기 
//학생정보 : 이름, 나이, 성적(1과목)
//1) 객체에 최소 3명의 데이터를 추가하고 이름과 성적 출력하기 (O)
let student = {
  name: ["이남혁", "김남혁", "박남혁"],
  age: [23, 25, 26],
  score: ['A', 'B', 'C']
};
//2) 객체에서 이름 키에 해당하는 값들만 출력하기 (O)
for (let i = 0; i < 3; i++) {
  console.log(student.name[i]);
}
//3) 객체에 새로운 속성(학년)을 추가하고 객체 전체 출력하기(for문 사용) (O)
student["grade"] = [1, 2, 3];
console.log(student);


//2. 배열의 모든 요소를 2배로 증가시켜 새로운 배열을 만들어 출력하기
//1) 2배 증가시켜 새로운 배열로 출력하기 (O)

const arr_odd = [1, 3, 5, 7, 9, 11];
const arr_even = [];
for (let i = 0; i < arr_odd.length; i++) {
  arr_even[i] = arr_odd[i] * 2;
}

console.log(arr_even);

//2) 배열의 길이를 구하고 출력하기 (O)
console.log(`배열의 길이 : ${arr_odd.length}`);


//3) 배열에서 특정요소를 삭제하기(3) 메소드 사용 (O)

// 1. shift() : 배열의 첫번째 요소 삭제.
arr_even.shift();
console.log(arr_even); // [ 2, 6, 10, 14, 18, 22 ] -> [ 6, 10, 14, 18, 22 ]

// 2. pop() : 배열의 마지막 요소 삭제
arr_even.pop();
console.log(arr_even); // [ 6, 10, 14, 18, 22 ] -> [ 6, 10, 14, 18 ]

// 3. splice() : 원하는 인덱스에서부터 요소 삭제
arr_even.splice(0, 1); // 0번인덱스(6)부터 1개 삭제
console.log(arr_even);

// 4. filter() : 원하는 조건으로 요소를 삭제 => 새로운 배열로 만들어짐
console.log(arr_odd);
const arr_even2 = arr_odd.filter((value) => {
  if (value % 2 === 0) {
    return value;
  }
  else return value;
});
console.log(arr_even2);


//4) 배열에서 특정 값(cat)을 검색하고 그 값의 인덱스 출력하기 (O)
const animals = ['dog', 'cat', 'rabbit'];

for (let i = 0; i < animals.length; i++) {
  if (animals[i] === 'cat') {
    console.log(i);
  }
};

//5) 배열의 첫번째와 마지막요소를 제거한 뒤 남은 배열 출력하기 (O)
const colors = ['red', 'blue', 'green', 'yellow'];

colors.shift(); // 첫번째요소 제거
colors.pop(); // 마지막요소 제거
console.log(colors);

//3. 혼합문제
//1) 배열의 요소를 객체로 변환하여 새로운 배열을 만들기
//  주어진 배열의 값을 객체의 value 속성으로 저장할것
const data = [10, 20, 30];

const data_a = { value: 10, value: 20, value: 30 };
console.log(data_a);

//출력결과 : [{value: 10}, {value: 20}, {value: 30}]

//2) 배열을 활용하여 특정값을 기준으로 객체 업데이트하기 (O)
const users = [
  { id: 1, name: "짱구", age: 5, subject: 'javascript' },
  { id: 2, name: "철수", age: 5, subject: 'javascript' },
  { id: 3, name: "맹구", age: 5, subject: 'javascript' },
];
//id가 2인 객체의 나이를 6으로 변경, subject를 'web표준'으로 변경

for (let i = 0; i < users.length; i++) {
  if (users[i].id === 2) {
    users[i].id = 6;
    users[i].subject = 'web표준';
}
}
console.log(users);
// <출력결과>
// [
//   { id: 1, name: '짱구', age: 5, subject: 'javascript' },
//   { id: 6, name: '철수', age: 5, subject: 'web표준' },
//   { id: 3, name: '맹구', age: 5, subject: 'javascript' }
// ]

//3) 배열의 요소를 모두 더하여 총합 출력하기 (O)
const numbers2 = [2, 5, 20, 10];

let total = 0;

for(let i = 0; i < numbers2.length; i++){
  total += numbers2[i];
}
console.log(`배열의 요소의 총 합 : ${total}`);