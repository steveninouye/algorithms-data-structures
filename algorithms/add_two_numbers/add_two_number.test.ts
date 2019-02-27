import addTwoNumbers from './add_two_number';
import { SinglyLinkNode as ListNode } from '../../data_structures/nodes/nodes';

describe('#addTwoNumbers', () => {
  it('should be defined', () => {
    expect(addTwoNumbers).toBeDefined();
  });

  let list1, list2, list3, list4

  beforeAll(() => {
    list1 = new ListNode(2);
    list1.next = new ListNode(4);
    list1.next.next = new ListNode(3);
    list2 = new ListNode(5);
    list2.next = new ListNode(6);
    list2.next.next = new ListNode(4);
    list3 = new ListNode(9);
    list3.next = new ListNode(9);
    list3.next.next = new ListNode(9);
    list4 = new ListNode(9)
  });

  it('should add two link lists equally', () => {
    
  })

});
