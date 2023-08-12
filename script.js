let localCount = 0;
let savedCount = parseInt(localStorage.localCount || JSON.stringify(0));
let latest = JSON.parse(localStorage.latest || JSON.stringify([]));

const rand = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;

// script.js
const imageButton = document.querySelector(".image-button");
const buttonImage = imageButton.querySelector(".button-image");

imageButton.addEventListener("mousedown", () => {
    buttonImage.style.transform = "scale(1.1)";
    imageButton.style.backgroundImage = "url('active-image.jpg')";
});

imageButton.addEventListener("mouseup", () => {
    buttonImage.style.transform = "scale(1)";
    imageButton.style.backgroundImage = "url('normal-image.jpg')";
});
