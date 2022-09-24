const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
      let indexAfterCurrent = i + 1;
      while (indexAfterCurrent <= nums.length) {
        if (nums[i] + nums[indexAfterCurrent] === target) {
            return [i, indexAfterCurrent];
        }
        indexAfterCurrent++;
      }
      
  }
};

console.log(twoSum([3, 2, 4], 6));