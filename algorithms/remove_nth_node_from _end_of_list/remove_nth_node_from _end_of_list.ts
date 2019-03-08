import { SinglyLinkNode as ListNode } from '../../data_structures/nodes/nodes';
/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

const removeNthFromEnd = (head: ListNode, n: number): ListNode => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fastNode = dummy;
  while (n > 0) {
    fastNode = fastNode.next;
    n--;
  }
  let slowNode = dummy;
  while (fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
  }
  slowNode.next = slowNode.next.next;
  return dummy.next;
};
