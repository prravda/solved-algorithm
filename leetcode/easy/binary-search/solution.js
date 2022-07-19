function search(nums, target) {
    var firstIndex = 0;
    var lastIndex = nums.length - 1;
    var mid = 0;
    while (lastIndex >= 1) {
        mid = firstIndex + Math.floor((lastIndex - 1) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            lastIndex = mid--;
            continue;
        }
        if (nums[mid] < target) {
            firstIndex = mid++;
            continue;
        }
    }
    return -1;
}
console.log(search([5], 5));
