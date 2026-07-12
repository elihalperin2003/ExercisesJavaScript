// 6

function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  next();
}

// 7

const express = require("express");
const app = express();
app.use(express.json());
app.post("/users", (req, res) => {
  console.log(req.body);
  res.json({ received: req.body });
});

// 8

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "there is no auth" });
  }
  next();
}

// 11

function requestTimer(req, res, next) {
  req.startTime = Date.now();
  next();
}

// 12

app.use(express.json());

function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  next();
}

app.use(logger);

app.get("/public", (req, res) => {
  res.json({ message: req.method });
});
app.get("/private", auth, (req, res) => {
  res.json({ message: "Secret" });
});
