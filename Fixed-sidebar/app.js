const togglerBtn = document.querySelector(".toggler-btn");

togglerBtn.addEventListener("click", function () {
  const parent = this.parentElement;

  if (this.getAttribute("expend") === "true") {
    this.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
    parent.style.width = "200px";
    parent.nextElementSibling.style.marginLeft = "200px";
    this.setAttribute("expend", "false");
  } else {
    parent.style.width = "100px";
    parent.nextElementSibling.style.marginLeft = "100px";
    this.innerHTML = `<i class="fa fa-th-list" aria-hidden="true"></i>`;
    this.setAttribute("expend", "true");
  }

  if (parent.style.width !== "100px") {
    this.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  } else {
    this.innerHTML = `<i class="fa fa-th-list" aria-hidden="true"></i>`;
  }
});
