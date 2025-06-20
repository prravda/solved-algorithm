from typing import List, Tuple


class Solution:
    # TODO: implement more
    def search(self, nums: List[int], target: int) -> int:
        # edge case: len(nums) == 1
        if len(nums) == 1:
            if nums[0] == target:
                return 0
            else:
                return -1

        left, right = 0, len(nums) - 1

        while left != right:
            # case 0.
            # if left or right is same with target
            # just return the index
            if nums[left] == target:
                return left
            if nums[right] == target:
                return right

            # case 1.
            # pass the case 0 and they met
            # return -1 because there is no target in nums
            if abs(left - right) == 1:
                return -1

            # traversal
            if nums[left] < target:
                left += 1
            if nums[right] > target:
                right -= 1

        if left == right:
            if nums[left] == target:
                return left
            return -1


test_pair: List[Tuple[List[int], int, int]] = [
    ([-1, 0, 5], 0, 1),
]

instance = Solution()
result = instance.search(test_pair[0][0], test_pair[0][1])

print(result)
