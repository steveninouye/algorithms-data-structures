import { Test, Node, SinglyLinkNode, DoublyLinkNode } from './nodes';

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
      node = new SinglyLinkNode(1);
    });

    it('should extend Node class', () => {
      expect(node).toBeInstanceOf(Node);
      expect(node.val).toBe(1);
    });

    it('should assign #next as null', () => {
      expect(node.next).toBeNull();
    });

    it('should not have #prev defined', () => {
      expect(node.prev).toBeUndefined();
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

describe('Doubly Link Node', () => {
  it('should be defined', () => {
    expect(DoublyLinkNode).toBeDefined();
  });

  describe('#constructor', () => {
    beforeEach(() => {
      node = new DoublyLinkNode(3);
    });

    it('should extend Singly Link Node class', () => {
      expect(node).toBeInstanceOf(SinglyLinkNode);
      expect(node.val).toBe(3);
    });

    it('should assign #prev & #next as null', () => {
      expect(node.prev).toBeNull();
      expect(node.next).toBeNull();
    });
  });

  describe('#next', () => {
    it('should be able to assign a next value', () => {
      node.next = 5;
      expect(node.next).toBe(5);
    });
  });

  describe('#prev', () => {
    it('should be able to assign a next value', () => {
      node.prev = 8;
      expect(node.prev).toBe(8);
    });
  });

  describe('#remove', () => {
    beforeEach(() => {
      node = new DoublyLinkNode(4);
      node1 = new DoublyLinkNode(5);
      node2 = new DoublyLinkNode(6);
      node3 = new DoublyLinkNode(7);
      node.next = node1;
      node1.next = node2;
      node2.prev = node1;
      node1.prev = node;
      node2.next = node3;
      node3.prev = node2;
      node1.remove();
    });

    it('should remove itself from previous node and next node', () => {
      expect(node.next).not.toBe(node1);
      expect(node2.prev).not.toBe(node1);
    });

    it("next node's prev should be previous node", () => {
      expect(node2.prev).toBe(node);
    });

    it("previous node's next should be next node", () => {
      expect(node.next).toBe(node2);
    });

    it('should set its own #next and #prev values to null', () => {
      expect(node1.next).toBeNull();
      expect(node1.prev).toBeNull();
    });

    it('should return itself', () => {
      expect(node1.remove()).toBe(node1);
    });

    it('should not error if first (head) node', () => {
      expect(() => node3.remove()).not.toThrowError();
    });

    it('should not error if last (tail) node', () => {
      expect(() => node.remove()).not.toThrowError();
    });
  });
});
