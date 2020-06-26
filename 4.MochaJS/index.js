const express = require("express");
const app = express();
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Grace" },
  { id: 3, name: "Mathew" },
  { id: 4, name: "Sammy" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("express server is now running");
});
