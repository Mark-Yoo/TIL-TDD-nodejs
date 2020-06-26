const express = require("express");
const app = express();
const morgan = require("morgan");
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Grace" },
  { id: 3, name: "Mathew" },
  { id: 4, name: "Sammy" },
];

app.use(morgan("dev"));

app.get("/users", (req, res) => {
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  res.json(users.slice(0, limit));
});

app.listen(3000, () => {
  console.log("express server is now running");
});

module.exports = app;
