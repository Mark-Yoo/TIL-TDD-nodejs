const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
  // 로그를 남기지 않기 위한 함수
  logging: false,
});

// 모델을 정의
const User = sequelize.define("User", {
  // id는 자동생성
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = { Sequelize, sequelize, User };
