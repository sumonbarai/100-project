const debounce = function (fn, delay) {
  let timeId;
  return () => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      fn();
    }, delay);
  };
};

document.getElementById("input-text").addEventListener(
  "input",
  debounce(() => {
    const inputText = document.getElementById("input-text").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=28fd15358cdecbc1a1dfef367e71acef`;
    console.log(inputText);
    // get fetch request
    fetch(url)
      .then((res) => res.json())
      .then((result) => validCityName(result))
      .catch((err) => console.log(err.message));
  }, 1000)
);

const validCityName = (result) => {
  const { name: cityName, main, weather } = result;
  if (result.coord) {
    document.getElementById("city-name").innerText = cityName;
    document.getElementById("date").innerText = todayDate();
    document.getElementById("temperature").innerText = main.temp;
    document.getElementById("celcius").innerHTML = "&#8451";
    document.getElementById("status").innerText = weather[0].main;
  } else {
    document.getElementById("city-name").innerText = "Invalid city Name";
    document.getElementById("date").innerText = "";
    document.getElementById("temperature").innerText = "";
    document.getElementById("celcius").innerText = "";
    document.getElementById("status").innerText = "";
  }
};

// date function
const todayDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  return `${day}, ${date} ${month},${year}`;
};
