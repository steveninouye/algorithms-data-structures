class ListNode {
  val: number;
  next: ListNode;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
https://leetcode.com/problems/merge-two-sorted-lists/
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
@return {ListNode}
*/

export const mergeTwoLists = (l1, l2) => {
  let result = new ListNode(0);
  let currentNode = result;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      currentNode.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      currentNode.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    currentNode = currentNode.next;
  }
  if (l1) currentNode.next = l1;
  if (l2) currentNode.next = l2;
  return result.next;
};
