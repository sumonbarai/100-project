const btn1 = document.getElementById("btn-1");
btn1.addEventListener("click", function () {
  this.classList.add("active");
  const input1 = document.getElementById("input-1");
  input1.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(input1.value);

  setTimeout(() => {
    this.classList.remove("active");
  }, 2000);
});

// second btn
const btn2 = document.getElementById("btn-2");
btn2.addEventListener("click", function () {
  const icon = document.getElementById("icon");
  icon.className = "fa-solid fa-check";
  icon.style.fontSize = "20px";
  const input2 = document.getElementById("input-2");
  input2.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(input2.value);

  setTimeout(() => {
    icon.className = "fa-regular fa-clone";
    icon.style.fontSize = "16px";
  }, 2000);
});
