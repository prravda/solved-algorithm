// basics
// - just repeatedly finding the minimum element
// - maintain two arrays,
//   - the first one is the subarray which is already sorted
//   - and the second one is the remaining subarray which is unsorted yet
// description
// - find a minimum element by iterating the whole array
// - push the minimum element into the sorted array
// - iterate the process while unsorted array is empty

function swap(arr: number[], fromIndex: number, targetIndex: number) {
  const temp = arr[fromIndex];
  arr[fromIndex] = arr[targetIndex];
  arr[targetIndex] = temp;
}

export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }
    swap(arr, minimumIndex, i);
  }
  return arr;
}
