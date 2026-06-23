// 1

const numbers = [1, 2, 3];
// console.log(numbers);

// 2

const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.shift());
// console.log(fruits.pop());

// 3

fruits[fruits.indexOf("banana")] = "mango";
// console.log(fruits);

// 4

// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);

// 5

// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// 6

// fruits.unshift("kiwi");
// console.log(fruits);

// 7

// fruits.shift();
// console.log(fruits);

// 8

const arr = ["a", "b", "c", "d"];

// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);

// 9

// console.log(arr);
// arr.splice(1, 0, "x");
// console.log(arr);

// 10

// console.log(arr);
// arr[2] = "y";
// console.log(arr);

// 11

const numbers11 = [1, 2, 3, 7, 6, 5];

// console.log(numbers11.length);
// console.log(numbers11.pop());

// 12

const arr12 = [1, "one", true];

// console.log(arr12[0]);
// console.log(arr12[1]);
// console.log(arr12[2]);

// 13

const nums = [10, 20, 30];

// for (const n of nums) {
//   console.log(n);
// }

// 14

const arr14 = [5, 10, 15];

let sum = 0;

for (const n of arr14) {
  sum += n;
}
// console.log(sum);

// 15

const arr15 = [3, 8, 12, 1];

// for (const n of arr15) {
//   if (n > 5) {
//     console.log(n);
//   }
// }

// 16

const person = {
  name: "loopy",
  age: 3,
};
// console.log(person);

// 17

const person17 = { name: "Dan", age: 25 };

// console.log(person17.name, person17.age);
// console.log(person17["name"], person17["age"]);

// 18

person17.city = "JLM";
person17.city = "BB";
// console.log(person17.city);

// 19

delete person17.city;
// console.log("city" in person17);

// 20

const student = {
  name: "Yael",
  grades: [90, 80, 100],
};

// console.log(student.grades[0]);
student.grades.push(99);
student.grades.shift();
// console.log(student.grades);

// 21

const product21 = {
  name: "Laptop",
  price: 3500,
  inStock: true,
};

// for (const key in product21) {
//   console.log(`${key}: ${product21[key]}`);
// }

// 22

const user22 = {
  username: "admin",
  role: "manager",
  active: true,
};

// console.log(Object.keys(user22));
// console.log(Object.values(user22));
// for (const key in product21) {
//   console.log(`${key} = ${product21[key]}`);
// }

// 23

const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345",
    },
  },
};

// console.log(order.customer.address.city);
order.customer.address.zip = "54321";
order.customer.phone = "6518782";
// delete order.customer.address.city;
