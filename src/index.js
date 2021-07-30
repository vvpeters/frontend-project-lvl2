// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import * as fs from 'fs/promises';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const genDiff = (filename1, filename2) => {
  const readFile1 = readFileSync(path.resolve(__dirname, '..', filename1), 'utf-8');
  const readFile2 = readFileSync(path.resolve(__dirname, '..', filename2), 'utf-8');
  const parsedFile1 = JSON.parse(readFile1);
  const parsedFile2 = JSON.parse(readFile2);
  const unionKeys = _.union(_.keys(parsedFile1), _.keys(parsedFile2));

  let result = '';
  let newKey;
  for (const key of unionKeys) {
    if (!_.has(parsedFile1, key)) {
      newKey = `+ ${key}`;
      result = `{${result}\n\t${newKey}: ${parsedFile2[key]}`;
    } else if (!_.has(parsedFile2, key)) {
      newKey = `- ${key}`;
      result = `${result}\n\t${newKey}: ${parsedFile1[key]}`;
    } else if (parsedFile1[key] !== parsedFile2[key]) {
      newKey = `- ${key}`;
      let doublKey = `+ ${key}`
      result = `${result}\n\t${newKey}: ${parsedFile1[key]}\n\t${doublKey}: ${parsedFile2[key]}`;
    } else if (parsedFile1[key] === parsedFile2[key]) {
      newKey = `  ${key}`;
      result = result = `${result}\n\t${newKey}: ${parsedFile1[key]}`;
    }
  }
  const newResult = `${result}\n}`;

  return newResult;
};

export default genDiff;
