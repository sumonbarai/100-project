const obj = { name: "sumon", age: 30 };

// dom element select
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const foodDisplayContainer = document.getElementById("foodDisplayContainer");
const modalInfo = document.getElementById("modal-info");
const topToBtn = document.getElementById("topToBtn");

// event listener
window.addEventListener("load", () => {
  getData();
});
window.addEventListener("scroll", scrolling);
searchBtn.addEventListener("click", getData);
topToBtn.addEventListener("click", toToScroll);

// functionality

function getData() {
  document.getElementById("spinner").classList.remove("hidden");
  const foodName = searchInput.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("spinner").classList.add("hidden");
      displayCards(data.meals);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayCards(data) {
  if (!data) {
    return (foodDisplayContainer.innerHTML = " <h2>No data found</h2>");
  }

  let childHtml = "";
  for (const item of data) {
    const { strMealThumb, strMeal, strInstructions, idMeal } = item;

    let html = ` <div class="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  class="w-full h-60 object-cover"
                  src=${strMealThumb}
                  alt="images"
                />
              </figure>
            <div class="card-body">
              <h2 class="card-title">${strMeal}</h2>
              <p>
                ${strInstructions.slice(0, 100)}
              </p>
              <div class="card-actions justify-end" onclick="modalFn(${idMeal})"}>
                <label for="my-modal-6" class="btn btn-warning text-white"
                  >View Details</label
                >
              </div>
            </div>
          </div> `;

    childHtml = childHtml + html;
  }

  foodDisplayContainer.innerHTML = childHtml;
}

function modalFn(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      modalInfo.innerHTML = "";
      let html = `<div class="card card-compact bg-base-100 shadow-xl">
                    <figure>
                      <img
                        class="w-full h-96 object-cover"
                        src=${data.meals[0].strMealThumb}
                        alt="images"
                      />
                    </figure>
                  <div class="card-body">
                    <h2 class="card-title">${data.meals[0].strMeal}</h2>
                    <p>
                    ${data.meals[0].strInstructions}
                    </p>
                  </div>
              </div>;`;
      modalInfo.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

function toToScroll() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrolling() {
  const px = window.pageYOffset;
  if (px > 200) {
    topToBtn.classList.remove("opacity-0", "invisible");
  } else {
    topToBtn.classList.add("opacity-0", "invisible");
  }
}
