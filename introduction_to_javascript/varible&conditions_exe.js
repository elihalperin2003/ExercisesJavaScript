// 1

const age = 20;

console.log(age >= 18 ? "older" : "young");

// 2

const number = 7;

if (number % 2 === 0) {
  console.log(number);
} else {
  console.log("sgrsg");
}

// 3

const isLoggedIn = false;

if (isLoggedIn) {
  console.log("welcome!");
} else {
  console.log("please connect!");
}

// 4

const num = "123";

console.log(num > 0 ? "positive" : num < 0 ? "negative" : "zero");

// 5

const a = 10;
const b = 20;

if (a > b) {
  console.log("a is bigger");
}
if (b > a) {
  console.log("b is bigger");
}
if (a === b) {
  console.log("a is equal to b");
}

// 6

const password = "1234";

if (password === "1234") {
  console.log("Approved access");
} else {
  console.log("Incorrect password");
}

// 7

const x = 15;

console.log(10 <= x && x <= 20);

// 8

const grade = 6;

console.log(grade >= 90 ? "A" : grade >= 75 ? "B" : grade >= 60 ? "C" : "X");

// 9

const temp = 28;

if (temp > 30) {
  console.log("very hot");
} else if (20 <= temp && temp <= 30) {
  console.log("nice outside");
} else {
  console.log("cold");
}

// 10

const my_age = 20;

const hasID = true;

console.log(my_age >= 18 && hasID);

// 11

const isAdmin = false;

const isMangar = true;

console.log("result: ", isAdmin || isMangar);

// 12

const hasHard = false;

console.log(!hasHard ? "No access" : "approved access");

// 13

const name = "eli";

if (!name) {
  console.log("guest");
} else {
  console.log(name);
}

// 14

const arr = [];

if (!arr.length) {
  console.log("empty");
} else {
  console.log("full");
}

// 15

const x1 = "5";
const y2 = 5;

console.log(x1 === y2);
console.log(x1 == y2);

// 16

const username = "admin";

const my_password = "1234";

console.log(username === "admin" && my_password === "1234");

// 17

const age2 = 67;

if (age2 < 18) {
  console.log("young price");
} else if (age2 > 65) {
  console.log("older's price");
} else {
  console.log("full price");
}

// 18

const day = "monday";

console.log(["friday", "saterday"].includes(day) ? "weekend" : "workday");

// 19

const total = 25;

console.log(150 <= total && total <= 300 ? "20$" : "40$");

// 20

const role = "admin";

switch (role) {
  case "loopy":
    console.log("rwx");
    break;
  case "editor":
    console.log("-w-");
    break;
  case "viewer":
    console.log("r--");
    break;
  default:
    console.log("---");
}
