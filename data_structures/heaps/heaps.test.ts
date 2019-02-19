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

  describe('#extract', () => {
    const heap = new Heap(minSort);
    heap.store = [4, 5, 6, 7, 8, 9];

    it('should return the first element', () => {
      expect(heap.extract()).toBe(4);
    });

    it('should heapify down the last element from the first index', () => {
      expect(heap.store).toEqual([5, 7, 6, 9, 8]);
    });
  });

  describe('#push', () => {
    const heap = new Heap(minSort);
    heap.store = [6, 7, 8, 9];

    it('should add new value to store', () => {
      heap.push(10);
      expect(heap.store).toContain(10);
    });

    it('should return Heap', () => {
      expect(heap.push(11)).toBe(heap);
    });

    it('should heapify up new value', () => {
      heap.push(3);
      expect(heap.store).toEqual([3, 7, 6, 9, 10, 11, 8]);
    });
  });

  describe('#peek', () => {
    it('should show the first element in the store', () => {
      const heap = new Heap();
      heap.store = [1, 2, 3];
      expect(heap.peek()).toBe(1);
    });
  });
});

describe('MinHeap', () => {
  it('should be defined', () => {
    expect(MinHeap).toBeDefined();
  });

  it('should extend Heap class', () => {
    const heap = new MinHeap();
    expect(heap).toBeInstanceOf(Heap);
  });

  describe('#constructor', () => {
    it('should set callback to min sort', () => {
      const heap = new MinHeap();
      expect(heap.cb).toBe(minSort);
    });
  });

  describe('#extract', () => {
    const heap = new MinHeap();
    heap.store = [4, 5, 6, 7, 8, 9];

    it('should return the first element', () => {
      expect(heap.extract()).toBe(4);
    });

    it('should heapify down the last element from the first index', () => {
      expect(heap.store).toEqual([5, 7, 6, 9, 8]);
    });
  });

  describe('#push', () => {
    const heap = new MinHeap();
    heap.store = [6, 7, 8, 9];

    it('should add new value to store', () => {
      heap.push(10);
      expect(heap.store).toContain(10);
    });

    it('should return Heap', () => {
      expect(heap.push(11)).toBe(heap);
    });

    it('should heapify up new value', () => {
      heap.push(3);
      expect(heap.store).toEqual([3, 7, 6, 9, 10, 11, 8]);
    });
  });

  describe('#peek', () => {
    it('should show the first element in the store', () => {
      const heap = new Heap();
      heap.store = [1, 2, 3];
      expect(heap.peek()).toBe(1);
    });
  });
});

describe('MaxHeap', () => {
  it('should be defined', () => {
    expect(MaxHeap).toBeDefined();
  });

  it('should extend Heap class', () => {
    const heap = new MaxHeap();
    expect(heap).toBeInstanceOf(Heap);
  });

  describe('#constructor', () => {
    it('should set callback to max sort', () => {
      const heap = new MaxHeap();
      expect(heap.cb).toBe(maxSort);
    });
  });

  describe('#extract', () => {
    const heap = new MaxHeap();
    heap.store = [9, 8, 7, 6, 5, 4];

    it('should return the first element', () => {
      expect(heap.extract()).toBe(9);
    });

    it('should heapify down the last element from the first index', () => {
      expect(heap.store).toEqual([8, 6, 7, 4, 5]);
    });
  });

  describe('#push', () => {
    const heap = new MaxHeap();
    heap.store = [7, 6, 5, 4];

    it('should add new value to store', () => {
      heap.push(3);
      expect(heap.store).toContain(3);
    });

    it('should return Heap', () => {
      expect(heap.push(2)).toBe(heap);
    });

    it('should heapify up new value', () => {
      heap.push(8);
      expect(heap.store).toEqual([8, 6, 7, 4, 3, 2, 5]);
    });
  });

  describe('#peek', () => {
    it('should show the first element in the store', () => {
      const heap = new MaxHeap();
      heap.store = [3, 2, 1];
      expect(heap.peek()).toBe(3);
    });
  });
});
