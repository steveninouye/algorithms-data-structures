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

  insert(val: ListNode) {
    this.store.push(val);
    this.heapifyUp();
  }

  extract() {
    const { store } = this;
    const result = store[0];
    store[0] = store.pop();
    this.heapifyDown()
    return result;
  }

  heapifyUp(idx = this.store.length - 1) {
    const { store } = this;
    const parentIdx = Math.floor((idx - 1) / 2);
    if (store[idx] < store[parentIdx]) {
      const temp = store[idx];
      store[idx] = store[parentIdx];
      store[parentIdx] = temp;
      this.heapifyUp(parentIdx);
    }
  }

  heapifyDown(idx = 0){
    
  }
}

export const mergeKLists = (list: ListNode[]): ListNode => {
  const head = new ListNode(0);
  let currNode = head;
  const heap = new MinHeap();
  for (let node of list) {
    heap.insert(node);
  }
  while (heap.store.length > 0) {
    const node = heap.extract();
    currNode.next = node;
    if (node.next) {
      heap.insert(node.next);
    }
  }
  return head.next;
};
