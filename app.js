const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');

const signupForm = document.getElementById('signupForm');
const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implement login logic here
  console.log('Login:', loginUsername.value, loginPassword.value);
  // Redirect to user dashboard
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implement signup logic here
  console.log('Signup:', signupUsername.value, signupPassword.value);
  // Redirect to user dashboard
});



// Recipe Page JavaScript

// Get reference to the ingredient list and instructions
const ingredientList = document.getElementById('ingredient-list');
const instructionList = document.getElementById('instruction-list');

// Toggle visibility of ingredient list
function toggleIngredientList() {
  ingredientList.classList.toggle('hidden');
}

// Toggle visibility of instruction list
function toggleInstructionList() {
  instructionList.classList.toggle('hidden');
}

// Attach click event listeners to toggle buttons
const toggleIngredientButton = document.getElementById('toggle-ingredient-button');
const toggleInstructionButton = document.getElementById('toggle-instruction-button');

toggleIngredientButton.addEventListener('click', toggleIngredientList);
toggleInstructionButton.addEventListener('click', toggleInstructionList);



// JavaScript for Profile Page
// You can add specific functionality for the profile page here if needed
const profileDetails = document.querySelector('.profile-details');

// Sample data for the user profile (can be fetched from a backend)
const userProfile = {
  username: 'JohnDoe',
  email: 'john@example.com',
  // Add more profile properties as needed
};

// Update the profile details on the page
function updateProfileDetails() {
  const profileHTML = `
    <img src="images/profile.jpg" alt="User Profile">
    <p>Username: ${userProfile.username}</p>
    <p>Email: ${userProfile.email}</p>
    <!-- Add more profile properties here -->
  `;
  profileDetails.innerHTML = profileHTML;
}

// Call the function to initially populate the profile details
updateProfileDetails();

// JavaScript for Search Page
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.querySelector('.search-results ul');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  
  // Placeholder logic for search results
  if (searchTerm) {
    searchResults.innerHTML = `
      <li><a href="#">${searchTerm} Recipe 1</a></li>
      <li><a href="#">${searchTerm} Recipe 2</a></li>
      <li><a href="#">${searchTerm} Recipe 3</a></li>
    `;
  } else {
    searchResults.innerHTML = '<li>No results found.</li>';
  }
});



// JavaScript for Profile Page
// You can add specific functionality for the profile page here if needed

// JavaScript for Search Page
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.querySelector('.search-results ul');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  
  // Placeholder logic for search results
  if (searchTerm) {
    searchResults.innerHTML = `
      <li><a href="#">${searchTerm} Recipe 1</a></li>
      <li><a href="#">${searchTerm} Recipe 2</a></li>
      <li><a href="#">${searchTerm} Recipe 3</a></li>
    `;
  } else {
    searchResults.innerHTML = '<li>No results found.</li>';
  }
});




