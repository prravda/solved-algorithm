// basics
// - swap adjacent elements if they are in wrong order
// - this is the gif how the bubble sort works
// - it is not good solution for large size array
function swap(array: number[], fromIndex: number, toIndex: number) {
  // hold fromIndex's value in the variable, temp
  const temp = array[fromIndex];
  // swap from - to value by index
  array[fromIndex] = array[toIndex];
  array[toIndex] = temp;
}

export function bubbleSort(input: number[]): number[] {
  // create a loop from 0 to input array length - 1
  for (let i = 0; i < input.length - 1; i++) {
    // create an inner loop from 0 to input array length - i - 1
    for (let j = 0; j < input.length - i - 1; j++) {
      if (input[j] > input[j + 1]) {
        swap(input, j, j + 1);
      }
    }
  }
  return input;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
