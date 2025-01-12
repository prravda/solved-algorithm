from typing import List

"""
핵심내용은 물이 가둬질 수 있는 boundary 를 나누는 것이다.
그리고 그 boundary 에서 왼쪽에서 가장 큰 height(이하 max_left) 와 오른쪽에서 가장 큰 height(이하 max_right) 를 구한다.
물이 가둬지는 건 

"""
class Solution:
    def trap(self, height: List[int]) -> int:
        length_height = len(height)
        max_left_list, max_right_list = [0] * length_height, [0] * length_height

        
