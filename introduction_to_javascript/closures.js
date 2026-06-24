// 1

const createLogger = () => {
  function printHello() {
    console.log("Hello");
  }
  return printHello();
};
// createLogger();

// 2

const createGreeting = (name) => {
  const printGreet = (name) => console.log(`hello ${name}`);
  return printGreet(name);
};
// createGreeting("Loopy");

// 3

const createCounter = () => {
  let counter = 0;
  const reading = () => {
    counter++;
    console.log(counter);
  };
  return reading;
};
// const reading = createCounter();
// reading();
// reading();
// reading();

// 4

// output - 10

// 5

const createMultiplier = (x) => {
  const mult = (x) => {
    return x * 2;
  };
  return mult(x);
};

// console.log(createMultiplier(5));

// 6

const createAdder = (a) => {
  const add = (b) => a + b;
  return add;
};
const add5 = createAdder(5);
// console.log(add5(3));

// 7

const createSecret = () => {
  let SECRET = "Loopy";
  const getSecret = () => SECRET;
  const setSecret = (newSecret) => (SECRET = newSecret);
  return { getSecret, setSecret };
};

const { getSecret, setSecret } = createSecret();
// console.log(getSecret());
// setSecret("Abu");
// console.log(getSecret());

// 8

const once = (fn) => fn;
const fun = once(createLogger);
// fun();

// 12

const creaetStack = () => {
  const list = [];
  const push = (x) => list.push(x);
  const pop = () => list.pop();
  const peek = () => console.log(list);
  return { push, pop, peek };
};

const stack = creaetStack();
// stack.push(5);
// stack.push("five");
// stack.peek();
// stack.pop();
// stack.peek();

// 13

const createIdGenerator = () => {
  let counter = 0;
  const getCounter = () => {
    counter++;
    return counter;
  };
  return getCounter;
};

// const gen = createIdGenerator();
// console.log(gen());
// console.log(gen());
// console.log(gen());

// 15

const createBankAccount = (initialBalance) => {
  let balance = initialBalance;
  const deposit = (amount) => (balance += amount);
  const withdraw = (amount) => (balance -= amount);
  const getBalance = () => console.log(balance);
  return { deposit, withdraw, getBalance };
};

const account1 = createBankAccount(100);
// account1.deposit(50);
// account1.deposit(20);
// account1.withdraw(10);
// account1.getBalance();
