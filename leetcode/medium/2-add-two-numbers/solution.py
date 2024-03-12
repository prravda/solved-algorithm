from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # make pointers
        pointer_l1, pointer_l2 = l1, l2

        # make ListNode for result and it's pointer
        result = ListNode()
        pointer_result = result

        # make a variable current_head for holding the head number
        # and init it to 0
        current_head = 0

        # calculate till the two linked lists are valid
        while pointer_l1 and pointer_l2:
            # calculation
            sum_current_digits = pointer_l1.val + pointer_l2.val + current_head
            current_remain = sum_current_digits % 10
            current_head = sum_current_digits // 10

            # move the pointers of two linked list
            pointer_l1, pointer_l2 = pointer_l1.next, pointer_l2.next

            # append the calculated result into the result linked list
            pointer_result.next = ListNode(current_remain)
            # then move the pointer of result linked list
            pointer_result = pointer_result.next

        # check any linked lists are remained
        remained_list = pointer_l1 or pointer_l2

        # then pull all elements from it
        while remained_list:
            # calculation
            sum_current_digits = remained_list.val + current_head
            current_remain = sum_current_digits % 10
            current_head = sum_current_digits // 10

            # move the pointers of remained linked list and result
            pointer_result.next = ListNode(current_remain)
            pointer_result, remained_list = pointer_result.next, remained_list.next

        # finally, check the current_head is not 0
        # if it is not zero, add the result linked list
        if current_head != 0:
            pointer_result.next = ListNode(current_head)

        # return the result
        return result.next
