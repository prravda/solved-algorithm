from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(
            self, list1: Optional[ListNode], list2: Optional[ListNode]
    ) -> Optional[ListNode]:
        # create an empty listNode for holding the merged result
        merged_list = ListNode()
        # then set a pointer variable for traversing
        current_location = merged_list

        # traverse two list if they're all valid
        while list1 and list2:
            # if list1.val is smaller than list2.val
            if list1.val < list2.val:
                # move current_location next to list1
                current_location.next = list1
                # then move list1 to list1.next
                list1 = list1.next
            # else...
            else:
                # move current_location.next to list2
                current_location.next = list2
                # then move list2 to list2.next
                list2 = list2.next
            # after these progresses, move current_location to it's next
            current_location = current_location.next

        # If a list hold elements after this loop, simply merge the list to the next of current_location
        current_location.next = list1 or list2

        # Finally, return the next ListNode of merged list's head
        # because the head's value is initiated as 0 (the dummy value)
        return merged_list.next



