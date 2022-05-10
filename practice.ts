// class BinarySearchTree {
//   private value: number;
//   private left: null | BinarySearchTree;
//   private right: null | BinarySearchTree;

//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   addChild(childValue): void {
//     if (childValue >= this.value) {
//       if (this.right === null) {
//         this.right = new BinarySearchTree(childValue);
//         return;
//       }
//       this.right.addChild(childValue);
//     }
//     if (this.left === null) {
//       this.left = new BinarySearchTree(childValue);
//       return;
//     }
//     this.left.addChild(childValue);
//   }
// }

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    // Error.captureStackTrace(this);
  }
}

const customErrorInstance = new CustomError('정기관 척살');
console.log(customErrorInstance.stack);

const basicErrorInstance = new Error();
console.log(basicErrorInstance.stack);
