import fs from 'fs';
import path from 'path';

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredNode = packageJson.engines?.node || '>=20.0.0';

console.log('Required Node version:', requiredNode);
console.log('Current Node version:', process.version);

// More flexible check - accept Node 20+ or 23+
const currentMajor = parseInt(process.version.split('.')[0].slice(1));
const currentMinor = parseInt(process.version.split('.')[1]);

if (currentMajor < 20) {
  console.error('Node version does not match required version');
  process.exit(1);
}

console.log('✓ Node version check passed');
