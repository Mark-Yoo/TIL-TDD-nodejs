const app = require("../index");
const syncDB = require("./sync-db");

// 서버가 실행될 때에 데이터베이스를 동기화하기 위해 syncDB가 반환하는 promise를 받아 이후 과정을 처리한다.
syncDB().then((_) => {
  console.log("Database synced");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
