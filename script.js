let localCount = 0;
let savedCount = parseInt(localStorage.localCount || JSON.stringify(0));
let latest = JSON.parse(localStorage.latest || JSON.stringify([]));

const rand = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;

const button = document.querySelector(".the-button");

button.addEventListener("mousedown", () => {
  button.style.transform = "scale(1.01)";

  const url = "https://github.com/Shiorium/shiorium.github.io/tree-commit-info/main/sounds";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
          console.log(xhr.JSON);
      }
  };

  xhr.send();
});

button.addEventListener("mouseup", () => {
  button.style.transform = "scale(1)";
});
