import { SinglyLinkNode } from '../../data_structures/nodes/nodes';
import swapPairs from './swap_node_in_pairs';

describe('swap pairs', () => {
  it('should be defined', () => {
    expect(swapPairs).toBeDefined();
  });

  it('should swap every two nodes', () => {
    const root = new SinglyLinkNode(3);
    const node1 = new SinglyLinkNode(4);
    const node2 = new SinglyLinkNode(5);
    const node3 = new SinglyLinkNode(6);
    const node4 = new SinglyLinkNode(7);
    const node5 = new SinglyLinkNode(8);
    root.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    const result = swapPairs(root);
    expect(result.val).toBe(4);
    expect(result.next.val).toBe(3);
    expect(result.next.next.val).toBe(6);
    expect(result.next.next.next.val).toBe(5);
    expect(result.next.next.next.next.val).toBe(8);
    expect(result.next.next.next.next.next.val).toBe(7);
  });
});
