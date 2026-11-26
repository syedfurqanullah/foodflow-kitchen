
// Search input select karna
const searchInput = document.getElementById("menu-search");

// Tamam food cards select karna
const foodCards = document.querySelectorAll(".food-card");

// Search input par event
searchInput.addEventListener("input", function () {

    // User ki search value lena
    let searchText = searchInput.value.toLowerCase().trim();

    // Har food card ko check karna
    for (let i = 0; i < foodCards.length; i++) {

        // Card ka complete text lena
        let foodName = foodCards[i].textContent.toLowerCase();

        // Search text match karna
        if (foodName.indexOf(searchText) !== -1) {

            // Match ho to card show karo
            foodCards[i].style.display = "";

        } else {

            // Match na ho to card hide karo
            foodCards[i].style.display = "none";
        }
    }
});
