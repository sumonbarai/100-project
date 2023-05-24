const box = document.getElementById("box");

let marginLeft = 0;
let marginUp = 0;

window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowRight":
      marginLeft += 5;
      break;
    case "ArrowLeft":
      marginLeft -= 5;
      break;
    case "ArrowUp":
      marginUp -= 5;
      break;
    case "ArrowDown":
      marginUp += 5;
      break;

    default:
      break;
  }

  box.style.marginLeft = marginLeft + "px";
  box.style.marginTop = marginUp + "px";
});
