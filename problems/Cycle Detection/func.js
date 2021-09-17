const fs = require("fs");

let inputString = "";
let currentLine = 0;
let outputPath = "";

function start(input, output) {
  currentLine = 0;
  outputPath = output;
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

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

// Complete the hasCycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {
  let map = new Map();
  while (head.next !== null) {
    if (map.has(head.data)) return true;
    map.set(head.data, true);
    head = head.next;
  }
  return false;
}

function main() {
  const ws = fs.createWriteStream(outputPath);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const index = parseInt(readLine(), 10);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    let extra = new SinglyLinkedListNode(-1);
    let temp = llist.head;

    for (let i = 0; i < llistCount; i++) {
      if (i == index) {
        extra = temp;
      }

      if (i != llistCount - 1) {
        temp = temp.next;
      }
    }

    temp.next = extra;

    let result = hasCycle(llist.head);

    ws.write((result ? 1 : 0) + "\n");
  }

  ws.end();
  ws.close()
}
