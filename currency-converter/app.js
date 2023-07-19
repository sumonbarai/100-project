// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
const apiURL = "https://v6.exchangerate-api.com/v6/";
const key = "093352694b431c8342cff984";

const countries = [
  {
    name: "AED",
    flagURL: "https://www.worldometers.info/img/flags/ae-flag.gif",
  },
  {
    name: "EUR",
    flagURL: "https://www.worldometers.info/img/flags/au-flag.gif",
  },
  {
    name: "GBP",
    flagURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
  },
  {
    name: "USD",
    flagURL: "https://www.worldometers.info/img/flags/us-flag.gif",
  },
];

// dom elements
const currencyFrom = document.getElementById("currencyFrom");
const currencyTo = document.getElementById("currencyTo");

// function definition

function getExchangeRate() {
  const currencyFromValue = currencyFrom.value;
  const currencyToValue = currencyTo.value;
  console.log(currencyFromValue, currencyToValue);
}

// event handler
currencyFrom.addEventListener("change", getExchangeRate);
currencyTo.addEventListener("change", getExchangeRate);
