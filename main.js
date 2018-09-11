'use strict';

const functions = require('./functions');
const chalk = require('chalk');

let counter = 0;

const intervalId = setInterval(() => {
  const option = functions.getRandomOption();
  console.log(chalk.red(option));
  counter++;
  if (counter === 10) clearInterval(intervalId);
}, 3000);

console.log(chalk.yellow(functions.options));