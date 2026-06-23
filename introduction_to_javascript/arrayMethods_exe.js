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

// console.log(filterAndMap);

// 10

const numbers = [2, 3, 4];

const mult_numbers = numbers.reduce((acc, num) => acc * num, 1);

// console.log(mult_numbers);

// 12

const usersAges = [21, 24, 19, 28, 22];
const average = usersAges.reduce((a, b) => a + b) / usersAges.length;
// console.log(average);

// 25

const numbers25 = [21, 24, 19, 28, 22];

const sortedNumbers = numbers25.sort((a, b) => b - a);
// console.log(sortedNumbers);

// 29

const numbers29 = [45, 69, 21, 87, 13];
// console.log(numbers29);

numbers29.splice(1, 2);
// console.log(numbers29);

// 32

const numbers32 = [
  [45, 69],
  [21, 87, 13],
];
// console.log(numbers32);

const newNumbers32 = numbers32.flat();
// console.log(newNumbers32);

// 36

const numbers36 = [452, 693, 214, 870, 136];
const chenges = numbers36
  .filter((num) => !(num % 2))
  .map((num) => num * 2)
  .reduce((a, b) => a + b, 0);

// console.log(chenges);

// 38

const food = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
const newFood = food.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item);

  return acc;
}, {});
// console.log(newFood);

// 39

const arr39 = [1, 2, 2, 3, 1, 2, 4, 4, 2];

const setArr39 = arr39.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);
// console.log(setArr39);

// 41

const products = [
  { name: "Laptop", price: 800, inStock: true, category: "tech" },
  { name: "Phone", price: 400, inStock: false, category: "tech" },
  { name: "Shirt", price: 50, inStock: true, category: "fashion" },
  { name: "loopy", price: 140, inStock: false, category: "fashion" },
  { name: "abu", price: 50, inStock: true, category: "fashion" },
  { name: "Mishel", price: 500, inStock: true, category: "fashion" },
];

const filtered = products
  .filter((product) => product.inStock)
  .filter((product) => product.price > 100)
  .sort((a, b) => a - b)
  .map((product) => product.name)
  .join(", ");

console.log(filtered);
