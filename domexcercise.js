const textInner1 = document.querySelector(".text-inner1");
const $myInput = document.querySelector(".myInput");
const $button = document.querySelector(".submit");
const $remove = document.querySelector(".remove");
const body = document.querySelector(".body");
const colorBtn = document.querySelectorAll(".colorBtn")

$button.onclick = function() {
  alert($myInput.value); 
};

window.addEventListener("mousemove", function(event) {
  console.log('x:' + ' ' + event.x + ' ' + 'y:' + ' ' + event.y);
})

$button.addEventListener("click", function (event) {
  const myImg = document.createElement('img');
  myImg.setAttribute("src", $myInput.value);
  body.appendChild(myImg);
})


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);
$remove.addEventListener("click", function () {
  myArray.pop();
  console.log(myArray);
})

colorBtn.forEach(function (element) {
  element.addEventListener("click", function() {
    if (element.textContent === "Blue") {
      body.style.backgroundColor = "blue";
    } else if (element.textContent === "Red") {
      body.style.backgroundColor = "red";
    } else if (element.textContent === "Green") {
      body.style.backgroundColor = "green";
    } else {
      body.style.backgroundColor = "black"
    }
  });
});

// // const $divs = document.querySelectorAll("div.check");
// const $text3 = document.querySelector(".text3");
// console.log($text3.childNodes);
// $text3.classList.add("check")
// $text3.classList.toggle("check");
// textInner1.parentElement.removeChild(textInner1);


// const colors = ["blue", "green"];
// $divs.forEach(function(el, index) {
//     console.log(el, index);
//     el.style.color = colors[index];
//   });