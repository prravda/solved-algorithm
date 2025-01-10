from typing import List
from itertools import permutations


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # return all triplets fulfilled these conditions
        # - their indices are all differnt
        # - sum of them is zero

        # get case of all indicies are differnt
        # -> get permutation, nP3.
        cases = permutations(nums, 3)

        duplicate_table = {}

        answer = []

        for c in cases:
            # create an string type identifier
            # for avoiding duplicates
            sorted_c = sorted(c)
            seperator = "".join(str(x) for x in sorted_c)

            # if it is duplicated case, just continue
            if seperator in duplicate_table:
                continue

            # if this is a new case, and their sum is zero
            # append to duplicate table
            if seperator not in duplicate_table and sum(c) == 0:
                duplicate_table[seperator] = True
                answer.append(c)

        return answer


# test_case = [-1, 0, 1, 2, -1, -4]
test_case = [
    34,
    55,
    79,
    28,
    46,
    33,
    2,
    48,
    31,
    -3,
    84,
    71,
    52,
    -3,
    93,
    15,
    21,
    -43,
    57,
    -6,
    86,
    56,
    94,
    74,
    83,
    -14,
    28,
    -66,
    46,
    -49,
    62,
    -11,
    43,
    65,
    77,
    12,
    47,
    61,
    26,
    1,
    13,
    29,
    55,
    -82,
    76,
    26,
    15,
    -29,
    36,
    -29,
    10,
    -70,
    69,
    17,
    49,
]

instnace = Solution()
answer = instnace.threeSum(test_case)

print(answer)

"""
but this way throw TLE in this cse:
[12,5,-12,4,-11,11,2,7,2,-5,-14,-3,-3,3,2,-10,9,-15,2,14,-3,-15,-3,-14,-1,-7,11,-4,-11,12,-15,-14,2,10,-2,-1,6,7,13,-15,-13,6,-10,-9,-14,7,-12,3,-1,5,2,11,6,14,12,-10,14,0,-7,11,-10,-7,4,-1,-12,-13,13,1,9,3,1,3,-5,6,9,-4,-2,5,14,12,-5,-6,1,8,-15,-10,5,-15,-2,5,3,3,13,-8,-13,8,-5,8,-6,11,-12,3,0,-2,-6,-14,2,0,6,1,-11,9,2,-3,-6,3,3,-15,-5,-14,5,13,-4,-4,-10,-10,11]
"""


