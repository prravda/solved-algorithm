from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# input
# test = TreeNode(1)
# test.left = TreeNode(2)
# test.left.left = TreeNode(3)
# test.left.right = TreeNode(4)

# test.right = TreeNode(5)
# test.right.right = TreeNode(6)

test = TreeNode(1)
test.left = TreeNode(2)
test.left.left = TreeNode(3)
test.left.right = TreeNode(4)

test.right = TreeNode(5)
test.right.right = TreeNode(6)

class Solution:
    def __init__(self) -> None:
      self.container = []

    def flatten(self, root: Optional[TreeNode]) -> None:
      """
      Do not return anything, modify root in-place instead.
      """
      flattened_left = TreeNode()
      flattened_right = TreeNode()

      if root.left:
        flattened_left = self.bfsMakingList(root.left, TreeNode())
        print(flattened_left)
      if root.right:
        flattened_right = self.bfsMakingList(root.right, TreeNode())
        print(flattened_right)

      root.right = self.mergeTwoRightBiasedTree(flattened_left, flattened_right)
    
    def bfsMakingList(self, root: Optional[TreeNode], list: TreeNode) -> TreeNode:
      # Escape
      if root is None:
        return list
      # Assign the value
      list.val = root.val
      self.container.append(root.val)
      list.right = TreeNode()

      if root.left:
        self.bfsMakingList(root.left, list.right)
      if root.right:
        self.bfsMakingList(root.right, list.right)

    def mergeTwoRightBiasedTree(self, first: TreeNode, second: TreeNode) -> TreeNode:
      if first is None:
        first = second
        return first
      self.mergeTwoRightBiasedTree(first.right, second)


Solution().flatten(test)
      
        