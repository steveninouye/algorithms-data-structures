export const minSort = (a: number, b: number) => a - b;

export const maxSort = (a: number, b: number) => b - a;

export const childrenIdxs = (idx: number, len: number) => {
  const childIdx1: number = idx * 2 + 1;
  const childIdx2: number = idx * 2 + 2;
  return [childIdx1, childIdx2].filter((i: number) => i < len);
};

export const parentIdx = (idx: number) => {
  if (idx === 0) return null;
  return Math.floor((idx - 1) / 2);
};

export class Heap {
  store: number[];
  cb: Function | undefined;

  constructor(cb?: Function) {
    this.store = [];
    this.cb = cb;
  }

  extract() {
    const result: number = this.store[0];
    this.store[0] = this.store.pop();

    let parentIndex: number = 0;
    const val: number = this.store[parentIndex];

    let childrenIndexs: number[] = childrenIdxs(parentIndex, this.store.length);

    let validChildren = childrenIndexs.filter((i) => {
      let child: number = this.store[i];
      return this.cb(val, child) > 0;
    });

    while (validChildren.length > 0) {
      let idx: number;

      if (validChildren.length === 1) {
        idx = validChildren[0];
      } else {
        const [childIdx1, childIdx2]: number[] = validChildren;
        const childVal1: number = this.store[childIdx1];
        const childVal2: number = this.store[childIdx2];

        idx = this.cb(childVal1, childVal2) < 0 ? childIdx1 : childIdx2;
      }

      const temp: number = this.store[idx];
      this.store[idx] = val;
      this.store[parentIndex] = temp;

      parentIndex = idx;
      childrenIndexs = childrenIdxs(parentIndex, this.store.length);

      validChildren = childrenIndexs.filter((i) => {
        let child = this.store[i];
        return this.cb(val, child) > 0;
      });
    }

    return result;
  }

  push(val: number) {
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
