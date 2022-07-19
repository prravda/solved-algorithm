// description
// - the input 'nums' are non-decreasing
// - you should return nums after remove duplicates
//    - the output array should have same length with input array
// -

export function solution(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let current: number = 99999999;
  let skipped: number = 0;
  let output: string | number[] = [];

  for (const element of nums) {
    if (element !== current) {
      output.push(element);
      current = element;
      continue;
    }
    skipped++;
  }

  return skipped;
}
