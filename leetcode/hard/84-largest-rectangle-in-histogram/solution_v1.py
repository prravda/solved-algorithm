"""
description:
- tc: up to nlog(n) because the input length is 10^4

strategy:
- key point: how can I define the largest rectangle?
- the height is defined by the lowest one.

idea:
- can I sort them?: no, I guess it can't. because it should keep the original order.

basics:
- when should I start to calculate the rectangle?
- stack, first in last out

after getting hints:
- use (incr.) monotonic stack
  - store only incremental cases
  - if the order is out of incr., start to calc.
"""

from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:

        monotonic_stack_incr: List[int] = []
        max_area = -999_999

        for i in range(0, len(heights) - 1):
            # if the stack is not empty and order is not incremental,
            # stop to append and start to calc.
            if len(monotonic_stack_incr) != 0 and monotonic_stack_incr[-1] > heights[i]:
                # basically, calculate the width
                counter = 0
                while len(monotonic_stack_incr) != 0:
                    # first, add 1 to counter
                    couner += 1
                    # then, extract index and height
                    current_index = monotonic_stack_incr.pop()
                    current_height = heights[current_index]

                    # calculate the area
                    current_area = current_height * counter

                    if heights[i] >= current_height:
                        current_area += current_height

                    current_max_area = counter * current_height

                    max_area = max(current_max_area, max_area)

            else:
                monotonic_stack_incr.append(i)

        # last progress for flush the stack and last element
        monotonic_stack_incr.append(len(heights) - 1)

        # basically, calculate the width
        counter = 0
        while len(monotonic_stack_incr) != 0:
            # first, add 1 to counter
            counter += 1
            # then, extract index and height
            current_index = monotonic_stack_incr.pop()
            current_height = heights[current_index]

            # calculate the area
            current_area = current_height * counter

            if heights[i] >= current_height:
                current_area += current_height

            current_max_area = counter * current_height

            max_area = max(current_max_area, max_area)

        return max_area


# tests
# heights = [2, 1, 5, 6, 2, 3]
# heights = [2, 4]
heights = [4, 2]

instance = Solution()
result = instance.largestRectangleArea(heights)

print(result)
