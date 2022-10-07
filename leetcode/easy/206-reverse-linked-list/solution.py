"""
strategy 
- traverse the given linked list
- create another linked list
"""

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

test_dataset = ListNode(1)
test_dataset.next = ListNode(2)
test_dataset.next.next = ListNode(3)
test_dataset.next.next.next = ListNode(4)
test_dataset.next.next.next.next = ListNode(5)

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
      if head is None:
        return None
      
      # create variables 
      current_location_of_head = head
      values: list[int] = []
      
      # extract values from head
      while current_location_of_head is not None:
        values.append(current_location_of_head.val)
        current_location_of_head = current_location_of_head.next
      
      # create a new linked list
      list_to_return = ListNode()
      rear = list_to_return

      while values:
        current_val = values.pop()
        rear.val = current_val
        if len(values) > 0:
          rear.next = ListNode()
          rear = rear.next
      
      return list_to_return

Solution().reverseList(test_dataset)