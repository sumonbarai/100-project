const sliderItems = document.querySelectorAll(".slider-item");
let count = 0;
let timer;

sliderItems.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

function sliderFn() {
  sliderItems.forEach((item) => {
    item.style.transform = `translateX(-${count * 100}%)`;
  });
  timer = timerInterval();
}

function nextSlide() {
  clearInterval(timer);
  if (count > sliderItems.length - 2) {
    count = 0;
    return sliderFn();
  }
  count++;
  sliderFn();
}

function prevSlide() {
  if (count < 1) {
    count = sliderItems.length - 1;
    return sliderFn();
  }
  count--;
  sliderFn();
}

function timerInterval() {
  return setInterval(() => {
    nextSlide();
  }, 5000);
}

timer = timerInterval();
