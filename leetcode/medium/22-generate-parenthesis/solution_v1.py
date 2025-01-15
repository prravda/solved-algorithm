def sum_till_n_recursive(target: int, till: int = 0, accm: int = 0) -> int:
    if target < till:
        return accm
    else:
        updated_accm = accm + till
        updated_till = till + 1

        return sum_till_n_recursive(target, updated_till, updated_accm)


cases = []


def create_parenthesis_recursively(parenthesis: str, length_of_parenthesis: int) -> str:
    if len(parenthesis) == length_of_parenthesis:
        # check the validity of parenthesis
        stack_for_check_parenthesis: list[str] = []

        for p in parenthesis:
            if p == "(":
                stack_for_check_parenthesis.append(p)
            # if p is same with ), closed parenthesis
            else:
                pair = stack_for_check_parenthesis.pop()

                # case of valid sub-parenthesis
                if pair == "(":
                    # just go to the next loop
                    continue
                # if pair is not open parenthesis,
                # break this loop
                else:
                    break

        # if the stack is cleared,
        # append cases
        if len(stack_for_check_parenthesis) == 0:
            cases.append(parenthesis)

    else:
        create_parenthesis_recursively(parenthesis + "(", length_of_parenthesis)
        create_parenthesis_recursively(parenthesis + ")", length_of_parenthesis)


from typing import List


class Solution:
    def __init__(self):
        self.valid_parenthesis: list[str] = []

    def create_parenthesis_recursively(
        self, parenthesis: str, length_of_parenthesis: int
    ) -> str:
        # stop conditions
        if len(parenthesis) == length_of_parenthesis:
            # check validity of parenthesis
            stack_for_validity_stack = []

            for p in parenthesis:
                if p == "(":
                    stack_for_validity_stack.append(p)

                # case: p == ')'
                else:
                    if (
                        len(stack_for_validity_stack) > 0
                        and stack_for_validity_stack[-1] == "("
                    ):
                        stack_for_validity_stack.pop()
                    else:
                        stack_for_validity_stack.append(p)

            if len(stack_for_validity_stack) == 0:
                self.valid_parenthesis.append(parenthesis)

        else:
            self.create_parenthesis_recursively(
                parenthesis + "(", length_of_parenthesis
            )
            self.create_parenthesis_recursively(
                parenthesis + ")", length_of_parenthesis
            )

    def generateParenthesis(self, n: int) -> List[str]:
        self.create_parenthesis_recursively("", n * 2)
        return self.valid_parenthesis
