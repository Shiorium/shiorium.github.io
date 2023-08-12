let localCount = 0;
let savedCount = parseInt(localStorage.localCount || JSON.stringify(0));
let latest = JSON.parse(localStorage.latest || JSON.stringify([]));

const random = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;
const randomSoundClip = (list) => list[random(0, list.length)];

const button = document.querySelector('.the-button');

button.addEventListener('mouseup', () => {
  button.style.transform = 'scale(1)';
});

const count = async (hit = false) => {
  const url = `https://api.countapi.xyz/${hit ? 'hit' : 'get'}/shiorium.github.io/visits`;

  const res = await fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error fetching count JSON:', error));

  return res;
};

(async () => {
  const filenames = await fetch('manifest.json')
    .then(response => response.json())
    .catch(error => console.error('Error fetching manifest JSON:', error));

  button.addEventListener('mousedown', async () => {
    button.style.transform = 'scale(1.01)';
    const sound = filenames[random(0, filenames.length - 1)];
    const audio = new Audio(`sounds/${sound}`);
    audio.play();

    const globalCount = await count();
    console.log(globalCount);
  });
})();
