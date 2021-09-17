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

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node, sep) {
  while (node != null) {
    answer += String(node.data);

    node = node.next;

    if (node != null) {
      answer += sep;
    }
  }
}

/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  let current = llist;
  let index = 0;
  while (current.next != null) {
    if (index == position - 1) {
      const node = new SinglyLinkedListNode(data);
      node.next = current.next;
      current.next = node;
      return llist;
    }
    current = current.next;
    index++;
  }
}

function main() {
  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    llist.insertNode(llistItem);
  }

  const data = parseInt(readLine(), 10);

  const position = parseInt(readLine(), 10);

  let llist_head = insertNodeAtPosition(llist.head, data, position);
  printSinglyLinkedList(llist_head, " ");
  answer += "\n";
  fs.writeFileSync(outputPath,answer);
}
