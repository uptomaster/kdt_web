// 5번 : promise 비동기 처리

// 사용자 등록 함수 실행
//  saveDB(user) : DB저장(3초)
//  sendEmail(user) : email 전송(5초)
//  getResult(user) : 메시지 생성(0.5초)

// DB 빈 배열 생성
const DB = [];

//saveDB : 사용자 정보를 DB 배열에 저장(resolve / reject 처리)
function saveDB(user) {
  // setTimeout(callback, delay)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const beforeLength = DB.length;
      const afterLength = DB.push(user); //

      if (beforeLength < afterLength) {
        resolve(user);
        console.log(`${user.name}의 정보가 저장되었습니다.`);
      }
      else {
        reject(new Error("정보가 저장되지 않았습니다."));
      }
    }, 3000);
  });
};

//sendEmail(user) : 이메일 주소를 받아서 콘솔에 전송 메시지 출력
function sendEmail(user) {
  // 사용자 정보를 Promise이행하고 사용자 정보를 resolve 함수에 전달
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user.email) {
        reject(new Error("이메일 정보가 유효하지 않습니다."));
      }
      else {
        resolve(user.email);
      }
    }, 5000);
  });
}

//getResult(user) : 사용자 이름 기반으로 메시지 만들기
function getResult(user){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`방문자 : ${user.name}`);
    }, 500);
  });
}

//register(user) : 위 3개 함수를 Promise.all()로 묶어 실행

function register(user){
  const resultAsync = Promise.all([ // Promise.all 배열 안에 들어있는 순서대로 정리가 된다.
    saveDB(user),
    sendEmail(user),
    getResult(user),
  ])
  resultAsync.then(console.log);
}

//register() 실행
register({
  name:"홍길동",
  email:"hong@gamil.com"
});