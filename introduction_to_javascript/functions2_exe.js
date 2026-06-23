// 1

const mult3 = (num) => num * 3;

// console.log(mult3(4));

// 2

const len = (word) => word.length;

// console.log(len("loopy"));

// 3

const positiveOrNegative = (num) => {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
};

// console.log(positiveOrNegative(0));

// 4

const max = (...nums) => Math.max(...nums);

// console.log(max(1, 3, 5, 8, 4));

// 5

const lenArr = (arr) => arr.length;

// console.log(lenArr([1, 2, 34, 5]));

// 6

let a = 3;

function test() {
  a = 7;
}

test();

// console.log(a);

// output - 7, a not let a

// 7

// function test7() {
//   let a7 = 5;
// }

// test7();

// console.log(a7);

// error - a is not in the regular scope

// 8

let x = 10;

function change(x) {
  return 20;
}
x = change(x);
// console.log(x);

// 9

// 4

// 10

function print() {
  let message = "Hi";
  console.log(message);
}
// print();

// 11

const min = (arr) => Math.min(...arr);

// console.log(min([2, 3, 6, 1, 4, 9]));

// 12

const div = (x, y) => x % y === 0;

// console.log(div(9, 4));
// console.log(div(8, 4));

// 13

const join13 = (arr) => {
  let txt = "";
  for (const word of arr) {
    txt += word;
  }
  return txt;
};
// console.log(join13(["loopy", "abu", "mishel"]));

// 14

// output - 15
// output - 5

// 15

const printNums = (n) => {
  for (let i = 1; i !== n; i++) {
    console.log(i);
  }
};
// printNums(5);

// 16

const notDubble = (arr) => {
  const new_arr = [];
  for (let item of arr) {
    if (!new_arr.includes(item)) {
      new_arr.push(item);
    }
  }
  return new_arr;
};

// console.log(notDubble([1, 2, 2, 3, 1, 4, 3, 5, 4]));

// 17

let sum = 0;

function add(sum, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

sum = add(sum, [1, 2]);
sum = add(sum, [3, 4]);

// console.log(sum);

// 18

const onlyEven = (arr) => {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
};

// console.log(onlyEven([1, 2, 3, 4, 5, 6, 7]));

// 19

// output - 2

// 20

function getPrice(price) {
  let discount = 0.1;
  return price - price * discount;
}
// console.log(getPrice(45));
