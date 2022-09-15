from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
tree_one = TreeNode(1)
tree_one.left = TreeNode(2)

tree_two = TreeNode(1)
tree_two.right = TreeNode(2)

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
      flattened_p = self.flatten(self, p, [])
      flattened_q = self.flatten(self, q, [])

      return flattened_p == flattened_q

    def flatten(self, tree: TreeNode, container: list):
      # escape condition
      if (tree is None):
        container.append(None)
        return

      # put a value to container
      container.append(tree.val)

      # traverse from left to right
      self.flatten(self, tree.left, container)
      self.flatten(self, tree.right, container)

      return container