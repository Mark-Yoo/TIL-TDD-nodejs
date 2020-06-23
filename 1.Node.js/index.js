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

// http 모듈이 가진 메서드 중 createServer를 사용하여 실행할 함수를 콜백함수로 전달한다. 이 코드는 클라이언트가 접속했을 때 나오는 코드이다.
const server = http.createServer((req, res) => {
  console.log(req.url);

  // routing을 하기 위한 request의 url 파악하기
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello World\n");
  } else if (req.url === "/user") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("This is User\n");
  } else {
    res.statusCode = 404;
    res.end("Not Found\n");
  }
});

// listen은 서버를 요청대기 상태로 만들어주는 코드이다.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
