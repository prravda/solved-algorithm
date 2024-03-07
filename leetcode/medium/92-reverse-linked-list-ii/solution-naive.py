from typing import Optional, List


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def list_node_extractor(self, list_node: ListNode, extracted_val: List[int]) -> List[int]:
        if list_node is None:
            return extracted_val
        extracted_val.append(list_node.val)
        return self.list_node_extractor(list_node.next, extracted_val)

    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        extracted_val = self.list_node_extractor(head, [])

        zero_based_left = left - 1
        zero_based_right = right - 1

        before_left = extracted_val[:zero_based_left]
        reversed_between_left_and_right = list(reversed(extracted_val[zero_based_left:zero_based_right + 1]))
        after_right = extracted_val[zero_based_right+1:]

        merged_list = before_left + reversed_between_left_and_right + after_right

        result_list_node = ListNode()
        result_list_node_pointer = result_list_node

        for reversed_element in merged_list:
            result_list_node_pointer.next = ListNode(reversed_element)
            result_list_node_pointer = result_list_node_pointer.next

        return result_list_node.next
