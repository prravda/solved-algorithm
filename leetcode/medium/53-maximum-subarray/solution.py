from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      max_so_far = -99999999
      max_till = 0

      for e in nums:
        max_till += e
        if max_till > max_so_far:
          max_so_far = max_till
        if max_till < 0:
          max_till = 0
        
      return max_so_far

print(Solution().maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
      
