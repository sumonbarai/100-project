const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const bangla = document.getElementById("bangla");
const english = document.getElementById("english");
const switchBtn = document.querySelector("#switch");

// clock function
let mode = true;
let timer;
const showTime = function () {
  if (mode) {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-bd");
    const date = now.toDateString();
    timeElement.innerText = timeString;
    dateElement.innerText = date;
  } else {
    const now = new Date();
    const timeString = now.toLocaleTimeString("bn-bd");
    const time = timeString.slice(0, -2);
    const period = timeString.slice(-2) === "PM" ? "অপরাহ্ণ" : "পূর্বাহ্ণ";
    const date = now.toLocaleDateString("bn-bd");
    timeElement.innerText = time + period;
    dateElement.innerText = "তারিখ:-" + date;
  }
};
// clock switch mode
switchBtn.addEventListener("click", () => {
  if (mode) {
    mode = false;
    showTime();
    banglaAudio();
  } else {
    mode = true;
    showTime();
    englishAudio();
  }
});
timer = setInterval(() => {
  showTime();
}, 1000);
// speak function
function banglaAudio() {
  bangla.play();
}
function englishAudio() {
  english.play();
}
