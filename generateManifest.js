const fs = require('fs');

const directoryPath = './sounds';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const manifest = files.filter((x) => !x.endsWith('.Identifier'));
  const manifestJSON = JSON.stringify(manifest, null, 2);

  fs.writeFile('manifest.json', manifestJSON, err => {
    if (err) {
      console.error('Error writing manifest file:', err);
      return;
    }
    console.log('Manifest file generated successfully.');
  });

  const identifiers = files.filter((x) => x.endsWith('.Identifier'));

  identifiers.forEach(file => {
    const filePath = path.join(directoryPath, file);

    // Check if the file has the target extension
    if (path.extname(filePath) === targetExtension) {
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
