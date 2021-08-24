import _ from 'lodash';
import parse from './parsers.js';

const genDiff = (pathToFile1, pathToFile2) => {
  const parsedFile1 = parse(pathToFile1);
  const parsedFile2 = parse(pathToFile2);

  const unionKeys = _.union(_.keys(parsedFile1), _.keys(parsedFile2));
  const sortedKeys = _.sortBy(unionKeys);

  const result = sortedKeys.reduce((acc, key) => {
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
