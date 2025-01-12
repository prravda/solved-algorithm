class Solution:
    def isValid(self, s: str) -> bool:
        """
        strategy
        - iterate s by using c
          - if c in opened_braces,
            put c into stacks_for_braces
          - if c in closed_braces,
            pop(extract last element and remove) and
            poped element is pair of c
            - if they are valid pair, keep iterate
            - it they are not valid pair, return False
        - after iteration and there is no invalid pair,
          return True
        """

        # keys are closed braces
        # values are opened braces
        brace_pairs = {
            "}": "{",
            ")": "(",
            "]": "[",
        }
        stacks_for_braces = []

        for c in s:
            # if c in braces_pairs
            if c in brace_pairs and len(stacks_for_braces) != 0:
                # pop last element from stacks_for_braces
                last_element = stacks_for_braces.pop()
                if brace_pairs[c] != last_element:
                    return False
            else:
                stacks_for_braces.append(c)

        return True if len(stacks_for_braces) == 0 else False


Solution().isValid("[")
