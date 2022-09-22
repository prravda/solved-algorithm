from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# input for testing
test = TreeNode(3)
test.left = TreeNode(9)
test.right = TreeNode(20)
test.right.left = TreeNode(15)
test.right.right = TreeNode(7)


class Solution:
    def __init__(self) -> None:
        self.maximum_depth: int = 0

    def maxDepth(self, root: Optional[TreeNode]) -> int:
      self.dfs(root, 0)
      return self.maximum_depth

    def dfs(self, root: Optional[TreeNode], current_depth: int) -> int:
      # Escape condition
      if root is None:
        return

      # If success to traverse deeper root
      # plus 1 to current_depth
      current_depth += 1
      
      # If there is no child nodes
      # calculate current depth and compare the maximum depth
      if root.left is None and root.right is None:
        # If current depth is larger than maximum depth till now,
        # assign current_depth's value into the maximum depth
        if self.maximum_depth < current_depth:
          self.maximum_depth = current_depth
          return
        
      # traverse from left to right
      if root.left:
        self.dfs(root.left, current_depth)
      if root.right:
        self.dfs(root.right, current_depth)

print(Solution().maxDepth(test))