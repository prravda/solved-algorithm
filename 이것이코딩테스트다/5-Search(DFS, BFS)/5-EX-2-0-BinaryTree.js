// 값에 상관없이 좌-우를 채워넣는 이진트리(Binary Tree) 를 만들어보자

// 이진트리의 각 구성요소인 Node 라는 Class 를 먼저 만들어주자
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const BinaryTree = new Node(10);
BinaryTree.left = new Node(4);
BinaryTree.right = new Node(8);
BinaryTree.left.left = new Node(3);

console.log(BinaryTree);