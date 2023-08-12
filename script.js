let sessionCount = 0;
let totalCount = parseInt(localStorage.sessionCount || JSON.stringify(0));

const random = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;
const randomSoundClip = (list) => list[random(0, list.length)];

const button = document.querySelector('.the-button');

button.addEventListener('mouseup', () => {
  button.style.transform = 'scale(1)';
});

const count = async () => {
  sessionCount += 1;
  totalCount += 1;

  localStorage.sessionCount = totalCount + '';

  document.getElementById('sessionCount').innerText = sessionCount;
  document.getElementById('totalCount').innerText = totalCount;
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

    count();
  });
})();
