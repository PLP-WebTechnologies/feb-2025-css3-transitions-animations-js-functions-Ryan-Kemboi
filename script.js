// Elements
const toggleButton = document.getElementById("toggleAnimation");
const animatedBox = document.getElementById("animatedBox");
const saveButton = document.getElementById("savePreference");
const preferenceDisplay = document.getElementById("userPreference");

// Check if there are saved preferences in localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedPreference = localStorage.getItem("userPreference");
  if (savedPreference) {
    preferenceDisplay.textContent = `User Preference: ${savedPreference}`;
  }
});

// Toggle Animation
toggleButton.addEventListener("click", function () {
  animatedBox.classList.toggle("animate");
});

// Save User Preference
saveButton.addEventListener("click", function () {
  const userPref = "Box Animated: " + (animatedBox.classList.contains("animate") ? "Yes" : "No");
  localStorage.setItem("userPreference", userPref);
  preferenceDisplay.textContent = `User Preference: ${userPref}`;
});
