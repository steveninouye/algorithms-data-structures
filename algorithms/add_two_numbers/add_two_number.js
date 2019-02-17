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

const addTwoNumbers = (l1, l2) => {
  let carry = 0,
    lastNode;
  let result = new ListNode(0);
  lastNode = result;
  while (l1 && l2) {
    let sum = l1.val + l2.val + carry;
    if (sum > 9) {
      carry = 1;
      lastNode.next = new ListNode(sum - 10);
    } else {
      carry = 0;
      lastNode.next = new ListNode(sum);
    }
    l1 = l1.next;
    l2 = l2.next;
    lastNode = lastNode.next;
  }
  while (l1) {
    let sum = l1.val + carry;
    if (sum > 9) {
      carry = 1;
      lastNode.next = new ListNode(sum - 10);
    } else {
      carry = 0;
      lastNode.next = new ListNode(sum);
    }
    l1 = l1.next;
    lastNode = lastNode.next;
  }
  while (l2) {
    let sum = l2.val + carry;
    if (sum > 9) {
      carry = 1;
      lastNode.next = new ListNode(sum - 10);
    } else {
      carry = 0;
      lastNode.next = new ListNode(sum);
    }
    l2 = l2.next;
    lastNode = lastNode.next;
  }
  if (carry !== 0) {
    lastNode.next = new ListNode(carry);
  }
  return result.next;
};
