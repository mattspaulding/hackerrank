const main = require("./insertNodeAtPosition");

test("case 0", () => {
  const inputString = `3
16
13
7
1
2
`;

  expect(main(inputString)).toBe("16 13 1 7");
});
