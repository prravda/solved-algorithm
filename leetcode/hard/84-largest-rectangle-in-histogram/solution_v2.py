from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        max_area = 0
        heights.append(0)

        for i in range(len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                height = heights[stack.pop()]
                width = i if not stack else (i - stack[-1] - 1)
                area = height * width
                max_area = max(area, max_area)

            stack.append(i)

        return max_area


heights = [2, 1, 5, 6, 2, 3]
instance = Solution()

result = instance.largestRectangleArea(heights)

print(result)
