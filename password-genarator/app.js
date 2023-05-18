// dom element
const display = document.getElementById("display");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");

// event listener
window.addEventListener("load", () => {
  passwordTextUpdater("uppercase");
});
uppercase.addEventListener("click", () => {
  passwordTextUpdater("uppercase");
});
lowercase.addEventListener("click", () => {
  passwordTextUpdater("lowercase");
});
number.addEventListener("click", () => {
  passwordTextUpdater("number");
});
symbol.addEventListener("click", () => {
  passwordTextUpdater("symbol");
});
btn.addEventListener("click", passwordGenerator);
copyBtn.addEventListener("click", copyToClipboard);

const PasswordData = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%&*_-!~",
};

let passwordText = {};

// function
function passwordTextUpdater(text) {
  const domElement = document.getElementById(text);

  const checked = domElement.getAttribute("checked");
  if (checked) {
    domElement.removeAttribute("checked");
    delete passwordText[text];
  } else {
    domElement.setAttribute("checked", "checked");
    passwordText[text] = PasswordData[text];
  }
}
// password maker
function passwordGenerator() {
  const arr = Object.values(passwordText);
  if (arr.length === 0) {
    return (display.value = "");
  }
  const string = arr.join("");
  let password = "";
  const passwordLength = document.getElementById("passwordLength").value;
  const min = 0,
    max = string.length - 1;
  for (let i = 0; Number(passwordLength) !== password.length; i++) {
    const index = randomIndex(min, max);

    password += string[index];
  }
  display.value = password;
}

// random index
function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// copyToClipboard
function copyToClipboard() {
  icon.className = "fa-solid fa-check";
  icon.style.fontSize = "18px";
  // Copy the text inside the text field
  navigator.clipboard.writeText(display.value);

  setTimeout(() => {
    icon.className = "fa-regular fa-clone";
    icon.style.fontSize = "18px";
  }, 1500);
}
