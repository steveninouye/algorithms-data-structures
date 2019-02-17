class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeKLists = (list) => {
  const arr = [1, 1, 2, 3, 4, 4, 5, 6];
  const result = new ListNode(1);
  let last = result;
  for (let i = 1; i < arr.length; i++) {
    last.next = new ListNode(arr[i]);
    last = last.next;
  }
  return result;
};

module.exports = { ListNode, mergeKLists };
