window.onscroll = scrollFunction;
const navbar = document.getElementById("navbar");

function scrollFunction() {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop <= 50) {
    navbar.style.paddingTop = "40px";
    navbar.style.paddingBottom = "40px";
  } else {
    navbar.style.paddingTop = "0px";
    navbar.style.paddingBottom = "0px";
  }
}
