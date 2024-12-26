from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # iterate strs
        # - sort element like 'bac' to 'abc'
        # - set sorted element as key and save list elements
        anagram_dict = {}

        for s in strs:
            sorted_s = "".join(sorted(s))

            if sorted_s not in anagram_dict:
                anagram_dict[sorted_s] = [s]
            else:
                anagram_dict[sorted_s].append(s)

        # return the result
        return list(anagram_dict.values())


result = Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
print(result)
