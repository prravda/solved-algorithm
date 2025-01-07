from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # edge case: if len(nums) same or smaller than 1
        # just return len(nums)
        if len(nums) <= 1:
            return len(nums)

        sorted_unique_nums = sorted(set(nums))

        current_longest_conseq = 1
        max_longest_conseq = 1

        for i in range(1, len(sorted_unique_nums)):
            if sorted_unique_nums[i] == sorted_unique_nums[i - 1] + 1:
                current_longest_conseq += 1
            else:
                if current_longest_conseq > max_longest_conseq:
                    max_longest_conseq = current_longest_conseq
                current_longest_conseq = 1

        if current_longest_conseq > max_longest_conseq:
            max_longest_conseq = current_longest_conseq

        return max_longest_conseq


# nums = [100, 4, 200, 1, 3, 2]
# nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
nums = [1, 2, 0, 1]

result = Solution().longestConsecutive(nums)
print(result) 
