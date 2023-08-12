let localCount = 0;
let savedCount = parseInt(localStorage.localCount || JSON.stringify(0));
let latest = JSON.parse(localStorage.latest || JSON.stringify([]));

const rand = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;

const button = document.querySelector(".the-button");

button.addEventListener("mousedown", () => {
  button.style.transform = "scale(1.01)";
});

button.addEventListener("mouseup", () => {
  button.style.transform = "scale(1)";
});

fetch('manifest.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.name); // Outputs: John
    console.log(data.age);  // Outputs: 30
  })
  .catch(error => console.error('Error fetching JSON:', error));
