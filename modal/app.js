// dom element
const modalBtn = document.getElementById("modal-btn");
const modalClose = document.getElementById("modal-close");
const modalContainer = document.querySelector(".modal-container");
const formSubmit = document.getElementById("form-submit");

// addEventListener
modalBtn.addEventListener("click", () => {
  modalContainer.classList.remove("model-hide");
  modalContainer.classList.add("model-show");
});

modalClose.addEventListener("click", () => {
  modalContainer.classList.remove("model-show");
  modalContainer.classList.add("model-hide");
});

formSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});
