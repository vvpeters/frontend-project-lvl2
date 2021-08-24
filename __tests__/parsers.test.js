import { test, expect } from '@jest/globals';
// import { readFileSync } from 'fs';
import parsers from '../src/parsers.js';

test('parseJson', () => {
  const pathToFile = './__tests__/__fixtures__/file1.json';
  // const resultParse = readFileSync(('./__tests__/__fixtures__/result_parse.js'), 'utf-8');

  expect(parsers(pathToFile)).toEqual({ follow: false, host: 'hexlet.io', proxy: '123.234.53.22', timeout: 50 });
});

test('parseYaml', () => {
  const pathToFile2 = './__tests__/__fixtures__/file1.yaml';
  // const resultParse2 = readFileSync(('./__tests__/__fixtures__/result_parse.js'), 'utf-8');

  expect(parsers(pathToFile2)).toEqual({ follow: false, host: 'hexlet.io', proxy: '123.234.53.22', timeout: 50 });
});
