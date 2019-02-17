const { ListNode, mergeKLists } = require('./merge_k_sorted_lists');

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

describe('#mergeKLists', () => {
  it('sorts lists', () => {
    const list = generateListofLinkLists([[1, 4, 5], [1, 3, 4], [2, 6]]);
    const testResult = mergeKLists(list);
    const testArray = linkListToArray(testResult);
    const answer = [1, 1, 2, 3, 4, 4, 5, 6];
    expect(testArray).toEqual(answer);
  });
});
