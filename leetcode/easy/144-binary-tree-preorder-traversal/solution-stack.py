# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

test = TreeNode(1)
test.left = TreeNode(2)
test.left.right = TreeNode(3)

from typing import Optional, List
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
      nodes: list[Optional[TreeNode]] = [root]
      vals: list[int] = []
      
      while nodes:
        current = nodes.pop()
        if current:
          vals.append(current.val)
          nodes.append(current.right)
          nodes.append(current.left)

      return vals


print(Solution().preorderTraversal(test))