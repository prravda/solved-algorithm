from typing import List, Tuple


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # set boundary pointers
        left, right = 0, len(nums) - 1

        # start iteration using while loop
        # while left boundary is smaller or same with right boundary
        # keep iterate
        while left <= right:
            # calc the midpoint
            mid = (left + right) // 2

            # escape condition
            # if nums[mid] is same with target
            # return mid as a result
            if nums[mid] == target:
                return mid

            # compare mid, left, right
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        # although while loop is ended
        # but there is no return value
        # return -1 as a result(there is no target value)
        return -1
