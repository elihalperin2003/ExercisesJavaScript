// 1

const keys = (obj) => Object.keys(obj);
const obj1 = {
  name: "loopy",
  age: 3,
};
// console.log(keys(obj1));

// 2

const values = (obj) => Object.values(obj);
// console.log(values(obj1));

// 3

const entries = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};

// entries(obj1);

// 4

const gradesList = { math: 80, english: 90, science: 70 };
const average = (grades) => {
  const values = Object.values(grades);
  return values.reduce((a, b) => a + b, 0) / values.length;
};
// console.log(average(gradesList));

// 5 - 6

const unitObjs = (obj1, obj2) => Object.assign(obj1, obj2);
// console.log(unitObjs(obj1, gradesList));

// 7

const hasown = (obj, key) => Object.hasOwn(obj, key);

// console.log(hasown(obj1, "name"));
// console.log(hasown(obj1, "price"));

// 8

const freeze = (obj) => Object.freeze(obj);
// freeze(obj1);
// obj1.age = 5;

// 9

const toObj = (arr) => {
  const obj = {};
  for (const line of arr) {
    obj[line[0]] = line[1];
  }
  return obj;
};
const arr9 = [
  ["name", "Alice"],
  ["age", 25],
];
// console.log(toObj(arr9));

// 10

const prices = { apple: 10, banana: 5, mango: 20 };
const minus10 = (prices) =>
  Object.fromEntries(
    Object.entries(prices).map((fruit) => {
      fruit[1] *= 0.9;
      return fruit;
    }),
  );

console.log(minus10(prices));

// 11

const fields = { a: 1.0, b: "1", c: "one", d: 1 };

const onlyNumbers = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter((item) => typeof item[1] === "number"),
  );

// console.log(onlyNumbers(fields));

// 12

const copy = (obj) => {
  return { ...obj };
};

const newFields = copy(fields);

newFields.a = 2.0;
// console.log(fields.a);
// console.log(newFields.a);

// 13

const sameKeys = (obj1, obj2) => {
  const o1 = Object.keys(obj1);
  const o2 = Object.keys(obj2);
  if (o1.length !== o2.length) return false;
  return o1.every((key) => obj2.hasOwnProperty(key));
};
// console.log(sameKeys(fields, newFields));
