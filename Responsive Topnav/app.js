function toggler() {
  const navItems = document.getElementById("nav-items");
  const isTrue = navItems.getAttribute("show");
  if (isTrue === "true") {
    navItems.setAttribute("show", "false");

    navItems.style.display = "none";
  } else {
    navItems.setAttribute("show", "true");
    navItems.style.display = "block";
  }
}

function screenResize() {
  const width = window.innerWidth;
  if (width > 768) {
    const navItems = document.getElementById("nav-items");
    navItems.style.display = "block";
  }
}
