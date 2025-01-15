from typing import List
from math import floor, ceil


class Solution:
    def caclulate(self, operand_1: int, operand_2: int, operator: str) -> int:
        if operator == "+":
            return operand_1 + operand_2
        if operator == "-":
            return operand_1 - operand_2
        if operator == "*":
            return operand_1 * operand_2
        if operator == "/":
            # I guess this is not an optimal solution
            result = operand_1 / operand_2
            if result < 0:
                return ceil(result)
            else:
                return floor(result)

        return Exception(f"There is no operator like {operator}")

    def evalRPN(self, tokens: List[str]) -> int:
        stack_for_token: list[int] = []
        operators = ("+", "-", "*", "/")

        for t in tokens:
            # case of operators
            if t in operators:
                operand_1 = stack_for_token.pop()
                operand_2 = stack_for_token.pop()

                calc_result = self.caclulate(operand_2, operand_1, t)

                stack_for_token.append(calc_result)

            # case of operand
            else:
                stack_for_token.append(int(t))

        # return calculated result
        return stack_for_token[0]


# testing

# tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
tokens = ["4", "13", "5", "/", "+"]

result = Solution().evalRPN(tokens)

print(result)

"""
https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/47444/python-easy-to-understand-solution/

> From this question I learned "//" is not equal to "int(float(a)/b)'. i.e. truncate to zero

"""
