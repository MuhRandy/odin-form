const pwdInput = document.querySelector("#pwd");
const pwdCInput = document.querySelector("#confirm-pwd");

pwdInput.addEventListener("input", confirmPassword);

pwdCInput.addEventListener("input", confirmPassword);

function confirmPassword() {
  pwdInput.value === pwdCInput.value
    ? pwdInput.setCustomValidity("")
    : pwdInput.setCustomValidity("Passwords do not match");
}
