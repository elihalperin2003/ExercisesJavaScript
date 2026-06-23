// 2

let arr2 = ["hello", "world"];

arr2 = arr2.map((word) => word.toUpperCase());

// console.log(arr2);

// 4

const arr4 = [1, 2, 3, 4, 5, 6];

// console.log(arr4.filter((num) => !(num % 2)));

// 8

const prices = [111, 222, 99, 88, 100];

const filterAndMap = prices
  .filter((price) => price > 100)
  .map((price) => Math.round(price * 1.1));

console.log(filterAndMap);
