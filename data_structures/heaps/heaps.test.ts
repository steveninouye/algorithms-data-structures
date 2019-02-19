import {
  minSort,
  maxSort,
  childrenIdxs,
  parentIdx,
  Heap,
  MinHeap,
  MaxHeap
} from './heaps';

describe('#minSort', () => {
  it('should be defined', () => {
    expect(minSort).toBeDefined();
  });

  it('should return a negative number when arg1 < arg2', () => {
    expect(minSort(5, 8)).toBeLessThan(0);
  });

  it('should return a positive number when arg1 > arg2', () => {
    expect(minSort(8, 5)).toBeGreaterThan(0);
  });

  it('should return 0 when both arguments are equal', () => {
    expect(minSort(8, 8)).toBe(0);
  });

  it('can be used as ascending sort callback', () => {
    let nums = [5, 4, 3, 2, 1];
    nums.sort(minSort);
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('#maxSort', () => {
  it('should be defined', () => {
    expect(maxSort).toBeDefined();
  });

  it('should return a negative number when arg1 > arg2', () => {
    expect(maxSort(8, 5)).toBeLessThan(0);
  });

  it('should return a positive number when arg1 < arg2', () => {
    expect(maxSort(5, 8)).toBeGreaterThan(0);
  });

  it('should return 0 when both arguments are equal', () => {
    expect(maxSort(8, 8)).toBe(0);
  });

  it('can be used as descending sort callback', () => {
    let nums = [1, 2, 3, 4, 5];
    nums.sort(maxSort);
    expect(nums).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('Heap', () => {
  it('should be defined', () => {
    expect(Heap).toBeDefined();
  });

  describe('#constructor', () => {
    const heap1 = new Heap(maxSort);
    const heap2 = new Heap(minSort);
    it('should be able to take a callback', () => {
      expect(heap1.cb).toBe(maxSort);
      expect(heap2.cb).toBe(minSort);
    });

    it('call back should take 2 arguments', () => {
      expect(heap1.cb(3, 5)).toBe(2);
      expect(heap2.cb(7, 5)).toBe(2);
    });
  });
});
