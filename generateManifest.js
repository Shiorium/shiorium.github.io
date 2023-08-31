const fs = require('fs');
const path = require('path');

const directoryPath = './sounds';
const identifierExtension = '.Identifier';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const manifest = files.filter((x) => !x.endsWith(identifierExtension));
  const manifestJSON = JSON.stringify(manifest, null, 2);

  fs.writeFile('manifest.json', manifestJSON, err => {
    if (err) {
      console.error('Error writing manifest file:', err);
      return;
    }
    console.log('Manifest file generated successfully.');
  });

  const identifiers = files.filter((x) => x.endsWith(identifierExtension));

  let filesDeleted = 0;
  let filesToDelete = 0;
  
  identifiers.forEach(file => {
    const filePath = path.join(directoryPath, file);

    // Check if the file has the target extension
    if (path.extname(filePath) === identifierExtension) {
      filesToDelete++;

      fs.unlink(filePath, err => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          filesDeleted++;
          // Check if all files have been deleted
          if (filesDeleted === filesToDelete) {
            console.log('All files deleted.');
          }
        }
      });
    }
  });
});
