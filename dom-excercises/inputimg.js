const $myInput = document.querySelector(".myInput");
const $button = document.querySelector(".submit");
const body = document.querySelector(".body");


$button.addEventListener("click", function (event) {
    const myImg = document.createElement('img');
    myImg.setAttribute("src", $myInput.value);
    body.appendChild(myImg);
  })