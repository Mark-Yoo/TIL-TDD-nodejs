// database를 sync하는 역할을 해줄 파일
const models = require("../models");

module.exports = () => {
  // 내부적으로 promise 객체를 반환한다. 때문에 비동기처리를 내부적으로 지원한다.
  return models.sequelize.sync({ force: true });
};
