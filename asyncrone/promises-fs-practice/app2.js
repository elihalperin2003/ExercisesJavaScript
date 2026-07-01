import fs from "fs/promises";

// 7

// fs.readFile("data/message.txt", "utf-8").then(console.log).catch(console.error);

// 8

// const list = [];
// fs.readFile("data/step2.txt", "utf-8")
//   .then((data) => list.push(data))
//   .then(() => fs.readFile("data/step1.txt", "utf-8"))
//   .then((data) => list.push(data))
//   .then(() => console.log(list.join("\n")));

// 9

const createUser = (userName) => {
  return fs.mkdir(`data/users/${userName}`, { recursive: true });
};

const writeProfile = (userName, content) => {
  return fs.writeFile(`data/users/${userName}/profile.txt`, content);
};

const readProfile = (userName) => {
  return fs.readFile(`data/users/${userName}/profile.txt`, "utf-8");
};

Promise.resolve()
  .then(() => createUser("loopy"))
  .then(() => writeProfile("loopy", "Happy birthday!"))
  .then(() => readProfile("loopy"))
  .then(console.log)
  .catch(console.error);
