import yaml from 'js-yaml';
import * as path from 'path';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parser = (pathToFile) => {
  const fileExt = path.extname(pathToFile);
  if (fileExt === '.json' || fileExt === '') {
    return JSON.parse(readFileSync(resolve(__dirname, '..', pathToFile), 'utf-8'));
  } if (fileExt === '.yml' || fileExt === '.yaml') {
    return yaml.load(readFileSync(resolve(__dirname, '..', pathToFile), 'utf-8'));
  }
};

export default parser;
