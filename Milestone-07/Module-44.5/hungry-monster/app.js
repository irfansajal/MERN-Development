//------------- handle search button-----------
const searchFood = () => {
  const searchField = document.getElementById("mealInput");
  const searchData = searchField.value;
  document.getElementById("mealCard").innerHTML = "";
  document.getElementById("mealItemsInfo").innerHTML = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
  searchField.value = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealInfo(data.meals));
};
const displayMealInfo = (mealData) => {
  const mealContainer = document.getElementById("mealCard");
  mealData.slice(0, 8).forEach((item) => {
    const foodItemName = document.createElement("div");
    foodItemName.className = "meal-items";
    itemPosition = item.idMeal;
    const mealInformation = `
        <img src ="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>
        `;
    foodItemName.innerHTML = mealInformation;
    foodItemName.addEventListener("click", function () {
      mealIngredientsInfo(item.idMeal);
      document.getElementById("mealItemsInfo").innerHTML = "";
    });
    mealContainer.appendChild(foodItemName);
  });
};

//API Call by fetch for meal ingredients

const mealIngredientsInfo = (mealItemName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayDetails(data.meals));
};

//meal ingredients details information

const displayDetails = (mealItemDetails) => {
  const mealItemsInformation = document.getElementById("mealItemsInfo");
  mealItemDetails.forEach((items) => {
    const mealItemsInformations = document.createElement("div");
    mealItemsInformations.className = "ingredients-info";
    console.log(items.strMeal);
    const itemsName = document.createElement("h1");
    const ingredients = document.createElement("h5");
    ingredients.innerText = "Ingredients";
    itemsName.innerText = items.strMeal;
    const ul = document.createElement("ul");
    const imgUrl = document.createElement("img");
    imgUrl.src = items.strMealThumb;
    mealItemsInformations.appendChild(imgUrl);
    const li = `
        ${isStay(items.strIngredient1)}
        ${isStay(items.strIngredient2)}
        ${isStay(items.strIngredient3)}
        ${isStay(items.strIngredient4)}
        ${isStay(items.strIngredient5)}
        ${isStay(items.strIngredient6)}
        ${isStay(items.strIngredient7)}
         
         
        `;
    ul.innerHTML = li;
    mealItemsInformations.appendChild(itemsName);
    mealItemsInformations.appendChild(ingredients);
    mealItemsInformations.appendChild(ul);
    mealItemsInformation.appendChild(mealItemsInformations);
  });
};
function isStay(id) {
  if (id) {
    return `<li>${id}</li>`;
  } else {
    return "";
  }
}
