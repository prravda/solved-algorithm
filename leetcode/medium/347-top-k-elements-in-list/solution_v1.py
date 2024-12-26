from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequent_table = {}

        # iterate nums in list and mark each number frequency
        for n in nums:
            if n not in frequent_table:
                frequent_table[n] = 1
                continue
            else:
                frequent_table[n] += 1

        # sort by frequency
        result = sorted(frequent_table.items(), key=lambda x: x[1], reverse=True)

        # return the result
        return list(map(lambda x: x[0], result[:k]))
