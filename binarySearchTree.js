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
        return this;
    }
    if (val === node.val) {
        return undefined;
    }
    if (val < node.val) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        }
        this.insert(val, node.left);
    }
    else {
        if (node.right === null) {
          node.right = newNode;
          return this;
        }
        this.insert(val, node.right);
    }
  }

  contains(target, current = this.root) {
    if (current === null) {
      return false;
    }
    if (current.val === target) {
      return true;
    }
    if (target < current.val) {
      return this.contains(target, current.left);
    }
    if (target > current.val) {
      return this.contains(target, current.right);
    }
  }

  bfs() {
    let output = [];
    let queue = [];

    queue.push(this.root);
    while (queue.length) {
      let visitedNode = queue.shift();
      output.push(visitedNode.val);
      if (visitedNode.left) {
        queue.push(visitedNode.left);
      }
      if (visitedNode.right) {
        queue.push(visitedNode.right);
      }
    }
    return output;
  }

  dfs(node = this.root) {
    let output = [];
    output.push(node.val);
    if (node.left) {
      output = output.concat(this.dfs(node.left));
    }
    if (node.right) {
      output = output.concat(this.dfs(node.right));
    }
    return output;
  }

}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(11);
bst.insert(12);
bst.insert(4);


console.log(bst.dfs());
