class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, node = this.root) {
    let newNode = new Node(val);
    if (this.root === null) {
        this.root = newNode;
        return;
    }
    if (val === node.val) {
        return undefined;
    }
    if (val < node.val) {
        if (node.left === null)
            node.left = newNode;
        else
            this.insert(val, node.left);
    }
    else {
        if (node.right === null)
            node.right = newNode;
        else
            this.insert(val, node.right);
    }
  }

}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(11);
bst.insert(12);

console.log(bst);
