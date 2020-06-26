const utils = require("./utils");
// const assert = require("assert");
const should = require("should");

// 함수 단위의 기능을 테스트
describe("utils.js모듈의 capitalize() 함수는", () => {
  it("문자열의 첫번째 문자를 대문자로 변환한다.", () => {
    const result = utils.capitalize("hello");
    // assert.equal(result, "Hello");
    result.should.be.equal("Hello");
  });
});