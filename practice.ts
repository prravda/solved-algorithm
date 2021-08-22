class BinarySearchTree {
  private value: number;
  private left: null | BinarySearchTree;
  private right: null | BinarySearchTree;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addChild(childValue): void {
    if (childValue >= this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(childValue);
        return;
      }
      this.right.addChild(childValue);
    }
    if (this.left === null) {
      this.left = new BinarySearchTree(childValue);
      return;
    }
    this.left.addChild(childValue);
  }
}

const t = new BinarySearchTree(2);
t.addChild(6);
t.addChild(1);
t.addChild(4);
t.addChild(3);
t.addChild(5);

console.log(t);