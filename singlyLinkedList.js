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
}

let list = new SinglyLinkedList();
list.push(3);
list.push(6);
list.push(6);
list.push(8);
list.pop();
list.pop();
list.pop();
list.pop();

console.log(list);