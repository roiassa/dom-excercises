const $myInput = document.querySelector(".myInput");
const $button = document.querySelector(".submit");


$button.addEventListener("click", function (event) {
    const myImg = document.createElement('img');
    myImg.setAttribute("src", $myInput.value);
    body.appendChild(myImg);
  })