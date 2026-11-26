
// =====================================
// FOODFLOW - MENU PAGE FUNCTIONALITY
// =====================================

// HTML elements ko select karna
const searchInput = document.getElementById("menu-search");
const foodCards = document.querySelectorAll(".food-card");
const categoryButtons = document.querySelectorAll(".menu-categories a");
const dishCount = document.getElementById("dish-count");
const noResults = document.getElementById("no-results");

// Default category
let selectedCategory = "all";

// Search input par event
searchInput.addEventListener("input", function () {
    showFoods();
});

// Category buttons par click event
for (let i = 0; i < categoryButtons.length; i++) {

    categoryButtons[i].addEventListener("click", function (event) {

        // Link ko doosre page par jane se rokna
        // event.preventDefault();

        // Click ki hui category lena
        selectedCategory = categoryButtons[i].getAttribute("data-category");

        // Sab buttons se active class remove karna
        for (let j = 0; j < categoryButtons.length; j++) {
            categoryButtons[j].classList.remove("is-active");
            categoryButtons[j].setAttribute("aria-pressed", "false");
        }

        // Click kiye gaye button ko active banana
        categoryButtons[i].classList.add("is-active");
        categoryButtons[i].setAttribute("aria-pressed", "true");

        // Foods dobara check karna
        showFoods();
    });
}


// =====================================
// FOOD SEARCH AND CATEGORY FUNCTION
// =====================================

function showFoods() {

    // Search box ki value lena
    let searchValue = searchInput.value.toLowerCase().trim();

    // Visible dishes count
    let visibleCount = 0;

    // Har food card ko check karna
    for (let i = 0; i < foodCards.length; i++) {

        // Food card ka text lena
        let foodText = foodCards[i].textContent.toLowerCase();

        // Food ki category lena
        let foodCategory = foodCards[i]
            .querySelector(".food-kicker")
            .textContent.toLowerCase().trim();

        // Category match check
        let categoryMatch = false;

        if (selectedCategory === "all") {
            categoryMatch = true;
        } 
        else if (foodCategory === selectedCategory) {
            categoryMatch = true;
        }

        // Search match check
        let searchMatch = false;

        if (foodText.includes(searchValue)) {
            searchMatch = true;
        }

        // Dono conditions match hon to card show hoga
        if (categoryMatch === true && searchMatch === true) {
            foodCards[i].style.display = "";
            visibleCount++;
        } 
        else {
            foodCards[i].style.display = "none";
        }
    }

    // Total visible dishes update karna
    dishCount.textContent = visibleCount + " dishes";

    // Agar koi dish na mile
    if (visibleCount === 0) {
        noResults.style.display = "block";
    } 
    else {
        noResults.style.display = "none";
    }
}
