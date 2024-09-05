const dropDownBtn = document.querySelectorAll(".dropDown-btn");

dropDownBtn.forEach(function (element) {
  element.addEventListener("click", function () {
    const iconElement = this.children[1];
    const dropDownContent = this.nextElementSibling;
    const height = window
      .getComputedStyle(dropDownContent)
      .getPropertyValue("height");
    if (height === "0px") {
      iconElement.classList.replace("fa-caret-right", "fa-caret-down");
      dropDownContent.style.height = dropDownContent.scrollHeight + "px";
    } else {
      iconElement.classList.replace("fa-caret-down", "fa-caret-right");
      dropDownContent.style.height = 0 + "px";
    }
  });
});
