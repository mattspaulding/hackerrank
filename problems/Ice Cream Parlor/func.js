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

/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
  // Write your code here

  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(m - arr[i])) {
      return [map.get(m - arr[i]) + 1, i + 1];
    }
    map.set(arr[i], i);
  }
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const m = parseInt(readLine().trim(), 10);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));

    const result = icecreamParlor(m, arr);

    answer += result.join(" ") + "\n";
  }

  fs.writeFileSync(outputPath, answer);
}
