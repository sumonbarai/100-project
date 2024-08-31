const overlayContent = document.querySelector(".overlay-content");
const slideRightBtn = document.getElementById("slideRightBtn");
const slideDownBtn = document.getElementById("slideDownBtn");
const close = document.getElementById("close");

function overlayFn(value) {
  overlayContent.style.transitionProperty = value;
  overlayContent.style.width = "100%";
  overlayContent.style.height = "100%";
}

close.addEventListener("click", function () {
  const computedStyle = window.getComputedStyle(overlayContent);

  if (computedStyle.transitionProperty === "width") {
    overlayContent.style.width = "0%";
  } else {
    overlayContent.style.height = "0%";
  }

  setTimeout(() => {
    overlayContent.removeAttribute("style");
  }, 600);
});
