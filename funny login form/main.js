// dom element
const inputField = document.getElementById("password");
const btn = document.getElementById("btn");

const defaultPassword = 12345;
let passwordMatch = false;
let moving = true;

// eventListener
inputField.addEventListener("input", passwordUpdate);
btn.addEventListener("mouseenter", mouseEnterFn);
btn.addEventListener("click", () => {
  alert("You are write correct password");
});

//all function
function passwordUpdate() {
  const userPassword = this.value;
  if (userPassword == defaultPassword) {
    passwordMatch = true;
  } else {
    passwordMatch = false;
  }
}

function mouseEnterFn() {
  if (passwordMatch) {
    btn.classList.add(`margin-right`);
    btn.classList.remove(`margin-left`);
  } else if (moving) {
    btn.classList.add(`margin-right`);
    btn.classList.remove(`margin-left`);
    moving = !moving;
  } else if (!moving) {
    btn.classList.add(`margin-left`);
    btn.classList.remove(`margin-right`);
    moving = !moving;
  }
}
