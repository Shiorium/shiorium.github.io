let localCount = 0;
let savedCount = parseInt(localStorage.localCount || JSON.stringify(0));
let latest = JSON.parse(localStorage.latest || JSON.stringify([]));

const rand = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;

// script.js
const button = document.querySelector(".the-button");

imageButton.addEventListener("mousedown", () => {
  button.style.transform = "scale(1.1)";
});

imageButton.addEventListener("mouseup", () => {
  button.style.transform = "scale(1)";
});
