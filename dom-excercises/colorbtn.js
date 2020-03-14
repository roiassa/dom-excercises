const colorBtn = document.querySelectorAll(".colorBtn")


colorBtn.forEach(function (element) {
  element.addEventListener("click", function() {
    body.style.backgroundColor = element.textContent;
  });
});