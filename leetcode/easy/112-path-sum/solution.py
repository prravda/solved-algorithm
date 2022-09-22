# Definition for a binary tree node.
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Test Node
# True is expected as a return value
test = TreeNode(5)
test.left = TreeNode(4)
test.right = TreeNode(8)

test.left.left = TreeNode(11)

test.left.left.left = TreeNode(7)
test.left.left.right = TreeNode(2)

test.right.left = TreeNode(13)
test.right.right = TreeNode(4)
test.right.right.right = TreeNode(1)

# test = TreeNode(1)
# test.left = TreeNode(2)

class Solution:
    def __init__(self) -> None:
      self.path_sum_exist = False
    
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
      if root is None:
        return False
      self.bfsAccm(root, 0, targetSum)
      
      return self.path_sum_exist

    def bfsAccm(self, root: Optional[TreeNode], accm: int, targetSum: int):
      if root is None:
        return False

      accm += root.val 

      if root.left is None and root.right is None:
        if accm == targetSum:
          self.path_sum_exist = True
        return
  
      if root.left:
        self.bfsAccm(root.left, accm, targetSum)
      if root.right:
        self.bfsAccm(root.right, accm, targetSum)

print(Solution().hasPathSum(test, 22))