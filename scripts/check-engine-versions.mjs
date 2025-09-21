import fs from 'fs';
import path from 'path';

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredNode = packageJson.engines?.node || '>=20.0.0';

console.log('Required Node version:', requiredNode);
console.log('Current Node version:', process.version);

// Basic check - in a real implementation you'd parse version constraints
if (!process.version.startsWith('v20.')) {
  console.error('Node version does not match required version');
  process.exit(1);
}
