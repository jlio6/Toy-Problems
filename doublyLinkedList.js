class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prv = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prv = this.tail;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.head === this.tail) {
      this.head = null;
    }
    let temp = this.tail;
    this.tail = temp.prv;
    this.tail.next = null;
    temp.prv = null;
    this.length--;
    return temp;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.pop();

console.log(list);