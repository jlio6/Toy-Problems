class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return this;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return this;
  }

  shift() {
    let removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
    }
    this.length--;
    return removedHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let current = this.get(index);
    if (current === null) {
      return false;
    }
    current.val = value;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(6);
list.push(6);
list.push(8);
list.pop();
list.pop();
list.shift();
list.shift();
list.unshift(8);
list.unshift(6);
list.unshift(7);
list.set(1, 9);
list.set(2, 9);


console.log(list);
