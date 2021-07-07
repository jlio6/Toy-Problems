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
    let temp = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prv;
      this.tail.next = null;
      temp.prv = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prv = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prv = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current;
    if (index <= this.length / 2) {
      let count = 0;
      current = this.head;
      while (count < index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      current = this.tail;
      while (count > index) {
        current = current.prv;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let current = get(index);
    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length - 1) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let current = this.get(index);
      let temp = current.next;
      current.next = newNode;
      newNode.prv = current;
      temp.prv = newNode;
      newNode.next = temp;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.shift(val);
    } else if (index === this.length - 1) {
      this.pop(val);
    } else {
      let temp = this.get(index);
      temp.prv.next = temp.next;
      temp.next.prv = temp.prv;
      temp.prv = null;
      temp.next = null;
      this.length--;
    }
    return true;
  }

  reverse() {
    let P = null;
    let C = this.head;
    let N;
    while (C) {
      N = C.next;
      C.next = P;
      C.prv = N;
      P = C;
      C = N;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.unshift(0);
list.reverse();
console.log(list);