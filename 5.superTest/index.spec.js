const request = require("supertest");
const should = require("should");
const app = require("./index");

describe("GET /users는", () => {
  describe("성공시", () => {
    // 파라미터로 전달받dms done은 비동기로 동작하는 서버에 맞춰 비동기로 동작하게 만들어준다.
    it("유저 객체를 담은 배열로 응답", (done) => {
      request(app)
        .get("/users")
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });
    it("최대 limit 갯수만큼 응답한다.", (done) => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
    describe("실패", () => {
      it("limit이 숫자형이 아니면 400을 반환한다.", (done) => {
        request(app).get("/users?limit=two").expect(400).end(done);
      });
    });
  });
});
