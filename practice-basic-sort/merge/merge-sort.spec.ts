import { merge, mergeSort } from './merge-sort';

describe('test: merge sort', () => {
  it('should merge two array into sorted one array', () => {
    const unsortedArrayOne = [1, 3, 5];
    const unsortedArrayTwo = [2, 4, 6];
    const sortedArray = [...unsortedArrayOne, ...unsortedArrayTwo].sort(
      (a, b) => a - b
    );
    expect(merge(unsortedArrayOne, unsortedArrayTwo)).toEqual(sortedArray);
  });
  // it('should return a sorted array', () => {
  //   const unsortedArray = [5, 12, 7, 10, 6];
  //   const sortedArray = [...unsortedArray].sort((a, b) => a - b);
  //   console.log(mergeSort(unsortedArray));
  //   // expect(mergeSort(unsortedArray)).toEqual(sortedArray);
  // });
});
