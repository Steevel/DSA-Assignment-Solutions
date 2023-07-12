function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const ageError = document.getElementById("ageError");
  const genderError = document.getElementById("genderError");
  const dateError = document.getElementById("dateError");
  const colorError = document.getElementById("colorError");

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  ageError.textContent = "";
  genderError.textContent = "";
  dateError.textContent = "";
  colorError.textContent = "";

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    nameError.textContent = "Please enter a valid name";
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    return false;
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Please enter a valid phone number";
    return false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    return false;
  }

  if (age < 18) {
    ageError.textContent = "You must be at least 18 years old";
    return false;
  }

  if (gender === "") {
    genderError.textContent = "Please select a gender";
    return false;
  }

  // If all validations pass, you can submit the form here
  alert("Form submitted successfully!");
  document.getElementById("myForm").reset();
}
