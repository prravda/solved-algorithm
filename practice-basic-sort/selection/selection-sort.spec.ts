import { selectionSort } from './selection-sort';

describe('test: selection sort', () => {
  it('should return sorted array', () => {
    const unsortedArray = [5, 12, 7, 10, 6];
    const sortedArray = [...unsortedArray].sort((a, b) => a - b);
    expect(selectionSort(unsortedArray)).toEqual(sortedArray);
  });
});
