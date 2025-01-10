class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # simple solution:
        # sort s and t and compare they're same or not
        return True if sorted(s) == sorted(t) else False
