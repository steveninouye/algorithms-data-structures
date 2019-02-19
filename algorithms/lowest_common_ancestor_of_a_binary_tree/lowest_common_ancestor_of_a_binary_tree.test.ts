import lowestCommonAncestor from './lowest_common_ancestor_of_a_binary_tree';
import { BinaryTreeNode } from '../../data_structures/trees/trees';

const convertArrayIntoBinaryTree = (arr: any[]): BinaryTreeNode => {
  if (arr.length === 0) return null;

  const store: BinaryTreeNode[] = [];

  let node: BinaryTreeNode = new BinaryTreeNode(arr[0]);
  store.push(node);

  let parentIdx: number = 0;

  for (let i = 1; i < arr.length; i++) {
    const val: any = arr[i];

    if (val !== null && i % 2 === 1) {
      store[parentIdx].left = new BinaryTreeNode(val);
    } else {
      if (val !== null) {
        store[parentIdx].right = new BinaryTreeNode(val);
      }
      parentIdx++;
    }
  }

  return store[0];
};

describe('lowestCommonAncestor', () => {
  it('should be defined', () => {
    expect(lowestCommonAncestor).toBeDefined();
  });
});
