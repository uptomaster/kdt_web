// 10번 : 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.

// 프로토타입은 함수로 선언하여 사용한다.
// 단, 반드시 대문자로 시작해야한다.

// 생성자 함수(함수명의 첫글자는 대문자기 때문)
function User(id, pw, name, age, subject='javascript'){
  this.id = id; //새 객체의 id프로퍼티
  this.pw = pw;
  this.name = name;
  this.age = age;
  this.subject = subject;
  // this는 생성된 객체를 참조한다.
  // 각 속성은 생성된 객체의 속성이된다.
}

// 생성자 함수로 생성된 모든 객체는 공유된 프로토타입 객체를 가진다.
// 프로토타입 객체를 사용하면 공통 메소드나 속성을 공유할 수 있다.
user1 = new User('abc', '1234', "이남혁", 25);
console.log(user1);

// 클래스
class User1{
  constructor(id, pw, name, age, subject){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
    this.subject = subject;
  }
}

const user3 = new User1("aaa", 'abc', '유리', 25, '자바스크립트');
console.log(user3, typeof user3);