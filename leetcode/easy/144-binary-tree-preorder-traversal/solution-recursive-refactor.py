from typing import Optional, List


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def traverser(self, node: TreeNode, values: List[int]) -> List[int]:
        values.append(node.val)

        if node.left:
            self.traverser(node.left, values)

        if node.right:
            self.traverser(node.right, values)

        return values

    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        return self.traverser(root, []) if root is not None else []