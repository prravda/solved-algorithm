from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        len_of_list = 0

        pointer_of_head = head

        while pointer_of_head is not None:
            len_of_list += 1
            pointer_of_head = pointer_of_head.next

        mid_idx = len_of_list // 2
        current_depth = 0

        result_list = head

        while current_depth < mid_idx:
            result_list = result_list.next
            current_depth += 1

        return result_list
