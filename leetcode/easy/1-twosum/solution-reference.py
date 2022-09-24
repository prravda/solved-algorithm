# solve two-sum with O(n) - only one loop
class Solution:
  def twoSum(self, nums: list[int], target: int) -> list[int]:
    hash = {}
    for i, e in enumerate(nums):
      remain = target - e
      if remain in hash:
        return [i, hash[remain]]
      else:
        hash[e] = i

print(Solution().twoSum([2, 7, 11, 15], 9))