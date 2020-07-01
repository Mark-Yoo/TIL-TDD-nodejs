// test code
const request = require("supertest");
const should = require("should");
const app = require("../../index");
const models = require("../../models");

describe("GET /users는", () => {
  describe.only("성공시", () => {
    const users = [{ name: "alice" }, { name: "bek" }, { name: "chris" }];
    // 파라미터로 전달받dms done은 비동기로 동작하는 서버에 맞춰 비동기로 동작하게 만들어준다.
    // only()를 사용하면 하나의 test case만 실행할 수 있다.
    before(() => {
      // mocha에서는 별도의 처리를 해주지 않아도 비동기 동작을 기다려준다.
      return models.sequelize.sync({ force: true });
    });
    // 생성되기만하고 비어있는 데이터베이스에 자료를 채워넣기 위한 코드 (bulkCreate을 사용하면 큰 규모의 데어터를 생성하는 것이 가능하다.)
    before(() => models.User.bulkCreate(users));
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
  });
  describe("실패", () => {
    it("limit이 숫자형이 아니면 400을 반환한다.", (done) => {
      request(app).get("/users?limit=two").expect(400).end(done);
    });
  });
});
describe("GET /users/1은", () => {
  describe("성공시", () => {
    it("id가 1인 유저 객체를 반환한다.", (done) => {
      request(app)
        .get("/users/1")
        .end((err, res) => {
          res.body.should.have.property("id", 1);
          done();
        });
    });
  });
  describe("실패시", () => {
    it("id가 숫자가 아닐 경우 400으로 응답한다.", (done) => {
      request(app).get("/users/one").expect(400).end(done);
    });
    it("id로 유저를 찾을 수 없을 경우 404로 응답한다.", (done) => {
      request(app).get("/users/999").expect(404).end(done);
    });
  });
});
describe("DELETE /users/1은", () => {
  describe("성공시", () => {
    it("204를 응답한다.", (done) => {
      request(app).delete("/users/1").expect(204).end(done);
    });
  });
  describe("실패시", () => {
    it("id가 숫자가 아닐 경우 400으로 응답한다", (done) => {
      request(app).delete("/users/one").expect(400).end(done);
    });
  });
});
describe("POST /users", () => {
  describe("성공시", () => {
    let name = "daniel";
    let body;
    before((done) => {
      request(app)
        .post("/users")
        .send({ name })
        .expect(201)
        .end((err, res) => {
          body = res.body;
          done();
        });
    });
    it("생성된 유저 객체를 반환한다.", () => {
      body.should.have.property("id");
    });
    it("입력한 name을 반환한다.", () => {
      body.should.have.property("name", name);
    });
  });
  describe("실패시", () => {
    it("name 파라미터 누락시 400을 반환한다", (done) => {
      request(app).post("/users").send({}).expect(400).end(done);
    });
    it("name 중복 시 409을 반환한다", (done) => {
      request(app).post("/users").send({ name: "Grace" }).expect(409).end(done);
    });
  });
});
describe("PUT /users/:id", () => {
  describe("성공시", () => {
    it("변경된 name을 응답한다.", (done) => {
      const name = "Dent";
      request(app)
        .put("/users/4")
        .send({ name })
        .end((err, res) => {
          res.body.should.have.property("name", name);
          done();
        });
    });
    describe("실패시", () => {
      it("정수가 아닌 id일 경우 400을 응답한다. ", (done) => {
        request(app).put("/users/one").expect(400).end(done);
      });
      it("name이 없을 경우 400을 응답한다. ", (done) => {
        request(app).put("/users/1").send({}).expect(400).end(done);
      });
      it("없는 유저일 경우 404를 응답한다. ", (done) => {
        request(app)
          .put("/users/999")
          .send({ name: "Martin" })
          .expect(404)
          .end(done);
      });
      it("이름이 중복일 경우 409를 응답한다. ", (done) => {
        request(app)
          .put("/users/2")
          .send({ name: "Grace" })
          .expect(409)
          .end(done);
      });
    });
  });
});
