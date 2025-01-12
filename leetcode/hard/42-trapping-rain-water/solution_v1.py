from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) <= 2:
            return 0

        len_height = len(height)

        # create a variable max_left
        # and set height[0]
        # then create a variable max_right
        # and set height[len_height - 1]
        max_left, max_right = height[0], height[len_height - 1]

        # create a variable left
        # and set 1
        # create a variable right
        # and set len_height - 2
        left, right = 1, len_height - 2

        # variable for storing amount of trapped water
        trapped_water = 0

        while left <= right:
            # focused on smaller height,
            # because trapped water derived by smaller height
            if max_left < max_right:
                # compare max_left and height[left]
                # if height[left] is larger than max_left
                # just update it
                if height[left] > max_left:
                    max_left = height[left]
                # calculate trapped water
                # the amount of trapped water is
                # max_left - height[left]
                # trapped water derived by smaller one
                # add this calculation result to trapped_water
                else:
                    trapped_water += max_left - height[left]
                # if these progresses are done,
                # move the left to next
                left += 1
            else:
                # same with left case
                if height[right] > max_right:
                    max_right = height[right]
                else:
                    trapped_water += max_right - height[right]
                right -= 1

        # return the amount of trapped water
        return trapped_water
