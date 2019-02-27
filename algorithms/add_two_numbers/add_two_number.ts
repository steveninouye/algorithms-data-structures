import { SinglyLinkNode as ListNode } from '../../data_structures/nodes/nodes';
/*
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
/**
 *
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let head = new ListNode(0);
  let curr = head;
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    curr.next = new ListNode(sum);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry > 0) curr.next = new ListNode(carry);
  return head.next;
};

export default addTwoNumbers;
