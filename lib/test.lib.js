const fs = require("fs");

function runTests(description, testNums, dirname, start) {
  describe(description, () => {
    testNums.forEach((num) => {
      it("test case: " + num.toString(), () => {
        var input = fs
          .readFileSync(`${dirname}/files/case_${num}_input.txt`)
          .toString();
        var expected = fs
          .readFileSync(`${dirname}/files/case_${num}_expected.txt`)
          .toString();
        start(input, `${dirname}/files/case_${num}_result.txt`);
        var result = fs
          .readFileSync(`${dirname}/files/case_${num}_result.txt`)
          .toString();
        expect(result).toBe(expected);
      });
    });
  });
}
module.exports = runTests;
