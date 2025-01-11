from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        """ "
        [ area ]
        - just calculate x * y
          - x is index diff
          - y is min value of y

        [ strategy ]
        - basically, the larger x can drive larger area
          - so, set two pointers from leftmost and rightmost
        - calculate current_area, and update current_max_area after comparing with it.
        - compare `height[left+1] - height[left]` and `height[right-1] - height[right]`
          - if former is larger than latter, move left to right
            otherwise, move right to left

        [ time complexity ]
        - O(nlogn)
        """
        current_max_area = 0

        left, right = 0, len(height) - 1

        while left < right:
            # calculate current area
            current_x = right - left
            current_y = min(height[left], height[right])
            current_area = current_x * current_y

            current_max_area = max(current_max_area, current_area)

            # if left pointer's height is smaller than right,
            # move the left pointer to right
            # because the height of container is determined by shorter height
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return current_max_area


# test_case = [1, 8, 6, 2, 5, 4, 8, 3, 7]
test_case = [1, 2, 4, 3]
result = Solution().maxArea(test_case)

print(result)

# TLE
