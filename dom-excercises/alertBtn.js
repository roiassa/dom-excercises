const $myInput = document.querySelector(".myInput");
const $button = document.querySelector(".submit");

$button.onclick = function() {
    alert($myInput.value); 
};