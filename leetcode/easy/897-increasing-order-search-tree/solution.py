"""
Strategy
- traverse the binary search tree in depth first search
- relocate the node in-order using the node's right side only
"""



# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Test cases
test = TreeNode(5)

test.left = TreeNode(3)
test.left.left = TreeNode(2)
test.left.right = TreeNode(4)
test.left.left.left = TreeNode(1)

test.right = TreeNode(6)
test.right.right = TreeNode(8)
test.right.right.left = TreeNode(7)
test.right.right.right = TreeNode(9)

# Solution
class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
      flattened = self.flattenTree(root, [])
      flattened.sort()

      ordered_tree = TreeNode()

      return self.createTree(ordered_tree, flattened)
    
    def createTree(self, root: TreeNode, value: list[int]) -> TreeNode:
      if (len(value) == 0): 
        return
      if (len(value) == 1):
        root.val = value.pop(0)
      else:
        root.val = value.pop(0)
        root.right = TreeNode()

      self.createTree(root.right, value)

      return root
    
    def flattenTree(self, root: TreeNode, current: list[int]) -> list[int]:
      if (root == None):
        return
        
      current.append(root.val)

      self.flattenTree(root.left, current)
      self.flattenTree(root.right, current)

      return current

print(Solution().increasingBST(test))