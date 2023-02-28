import { BinaryTree } from "./binary-tree.js";

const tree = new BinaryTree();

tree.addNode(50);
tree.addNode(25);
tree.addNode(75);
tree.addNode(12);
tree.addNode(37);
tree.addNode(43);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
tree.addNode(30);
process.stdout.write("Post Order \n");
/* preOrder(); */
/* inOrder(); */
tree.postOrder(tree.root);
