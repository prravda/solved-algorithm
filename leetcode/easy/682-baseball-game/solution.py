# Constraints: 1 <= operations.length <= 1000
# Available time complexity: Up to O(n^2)
# Strategy
# - traversal the input list
# - if input is a number -> append it to the list
# - if input is a character -> calculate following explanation

from typing import List

class Solution:
    def calPoints(self, operations: List[str]) -> int:
        commands = ('+', 'D', 'C')
        stack = []

        for o in operations:
          # case of number
          if (o not in commands):
            stack.append(int(o))
            continue

          if (o == "+"):
            stack.append(stack[-1] + stack[-2])
            continue

          if (o == 'D'):
            stack.append(stack[-1] * 2)
            continue

          if (o == 'C'):
            stack.pop()
            continue

        return sum(stack)


