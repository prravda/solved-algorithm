# TODO: Make this code more clean
class Solution:
    def checkRecord(self, s: str) -> bool:
        eligibility_for_attendance_award: bool = True

        was_late_before: bool = False
        num_of_consecutive_late: int = 0

        num_of_abscent: int = 0

        for r in s:
            # break condition
            if num_of_consecutive_late >= 3 or num_of_abscent >= 2:
                eligibility_for_attendance_award = False
                break

            # case handling
            if r == "L":
                if was_late_before:
                    num_of_consecutive_late += 1
                else:
                    was_late_before = True
                    num_of_consecutive_late = 1

            if r == "A":
                was_late_before = False
                num_of_abscent += 1
                num_of_consecutive_late = 0

            if r == "P":
                was_late_before = False
                num_of_consecutive_late = 0

        # if there are any not-resolved job, do it
        if num_of_consecutive_late >= 3 or num_of_abscent >= 2:
            eligibility_for_attendance_award = False

        return eligibility_for_attendance_award
