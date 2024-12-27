from typing import List


# goal: using prefix and suffix product with space complexity O(1)
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # list for calculating answer
        answer = [1] * len(nums)

        # first, calculate prefix
        current_num = 1
        for i in range(0, len(nums)):
            answer[i] *= current_num
            current_num *= nums[i]

        # then, product suffix to answer
        current_num = 1
        for i in range(len(nums) - 1, -1, -1):
            answer[i] *= current_num
            current_num *= nums[i]

        return answer


# testing
test_case = [1, 2, 3, 4]
# test_case = [-1, 1, 0, -3, 3]
print(Solution().productExceptSelf(test_case))
