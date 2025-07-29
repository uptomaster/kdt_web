//6번 : 콜백지옥(callback hell)
//콜백함수가 여러 단계로 중첩되어 코드가 오른쪽으로 계속 들여쓰기되고 복잡해지는 구조를 의미함

// 사용자의 데이터를 가져오는 함수
function getUser(userId, callback){
  // 1초후에 사용자 데이터를 가져오겠다는 의미.
  setTimeout(() => {
    console.log(`사용자 ${userId}의 데이터 가져오기 완료`);
    // 출력되고 콜백함수가 실행됨 : 사용자 정보를 객체로 전달해준다.
    callback({id : userId, name : "짱구"});
  }, 1000);
}

// 게시물 데이터를 가져오는 함수
function getPosts(userId, callback){
  setTimeout(()=>{
    console.log(`사용자 ${userId}의 게시물 가져오기 완료`);
    // 콜백함수가 실행 : 게시물 배열 전달
    callback(["포스트1", "포스트2", "포스트3"]);
  }, 1000);
}

// 댓글 데잉터를 가져오는 함수
function getComments(post, callback){
  setTimeout(() => {
    console.log(`${post}의 댓글가져오기 완료`);
    // 콜백 함수가 실행 : 댓글 배열 전달
    callback(["댓글1", "댓글2", "댓글3", "댓글4"]);
  }, 1000);
}

// 콜백지옥 시작
getUser(1, (user) => {
  // 사용자 정보가 준비된 후 실행됨.
  
  console.log(`사용자이름 : ${user.name}`); // 콜백함수의 매개변수로 객체를 전달, 객체명.property key에 해당하는 값을 가져옴.
  // 사용자 게시물을 사용자 id를 기준으로 가져온다.

  getPosts(user.id, (posts) =>{
    // 게시물이 준비된 후 실행됨.
    console.log(`게시물 : ${posts}`);

    // 첫번째 게시물에 대한 댓글 가져오기
    getComments(posts[0], (comments) => {
      // 댓글이 준비된 후 실행됨.
      console.log(`댓글 : ${comments}`);
      // 모든 작업이 끝난 후에 실행됨.
      console.log("작업완료");
    });
  });
});