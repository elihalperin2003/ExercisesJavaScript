// 1

const arr = [1, 2, 3, 4, 5];

const dubble = arr.map((num) => num * 2);

// console.log(dubble);

// 2

let arr2 = ["hello", "world"];

arr2 = arr2.map((word) => word.toUpperCase());

// console.log(arr2);

// 3

const arr3 = [123, 234, 567];

const newArr3 = arr3.map((price) => price * 1.18);

// console.log(newArr3);

// 4

const arr4 = [1, 2, 3, 4, 5, 6];

const newArr4 = arr4.filter((num) => !(num % 2));

// console.log(newArr4);

// 5

const words = ["hi", "hello", "cat", "javascript"];

const newWords = words.filter((word) => word.length > 3);

// console.log(newWords);

// 6

const users = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }]
const newUsers = users.filter()
