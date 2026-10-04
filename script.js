// ================================
// SKILLLINK JAVASCRIPT
// ================================


// Get the search elements
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");


// Search button
searchButton.addEventListener("click", function () {

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        alert("Please enter a skill you are looking for.");
        return;
    }

    alert("Searching for: " + searchTerm);

});


// Allow users to press Enter to search
searchInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});


// ================================
// SKILL CARDS
// ================================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card) {

    const link = card.querySelector("a");

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const skillName = card.querySelector("h3").textContent;

        alert("You selected: " + skillName);

    });

});


// ================================
// BUTTON INTERACTIONS
// ================================

const offerButton = document.querySelector(".secondary-btn");

offerButton.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Skill providers will be able to create their profile here.");

});


// ================================
// SIGN UP
// ================================

const signupButton = document.querySelector(".signup-btn");

signupButton.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Welcome to SkillLink! Registration will be available soon.");

});


// ================================
// LOGIN
// ================================

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Login page coming soon.");

});