const path = require("path");
const runTests = require("../../lib/test.lib");
const start = require("./func");
const dirname = path.resolve(__dirname);

runTests(dirname, [0, 1], dirname, start);
