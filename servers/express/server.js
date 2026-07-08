import express from "express";
import fs from "fs/promises";

const dir = await fs.readdir(process.cwd());

if (!dir.includes("users.json")) await fs.writeFile("users.json", "[]");

// reading function
async function getUsers() {
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  return users;
}

// writing function
async function writeUsers(users) {
  const data = await fs.writeFile("users.json", JSON.stringify(users, null, 2));
}

// validation
function validation(res, name, password) {
  if (!name || !password) {
    res.status(400).json({ message: "must be name and password" });
  }
}
// idExists
function idExists(res, user, id) {
  if (!user) {
    res.status(400).json({ message: `id ${id} Not exists` });
  }
}

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
server.post("/api/users", async (req, res) => {
  const { name, password } = req.body;
  validation(res, name, password);
  const users = await getUsers();
  const id = Math.max(0, ...users.map((user) => user.id)) + 1;
  const user = { id, name, password };
  users.push(user);
  await writeUsers(users);
  res.status(201).json({ message: "User created!" });
});

// put
server.put("/api/users/:id", async (req, res) => {
  const users = await getUsers();
  const user = users.find((user) => user.id === +req.params.id);
  idExists(res, user, req.params.id);
  const { name = user.name, password = user.password } = req.body;
  Object.assign(user, { name, password });
  writeUsers(users);
  res.status(201).json({ message: "User updated!" });
});

// listening
server.listen(3000, () => {
  console.log("The server run on port 3000");
});
