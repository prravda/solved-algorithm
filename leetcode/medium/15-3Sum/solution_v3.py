from typing import List, Dict


class Solution:

    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # list for storing triplets
        result = []

        # first, sort nums
        nums.sort()

        # then find triplet which summation is 0
        for left in range(len(nums)):
            # for avoiding same cases, use this condition at top
            if left > 0 and nums[left] == nums[left - 1]:
                continue

            # right pointer
            right = len(nums) - 1

            # inner pointer
            # iterate from the next of left to k, the right pointer
            inner = left + 1

            while inner < right:
                total = nums[left] + nums[inner] + nums[right]

                # if total number is larger than 0,
                # the pointer 'right' should be moved to the left
                if total > 0:
                    right -= 1
                # if total number is smaller than 0,
                # the pointer 'inner' should be moved to the right
                elif total < 0:
                    inner += 1
                # if the total number is 0,
                else:
                    # store the case
                    result.append([nums[left], nums[inner], nums[right]])

                    # then move inner pointer to the right
                    inner += 1

                    # and skip same case keep move till the inner pointer is smaller than right
                    # for avoding duplicated cases
                    while nums[inner] == nums[inner - 1] and inner < right:
                        inner += 1

        # return the result
        return result


Solution().threeSum([-1, 0, 1, 2, -1, -4])
