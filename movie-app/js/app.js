// dom element select
const inputText = document.getElementById("inputText");
const parentCard = document.getElementById("parentCard");
const topToBtn = document.getElementById("topToBtn");

// api list
const apiURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const searchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const imgPATH = "https://image.tmdb.org/t/p/w1280";

// event listener
inputText.addEventListener("submit", function (e) {
  e.preventDefault();
  const movieName = this[0].value;
  if (movieName === "") {
    return dataFatch(apiURL);
  }
  dataFatch(searchAPI + movieName);
});

window.addEventListener("load", () => dataFatch(apiURL));
window.addEventListener("scroll", scrolling);
topToBtn.addEventListener("click", scrollingToTop);

// necessary functionality
async function dataFatch(url) {
  const data = await fetch(url);
  const movies = await data.json();
  displayFn(movies.results);
}

function displayFn(movies) {
  if (movies.length === 0) {
    return (parentCard.innerHTML = `<h3 class="padding">No Result Found</h3>`);
  }
  let allCardItem = "";

  for (const movie of movies) {
    const { poster_path, overview, original_title, vote_average } = movie;

    const html = `<div class="card">
    <div class="card-img">
      <img src="${imgPATH + poster_path}" alt="" />
    </div>
    <div class="card-info">
      <div class="card-title">${original_title}</div>
      <div class="card-rating">Rating : <span>${vote_average}</span></div>
      <p class="card-details">${overview}</p>
    </div>
  </div>`;
    allCardItem += html;
  }
  parentCard.innerHTML = allCardItem;
}

function scrollingToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrolling() {
  const px = window.pageYOffset;
  if (px > 200) {
    topToBtn.style.opacity = 1;
    topToBtn.style.visibility = "visible";
  } else {
    topToBtn.style.opacity = 0;
    topToBtn.style.visibility = "hidden";
  }
}
