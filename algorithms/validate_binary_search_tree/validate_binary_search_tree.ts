import { BinaryTreeNode as TreeNode } from '../../data_structures/trees/trees';

export const validateBinarySearchTree = (
  root: TreeNode,
  max = Infinity,
  min = -Infinity
): boolean => {
  if (root === null) return true;
  if (root.val >= max || root.val <= min) return false;
  const left = validateBinarySearchTree(root.left, root.val, min);
  if (left === false) return false;
  const right = validateBinarySearchTree(root.right, max, root.val);
  if (right === false) return false;
  return true;
};
