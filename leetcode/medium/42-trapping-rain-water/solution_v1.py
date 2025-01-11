from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) <= 2:
            return 0

        pointer_one, pointer_two = 0, 1

        # result
        total_trapped_rain_water = 0

        # buffer
        buffered_trapped_rain_water = 0

        # if pointer_two move out of range, exit the result
        while pointer_one < pointer_two and pointer_two < len(height):
            # ASC case: condition for end of calculating trapped rain water
            if height[pointer_one] <= height[pointer_two]:
                # if buffer is empty, just move to the next
                if buffered_trapped_rain_water == 0:
                    pointer_one += 1
                    pointer_two += 1

                # if buffer is not empty,
                else:
                    # - add buffered trapped water to total trapped water
                    # - and flush the buffer
                    total_trapped_rain_water += buffered_trapped_rain_water
                    buffered_trapped_rain_water = 0

                    # - move pointers
                    pointer_one = pointer_two
                    pointer_two = pointer_one + 1

            # DESC case: condition for start of calculating trapped rain water
            else:
                # if pointer two find to the last of height
                if pointer_two == len(height) - 1 and buffered_trapped_rain_water != 0:
                    # flush buffer
                    buffered_trapped_rain_water = 0
                    # move pointer_one to the next
                    pointer_one += 1
                    # move pointer_tow to the next of pointer_one
                    pointer_two = pointer_one + 1
                else:
                    # add buffer
                    buffered_trapped_rain_water += (
                        height[pointer_one] - height[pointer_two]
                    )
                    # move pointer_two to next
                    pointer_two += 1

        return total_trapped_rain_water


# test_case = [4, 2, 0, 3, 2, 5]
# test_case = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
test_case = [4, 2, 3]
# test_case = [2, 2, 2]
result = Solution().trap(test_case)
print(result)
