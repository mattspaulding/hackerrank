const path = require("path");
const runTests = require("../../lib/test.lib");
const start = require("./func");
const dirname = path.resolve(__dirname);

runTests(
  "Insert a node at a specific position in a linked list",
  [0, 9],
  dirname,
  start
);
