const buttonclick = document.getElementById("add-button")
// input에서 값 가져오기

buttonclick.addEventListener('click', ()=>{
  let value = prompt("추가할 할일을 입력하세요:");

  const unorderlist = document.getElementById('task-list');
  const list = document.createElement("li"); // 리스트 요소를 만듦

  // list.style.backgroundColor = "black";
  // addlist.style.backgroundColor = "black";
  list.style.borderBottom = "0.5px solid black";

  list.style.padding = "3px";
  
  let text3 = "<div>";
  text3 += "<input type='checkbox'>";
  text3 += "<a>";
  text3 += value;
  text3 += "</a>";
  text3 += "<button>삭제</button>"
  text3 += "</div>";



  list.style.display="block";

  list.innerHTML = text3;
  unorderlist.appendChild(list);
});
