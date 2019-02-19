export class Node {
  val: any | null | undefined;

  constructor(val?: any) {
    val = val === null || val === undefined ? null : val;
    this.val = val;
  }
}

export class SinglyLinkNode extends Node {
  next: Node;

  constructor(val) {
    super(val);
    this.next = null;
  }
}

export class DoublyLinkNode extends SinglyLinkNode {
  prev: DoublyLinkNode;
  next: DoublyLinkNode;

  constructor(val) {
    super(val);
    this.prev = null;
  }

  remove() {
    let { prev, next } = this;
    if (this.next) this.next.prev = prev;
    if (this.prev) this.prev.next = next;
    this.next = null;
    this.prev = null;
    return this;
  }
}
