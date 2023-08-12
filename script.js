let localCount = 0;
let savedCount = parseInt(localStorage.localCount || JSON.stringify(0));
let latest = JSON.parse(localStorage.latest || JSON.stringify([]));

const rand = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;

const button = document.querySelector(".the-button");

button.addEventListener("mousedown", () => {
  button.style.transform = "scale(1.1)";
  console.log("down")
});

button.addEventListener("mouseup", () => {
  button.style.transform = "scale(1)";
  console.log("up")
});
