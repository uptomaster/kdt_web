const boxClick = document.querySelector("#click");
const boxOver = document.querySelector("#over");
const boxOut = document.querySelector("#out");
const boxOverOut = document.querySelector("#over-out");

console.log(boxClick);
console.log(boxOver);
console.log(boxOut);
console.log(boxOverOut);

function changeBgGreen(){
  this.setAttribute("style", "background-color:green");
  console.log(this);
  // this는 현재 이벤트가 걸린 자기 자신을 의미한다.
}

boxClick.addEventListener("click", changeBgGreen);

boxOver.addEventListener("mouseover", changeBgGreen);

boxOver.addEventListener("mouseover", function(){
  boxOver.setAttribute("style","background-color:lightblue");
});

function changeBgPink(){
  this.setAttribute("style", "background-color:pink");
  console.log(this); // this는 현재 이벤트가 걸린 자기자신을 의미한다.
}

boxOut.addEventListener("mouseout", changeBgPink);

boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgPink);