// 1

function addTime(req, res, next) {
  req.requestTime = new Date().toISOString();
  next();
}

// 3

function hasBody(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: "Body cennot be empty" });
  }
  next();
}

// 5

function longPassword(req, res, next) {
  if (req.password.length < 8) {
    res.status(400).json({ message: "Password nust be at least 3 chars" });
  }
  next();
}

// 6

function admin(req, res, next) {
  if (!req.query || req.query.admin !== "true") {
    res.status(403).json({ message: "Forbidden: Admins only" });
  }
  next();
}

// 9

function errorHandler(err, req, res, next) {
  res.json({ error: true, message: "message" });
}

// 11

function blockIp(req, res, next) {
  if (req.ip === "123.123.123.123") {
    req.status(403).json("Your IP is blocked");
  }
  next();
}

// 13

function checkContentType(req, res, next) {
  if (req.header.content - tpye === "application/jsob") {
    res.status(415);
  }
  next();
}

// 17

function isIdFiveCharcs(req, res, next) {
  if (req.params.id.length !== 5) {
    res.json("ID must be exactly 5 characters");
  }
  next();
}

// 21

function duplecate(req, res, next) {
  if (!req.query || req.query.admin !== "true" || !req.header.x - api - key) {
    res.json({});
  }
  next();
}

// 25

function deleted(req, res, next) {
  if (req.method === "delete") {
    console.log("deleted");
  }
  next();
}

// הערות כלליות:
// צריך לעשות return לכל next בנתיב הראשי
