const fs = require("fs");
const path = require("path");

const start = require("./insertNodeAtPosition");

describe("insertNodeAtPosition", () => {
  beforeEach(() => jest.resetModules());
  let name;
  name = "case0";
  it(name, () => {
    var input = fs
      .readFileSync(path.resolve(__dirname, `./${name}_input.txt`))
      .toString();
    var expected = fs
      .readFileSync(path.resolve(__dirname, `./${name}_expected.txt`))
      .toString();
    expect(start(input)).toBe(expected);
  });
  name = "case9";
  it(name, () => {
    var input = fs
      .readFileSync(path.resolve(__dirname, `./${name}_input.txt`))
      .toString();
    var expected = fs
      .readFileSync(path.resolve(__dirname, `./${name}_expected.txt`))
      .toString();
    debugger;
    expect(start(input)).toBe(expected);
  });
});
