// dom element
const btn = document.querySelector(".btn");
const display = document.getElementById("display");

let output = "";
const keyPress = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  ".",
  "+",
  "-",
  "%",
  "÷",
  "×",
];
// addEvent Listener
btn.addEventListener("click", (e) => {
  const input = e.target.innerText;
  if (keyPress.includes(input)) {
    output += input;
    display.value = output;
  }

  // for = button
  if (input === "=") {
    output = output.replaceAll("÷", "/");
    output = output.replaceAll("%", "/100");
    output = output.replaceAll("×", "*");
    let result = eval(output);
    if (!result) {
      output = "";
      display.value = 0;
      return;
    }
    output = "";
    // checking number is integer or float
    if (!Number.isInteger(result)) {
      return (display.value = result.toFixed(2));
    }
    display.value = result;
  }

  // for AC button
  if (input === "AC") {
    output = "";
    display.value = 0;
  }

  // for CE button
  if (input === "CE") {
    output = output.slice(0, -1);
    display.value = output;
  }
});
