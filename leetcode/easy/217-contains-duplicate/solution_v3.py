from typing import List, Dict


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # naive way
        # create a hash table and store number occurence
        # if there is duplicate, return True
        # else, return False
        hash_table: Dict[int, bool] = {}

        for n in nums:
            if n in hash_table:
                return True
            else:
                hash_table[n] = True

        return False
