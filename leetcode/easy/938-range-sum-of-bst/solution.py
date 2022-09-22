# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self) -> None:
        self.high = 0
        self.low = 0
        self.sum = 0

    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        self.high = high
        self.low = low
        self.bfs(root, 0)

        return self.sum

    def bfs(self, root: Optional[TreeNode], accm: int) -> int:
        if root is None:
            return
        
        if root.val >= self.low and root.val <= self.high:
            self.sum += root.val

        if root.left:
            self.bfs(root.left, accm)
        if root.right:
            self.bfs(root.right, accm)