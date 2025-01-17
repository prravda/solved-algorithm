from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0] * len(temperatures)
        stack = []

        for i in range(len(temperatures) - 1):
            # case of incremental
            if temperatures[i] < temperatures[i + 1]:
                # flush the stack under a specific condition
                while len(stack) > 0 and temperatures[stack[-1]] < temperatures[i + 1]:
                    last_index = stack.pop()
                    answer[last_index] = (i + 1) - last_index
                # if finished, mark answer[i] to 1
                # because just next element is larger than current element
                answer[i] = 1
            else:
                # case of decremental
                stack.append(i)

        return answer


temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
result = Solution().dailyTemperatures(temperatures)

print(result)
