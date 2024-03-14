# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        visited_checker: dict[int, int] = {}
        pointer_head = head

        while pointer_head:
            # check whether this node is already visited or not
            mem_address = id(pointer_head)

            # case of already visited node - return it's cyclic
            if mem_address in visited_checker:
                return pointer_head

            # if this node is not visited,
            # put this node's memory address to visited checker table
            visited_checker[mem_address] = pointer_head.val

            # then move the pointer to the next of it
            pointer_head = pointer_head.next

        # if traversing this list without return statement,
        # return false because this list are acyclic
        return None

# testing
## suite 0
# n0 = ListNode(3)
# n1 = ListNode(2)
# n2 = ListNode(0)
# n3 = ListNode(-4)
#
# n0.next = n1
# n1.next = n2
# n2.next = n3
# n3.next = n1

## suite 1
n0 = ListNode(1)
n1 = ListNode(2)

n0.next = n1
n1.next = n0

s = Solution()
print(s.detectCycle(n0))