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
      return self.bfs(root, [])

    def bfs(self, root: Optional[TreeNode], accm: List[int]) -> List[int]:
      if root is None:
        return accm
      
      accm.append(root.val)

      if root.left:  
        self.bfs(root.left, accm)
      if root.right:
        self.bfs(root.right, accm)

      return accm

print(Solution().preorderTraversal(test))