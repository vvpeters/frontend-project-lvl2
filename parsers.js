import yaml from 'js-yaml';
import * as path from 'path';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parser = (pathToFile) => {
  const fileExt = path.extname(pathToFile);
  let parse;
  if (fileExt === '.json' || fileExt === '') {
    parse = JSON.parse(readFileSync(resolve(__dirname, '..', pathToFile), 'utf-8'));
  } else if (fileExt === '.yml' || fileExt === '.yaml') {
    parse = yaml.safeLoad(readFileSync(resolve(__dirname, '..', pathToFile), 'utf-8'));
  }

  return parse;
};

export default parser;
