import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "basics",
});

// 1
// await pool.execute(
//   `create table if not exists products (
//     id int primary key auto_increment,
//     name varchar(50) not null,
//     price decimal(10,2),
//     stock int default 0
//     )`,
// );

// 2

// const insert = `insert into products (name, price, stock) values (?,?,?)`;
// await pool.execute(insert, ["Laptop", 2500, 10]);
// await pool.execute(insert, ["Mouse", 45, 50]);
// await pool.execute(insert, ["Monitor", 800, 5]);

// 3

const result1 = await pool.execute(`select * from products`);
// console.log(await result1[0]);

const result2 = await pool.execute(`select * from products where price > 100`);
// console.log(await result2[0]);

const result3 = await pool.execute(
  `select name, price from products order by price asc`,
);
// console.log(await result3[0]);

const result4 = await pool.execute(
  `select * from products order by price asc limit 1`,
);
// console.log(await result4[0]);

// 4

// await pool.execute(
//   `update products
//     set price = ?
//     where name = ?`,
//   [55, "Mouse"],
// );

// await pool.execute(
//   `update products
//     set stock = stock - 5
//     where name = ?`,
//   ["Monitor"],
// );

// await pool.execute(`delete from products where stock = ?`, [0]);

await pool.end();
