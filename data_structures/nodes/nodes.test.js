import { Test, Node, SinglyLinkNode } from './nodes';

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
      expect(node1.val).toBe(5);
      expect(node2.val).toBe(6);
    });

    it('val of node should be undefined when constructed with no val', () => {
      expect(node.val).toBeNull();
    });
  });
});

describe('Singly Link Node', () => {
  it('should be defined', () => {
    expect(SinglyLinkNode).toBeDefined();
  });

  describe('#constructor', () => {
    beforeEach(() => {
      node = new SinglyLinkNode();
    });

    it('should extend Node class', () => {
      expect(node).toBeInstanceOf(Node);
    });

    it("node's #next should default to null", () => {
      expect(node.next).toBeNull();
    });
  });

  describe('#next', () => {
    beforeEach(() => {
      node = new SinglyLinkNode(4);
      node1 = new SinglyLinkNode(5);
      node2 = new SinglyLinkNode(6);
      node3 = new SinglyLinkNode(7);
      node.next = node1;
    });

    it('should connect 2 nodes together', () => {
      expect(node.val).toBe(4);
      expect(node.next.val).toBe(5);
    });

    it('should connect multiple nodes together', () => {
      node2.next = node3;
      node.next.next = node2;
      expect(node.next.next.val).toBe(6);
      expect(node.next.next.next.val).toBe(7);
    });
  });
});
