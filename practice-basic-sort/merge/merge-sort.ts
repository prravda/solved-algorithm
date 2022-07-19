// basic
// - based on divide and conquer strategy
// - split the array in half until it cannot be further divided
//

function mergeSort(arr: number[], leftStart: number, rightEnd: number) {
  if (leftStart > rightEnd) {
    throw new Error('invalid input');
  }
  const middle = Math.floor((leftStart + rightEnd) / 2);
  mergeSort(arr, leftStart, middle);
  mergeSort(arr, middle + 1, rightEnd);
  mergeHalves(arr, leftStart, rightEnd);
}

function mergeHalves(arr: number[], leftStart: number, rightEnd: number) {
  const leftEnd = Math.floor((leftStart + rightEnd) / 2);
  const rightStart = leftEnd + 1;

  let leftIndex = leftStart;
  let rightIndex = rightStart;
  let marker = leftStart;

  
}
