const add2 = (a, b) => a + b;
const sub2 = (a, b) => a - b;
const mult2 = (a, b) => a * b;

const isEven = (num) => !(num % 2);

const list = [1, 2, 3, 4, 5];

const { greet9 } = require("./exports");

function logger() {
  return console.log("Hello");
}

module.exports = { add2, sub2, mult2, logger, isEven, list, greet9 };
