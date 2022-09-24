class Solution:
  def twoSum(self, nums: list[int], target: int) -> list[int]:
    hash: dict[int, list[int]] = {}

    for i, e in enumerate(nums):  
      if hash.get(e) is None:
        hash[e] = [i]
        continue

      if hash.get(e) is not None:
        hash[e].append(i)
        continue
    
    for i, e in enumerate(nums):
      pair = hash.get(target - e)
      if pair and pair[-1] != i:
        return [i, pair[-1]]

# print(Solution().twoSum([2, 7, 11, 15], 9))
# print(Solution().twoSum([3, 2, 4], 6))
# print(Solution().twoSum([3, 3], 6))
print(Solution().twoSum([0, 4, 3, 0], 0))
