import fs from 'node:fs';
import path from 'node:path';

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

const failures = [];

for (const file of walk('dist').filter((entry) => entry.endsWith('index.html'))) {
  const html = fs.readFileSync(file, 'utf8');
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? '';
  const visibleBlocks = main.matchAll(/<(p|li|blockquote|td|th)\b[^>]*>([\s\S]*?)<\/\1>/gi);

  for (const block of visibleBlocks) {
    const visibleText = block[2]
      .replace(/<pre\b[\s\S]*?<\/pre>/gi, '')
      .replace(/<code\b[\s\S]*?<\/code>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (visibleText.includes('**')) failures.push(`${file}: ${visibleText}`);
  }
}

if (failures.length > 0) {
  console.error(`VISIBLE_LITERAL_BOLD=${failures.length}`);
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('VISIBLE_LITERAL_BOLD=0');
