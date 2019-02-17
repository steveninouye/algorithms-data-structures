export class Node {
  constructor(val) {
    this.val = val || null;
  }
}

export class SinglyLinkNode extends Node {
  constructor(val) {
    super(val);
    this.next = null;
  }
}

export class DoublyLinkNode extends SinglyLinkNode {
  constructor(val) {
    super(val);
    this.prev = null;
  }

  remove() {
    let { prev, next } = this;
    this.next.prev = prev;
    this.prev.next = next;
    this.next = null;
    this.prev = null;
    return this.val;
  }
}

export class BinaryTreeNode extends Node {
  constructor(val) {
    super(val);
    this.left = null;
    this.right = null;
  }
}
