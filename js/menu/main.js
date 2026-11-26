
const searchInput = document.getElementById("menu-search");
const foodCards = document.querySelectorAll(".food-card");
const categoryButtons = document.querySelectorAll(".menu-categories a");

const dishCount = document.getElementById("dish-count");
const noResults = document.getElementById("no-results");

let selectedCategory = "all";

searchInput.addEventListener("input", function () {
    showFoods();
});

for (let i = 0; i < categoryButtons.length; i++) {

    categoryButtons[i].addEventListener("click", function () {
        selectedCategory = categoryButtons[i].dataset.category;

        showFoods();
    });
}

function showFoods() {

    let searchText = searchInput.value.toLowerCase().trim();
    let totalDishes = 0;

    for (let i = 0; i < foodCards.length; i++) {

        let foodName = foodCards[i].textContent.toLowerCase();
        let category = foodCards[i].dataset.category;

        let searchMatch = foodName.indexOf(searchText) !== -1;

        let categoryMatch = selectedCategory === "all" ||
                            category === selectedCategory;

        if (searchMatch && categoryMatch) {
            foodCards[i].style.display = "";
            totalDishes++;
        } else {
            foodCards[i].style.display = "none";
        }
    }

    dishCount.textContent = totalDishes;

    if (totalDishes === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

showFoods();