import { SinglyLinkNode } from '../../data_structures/nodes/nodes';

/*
https://leetcode.com/problems/swap-nodes-in-pairs/
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {SinglyLinkNode} head
 * @return {SinglyLinkNode}
 */
const swapPairs = (head) => {
  if (!head) return null;
  let top = new SinglyLinkNode(0);
  let prev = top;
  let node1 = head;
  let node2 = head.next;
  while (node2) {
    let tail = node2.next;
    node2.next = node1;
    prev.next = node2;
    prev = node1;
    if (tail) {
      node1 = tail;
      node2 = tail.next;
    } else {
      break;
    }
  }
  return top.next;
};

export default swapPairs;
