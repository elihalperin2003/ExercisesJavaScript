import express from "express";
import fs from "fs/promises";

const dir = await fs.readdir(process.cwd());

if (!dir.includes("users.json")) await fs.writeFile("users.json", "[]");

const server = express();

server.use(express.json());

// server.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

server.get("/api", (req, res) => {
  res.json({ message: "Hello" });
});

server.get("/api/search", (req, res) => {
  const { name } = req.query;
  res.json({ message: `hello ${name}` });
});

server.get("/api/:name", (req, res) => {
  res.json({ message: "Hello " + req.params.name });
});

server.post("/api", async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || userName.length < 2) {
      return res
        .status(400)
        .json({ message: "user name must incloud 2 notes" });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ message: "password must incloud 6 notes" });
    }
    const fileContent = await fs.readFile("users.json");
    const users = JSON.parse(fileContent);
    const id = Math.max(0, ...users.map((user) => user.id)) + 1;
    users.push({ id, userName, password });
    await fs.writeFile("users.json", JSON.stringify(users, null, 2));

    res.status(201).send({ message: "User created", id });
  } catch (err) {
    res.status(500).json({ message: "Error", err });
  }
});

server.put("/api/:id", async (req, res) => {
  try {
    const fileContent = await fs.readFile("users.json", "utf-8");
    const users = JSON.parse(fileContent);
    const user = users.find((user) => user.id === +req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { userName = user.userName, password = user.password } = req.body;

    Object.assign(user, { userName, password });
    await fs.writeFile("users.json", JSON.stringify(users, null, 2));
    res.json({ message: "User updated successfully", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Error", err });
  }
});

server.delete("/api/:id", async (req, res) => {
  const fileContent = await fs.readFile("users.json", "utf-8");
  const users = JSON.parse(fileContent);
  const newUsers = users.filter((user) => user.id !== +req.params.id);
  await fs.writeFile("users.json", JSON.stringify(newUsers, null, 2));
  res.send({ message: `User: ${req.params.id} died` });
});

server.listen(3000, () => console.log("listen to port 3000"));
