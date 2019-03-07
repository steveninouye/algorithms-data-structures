import { BinaryTreeNode } from '../../data_structures/trees/trees';
/*
MUST DO AGAIN!!!!!!!!!!!!!!!!!!!!!!

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

const lowestCommonAncestor = (
  root: BinaryTreeNode,
  p: number,
  q: number
): BinaryTreeNode => {
  const stack = [root];
  const parents = { [root.val]: { parent: null, self: root } };
  while (!parents[q] || !parents[q]) {
    let node = stack.pop();
    if (node.right) {
      const rightVal = node.right.val;
      parents[rightVal] = { parent: node, self: node.right };
      stack.push(node.right);
    }
    if (node.left) {
      const leftVal = node.left.val;
      parents[leftVal] = { parent: node, self: node.left };
      stack.push(node.left);
    }
  }
  let node = parents[p].self;
  let nodes = { [node.val]: node };
  while (parents[node.val].parent) {
    node = parents[node.val].parent;
    nodes[node.val] = node;
  }
  while (!nodes[q]) {
    q = parents[q].parent.val;
  }
  return nodes[q];
};

export default lowestCommonAncestor;
