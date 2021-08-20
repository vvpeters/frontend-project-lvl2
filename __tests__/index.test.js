import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

test('diff', () => {
  const pathToFile1 = './__tests__/__fixtures__/file1.json';
  const pathToFile2 = './__tests__/__fixtures__/file2.json';
  const result = readFileSync(('./__tests__/__fixtures__/result.txt'), 'utf-8');

  expect(genDiff(pathToFile1, pathToFile2)).toBe(result);
});
