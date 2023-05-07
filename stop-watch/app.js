// dom elements
const hour = document.getElementById("hour");
const mins = document.getElementById("mins");
const sec = document.getElementById("sec");
const millsec = document.getElementById("millsec");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// global variable
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timerId;

// eventListener
startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
resetBtn.addEventListener("click", resetTime);

// function declaration
function displayTime() {
  ms = ms + 10;
  if (ms === 1000) {
    s++;
    ms = 0;
    if (s === 60) {
      m++;
      s = 0;
      if (m === 60) {
        h++;
        m = 0;
      }
    }
  }

  const millisecond = ms < 100 ? "0" + ms : ms;
  const second = s < 10 ? "0" + s : s;
  const minutes = m < 10 ? "0" + m : m;
  const hours = h < 10 ? "0" + h : h;

  // dom update
  millsec.innerHTML = millisecond;
  sec.innerHTML = second;
  mins.innerHTML = minutes;
  hour.innerHTML = hours;
}
function startTime() {
  timerId = setInterval(displayTime, 10);
  startBtn.setAttribute("disabled", "true");
}

function pauseTime() {
  if (timerId) {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
  }
}
function resetTime() {
  clearInterval(timerId);
  h = 0;
  m = 0;
  s = 0;
  ms = 0;

  millsec.innerHTML = "000";
  sec.innerHTML = "00";
  mins.innerHTML = "00";
  hour.innerHTML = "00";
  startBtn.removeAttribute("disabled");
}
