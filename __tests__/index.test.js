import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const result = readFileSync('__tests__/__fixtures__/result_index.txt', 'utf-8');

test('diffJsonJson', () => {
  const pathToFile1 = '__tests__/__fixtures__/file1.json';
  const pathToFile2 = '__tests__/__fixtures__/file2.json';

  expect(genDiff(pathToFile1, pathToFile2)).toBe(result);
});

test('diffYamlYaml', () => {
  const pathToFile1 = '__tests__/__fixtures__/file1.yaml';
  const pathToFile2 = '__tests__/__fixtures__/file2.yaml';

  expect(genDiff(pathToFile1, pathToFile2)).toBe(result);
});

test('diffYamlJson', () => {
  const pathToFile1 = '__tests__/__fixtures__/file1.yaml';
  const pathToFile2 = '__tests__/__fixtures__/file2.json';

  expect(genDiff(pathToFile1, pathToFile2)).toBe(result);
});
