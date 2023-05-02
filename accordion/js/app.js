// dom element
const accordion = document.querySelectorAll(".accordion");

accordion.forEach(function (item) {
  item.addEventListener("click", () => {
    accordion.forEach(function (i) {
      if (i === item) {
        i.querySelector(".accordion-details").classList.toggle("active");
        i.querySelector(".accordion-title").style.color = "blue";
        i.querySelector(".fa-angle-right").style.transform = "rotate(90deg)";
      } else {
        i.querySelector(".accordion-details").classList.remove("active");
        i.querySelector(".accordion-title").style.color = "";
        i.querySelector(".fa-angle-right").style.transform = "rotate(0deg)";
      }
    });
  });
});
