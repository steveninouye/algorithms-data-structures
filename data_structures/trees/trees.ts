import { Node, SinglyLinkNode, DoublyLinkNode } from '../nodes/nodes';

export class BinaryTreeNode extends Node {
  left: BinaryTreeNode;
  right: BinaryTreeNode;

  constructor(val: any) {
    super(val);
    this.left = null;
    this.right = null;
  }
}
