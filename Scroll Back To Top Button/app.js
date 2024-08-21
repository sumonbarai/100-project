const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = scrollFunction;
scrollToTopBtn.onclick = scrollToTop;
function scrollFunction() {
  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 40) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
