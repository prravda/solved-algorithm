from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        """
        [ conditions ]
        - input numbers are sorted

        [ solution_v1 ]
        - use prefix sum naively
        """

        lookup_table = {}

        for i in range(len(numbers)):
            if numbers[i] not in lookup_table:
                pair_for_making_target = target - numbers[i]
                # save pair number index to lookup table
                lookup_table[pair_for_making_target] = i
                continue

            if numbers[i] in lookup_table:
                # if a pair exists in lookup table,
                # return the result
                return [lookup_table[numbers[i]] + 1, i + 1]
