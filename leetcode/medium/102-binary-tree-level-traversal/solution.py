# TODO: Refactoring is required

from typing import Optional, List
from queue import Queue


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

        q = Queue()

        if root is None:
            return []

        prev_lv = 0

        q.put((prev_lv, root))

        result = []
        result_by_lv = []

        while not q.empty():
            lv, n = q.get()

            if n:
                if prev_lv == lv:
                    result_by_lv.append(n.val)

                if prev_lv != lv:
                    result.append(result_by_lv)
                    prev_lv = lv
                    result_by_lv = [n.val]

            if n.left:
                q.put((lv + 1, n.left))

            if n.right:
                q.put((lv + 1, n.right))

        if result_by_lv:
            result.append(result_by_lv)

        return result