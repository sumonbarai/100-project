const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const allChild = this.children;
  for (let i = 0; i < allChild.length; i++) {
    const child = allChild[i];
    child.lastElementChild.style.maxHeight = 0;
  }

  const parent = e.target.parentElement;

  if (parent?.classList.contains("accordion-item")) {
    parent.lastElementChild.style.maxHeight =
      parent.lastElementChild.scrollHeight + "px";
  }
});
