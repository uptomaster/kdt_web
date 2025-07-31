// 8번 : fetch - async/await 활용

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response.status);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error(`응답없음`);
    }
    const users = await response.json();
    if (!users) {
      throw new Error(`결과없음`);
    }
    const result = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    console.log(result);
  } catch (error) {
    console.error("요청실패 : ", error.message)
  }

};


// 함수호출
fetchUsers();