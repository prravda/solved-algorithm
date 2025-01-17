from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = []

        for i in range(len(temperatures)):
            counter = 0

            for j in range(i, len(temperatures)):
                if temperatures[j] > temperatures[i]:
                    counter = j - i
                    break

            answer.append(counter)

        return answer
