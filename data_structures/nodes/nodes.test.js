import { Node, SinglyLinkNode } from './nodes';

let node, node1, node2, node3, node4;
let child, child1, child2, child3, child4;

describe('Node', () => {
  it('should be defined', () => {
    expect(Node).toBeDefined();
  });

  describe('#constructor', () => {
    beforeEach(() => {
      node = new Node();
      node1 = new Node(5);
      node2 = new Node(6);
    });

    it('should be constructed with val', () => {
      expect(node1.val).toBe(5)
      expect(node2.val).toBe(6)
    });

    it('val of node should be undefined when constructed with no val', () => {
      expect(node.val).toBeUndefined();
    })
  });
});

describe('Singly Link Node', () => {
  it('should be defined', () => {
    expect(SinglyLinkNode).toBeDefined();
  });
});
