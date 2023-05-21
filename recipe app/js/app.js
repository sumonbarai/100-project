// dom element selected
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const foodDisplayContainer = document.getElementById("foodDisplayContainer");
const topToBtn = document.getElementById("topToBtn");

// event licenser

window.addEventListener("load", getUserText);
searchBtn.addEventListener("click", getUserText);
topToBtn.addEventListener("click", scrollingToTop);
window.addEventListener("scroll", scrolling);

// functionality
function getUserText() {
  document.getElementById("spinner").classList.remove("hidden");
  const foodName = searchInput.value;
  // api call
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayFood(data.meals);
    })
    .catch((err) => console.log(err));
}

// display food
function displayFood(cards) {
  if (cards === null) {
    document.getElementById("spinner").classList.add("hidden");
    foodDisplayContainer.innerHTML = `No Recipe Found`;
    foodDisplayContainer.classList.add("min-h-[384px]");

    return;
  }
  // foodDisplayContainer
  let childHtml = "";

  for (const cardInfo of cards) {
    const { idMeal, strMealThumb, strInstructions } = cardInfo;
    const html = `<div class="card card-compact bg-base-100 shadow-xl">
    <figure>
      <img class="w-full h-60 object-cover" src="${strMealThumb}" alt="images" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${cardInfo.strMeal}</h2>
      <p>${strInstructions.slice(0, 200)} ...</p>
      <div class="card-actions justify-end">
      <label onClick="modal(${idMeal})" for="my-modal-6" class="btn btn-warning text-white">View Details</label>
      </div>
    </div>
    </div>`;
    childHtml = childHtml + html;
  }
  document.getElementById("spinner").classList.add("hidden");
  foodDisplayContainer.innerHTML = childHtml;
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

function modal(id) {
  // inital clean the modal box
  document.getElementById("modal-info").innerHTML = "";
  if (id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { strMealThumb, strMeal, strInstructions } = data.meals[0];

        const html = `<div class="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img class="w-full h-96 object-cover" src="${strMealThumb}" alt="images" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${strMeal}</h2>
          <p>${strInstructions}</p>
        </div>
        </div>`;
        document.getElementById("modal-info").innerHTML = html;
      });
  }
}
