//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력

//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용
//참고 : split(), reverse(), join()
console.log("==========================================================================");

let str = "hello";

function printStr(str, callback) {
    let str2 = " ";
    for (let i = 1; i <= str.length; i++) {
        str2 += str[str.length - i];
    }
    str = str2;
    callback(str);
};

printStr("str", (str) => {
    let tmp = str;
    console.log(tmp);
});

//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기 (O)
//함수명 welcomeUser

function welcomUser(firstname, lastname) {
    const str = firstname + lastname + '님 환영합니다.';
    return str;
}

console.log(welcomUser("이", "남혁"));


//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환 (O)
//함수명 isAdult
console.log("==========================================================================");

function isAdult(age) {
    if (age >= 20) {
        return true;
    }
    return false;
}

if (isAdult(30)) {
    console.log("성인입니다.")
}
else {
    console.log("미성년자입니다.")
}

console.log("==========================================================================");

//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다

const student_info = [
    { name: "둘리", age: 5, score: 80 },
    { name: "도우너", age: 6, score: 50 },
    { name: "또치", age: 5, score: 90 }
];


for (let i = 0; i < student_info.length; i++) {
    console.log("이름 : " + student_info[i].name + ", 포인트 : " + student_info[i].score)
}
console.log("==========================================================================");

// class이용
function School(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
}

student1 = new School("둘리", 5, 80);
student2 = new School("도우너", 6, 50);
student3 = new School("또치", 5, 90);

console.log("이름 : " + student1.name + ", 점수 : " + student1.score);
console.log("이름 : " + student2.name + ", 점수 : " + student2.score);
console.log("이름 : " + student3.name + ", 점수 : " + student3.score);


console.log("==========================================================================");


//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라

let point_sum = 0;

student_info[0].point = 80;
student_info[1].point = 50;
student_info[2].point = 90;

console.log(student_info);
console.log("==========================================================================");
