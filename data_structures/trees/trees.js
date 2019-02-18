import { Node, SinglyLinkNode, DoublyLinkNode } from '../nodes/nodes';

export class BinaryTreeNode extends Node {
  constructor(val) {
    super(val);
    this.left = null;
    this.right = null;
  }
}
