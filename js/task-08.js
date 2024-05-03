const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value;
  });
  let isFormValid = true;
  loginForm.querySelectorAll("input").forEach((input) => {
    if (input.value.trim() === "") {
      isFormValid = false;
    }
  });
  if (!isFormValid) {
    alert("All fields should be filled!");
    return;
  }
  console.log(formValues);
  loginForm.reset();
});
