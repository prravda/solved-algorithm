// https://leetcode.com/problems/add-two-numbers/
// Description
// - two non-empty linked list is provided
//   - the digits are stored in reverse order
//   - each node contains a single digit
// - add the two numbers and return the sum as a linked list

// Example #1
// arr1 = [2, 4, 3] -> 342
// arr2 - [5, 6, 4] -> 465
// 342 + 456 = 807
// so return the array [7, 0, 8]

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const extractorHelper = (
  list: ListNode,
  index: number,
  accumulatedValue: number
): number => {
  accumulatedValue = accumulatedValue + Math.pow(10, index) * list.val;
  if (list.next === null) {
    return accumulatedValue;
  }
  return extractorHelper(list.next, index + 1, accumulatedValue);
};

const extractor = (list: ListNode | null): number => {
  // if the list parameter is null -> return 0 as a result
  if (list === null) {
    return 0;
  }
  // if the list node is valid and it is instance of ListNode class -> start to extract a number type value
  return extractorHelper(list, 0, 0);
};

// 00:53, 2021/09/03, cannot implement the recursive list node maker.
const listNodeMaker = (
  stringifiedAccumulatedValueArray: string[],
  index: number,
  nodeToReturn: ListNode
): ListNode => {
  console.log(stringifiedAccumulatedValueArray);
  if (index === stringifiedAccumulatedValueArray.length) {
    return nodeToReturn;
  }
  const currentDigit = Number(stringifiedAccumulatedValueArray[index]);
  console.log(currentDigit);
  nodeToReturn.val = currentDigit;
  nodeToReturn.next = new ListNode();
  console.log(nodeToReturn);
  return listNodeMaker(
    stringifiedAccumulatedValueArray,
    index + 1,
    nodeToReturn.next
  );
};

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  if (l1 === null && l2 === null) {
    return null;
  }
  const valueOfL1 = extractor(l1);
  const valueOfL2 = extractor(l2);
  const sumOfValueOfLists = valueOfL1 + valueOfL2;
  return listNodeMaker([...String(sumOfValueOfLists)], 0, new ListNode());
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const result = addTwoNumbers(l1, l2);
console.log(result);
