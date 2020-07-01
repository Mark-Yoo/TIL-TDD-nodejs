const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const user = require("./api/user");

// process로 들어오는 env.NODE.ENV는 package.json에 있는 NODE_ENV=test 를 받아온다.
// 테스트 환경에서는 디테일한 로그를 찍지 않도록 만든다.
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", user);
app.listen(3000, () => {
  console.log("express server is now running");
});

module.exports = app;
