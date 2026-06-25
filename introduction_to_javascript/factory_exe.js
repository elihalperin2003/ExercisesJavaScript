// 1,2,3,4,5

const createObj = (name, age) => {
  return { name, age, greet: () => `hi, I am ${name}`, older: () => age >= 18 };
};
const obj1 = createObj("Loopy", 2);
const obj2 = createObj("Abu", 33);

// console.log(obj1);
// console.log(obj1.name);
// // console.log(obj1.greet());
// obj2.name = "Mishel";
// console.log(obj1.name);
// console.log(obj2.older());

// 6

const createCounter = () => {
  let counter = 0;
  const read = () => {
    counter++;
    return counter;
  };
  return read;
};
const myCounter = createCounter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

// 7
const counter7 = {
  count: 1,
  next() {
    return this.count++;
  },
};
// console.log(counter7.next());
// console.log(counter7.next());
// console.log(counter7.next());

// 8,9,10,11,12,13,14

const counter8 = (initNumber) => {
  let count = initNumber;
  const next = () => {
    count++;
    return count;
  };
  const sub = () => {
    count--;
    return count;
  };
  const ret = () => count;
  const reset = () => (count = 0);
  return { next, sub, ret, reset };
};
const counterA = counter8(10);
const counterB = counter8(10);
// counterA.next();
// console.log(counterA.ret());
// counterA.next();
// console.log(counterA.ret());
// counterA.next();
// console.log(counterA.ret());
// counterA.reset();
// counterA.sub();
// console.log(counterA.ret());
// console.log(counterA.count);
// console.log(counterB.ret());

// 15,16,17,18

const createFactory = (fullName, price, stock = 0) => {
  if (price <= 0) {
    throw new Error("lower from 0");
  }
  return {
    fullName,
    price,
    stock,
    exists() {
      return this.stock > 0;
    },
    change() {
      this.stock = 0;
    },
  };
};

const milk = createFactory("milk", 15, 4);
// console.table(milk);
// console.log(milk.exists());
// milk.change();
// console.log(milk.exists());

// 19

const mult = (num) => {
  const fn = (num) => num * 2;
  return fn;
};
const myFun = mult();
// console.log(myFun(8));

// 20

const concet = (name) => {
  const txt = "hello";
  const greet = (name) => txt.concat(" ", name);
  return greet;
};

const con = concet();
// console.log(con("Loopy"));

// 21,22,23

const messages = () => {
  const list = [];
  const append = (msg) => list.push(msg);
  const view = () => console.log(list);
  const deleteByIndex = (index) => list.splice(index, 1);
  return { append, view, deleteByIndex };
};

const { append, view, deleteByIndex } = messages();
// append("hi");
// append("bye");
// append("hi");
// append("bye");
// append("hi");
// append("bye");
// view();
// deleteByIndex(2);
// view();

// 24

const users = (name) => {
  let counter = 0;
  return {
    name,
    login: () => counter++,
  };
};

// const user1 = users("loopy");
// user1.login();
// user1.login();
// user1.login();
// console.log(user1);

// 25

// לא מובן
