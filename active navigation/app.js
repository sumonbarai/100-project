const mainMenu = document.getElementById("main-menu");

mainMenu.addEventListener("click", function (e) {
  for (let i = 0; i < mainMenu.children.length; i++) {
    const element = mainMenu.children[i];
    element.classList.remove("active");
  }

  e.target.classList.add("active");
});
