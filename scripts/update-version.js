/**
 * Script to update the version in src/version.ts to match package.json
 */
const fs = require('fs');
const path = require('path');

// Read the version from package.json
const packageJson = require('../package.json');
const version = packageJson.version;

// Path to version.ts
const versionFilePath = path.join(__dirname, '../src/version.ts');

// Read the current content of version.ts
fs.readFile(versionFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading version.ts:', err);
    process.exit(1);
  }

  // Replace the version line
  const updatedContent = data.replace(
    /export const version = ['"].*['"];/,
    `export const version = '${version}';`
  );

  // Write the updated content back to version.ts
  fs.writeFile(versionFilePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing version.ts:', err);
      process.exit(1);
    }
    
    console.log(`✅ Updated version in version.ts to ${version}`);
  });
}); 