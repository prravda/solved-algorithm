from typing import List, Dict


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # key: element
        # val: index of element
        hash: Dict[int, int] = {}

        for i in range(len(nums)):
            remain = target - nums[i]

            if remain in hash:
                return [i, hash[remain]]

            else:
                hash[nums[i]] = i
