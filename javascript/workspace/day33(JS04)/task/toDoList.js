const buttonclick = document.getElementById("add-button")
// input에서 값 가져오기
let count = 0;
buttonclick.addEventListener('click', () => {
  let value = prompt("추가할 할일을 입력하세요:");
  count++;
  const unorderlist = document.getElementById('task-list');
  const list = document.createElement("li"); // 리스트 요소를 만듦

  // list.style.backgroundColor = "black";
  // addlist.style.backgroundColor = "black";
  list.style.borderBottom = "0.5px solid black";

  list.style.padding = "3px";

  let text3 = "<div>";
  text3 += "<input type='checkbox' class='check-button'>";
  text3 += "<a>";
  text3 += value;
  text3 += "</a>";
  text3 += "<button id='delete-button' onclick='delist()'>삭제</button>"
  text3 += "</div>";
  list.style.display = "block";

  list.innerHTML = text3;
  unorderlist.appendChild(list);
});


const checkbox = document.querySelectorAll('.check-button');
console.log(checkbox);

NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.filter = Array.prototype.filter;
checkbox.forEach((checkbox) => {
  checkbox.addEventListener('click', (e)=>{
    if(e.target.checked){
      result.removeChild(target);
    }
  })
})


function changeGreen() {
  this.setAttribute("style", "background-color:green");
}

checkbox.addEventListener('click', changeGreen);

function delist() {
  const target = confirm("삭제");
  checkboxOver.removeChild(target);
};
