import yaml from 'js-yaml';
import * as path from 'path';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parsers = {
  '.yml': yaml.load,
  '.yaml': yaml.load,
  '.json': JSON.parse,
  '': JSON.parse,
};

const parse = (pathToFile) => {
  const fileExt = path.extname(pathToFile);
  const readedFile = readFileSync(resolve(__dirname, '..', pathToFile), 'utf-8');

  return parsers[fileExt](readedFile);
};

export default parse;
