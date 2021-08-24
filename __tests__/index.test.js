import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const pathToFixtures = '__tests__/__fixtures__/';
const result = readFileSync(`${pathToFixtures}result_index.txt`, 'utf-8');

test('diff Json and Json', () => {
  const pathToFile1 = `${pathToFixtures}file1.json`;
  const pathToFile2 = `${pathToFixtures}file2.json`;

  expect(genDiff(pathToFile1, pathToFile2)).toBe(result);
});

test('diff Yaml and Yaml', () => {
  const pathToFile1 = `${pathToFixtures}file1.yaml`;
  const pathToFile2 = `${pathToFixtures}file2.yaml`;

  expect(genDiff(pathToFile1, pathToFile2)).toBe(result);
});

test('diff Yaml and Json', () => {
  const pathToFile1 = `${pathToFixtures}file1.yaml`;
  const pathToFile2 = `${pathToFixtures}file2.json`;

  expect(genDiff(pathToFile1, pathToFile2)).toBe(result);
});
