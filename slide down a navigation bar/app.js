window.onscroll = scrollFunction;

function scrollFunction() {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop <= 0) {
    document.getElementById("navbar").style.top = "-50px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}


