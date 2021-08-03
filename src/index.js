import _ from 'lodash';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFile = (pathToFile) => JSON.parse(readFileSync(resolve(__dirname, '..', pathToFile), 'utf-8'));

const genDiff = (pathToFile1, pathToFile2) => {
  const parsedFile1 = readFile(pathToFile1);
  const parsedFile2 = readFile(pathToFile2);

  const unionKeys = _.sortBy(_.union(_.keys(parsedFile1), _.keys(parsedFile2)));

  const result = unionKeys.reduce((acc, key) => {
    if (!_.has(parsedFile1, key)) {
      return `${acc}\n  + ${key}: ${parsedFile2[key]}`;
    }
    if (!_.has(parsedFile2, key)) {
      return `${acc}\n  - ${key}: ${parsedFile1[key]}`;
    }
    if (parsedFile1[key] !== parsedFile2[key]) {
      return `${acc}\n  - ${key}: ${parsedFile1[key]}\n  + ${key}: ${parsedFile2[key]}`;
    }
    return `${acc}\n    ${key}: ${parsedFile1[key]}`;
  }, '');

  return `{${result}\n}`;
};

export default genDiff;
