export class ListNode {
  val: any;
  next: ListNode;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class MinHeap {
  store: ListNode[];
  constructor() {
    this.store = [];
  }

  count() {
    return this.store.length;
  }

  insert(val: ListNode) {
    this.store.push(val);
    this.heapifyUp();
  }

  extract() {
    const { store } = this;
    const result = store[0];
    store[0] = store.pop();
    this.heapifyDown();
    return result;
  }

  heapifyUp(idx = this.store.length - 1) {
    const { store } = this;
    const parentIdx = Math.floor((idx - 1) / 2);
    if (store[idx].val < store[parentIdx].val) {
      const temp = store[idx];
      store[idx] = store[parentIdx];
      store[parentIdx] = temp;
      this.heapifyUp(parentIdx);
    }
  }

  heapifyDown(idx = 0) {
    const { store } = this;
    const childIdx1 = idx * 2 + 1;
    const childIdx2 = idx * 2 + 2;
    const minChildIdx =
      store[childIdx1].val > store[childIdx2].val ? childIdx2 : childIdx1;
    if (store[minChildIdx].val < store[idx].val) {
      const temp = store[idx];
      store[idx] = store[minChildIdx];
      store[minChildIdx] = temp;
      this.heapifyDown(minChildIdx);
    }
  }
}

export const mergeKLists = (list: ListNode[]): ListNode => {
  const head = new ListNode(0);
  let currNode = head;
  const heap = new MinHeap();
  for (let node of list) {
    heap.insert(node);
  }
  while (heap.count() > 0) {
    const node = heap.extract();
    currNode.next = node;
    if (node.next) {
      heap.insert(node.next);
    }
  }
  return head.next;
};
