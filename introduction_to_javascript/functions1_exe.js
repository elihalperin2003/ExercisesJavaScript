// 1

const greet = (name) => `hello ${name}`;

// 2

function plus(x, y) {
  return x + y;
}

// 3

const even = (num) => num % 2 === 0;

// 4

function first_item(arr) {
  return arr[0];
}

// 5

const upper = (txt) => txt.toUpperCase();

// 6

// output - 10
// output - 5

// 7

const y = 8;

function test() {
  const y = 10;
}

test();

// 8

// output - 1

// 9

function a() {
  let xxx = 1;
}
function b() {
  console.log(xxx);
}

// b();

// 10

let count = 0;

function add() {
  let count = 0;
  count++;
  console.log(count);
}

// add();

// 11

const total = (arr) => {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
};
// console.log(total([2, 3, 4, 5, 6]));

// 12

function squared(num) {
  return num * num;
}

const num12 = (num) => squared(num);

// console.log(num12(7));

// 13

// output - 10

// 14

const onlyEven = (arr) => {
  const list = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      list.push(num);
    }
  }
  return list;
};

// console.log(onlyEven([3, 4, 5, 6, 7]));

// 15

let total15 = 0;

function addToTotal(total15, num) {
  return total15 + num;
}

function reset() {
  return 0;
}

total15 = addToTotal(total15, 5);

total15 = addToTotal(total15, 10);

total15 = reset();

// console.log(total15);
