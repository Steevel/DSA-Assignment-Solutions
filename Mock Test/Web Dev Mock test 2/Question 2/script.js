document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("input");
  var submitBtn = document.getElementById("submit");
  var textContainer = document.getElementById("text-container");

  submitBtn.addEventListener("click", function () {
    var text = input.value.trim();
    if (text !== "") {
      var newText = document.createElement("p");
      newText.textContent = text;
      textContainer.appendChild(newText);
      input.value = "";
    }
  });
});
