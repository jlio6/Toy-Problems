class BinaryHeap {
  constructor() {
    this.heap = [];
  }
  // 50, 42, 26, 12, 13, 25, 24, 51
  insert(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1;
    this.bubbleUp(idx);
    return this.heap;
  }

  bubbleUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2);
    if (idx <= 0) {
      return;
    }
    if (this.heap[idx] > this.heap[parentIdx]) {
      let temp = this.heap[idx];
      this.heap[idx] = this.heap[parentIdx];
      this.heap[parentIdx] = temp;
      this.bubbleUp(parentIdx);
    } else {
      return;
    }
  }

  removeMax() {
    this.heap[0] = this.heap.pop();
    console.log('original heap is now ', this.heap);
    this.bubbleDown(0);
    return this.heap;
  }
  // 50 26 40 4 12 13
  bubbleDown(idx) {

    let maxChildIdx;
    if (idx * 2 + 1 > this.heap.length - 1) {
      return;
    }
    if (idx * 2 + 2 > this.heap.length - 1) {
      maxChildIdx = 2 * idx + 1;
    } else {
      maxChildIdx = this.heap[2 * idx + 1] > this.heap[2 * idx + 2] ? 2 * idx + 1 : 2 * idx + 2;
    }
    if (this.heap[idx] < this.heap[maxChildIdx]) {
      let temp = this.heap[maxChildIdx];
      this.heap[maxChildIdx] = this.heap[idx];
      this.heap[idx] = temp;
      this.bubbleDown(maxChildIdx);
    }
    return;
  }
}

let maxHeap = new BinaryHeap();
maxHeap.insert(26);
maxHeap.insert(40);
maxHeap.insert(50);
maxHeap.insert(4);
maxHeap.insert(12);
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(100);
maxHeap.insert(101);

console.log(maxHeap.heap);
maxHeap.removeMax();

console.log(maxHeap.heap);