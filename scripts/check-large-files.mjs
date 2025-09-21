import fs from 'fs';
import path from 'path';

const limit = parseInt(process.env.MAX_BYTES || '10485760', 10);
const skip = /^(node_modules|\.git|\.next|dist|build|demos|marketplace\/packs\/.*\.tgz)\//;

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) return walk(p);
    const s = fs.statSync(p).size;
    return (!skip.test(p) && s > limit) ? [p] : [];
  });
}

const offenders = walk('.');
if (offenders.length) {
  console.error('Large files:', offenders);
  process.exit(2);
}
