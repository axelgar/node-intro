'use strict';

const options = ['Rock', 'Paper', 'Sissors'];

const getRandomOption = () => {
  const number = Math.floor(Math.random() * 3);
  return options[number];
};

module.exports = {
  getRandomOption,
  options
};