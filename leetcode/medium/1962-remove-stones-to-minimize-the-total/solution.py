"""
- strategy:
    - choose the largest elements
    - change it into the floor(piles[k])
    - iterate this process into k
- time complexity:
    - O(n)
    - loop n into twice (2n)
- cheating
    - copy the array and sort it
    - update k element from first into floor(k)
    - return the sum of updated list
"""
import math
from typing import List


class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        copied_list_after_sorted = sorted(piles[0:], reverse=True)
        counter = k

        accumulated_val = 0

        for p in copied_list_after_sorted:
            if k > 0:
                accumulated_val += math.floor(p/2)
                counter -= 1
            else:
                accumulated_val += p

        return accumulated_val


# Testing
print(Solution().minStoneSum([5, 4, 9], 2))
