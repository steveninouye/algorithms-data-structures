class ListNode {
  val: any;
  next: ListNode;

  constructor(val) {
    this.val = val;
    this.next = null;
  }

  
}

export const mergeKLists = (list: ListNode[]): ListNode => {
  const head = new ListNode(0);
  let currNode = head;
  const heap = new MinHeap();
  for (let node of list) {
    heap.push(node);
  }
  while (heap.store.length > 0) {
    const node = heap.extract();
    currNode.next = node;
    if (node.next) {
      heap.push(node.next);
    }
  }
  return head.next;
};
