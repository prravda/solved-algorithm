# 생각해보니 exhaustion search 로 하면 TLE 가 날 수 밖에 없었다
# 이유는 input size 가 10^5 인데 O(N^2) 이 되면 10^10 이 되기때문...

# Strategy
# - loop the list
# - put checked element into hash table
# - cost for finding duplicate is reduced

# 교훈
# - 빠른 탐색을 위해선 hash table 을 고려해봅시다

from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hash_table = {}
        marker = 'exist'
        for element in nums:
            if hash_table.get(element) is None:
                hash_table[element] = marker
                continue
            return True
        return False

print(Solution().containsDuplicate([1, 2, 3, 1]))
