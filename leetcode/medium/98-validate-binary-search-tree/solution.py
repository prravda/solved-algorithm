# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# this test input should return true
# test = TreeNode(2)
# test.left = TreeNode(1)
# test.right = TreeNode(3)

# this test input should return false
# test = TreeNode(5)
# test.left = TreeNode(1)
# test.right = TreeNode(4)
# test.right.left = TreeNode(3)
# test.right.right = TreeNode(6)

# this test input should return false
test = TreeNode(5)
test.left = TreeNode(4)
test.right = TreeNode(6)
test.right.left = TreeNode(3)
test.right.right = TreeNode(7)

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
      # Handle the edge cases
      if root is None:
        return False
      return self.bfs(root)

    def bfs(self, current: Optional[TreeNode], largest: int or None = float('inf'), smallest: int or None = float('-inf')) -> bool:
      # Check current 
      if current is None:
        return True

      # Check left
      if current.val >= largest or current.val <= smallest:
        return False
      
      return self.bfs(current.left, current.val, smallest) and self.bfs(current.right, largest, current.val)

print(Solution().isValidBST(test))