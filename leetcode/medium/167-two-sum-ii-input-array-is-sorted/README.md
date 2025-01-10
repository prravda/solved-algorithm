# Solution

## Naive approach

- create a hash table and store a pair number for making target number and its index
- iterate numbers
  - find whether a key-value pair is exists using current number
    - if there is no result, store current number's pair number and current number's index to table. then move to next iteration.
    - if there is a result, return `[hash table[current number]+1, current number index + 1]` as a result.

## Additional approach

### two pointers

- use two pointers. one pointer moves from first to last(`left`), and another pointer moves from last to first(`right`).
- if sum of the two pointers is larger than the `target`, the result should be decreased. So move `right` pointer to the left. otherwise move `left` pointer to the right.
