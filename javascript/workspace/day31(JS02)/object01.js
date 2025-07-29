// 9번 : 객체1

// 객체는 보통 const로 선언하며, 객체로 사용 시 const 라도 값 변경이 가능하다.
const user = {
  name: "이남혁",
  age: 25,
  address: "서울시 강남구",
  introduce: () => {
    console.log("안녕하세요.");
  },
};

console.log(user, typeof user); // object타입
console.log(user.introduce); // [Function: introduce]
user.introduce(); // 안녕하세요.

console.log(user['address']); // 서울시 강남구 => key 값의 규칙성이 필요할때 ['']문법을 사용하여 접근한다.
console.log(user.address); // 서울시 강남구 => 직접 접근할 수 있다.

// 실습
// 1. programming 객체 생성
// 프로퍼티 키는 pro1 ~ pro4까지
// 프로퍼티의 값은 java, dbms, html/css, javascript
const programming = { pro1: "java", pro2: "dbms", pro3: "html/css", pro4: "javascript" };

// 2. 객체 출력 타입도 같이 출력
console.log("programming 객체 : ", programming, `객체 타입 : ${typeof (programming)}`);

// 3. javascript만 출력하기. 방법 2가지로 각각 출력 타입까지
console.log(programming.pro1); //첫번째 방법*직접접근
console.log(programming['pro1']); // 두번째 방법*['']문법

// 4. pro1의 값을 자바로 변경
// 객체명.객체프로퍼티키 = 변경할 값
programming.pro1 = '자바';

// 5. pro5 객체 추가
// 프로퍼티 값은 git
programming.pro5 = 'git';

// 6. 객체의 전체 값 하나씩 출력
for (let i in programming) {
  console.log(programming[i]);
}

// for(let j in programming){
//   console.log(j);
// }

//  for ... in
// 객체의 키(프로퍼티 이름)을 순환한다.
// 일반 객체나 배열에서 모두 사용가능하다

// for ... of
// 이터러블(iterable)객체에서만 사용가능하다. => 배열, 문자열, Map, Set 등...
// 순환 시 객체의 값(value)를 반환한다.
// 일반 객체는 이터러블 객체가 아니기 때문에 사용 불가능하다.
// [Symbol.iterator] 메소드를 가진 객체를 이터러블 객체라고 부른다.

// 일반 객체를 for ... of로 순회하기 위해서는 배열로 변환하면 된다.
// Object.keys(), Object.values(), Object.entries()를 사용한다.
// Object.entries() : [key, value] 쌍의 배열로 변환하는 메소드
for(let key of Object.keys(programming)){
  console.log(key);
}

for(let value of Object.values(programming)){
  console.log(value);
}

for(let entry of Object.entries(programming)){
  console.log(entry);
}

// 객체에 [Symbol.iterator]를 직접 추가
const program = {
  lang1 : "javascript",
  lang2 : "html",
  lang3 : "css",
  [Symbol.iterator] : function*(){
    for(let key in this){
      if(this.hasOwnProperty(key)){
        yield this[key];
      }
    }
  }
};

for(let value of program){
  console.log(value);
}