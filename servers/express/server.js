import express from "express";
import fs from "fs/promises";

const dir = await fs.readdir(process.cwd());

if (!dir.includes("users.json")) await fs.writeFile("users.json", "[]");

// // reading function
// async function getUsers() {
//   const data = await fs.readFile("users.json");
//   const users = JSON.parse(data);
//   return users;
// }
// // writing function
// async function writeUsers(users) {
//   const data = await fs.writeFile("users.json", JSON.stringify(users, null, 2));
// }

const server = express();

// chunks
server.use(express.json());

// regular path
server.get("/api", (req, res) => {
  res.json({ message: "Hello" });
});

// query params
server.get("/api/name", (req, res) => {
  const { name } = req.query;
  res.json({ message: `Hello ${name}` });
});

// path params
server.get("/api/names/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello ${name}` });
});

// post
// server.post("api/users", (req, res) => {
//   const { name, password } = req.body;
// });

// listening
server.listen(3000, () => {
  console.log("The server run on port 3000");
});
