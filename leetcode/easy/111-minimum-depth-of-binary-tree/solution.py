"""
using property min_depth
- traverse tree with depth-first updating the 'depth'
  - if the traversing is ended, compare the current_depth and min_depth
    - if current_depth >= min_depth, assign current_depth into min_depth 
"""

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Test suite
test_root_one = TreeNode(3)
test_root_one.left = TreeNode(9)
test_root_one.right = TreeNode(20)
test_root_one.right.left = TreeNode(15)
test_root_one.right.right = TreeNode(7)

class Solution:
    def __init__(self) -> None:
       self.__min_depth = 999999999
    def minDepth(self, root: Optional[TreeNode]) -> int:
      if root is None:
        return 0
      self.bfs_with_checking_depth(root)
      return self.__min_depth + 1

    def bfs_with_checking_depth(self, root: Optional[TreeNode], depth: int = 0) -> None:
      if root.left:
        self.bfs_with_checking_depth(root.left, depth + 1)
      
      if root.right:
        self.bfs_with_checking_depth(root.right, depth + 1)

      if root is not None and root.left is None and root.right is None:
          if self.__min_depth >= depth:
            self.__min_depth = depth
      

# Test
Solution().minDepth(test_root_one)