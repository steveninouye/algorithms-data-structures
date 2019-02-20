import { BinaryTreeNode } from '../../data_structures/trees/trees';
/*
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 

Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.
*/

/**
 *
 *
 * @param {BinaryTreeNode} root
 * @param {number} p
 * @param {number} q
 * @returns {BinaryTreeNode}
 */
// const lowestCommonAncestor = (root, p, q) => {
//   if (!root || root.val === p || root.val === q) return root;
//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);
//   return !left ? right : !right ? left : root;
// };
const lowestCommonAncestor = (root, p, q) => {
  const stack = [root];
  const parents = { [root.val]: { self: root, parent: null } };
  while (!parents[p] || !parents[q]) {
    const node = stack.pop();
    if (node.left) {
      let left = node.left;
      stack.push(left);
      parents[left.val] = { self: left, parent: node };
    }
    if (node.right) {
      let right = node.right;
      stack.push(right);
      parents[right.val] = { self: right, parent: node };
    }
  }
  const acenstors = {};
  while (p) {
    acenstors[p] = parents[p].self;
    if (!parents[p].parent) break;
    p = parents[p].parent.val;
  }
  while (!acenstors[q]) {
    if (!parents[q].parent) break;
    q = parents[q].parent.val;
  }
  return acenstors[q];
};

export default lowestCommonAncestor;
