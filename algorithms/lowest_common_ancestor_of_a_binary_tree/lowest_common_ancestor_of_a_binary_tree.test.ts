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

    if (i % 2 === 1) {
      if (val === null) {
        store.push(null);
      } else {
        node = new BinaryTreeNode(val);
        store[parentIdx].left = node;

        store.push(node);
      }
    } else {
      if (val === null) {
        store.push(null);
      } else {
        node = new BinaryTreeNode(val);
        store[parentIdx].right = node;
        store.push(node);
      }
      parentIdx++;
    }
  }

  return store[0];
};

describe('convertArrayIntoBinaryTree', () => {
  it('should convert array into binary tree', () => {
    let root: BinaryTreeNode = convertArrayIntoBinaryTree([
      3,
      5,
      1,
      6,
      2,
      0,
      8,
      null,
      null,
      7,
      4
    ]);
    expect(root.left.right.val).toBe(2);
    expect(root.left.left.val).toBe(6);
    expect(root.left.left.left).toBeNull();
    expect(root.right.right.val).toBe(8);
    expect(root.right.left.val).toBe(0);
  });
});

describe('lowestCommonAncestor', () => {
  it('should be defined', () => {
    expect(lowestCommonAncestor).toBeDefined();
  });

  let root: BinaryTreeNode = convertArrayIntoBinaryTree([
    3,
    5,
    1,
    6,
    2,
    0,
    8,
    null,
    null,
    7,
    4
  ]);

  it('should return lowest common parent if nodes are not descendants of the other', () => {
    expect(lowestCommonAncestor(root, 5, 1)).toBeInstanceOf(BinaryTreeNode);
    expect(lowestCommonAncestor(root, 5, 1).val).toBe(3);
  });

  it('should return parent node if parent node equals one and child equals other', () => {
    expect(lowestCommonAncestor(root, 5, 4)).toBeInstanceOf(BinaryTreeNode);
    expect(lowestCommonAncestor(root, 5, 4).val).toBe(5);
  });
});
