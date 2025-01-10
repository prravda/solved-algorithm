from typing import List, Dict

"""
[ Hint 1 ]
So, we essentially need to find three numbers x, y, and z 
such that they add up to the given value. 
If we fix one of the numbers say x, 
we are left with the two-sum problem at hand!
"""


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # create a dict for storing answers
        # key of this dict is joined sorted triplet for detecting uniquness
        # but I guess this is not an optimal solution...
        answers: Dict[str, List[int]] = {}

        # iterate nums and fix a number
        # don't care the indicies lower then fixed i
        # because they're already evaluated in before phases
        for i in range(len(nums)):
            # first, get a num_to_find_outer number using 0 - current number
            # because I want to get the case of summation is zero
            lookup_table_hash: Dict[int, int] = {}
            num_to_find_outer = 0 - nums[i]

            # then find next two numbers using two pointers
            for j in range(i + 1, len(nums)):
                # set num_to_find to num_to_find_outer - nums[j]
                num_to_find = num_to_find_outer - nums[j]

                # if num_to_find case not in lookup_table_hash,
                if num_to_find not in lookup_table_hash:
                    # write lookup_table_hash[nums[j]] with num_to_find
                    lookup_table_hash[nums[j]] = num_to_find
                    # and continue to the next iteration
                    continue

                # if num_to_find in lookup_table_hash
                if num_to_find in lookup_table_hash:
                    # extract result
                    result = [nums[i], nums[j], num_to_find]
                    # and create a key by sort and join
                    # for checking this is unique result or not
                    identifier = "".join([str(x) for x in (sorted(result))])

                    # if this is already existed case,
                    if identifier in answers:
                        # just continue
                        continue

                    # if this is unique and fresh case,
                    if identifier not in answers:
                        # write to answer
                        answers[identifier] = result

        # finally, extract answer's items and convert into list and return
        return [item[1] for item in answers.items()]


test_case = [-1, 0, 1, 2, -1, -4]
# test_case = [
#     34,
#     55,
#     79,
#     28,
#     46,
#     33,
#     2,
#     48,
#     31,
#     -3,
#     84,
#     71,
#     52,
#     -3,
#     93,
#     15,
#     21,
#     -43,
#     57,
#     -6,
#     86,
#     56,
#     94,
#     74,
#     83,
#     -14,
#     28,
#     -66,
#     46,
#     -49,
#     62,
#     -11,
#     43,
#     65,
#     77,
#     12,
#     47,
#     61,
#     26,
#     1,
#     13,
#     29,
#     55,
#     -82,
#     76,
#     26,
#     15,
#     -29,
#     36,
#     -29,
#     10,
#     -70,
#     69,
#     17,
#     49,
# ]

instnace = Solution()
answer = instnace.threeSum(test_case)

print(answer)

"""
but this way throw TLE in this cse:
[12,5,-12,4,-11,11,2,7,2,-5,-14,-3,-3,3,2,-10,9,-15,2,14,-3,-15,-3,-14,-1,-7,11,-4,-11,12,-15,-14,2,10,-2,-1,6,7,13,-15,-13,6,-10,-9,-14,7,-12,3,-1,5,2,11,6,14,12,-10,14,0,-7,11,-10,-7,4,-1,-12,-13,13,1,9,3,1,3,-5,6,9,-4,-2,5,14,12,-5,-6,1,8,-15,-10,5,-15,-2,5,3,3,13,-8,-13,8,-5,8,-6,11,-12,3,0,-2,-6,-14,2,0,6,1,-11,9,2,-3,-6,3,3,-15,-5,-14,5,13,-4,-4,-10,-10,11]
"""
