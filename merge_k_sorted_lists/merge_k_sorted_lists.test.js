const { MinHeap, ListNode, mergeKLists } = require('./merge_k_sorted_lists');

const generateListofLinkLists = (list) => {
  return list.map((arr) => arrToLinkList(arr));
};

const arrToLinkList = (arr) => {
  if (arr.length === 0) return null;
  const result = new ListNode(arr[0]);
  let last = result;
  for (let i = 1; i < arr.length; i++) {
    last.next = new ListNode(arr[i]);
    last = last.next;
  }
  return result;
};

const linkListToArray = (root) => {
  const result = [];
  let node = root;
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
};

describe('ListNode', () => {
  it('should be defined', () => {
    expect(ListNode).toBeDefined();
  });

  describe('#val and #next prototype', () => {
    let root, child1, child2, child3;

    beforeEach(() => {
      root = new ListNode(1);
      child1 = new ListNode(2);
      child2 = new ListNode(3);
      child3 = new ListNode(4);
    });

    it('should be able to link 2 nodes together', () => {
      expect(root.val).toBe(1);
      expect(child1.val).toBe(2);
      root.next = child1;
      expect(root.next.val).toBe(2);
    });

    it('should be able to link multiple nodes togeter', () => {
      child2.next = child3;
      child1.next = child2;
      root.next = child1;
      expect(root.val).toBe(1);
      expect(root.next.val).toBe(2);
      expect(root.next.next.val).toBe(3);
      expect(root.next.next.next.val).toBe(4);
    });
  });
});

describe('MinHeap', () => {
  // beforeAll();
  it('should be defined', () => {
    expect(MinHeap).toBeDefined();
  });

  it('should have a store', () => {});

  it('its store should be type array', () => {
    expect();
  });

  it('should have push function on its prototype', () => {});

  it('should have extract function on its prototype', () => {});

  it('should be able to push values onto its store', () => {});

  it('should heapify up when pushing on value', () => {});

  it('should return value at first index', () => {});

  it('should remove first value from its store', () => {});

  it('should move last index to first index then heapify down from first index', () => {});
});

describe('#mergeKLists', () => {
  it('sorts lists', () => {
    const list = generateListofLinkLists([[1, 4, 5], [1, 3, 4], [2, 6]]);
    const testResult = mergeKLists(list);
    const testArray = linkListToArray(testResult);
    const answer = [1, 1, 2, 3, 4, 4, 5, 6];
    expect(testArray).toEqual(answer);
  });
});
