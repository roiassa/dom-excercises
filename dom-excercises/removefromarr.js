const $remove = document.querySelector(".remove");

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);
$remove.addEventListener("click", function () {
  myArray.pop();
  console.log(myArray);
})