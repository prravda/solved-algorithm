import { insertionSort } from './insertion-sort.impl';

describe('test: insertion sort', () => {
  it('should return a sorted array as a result', () => {
    const unsortedArray = [2, 4, 3, 1, 5, 6];
    const sortedArray = [...unsortedArray].sort((a, b) => a - b);
    expect(insertionSort(unsortedArray)).toEqual(sortedArray);
  });
});
