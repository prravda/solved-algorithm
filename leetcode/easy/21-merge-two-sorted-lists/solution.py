from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# solution
# - create an empty ListNode instance to return the result
# - traverse two singly linked list (so called a, b)
#     - if a >= b ->  put a and b sequentially into the result list
#     - else -> put b and a sequentially into the result list
# - when list1.next is None and list2.next is None, end it.

class Solution:

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode()

        result_current = result

        list1_current = list1
        list2_current = list2

        while list1_current is not None and list2_current is not None:
            if list1_current.val <= list2_current.val:
                result_current.next = ListNode(list1_current.val)
                result_current.next.next = ListNode(list2_current.val)

                result_current = result_current.next.next

                list1_current = list1_current.next
                list2_current = list2_current.next
                continue

            if list1_current.val > list2_current.val:
                result_current.next = ListNode(list2_current.val)
                result_current.next.next = ListNode(list1_current.val)

                result_current = result_current.next.next

                list1_current = list1_current.next
                list2_current = list2_current.next
                continue

        while list1_current is not None:
            result_current.next = ListNode(list1_current.val)

            result_current = result_current.next

            list1_current = list1_current.next

        while list2_current is not None:
            result_current.next = ListNode(list2_current.val)

            result_current = result_current.next

            list2_current = list2_current.next

        return result.next


# test suites
test_list1 = ListNode(1)
test_list1.next = ListNode(2)
test_list1.next.next = ListNode(4)

test_list2 = ListNode(1)
test_list2.next = ListNode(3)
test_list2.next.next = ListNode(4)

result = Solution().mergeTwoLists(test_list1, test_list2)

while result.next:
    print(result.val)
    result = result.next
