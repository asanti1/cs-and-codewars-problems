import { Node } from "./node.js";

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node) {
    if (node != null) {
      console.log(node.data + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.data + " ");
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node != null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      process.stdout.write(`${node.data}, `);
    }
  }

  addNode(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let actualNode = this.root;
      let parent;
      while (true) {
        parent = actualNode;
        if (data < actualNode.data) {
          actualNode = actualNode.left;
          if (actualNode === null) {
            parent.left = newNode;
            return;
          }
        } else {
          actualNode = actualNode.right;
          if (actualNode === null) {
            parent.right = newNode;
            return;
          }
        }
        if (data == actualNode.data) return;
      }
    }
  }
}
