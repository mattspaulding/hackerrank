const fs = require("fs");

let inputString = "";
let currentLine = 0;
let outputPath = "";
let answer = "";

function start(input, output) {
  currentLine = 0;
  outputPath = output;
  answer = "";
  inputString = input
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
}
module.exports = start;

function readLine() {
  return inputString[currentLine++];
}

function isBalanced(s) {
  // Write your code here
  let chars = [...s];

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "}" || chars[i] === ")" || chars[i] === "]") {
      let left = chars[i - 1];
      let right = chars[i];

      if (
        (left === "{" && right === "}") ||
        (left === "(" && right === ")") ||
        (left === "[" && right === "]")
      ) {
        // continue
      } else {
        return "NO";
      }

      chars.splice(i - 1, 2);
      i = 0;
    }
  }
  if (chars.length > 0) return "NO";
  return "YES";
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine();

    const result = isBalanced(s);

    answer += result + "\n";
  }

  fs.writeFileSync(outputPath, answer);
}
