from typing import Optional
from queue import Queue


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        out_of_range_value = -1 * (10 ** 4 + 1)

        last_level = 1
        last_accm = 0

        max_accm = out_of_range_value
        level_of_max_accm = 0

        job_queue_with_level: Queue[tuple[int, TreeNode]] = Queue()
        job_queue_with_level.put((last_level, root))

        while not job_queue_with_level.empty():
            level, node = job_queue_with_level.get()

            if not node:
                continue

            # if the level of node is same
            if last_level == level:
                last_accm += node.val

            # if the level of node is changed
            if last_level != level:
                if last_accm > max_accm:
                    max_accm = last_accm
                    level_of_max_accm = last_level

                last_accm = node.val
                last_level = level

            job_queue_with_level.put((level + 1, node.left))
            job_queue_with_level.put((level + 1, node.right))

        return level_of_max_accm if max_accm >= last_accm else last_level


# test suite
left_child = TreeNode(1, TreeNode(7), TreeNode(-8))
right_child = TreeNode(0, TreeNode(-7), TreeNode(9))
root_node = TreeNode(1, left_child, right_child)

print(Solution().maxLevelSum(root_node))
