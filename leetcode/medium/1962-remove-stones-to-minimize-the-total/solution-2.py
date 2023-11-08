"""
strategy
- do it recursively?
"""

from typing import List


class Solution:
    def get_floor_of_half(self, num) -> int:
        return num // 2 + 1

    def minStoneSum(self, piles: List[int], k: int) -> int:
        # escaping condition
        if k == 0:
            return piles

        # find the maximum value and its index
        max_sub = (-1 * 10**4) - 1
        max_idx = -1

        for i, p in enumerate(piles):
            if p - self.get_floor_of_half(p) > max_sub:
