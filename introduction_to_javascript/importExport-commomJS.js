const { sub, add, greet, Obj } = require("./exportsCommonJs/exports.js");

// 1

// console.log(add(4, 5));

// 2

// console.log(greet("loopy"));

// 3

// console.log(Obj);

// 4

// console.log(add(18, 7));
// console.log(sub(18, 7));

// 5

const { add2, mult2, sub2 } = require("./exportsCommonJs/exports2.js");

// console.log(mult2(4, 6));

// 6

const { isEven } = require("./exportsCommonJs/exports2.js");

// console.log(isEven(5));
// console.log(isEven(4));
// console.log(isEven(3));

// 7

// לא בחומר

// 8
const { list } = require("./exportsCommonJs/exports2.js");

// console.log(list.reduce((acc, num) => acc + num, 0));

// 9

const { greet9 } = require("./exportsCommonJs/exports2.js");

// console.log(greet9("loo"));

// 10

const { logger } = require("./exportsCommonJs/exports2.js");

// logger();
