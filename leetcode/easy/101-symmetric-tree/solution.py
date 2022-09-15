from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Strategy
# - separate the right side and left side of this tree
# - traverse them symmetric side
# - compare them
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
      def bfs_l2r(tree: TreeNode, container: list):
        if (tree is None):
          container.append(None)
          return
        container.append(tree.val)
        bfs_l2r(tree.left, container)
        bfs_l2r(tree.right, container)
        return container
      
      if (root is None): return

      def bfs_r2l(tree: TreeNode, container: list):
        if (tree is None):
          container.append(None)
          return
        container.append(tree.val)
        bfs_r2l(tree.right, container)
        bfs_r2l(tree.left, container)
        return container
      
      if (root is None): return

      left_side = root.left
      right_side = root.right
      
      flattened_left = bfs_l2r(left_side, [])
      flattened_right = bfs_r2l(right_side, [])
      
      return flattened_left == flattened_right

