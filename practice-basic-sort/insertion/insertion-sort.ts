// basics
// - good for the dataset which is already partially sorted
// - good for small size dataset
// description
// - Iterate from arr[1] to arr[N] over the array.
// - Compare the current element (key) to its predecessor.
// - If the key element is smaller than its predecessor,
//   compare it to the elements before.
//   Move the greater elements one position up to make space for the swapped element.
export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    // marker for current value
    const key = arr[i];
    // marker for sorted-regarded section
    let j = i - 1;
    // if sorted section is valid and current index is larger than current value
    while (j >= 0 && arr[j] > key) {
      //
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}
