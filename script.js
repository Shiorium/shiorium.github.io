const countEndpoint = 'https://api.shiorium.com:3000/count';

let sessionCount = 0;
let totalCount = parseInt(localStorage.sessionCount || JSON.stringify(0));
let highest = parseInt(localStorage.highest || JSON.stringify(0));
let globalRecord = JSON.parse(localStorage.globalRecord || JSON.stringify([]));

document.getElementById('sessionCount').innerText = sessionCount + '';
document.getElementById('totalCount').innerText = totalCount + '';
document.getElementById('highest').innerText = highest + '';
document.getElementById('globalRecord').innerHTML = globalRecord.map((x) => `<li>${x}</li>`).join('');

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

  const globalCount = await fetch(countEndpoint, {
    method: 'POST',
    headers: {
      'Origin': 'https://shiorium.github.io',
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .catch(error => console.error('Error fetching count JSON:', error));

  globalRecord.unshift(globalCount.count);
  localStorage.globalRecord = JSON.stringify(globalRecord);
  
  document.getElementById('globalCount').innerText = globalCount.count;
  document.getElementById('globalRecord').innerHTML = globalRecord.map((x) => `<li>${x}</li>`).join('');
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

  const globalCount = await fetch(countEndpoint, {
    method: 'GET',
    headers: {
      'Origin': 'https://shiorium.github.io',
    }
  })
    .then(response => response.json())
    .catch(error => console.error('Error fetching count JSON:', error));
  document.getElementById('globalCount').innerText = (globalCount.count || 0) + '';
})();
