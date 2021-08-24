import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import parsers from '../parsers.js';

test('parse', () => {
  const pathToFile = './__tests__/__fixtures__/file1.json';
  const resultParse = readFileSync(('./__tests__/__fixtures__/result_parse.txt'), 'utf-8');

  expect(parsers(pathToFile)).toBe(resultParse);
});
