let localCount = 0;
let savedCount = parseInt(localStorage.localCount || JSON.stringify(0));
let latest = JSON.parse(localStorage.latest || JSON.stringify([]));

const random = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;
const randomSoundClip = (list) => list[random(0, list.length)];

const button = document.querySelector('.the-button');

button.addEventListener('mouseup', () => {
  button.style.transform = 'scale(1)';
});

const count = async () => {

};

(async () => {
  const filenames = await fetch('manifest.json')
    .then(response => response.json())
    .catch(error => console.error('Error fetching JSON:', error));

  console.log(filenames);

  button.addEventListener('mousedown', async () => {
    button.style.transform = 'scale(1.01)';
    const sound = filenames[random(0, filenames.length - 1)];
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
  });
})();
