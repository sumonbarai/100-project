const modalContainer = document.getElementById("modal-container");

window.onclick = function (event) {
  if (event.target.id == "modal-container") {
    closeModal();
  }
};

function openModal() {
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
}
function closeModal() {
  modalContainer.style.opacity = "0";
  modalContainer.style.visibility = "hidden";
}
