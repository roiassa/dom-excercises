const body = document.querySelector(".body");
const colorBtn = document.querySelectorAll(".colorBtn")

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