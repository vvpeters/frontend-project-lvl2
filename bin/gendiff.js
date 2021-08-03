#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .arguments('<filepath1> <filepath2>')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

program.parse(process.argv);
