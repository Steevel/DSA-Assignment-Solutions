document.addEventListener("DOMContentLoaded", function () {
  var openModalBtn = document.getElementById("open-modal");
  var modal = document.getElementById("modal");
  var closeModalBtn = document.querySelector(".close");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});
