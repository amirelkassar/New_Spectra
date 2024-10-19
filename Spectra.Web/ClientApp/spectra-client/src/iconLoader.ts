import fs from 'fs';
import path from 'path';

interface Icon {
  name: string;
  path: string;
}

export function getIcons(): Icon[] {
  const iconDir = path.resolve('src/assets/icons');
  const files = fs.readdirSync(iconDir);

  return files.map((file) => ({
    name: path.basename(file, path.extname(file)),
    path: path.join(iconDir, file),
  }));
}
