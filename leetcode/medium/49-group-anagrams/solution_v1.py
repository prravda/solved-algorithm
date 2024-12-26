from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # how about using inverted index-like way?
        # building inverted index first
        inverted_index_table = {}
        for s in strs:
            # edge case: s is empty string("")
            if s == "":
                if s not in inverted_index_table:
                    inverted_index_table[s] = [s]
                else:
                    inverted_index_table[s].append(s)

            # general cases
            for c in s:
                if c not in inverted_index_table:
                    inverted_index_table[c] = [s]
                else:
                    inverted_index_table[c].append(s)

        # then, find by condition using inverted index table
        result = []
        marker = set()

        for s in strs:
            if s in marker:
                continue
            # edge case: s is empty string("")
            # just add all empty strings inverted index result to result
            if s == "":
                result.append(inverted_index_table[s])
                marker.add(s)
                continue

            set_for_result = set()
            for i in range(len(s)):
                if i == 0:
                    set_for_result.update(inverted_index_table[s[i]])
                    continue
                # intersection calculation to set_for_result
                set_for_result.intersection_update(inverted_index_table[s[i]])

            for s in set_for_result:
                marker.add(s)

            result.append(list(set_for_result))

        # return result
        return result


test_variable = ["eat", "tea", "tan", "ate", "nat", "bat"]
# test_variable = [""]
# test_variable = ["", ""]
# test_variable = ["c", "c"]
result = Solution().groupAnagrams(test_variable)
print(result)
