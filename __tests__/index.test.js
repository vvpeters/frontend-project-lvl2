import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

test('diff', () => {
  const pathToFile1 = './src/file1.json';
  const pathToFile2 = './src/file2.json';
  // const str = 'hello';
  expect(genDiff(pathToFile1, pathToFile2)).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
