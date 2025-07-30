//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력

// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것

const name = "이남혁";
const age = 25;
const info_message1 = (age === 10) ? "당첨!!" : "다음기회에...";
const info_message2 = (age >= 19) ? "입장가능!" : "입장 불가..";


//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력
console.log(`${name}님은 ${age}살입니다. 입장가능여부는 ${info_message2}`);
console.log(`${name}님은 ${age}살입니다. 복권 당첨 여부는... ${info_message1}`);

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정
const stu_name = "이남혁";
const stu_score = 100;
if (stu_score >= 60) {
    console.log(stu_name + "님은 합격입니다.")
    if (stu_score === 100) {
        console.log(stu_name + "님은 장학생입니다.")
    }    
}
else{
    console.log(stu_name + "님의 점수가 60점 미만으로, 일반학생입니다.")
}

//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F

function getGrade(name, score){
    let grade = ' ';
    if(score >= 90){
        grade = 'A';
        console.log(name + "님의 등급은 " + grade);
    }
    else if(score >= 80){
        grade = 'B';
        console.log(name + "님의 등급은 " + grade);
    }
    else if(score >= 70){
        grade = 'C';
        console.log(name + "님의 등급은 " + grade);
    }
    else{
        grade = 'F';
        console.log(name + "님의 등급은 " + grade);
    }
};

getGrade("이남혁", 95);
getGrade("이남혁", 85);
getGrade("이남혁", 75);
getGrade("이남혁", 65);


//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력

let total = 0;

for(let i=1; i <= 100; i++){
    if(i % 18 === 0){ // 3, 6, 9의 최소공배수는 18
        total += i;
    }
}
// 18 36 54 72 90
console.log(`합계 : ${total}`);