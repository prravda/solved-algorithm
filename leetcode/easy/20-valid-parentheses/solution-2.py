class Solution:
  def isValid(self, s: str) -> bool:
    stack = []
    closed_bracket = { "]": "[", "}": "{", ")": "(" }

    if len(s) % 2 != 0 or s[0] in closed_bracket:
      return False

    for bracket in s:
      if (not stack or bracket not in closed_bracket):
        stack.append(bracket)
        continue

      if bracket in closed_bracket:
        if (stack and closed_bracket[bracket] == stack[-1]):
          stack.pop()
          continue
        
        return False
    
    return len(stack) == 0

Solution().isValid('()')