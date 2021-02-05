// Node 라는 클래스를 먼저 만들어준다
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree 라는 class 를 만들고, 각 부분을 Node 로 채워준다
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert method
  insert(value) {
    // 일단 들어온 값을 통해 Node 를 만들고, newNode 라는 변수에 저장해준다
    let newNode = new Node(value);

    // root 가 비어있다면, this.root 에 newNode 를 할당하고, this를 반환한다
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // root 가 비어있지 않은 경우를 생각해본다 
    // 일단은 탐색을 용이하게 하기 위해 current 라는 변수를 사용하고, 그 초기값으로 this.root 를 할당한다
    let current = this.root;
    // current 가 null 이 되는 구간까지 계속해서 탐색한다
    while (current) {
      // BST 에서 같은 값은 처리하지 않기 때문에, 같은 값이 들어오면 undefined 를 반환한다
      if (value === current) return undefined;

      // input value 가 current 의 value 보다 작다면 -> 일단은 왼쪽으로 가야 한다
      if (value < current.value) {
        // 그 전에 먼저 current 의 left 가 비어있는지 확인하고
        if (current.left === null) {
          // 비어있다면 그 곳에 newNode 를 할당한 뒤 this 를 반환하고 연산을 종료한다
          current.left = newNode;
          return this;
        }
        // 그렇지 않다면, current 의 왼쪽을 다시 current 로 잡고 다시 한 번 탐색한다
        current = current.left;
      }
      // input value 가 current 의 value 보다 크다면 -> 일단은 오른쪽으로 가야 한다
      if (value > current.value) {
        // 그 전에 먼저 current 의 right 가 비어있는지 확인하고
        if (current.right === null) {
          // 비어있다면 그 곳에 newNode 를 할당한 뒤 this 를 반환하고 연산을 종료한다
          current.right = newNode;
          return this;
        }
        // 그렇지 않다면, current 의 오른쪽을 다시 current 로 잡고 다시 한 번 탐색한다
        current = current.right;
      }
    }
  }

  searchInorder() {
    let current = this.root;
    const nodeTrace = [];

    // touch the left bottom 
    while (current.left) {
      nodeTrace.push(current);
      current = current.left;
    }
    // add the bottom node to stack
    const inorderList = nodeTrace.map(eachNode => {
      
    })


  }
}

const Tree = new BinarySearchTree();

Tree.insert(2);
Tree.insert(1);
Tree.insert(3);
Tree.insert(4);

console.log(Tree);

// Tree.insert(5);
// Tree.insert(3);
// Tree.insert(1);
// Tree.insert(7);
// Tree.insert(9);
// Tree.insert(8);


