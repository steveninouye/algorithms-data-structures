export const minSort = (a, b) => a - b;

export const maxSort = (a, b) => b - a;

export const childrenIdxs = (idx, len) => {
  const childIdx1 = idx * 2 + 1;
  const childIdx2 = idx * 2 + 2;
  return [childIdx1, childIdx2].select((i) => i < len);
};

export const parentIdx = (idx) => {
  if (idx === 0) return null;
  return Math.floor((idx - 1) / 2);
};

export class Heap {
  constructor(cb) {
    this.store = [];
    this.cb = cb;
  }

  extract() {
    const result = this.store[0];
    this.store[0] = this.store.pop();

    let parentIndex = 0;
    const val = this.store[parentIndex];

    let childrenIndexs = childrenIdxs(parentIndex, this.store.length);

    let validChildren = childrenIndexs.select((i) => {
      let child = this.store[i];
      return this.cb(val, child) > 0;
    });

    while (validChildren.length > 0) {
      let idx;

      if (validChildren.length === 1) {
        idx = validChildren[0];
      } else {
        const [childIdx1, childIdx2] = validChildren;
        const childVal1 = this.store[childIdx1];
        const childVal2 = this.store[childIdx2];
        
        idx = this.cb(childVal1, childVal2) < 0 ? childIdx1 : childIdx2;
      }

      const temp = this.store[idx];
      this.store[idx] = val;
      this.store[parentIdx] = temp;

      parentIndex = idx;
      childrenIndexs = childrenIdxs(parentIndex, this.store.length);

      validChildren = childrenIndexs.select((i) => {
        let child = this.store[i];
        return this.cb(val, child) > 0;
      });
    }

    return result;
  }

  push(val) {
    this.store.push(val);
  }

  peek() {
    return this.store[0];
  }
}

export class MinHeap extends Heap {
  constructor() {
    super(minSort);
  }
}

export class MaxHeap extends Heap {
  constructor() {
    super(maxSort);
  }
}
