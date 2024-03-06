from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    # the return value 'result' should be non-optional type
    def __init__(self):
        self.result: ListNode = ListNode()
        self.pointer: Optional[ListNode] = self.result

    def mergeTwoLists(
        self, list1: Optional[ListNode], list2: Optional[ListNode]
    ) -> Optional[ListNode]:
        # [ escaping condition ]
        # if the two list, list1 and list2 are not valid,
        # return the value and finish the traversing
        if list1 is None and list2 is None:
            return self.result.next

        # [ one is valid but another is not valid ]
        # if a list is valid but another is not,
        # just pass None into invalid list
        # and assign the valid one's value to result's value
        # then keep traversing
        if list1 and list2 is None:
            self.pointer.next = ListNode(list1.val)
            self.pointer = self.pointer.next
            return self.mergeTwoLists(list1.next, None)

        if list1 is None and list2:
            self.pointer.next = ListNode(list2.val)
            self.pointer = self.pointer.next
            return self.mergeTwoLists(None, list2.next)

        # [ all list are valid ]
        # compare their val and put the smaller one into the result's value
        if list1.val >= list2.val:
            self.pointer.next = ListNode(list2.val)
            self.pointer = self.pointer.next
            return self.mergeTwoLists(list1, list2.next)

        if list1.val < list2.val:
            self.pointer.next = ListNode(list1.val)
            self.pointer = self.pointer.next
            return self.mergeTwoLists(list1.next, list2)