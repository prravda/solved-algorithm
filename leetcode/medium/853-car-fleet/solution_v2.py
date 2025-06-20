# try to solve again with hints

from typing import List


class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = sorted(zip(position, speed), reverse=True)
        position_processed, speed_processed = zip(*cars)

        # variable for checking the number of arrived car fleets
        number_of_fleets = 0

        # start while loop
        while len(position_desc_sorted) > 0:
            updated_position = []
            updated_speed = []

            for i in range(len(position_desc_sorted)):
                # if current position is larger than target,
                # add 1 to number of fleets
                if position_desc_sorted[i] >= target:
                    number_of_fleets += 1

                # update current position
                else:
                    updated_current_position = (
                        position_desc_sorted[i] + speed_followed_sorted_with_position[i]
                    )

                    # if updated_position is not empty,
                    # and last element of updated_position is
                    # smaller than or same with pdated_current_position,
                    if (
                        len(updated_position) > 0
                        and updated_position[-1] <= updated_current_position
                    ):
                        # change its speed to slower one
                        updated_speed[-1] = min(
                            updated_speed[-1],
                            speed_followed_sorted_with_position[i],
                        )

                    # or else, just append
                    else:
                        updated_position.append(updated_current_position)
                        updated_speed.append(speed_followed_sorted_with_position[i])

            # replace postion_desc_sorted to updated_position
            # and speed_followed_sorted_with_position to updated_speed
            # after the foor loop is finished
            position_desc_sorted = updated_position
            speed_followed_sorted_with_position = updated_speed

        # return the result
        return number_of_fleets


# target = 12
# position = [10, 8, 0, 5, 3]
# speed = [2, 4, 1, 1, 3]

target = 20
position = [6, 2, 17]
speed = [3, 9, 2]

Solution().carFleet(target, position, speed)
