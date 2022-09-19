class Solution:
    def removeOuterParentheses(self, s: str) -> str:

        manipulating = []
        returning = []

        sliced_start = 1
        sliced_end = 1

        for i, p in enumerate(s + " "):
            if i == 0:
                manipulating.append(p)
                continue
            if len(manipulating) == 0:
                sliced_end = i
                returning.append(s[sliced_start : sliced_end - 1])
                sliced_start = i + 1
                manipulating.append(p)
                continue
            if p == ")" and manipulating[-1] == "(":
                manipulating.pop()
                continue

            manipulating.append(p)

        return "".join(returning)
