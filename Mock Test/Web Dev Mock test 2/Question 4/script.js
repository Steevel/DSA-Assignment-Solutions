// Toggle the hamburger menu on click
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
