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
});

describe('Heap', () => {
  it('should be defined', () => {
    expect(Heap).toBeDefined();
  });

  describe('#constructor', () => {
    it('should be able to take a callback', () => {
      const fn = () => 888;
      const heap = new Heap();
      expect(heap.cb).toBe(maxSort);
      // expect(heap.cb).toBe(fn);
      // expect(typeof heap.cb).toBe('function');
      // expect(heap.cb()).toBe(888);
      // const mock = jest.fn()
      // mock(heap.cb)
      // mock()
      // expect(minSort).toBeCalled()
    });
  });
});
