from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # sorted list, so one pointer moves from left to right
        # and another point moves from right to left.
        left, right = 0, len(numbers) - 1

        # condition for avoding infinite loop
        while left < right:
            sum = numbers[left] + numbers[right]

            # escape condition
            if sum == target:
                return [left + 1, right + 1]

            # if sum is smaller than target,
            # move left pointer closer to right
            # for increasing sum
            if sum < target:
                left += 1
                continue

            # if sum is larger than target,
            # move right pointer closer to left
            # for decreasing sum
            if sum > target:
                right -= 1
                continue


test_case = [1, 3, 4, 5, 7]
Solution().twoSum(test_case, 7)
