const fs = require('fs');

const directoryPath = './sounds';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const manifest = files;
  const manifestJSON = JSON.stringify(manifest, null, 2);

  fs.writeFile('manifest.json', manifestJSON, err => {
    if (err) {
      console.error('Error writing manifest file:', err);
      return;
    }
    console.log('Manifest file generated successfully.');
  });
});
