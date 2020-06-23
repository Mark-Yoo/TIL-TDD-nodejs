// const fs = require("fs");
// // const data = fs.readFileSync("./data.txt", "utf-8");

// // 콜백 함수를 파라미터로 전달받는 readFile 비동기 함수 (제대로 자료를 받아오지 못했다면 첫번째로 들어오는 err 값을 반환할 수 있다.)
// const data = fs.readFile("./data.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// console.log(data);

// node.js 서버 기본 코드
const http = require("http");

// 내 컴퓨터를 사용하는 주소인 '127.0.0.1'
const hostname = "127.0.0.1";
// 어떤 포트를 사용할 것인가
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
