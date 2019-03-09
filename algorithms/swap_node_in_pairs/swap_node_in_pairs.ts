import { SinglyLinkNode as ListNode } from '../../data_structures/nodes/nodes';

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
 * @param {ListNode} head
 * @return {ListNode}
 */
export const swapPairs = (head: ListNode): ListNode => {
  const dummy = new ListNode(0);
  let prev = dummy;
  dummy.next = head;
  while (head && head.next) {
    let right = head.next;
    head.next = right.next;
    right.next = head;
    prev.next = right;
    prev = head;
    head = prev.next;
  }
  return dummy.next;
};
