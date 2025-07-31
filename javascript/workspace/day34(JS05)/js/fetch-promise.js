// 7번 : fetch - then()체이닝 활용

fetch('https://jsonplaceholder.typicode.com/users') // 반환값 : Promise <Response>객체 (응답객체)
  .then((response) => {
    console.log(response.ok); // true : HTTP상태코드가 200 ~ 299일때 true반환. 아니라면 false로 반환
    console.log(response.status); // 200은 정상적인 연결 성공(상태코드)
    if(!response){ // 강제 예외 발생
      throw new Error(`response : ${response.status}`);
    }
    return response.json();
  }).then((post)=>{
    if(!post){
      throw new Error("결과 없음");
    }
    return post.map((user)=>({
      id:user.id,
      name : user.name,
      email : user.email,
    }));
  }).then(console.log).catch((error)=>{
    console.log("요청 실패 : ", error.message);
  });

  // 실행 흐름 정리 (then 체이닝 코드)
  // fetch()를 이용해서 서버에 HTTP 요청 전송
  // 첫번째 .then() 응답상태 확인 + JSON 파싱(response.json())
  // 두번째 .then() 에서 데이터 가공(map()으로 필요한 필드만 추출)
  // 세번째 .then() 에서 최종 데이터를 콘솔에 출력
  // 에러발생시 .catch()에서 에러 메시지 출력.