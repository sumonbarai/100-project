// dom element
const inputField = document.querySelector(".input-field");
const inputText = document.getElementById("inputText");
const character = document.getElementById("character");
const errorMessage = document.getElementById("errorMessage");
const wordElement = document.getElementById("word");
const wordLeft = document.getElementById("word-left");
const readingTime = document.getElementById("reading-time");
let wordLimit = 100;
let words = 0;
let UserInputText;

inputText.focus();
// add eventListener
inputText.addEventListener("input", function () {
  const userText = this.value;
  characterFn(userText);
  wordFn(userText);
  wordLimitFn(words);
  readingTimeFn(words);

  if (words >= wordLimit) {
    // user text assign before input field disabled
    UserInputText = userText;
    this.setAttribute("disabled", "true");
    this.style.border = "2px solid #e74c3c";
    errorMessage.style.display = "block";
  }
});

// function definition
function characterFn(userText) {
  if (userText) {
    character.innerHTML = `Character : ${userText.length}`;
  } else {
    character.innerHTML = `Character : 0`;
  }
}

function wordFn(userText) {
  if (userText.trim() && userText !== " ") {
    words = userText.match(/\S+/g)?.length;
    wordElement.innerHTML = `Word : ${words}`;
  } else {
    words = 0;
    wordElement.innerHTML = `Word : 0`;
  }
}

function wordLimitFn(words) {
  wordLeft.innerHTML = `Word-Left : ${wordLimit - words}`;
}

function readingTimeFn(words) {
  if (words) {
    let sec = Math.floor((60 / 225) * words);
    if (sec > 59) {
      const mins = Math.floor(sec / 60);
      sec = sec - mins;
      readingTime.innerHTML = `Reading-Time : ${mins} Min ${sec} Sec`;
    } else {
      readingTime.innerHTML = `Reading-Time : ${sec} Sec`;
    }
  } else {
    readingTime.innerHTML = "Reading-Time : 0 Sec";
  }
}

inputField.addEventListener("dblclick", function (e) {
  this.firstElementChild.removeAttribute("disabled");
  this.firstElementChild.style.border = "";
  this.firstElementChild.value = UserInputText.slice(0, -1);
  errorMessage.style.display = "none";
  e.stopPropagation();
});

// if (words) {
//   let secs = Math.floor((words.length * 60) / 225);
//   if (secs > 59) {
//     let mins = Math.floor(secs / 60);
//     secs = secs - mins * 60;
//     readingTime.innerHTML = mins + " Mins" + secs + " Secs";
//   } else {
//     readingTime.innerHTML = secs + " Secs";
//   }
// } else {
//   readingTime.innerHTML = "0 Secs";
// }
