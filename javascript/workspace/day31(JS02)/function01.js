// 1번 : 일반함수

// 매개변수 o, 리턴값 o 함수

function getAge(age, year){
  console.log(age, typeof age);
  console.log(year, typeof year);
  return age;
}

//  매개변수 o, 리턴값 o 함수 호출
// console.log(함수명(인수1, 인수2)) or 변수 =  console.log(함수명(인수1, 인수2))
console.log(getAge(20, 2025));

let age = getAge(20, 2025);
console.log(age);

// 디폴트 매개변수
function getInfo(name, age, subject='자바'){
  console.log(name);
  console.log(age);
  console.log(subject);
  return name + age;
}

let result1 = getInfo("짱구", 5); // 값을 넣지 않으면 undefined로 나옴
let result2 = getInfo("철수", 5, '자바스크립트');
let result3 = getInfo("유리", 5, 'CSS');

// 아이디, 비밀번호, 이름을 전달받고 이름의 기본값을 '사용자로 설정하기
// 함수명 : introduce 매개변수o 리턴값x 한줄의 출력문으로 나올 수 있도록 작성
function introduce(id, pw, name='사용자'){
  console.log(`아이디 : ${id}, 비밀번호 : ${pw}, 이름 : ${name}`);
}

// name을 지정하지 않았을때
let info1 = introduce(1, "0123"); // 아이디 : 1, 비밀번호 : 83, 이름 : 사용자
// 0123이라는 number타입으로 전달하면 8진수로 변환된다.(83){10진수}

// name을 별도로 지정했을때
let info2 = introduce(2, "비번2", "이남혁")


// 가변 매개변수 : 함수 호출 시 몇개의 값이 전달될 지 모르는 상황에서 사용한다.
function printAdd(...numbers){
  console.log(numbers, typeof numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i], typeof numbers[i]);
    const value = Number(numbers[i]); // 어떤 타입이 들어올지 모르기 때문(문자열은 number타입으로 바뀔 수 없다.)
    if(!isNaN(numbers[i])){
      sum += value;
    }
    else{
      console.log(`${numbers[i]}는 숫자가 아니라 제외됨.`);
    }
    console.log(`총합 : ${sum}`);
  }
}

// 동적 바인딩으로 인해 다른 타입의 값도 들어갈 수 있다.
printAdd(1,2,3); // [ 1, 2, 3 ] object
printAdd(1,2,3,'a')

// 총합 : 1
// 총합 : 3
// 총합 : 6
// a는 숫자가 아니라 제외됨.
// 총합 : 6




