function search(nums: number[], target: number): number {
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  let mid = 0;

  if (lastIndex === 0) {
    if (nums[0] === target) {
      return 0;
    }
    return -1;
  }

  while (lastIndex >= 1) {
    mid = firstIndex + Math.floor((lastIndex - 1) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      lastIndex = mid--;
    } else {
      firstIndex = mid++;
    }
  }
  return -1;
}
