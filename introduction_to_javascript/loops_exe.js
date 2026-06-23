import input from "analiza-sync";

// 1

for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// 2

for (let num = 10; num >= 1; num--) {
  console.log(num);
}

// 3

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

// 4

const names = ["dana", "yosi", "michal", "ron"];

for (const name of names) {
  console.log(name);
}

// 5

const nums = [2, 5, 8, 11, 14, 17, 20];

for (const num of nums) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

// 6

const listOfNumbers = [3, 99, 12, 45, 78];

console.log(Math.max(...listOfNumbers));

// 7

const word = "javascript";

for (const letter of word) {
  console.log(letter);
}

// 8

const multipule_numbers = [1, 2, 3, 4];

for (const n of multipule_numbers) {
  console.log(n * 2);
}

// 9

let nn = 1;

while (nn <= 10) {
  console.log(nn);
  nn++;
}

10;

let wor = "";

while (wor != "stop") {
  wor = input("enter stop: ");
}

// 11

let www = "";
let total_inputs = 0;
while (input != 0) {
  www = input("enter word: ");
  total_inputs += input;
}

// 12

const secret = 7;

let ww = "";

while (input != secret) {
  ww == input("enter secret (7): ");
}

// 13

let x = 1;

while (x < 20) {
  console.log(x);
  x++;
}

// 14

let password = "";

// while ("1234" != password) {
//   // input from user
// }

// 15

let count = 0;

do {
  console.log(count);
} while (count != 0);

// 16

// let choice;

// do {
//   console.log(choice);
//   // input from user
// } while (choice != "exit");

// 17

const numbers6 = [1, 3, 7, 9, 15, 2];

for (const nnn of numbers6) {
  if (nnn > 10) {
    break;
  }
  console.log(nnn);
}

// 18

const numbers5 = [5, -1, 8, -3, 10];

for (const num5 of numbers5) {
  if (num5 < 0) {
    continue;
  }
  console.log(num5);
}

// 19

const ages = [12, 15, 18, 21, 25];

for (const age of ages) {
  if (age === 18) {
    console.log(`${age} found`);
    break;
  }
}

// 20

const arr = [10, 20, 30, 40, 50];

for (const item of arr) {
  console.log(item);
}

// 21

const numbers66 = [1, 2, 3, 4, 5, 6];

let ttl = 0;

for (const num66 of numbers66) {
  if (num66 % 2 == 0) {
    ttl += num66;
  }
}
console.log(ttl);

// 22

const target = 25;

const numbers99 = [10, 15, 20, 25, 30];

console.log(numbers99.includes(target));

// 23

const word1 = "hello world";

for (const letter1 of word1) {
  console.log(letter1.toUpperCase());
}

// 24

const numbers123 = [2, 4, 6, 8, 10, 12];

for (const num123 of numbers123) {
  console.log(num123);
  if (num123 % 2 == 0 && num123 > 8) {
    break;
  }
}

// 25

const students = [
  { name: "dana", grade: 55 },

  { name: "yosi", grade: 90 },

  { name: "michal", grade: 78 },

  { name: "ron", grade: 45 },
];

const good_students = [];

for (const student of students) {
  if (student["grade"] === 100) {
    break;
  }
  if (student["grade"] >= 60) {
    good_students.push(student["name"]);
  }
}
console.log(good_students);
