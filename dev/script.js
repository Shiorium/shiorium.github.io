const countEndpoint = 'http://localhost:3000/count';

let sessionCount = 0;
let totalCount = parseInt(localStorage.sessionCount || JSON.stringify(0));
let highest = parseInt(localStorage.highest || JSON.stringify(0));

document.getElementById('sessionCount').innerText = sessionCount + '';
document.getElementById('totalCount').innerText = totalCount + '';
document.getElementById('highest').innerText = highest + '';

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

  if (sessionCount > highest) {
    highest = sessionCount;
    localStorage.highest = localStorage.sessionCount;
    document.getElementById('highest').innerText = sessionCount;
  }
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

  const globalCount = await fetch(countEndpoint)
    .then(response => response.json())
    .catch(error => console.error('Error fetching count JSON:', error));

  console.log({globalCount});
})();
