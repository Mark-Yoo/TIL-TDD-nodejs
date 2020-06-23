const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log("Logger");
  next();
};

app.use(logger);

app.listen(3000, () => {
  console.log("Server is running");
});
