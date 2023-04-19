// dom element
const counterButton = document.getElementById("counter-all-button");
const result = document.getElementById("result");

// after one second ui loaded animation is remove
setTimeout(() => {
  result.classList.remove("bounceIn");
}, 1000);

// addEventListener
counterButton.addEventListener("click", function (e) {
  // increaseByOne
  if (e.target.name === "increaseByOne") {
    const counter = document.getElementById("counter");
    counter.innerText = Number(counter.innerText) + 1;
    result.classList.add("bounceIn");
    setTimeout(() => {
      result.classList.remove("bounceIn");
    }, 600);
  }
  // DecreaseByOne
  if (e.target.name === "DecreaseByOne") {
    const counter = document.getElementById("counter");
    counter.innerText = Number(counter.innerText) - 1;
    result.classList.add("bounceIn");
    setTimeout(() => {
      result.classList.remove("bounceIn");
    }, 600);
  }
  // increaseByTen
  if (e.target.name === "increaseByTen") {
    const counter = document.getElementById("counter");
    counter.innerText = Number(counter.innerText) + 10;
    result.classList.add("bounceIn");
    setTimeout(() => {
      result.classList.remove("bounceIn");
    }, 600);
  }
  // DecreaseByTen
  if (e.target.name === "DecreaseByTen") {
    const counter = document.getElementById("counter");
    counter.innerText = Number(counter.innerText) - 10;
    result.classList.add("bounceIn");
    setTimeout(() => {
      result.classList.remove("bounceIn");
    }, 600);
  }

  // increaseByRandomNumber
  if (e.target.name === "increaseByRandomNumber") {
    const counter = document.getElementById("counter");
    const randomNumber = Math.floor(Math.random() * 100);
    counter.innerText = Number(counter.innerText) + randomNumber;
    result.classList.add("bounceIn");
    setTimeout(() => {
      result.classList.remove("bounceIn");
    }, 600);
  }
  // DecreaseByRandomNumber
  if (e.target.name === "DecreaseByRandomNumber") {
    const counter = document.getElementById("counter");
    const randomNumber = Math.floor(Math.random() * 100);
    counter.innerText = Number(counter.innerText) - randomNumber;
    result.classList.add("bounceIn");
    setTimeout(() => {
      result.classList.remove("bounceIn");
    }, 600);
  }

  // reset
  if (e.target.name === "reset") {
    const counter = document.getElementById("counter");
    counter.innerText = 0;
    result.classList.add("bounceIn");
    setTimeout(() => {
      result.classList.remove("bounceIn");
    }, 600);
  }

  e.target.classList.add("bounceIn");
  setTimeout(() => {
    e.target.classList.remove("bounceIn");
  }, 600);
});
