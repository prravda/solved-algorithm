from typing import List


# goal: using prefix and suffix product
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # create lists for storing prefix and suffix
        prefix_products = [0] * len(nums)
        prefix_products[0] = 1

        suffix_products = [0] * len(nums)
        suffix_products[len(nums) - 1] = 1

        # first, fill prefix products
        for i in range(0, len(nums) - 1):
            # from 0th index to last-1 index
            prefix_products[i + 1] = prefix_products[i] * nums[i]

        # then, fill suffix products
        for i in range(len(nums) - 1, 0, -1):
            # from last-1 index to 1st index
            suffix_products[i - 1] = suffix_products[i] * nums[i]

        # product prefix and suffix and return
        result = []

        for i in range(len(nums)):
            result.append(prefix_products[i] * suffix_products[i])

        return result


# testing
# test_case = [1, 2, 3, 4]
test_case = [-1, 1, 0, -3, 3]
print(Solution().productExceptSelf(test_case))
