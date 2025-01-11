from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        """ "
        [ area ]
        - just calculate x * y
          - x is index diff
          - y is min value of y

        [ strategy ]
        - find all cases and get the max case
        - create a variable max_area and set 0
        - iterate a loop from 0 to length of height using `i`
          - iterate a loop from `i` + 1 to the length of height using `j`
          - calculate the area by `x*y`
            - x: `j` - `i`
            - y: min(height[i], height[j])
          - if the value of `x*y` is larger than `max_area`,
            write current `x*y` value to `max_area`.
        - after the loops are finished, return the `max_area`
        """
        current_max_area = 0

        for i in range(len(height)):
            for j in range(i + 1, len(height)):
                current_x = j - i
                current_y = min(height[i], height[j])
                current_area = current_x * current_y

                if current_area > current_max_area:
                    current_max_area = current_area

        return current_max_area


test_case = [1, 8, 6, 2, 5, 4, 8, 3, 7]
result = Solution().maxArea(test_case)

print(result)

# TLE
