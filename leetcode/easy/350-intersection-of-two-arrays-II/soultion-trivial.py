# Time complexity constraints: up to O(n^2)
# because of maximum case of number of input is 1000

# Strategy
# 1. create each hashmap for faster searching

# TODO: Check the follow-ups
# What if the given array is already sorted? How would you optimize your algorithm?
# What if nums1's size is small compared to nums2's size? Which algorithm is better?
# What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

class Solution:
    def intersect(self, nums1: list[int], nums2: list[int]) -> list[int]:
        not_visited_nums1 = [True for _ in range(len(nums1))]
        not_visited_nums2 = [True for _ in range(len(nums2))]
        result: list[int] = []
        for i1, e1 in enumerate(nums1):
            for i2, e2 in enumerate(nums2):
                if not_visited_nums1[i1] and not_visited_nums2[i2] and e1 == e2:
                    not_visited_nums1[i1] = False
                    not_visited_nums2[i2] = False
                    result.append(e1)
        return result


# print(Solution().intersect([1, 2, 2, 1], [2, 2]))
print(Solution().intersect([1, 2, 2, 1], [2]))
