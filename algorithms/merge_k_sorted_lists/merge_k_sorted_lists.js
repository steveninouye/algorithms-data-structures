class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MinHeap {
  constructor() {
    this.store = [];
  }

  extract() {
    let result = this.store[0];
    let val = this.store.pop();
    this.store[0] = val;
    let childIndexs = this.childIdxs(0);
    while (childIndexs.length > 0) {
      let validIdxs = childIndexs.filter((i) => {
        return this.store[i] < val;
      });
      if (validIdxs.length === 0) {
        break;
      } else if (validIdxs.length === 1) {
      } else {
      }
    }
    return result;
  }

  push(val) {
    this.store.push(val);
    let childIndex = this.store.length - 1;
    let parentIndex = this.parentIdx(childIndex);
    while (parentIndex) {
      let parent = this.store[parentIndex];
      let child = this.store[childIndex];
      if (child < parent) {
        let temp = child;
        child = parent;
        parent = temp;
        childIndex = parentIndex;
        parentIndex = this.parentIdx(childIndex);
      } else {
        parentIndex = null;
      }
    }
    return this;
  }

  childIdxs(parentIdx) {
    let idx1 = parentIdx * 2 + 1;
    idx1 = idx1 < this.store.length ? idx1 : null;
    let idx2 = parentIdx * 2 + 2;
    idx2 = idx2 < this.store.length ? idx2 : null;
    return [idx1, idx2].filter((e) => e);
  }

  parentIdx(childIdx) {
    if (childIdx === 0) return null;
    return Math.floor((childIdx - 1) / 2);
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

module.exports = { MinHeap, ListNode, mergeKLists };
