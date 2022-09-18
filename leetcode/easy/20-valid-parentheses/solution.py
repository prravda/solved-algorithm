class Solution:
    def isValid(self, s: str) -> bool:

      open_bracket = '[{('
      close_bracket = ']})'

      if len(s) % 2 != 0 or s[0] in close_bracket:
        return False

      stack = []

      for bracket in s:
        if len(stack) == 0 or bracket in open_bracket:
          stack.append(bracket)
          continue
        if bracket == close_bracket[0] and stack[-1] == open_bracket[0]:
          stack.pop()
          continue
        if bracket == close_bracket[1] and stack[-1] == open_bracket[1]:  
          stack.pop()
          continue
        if bracket == close_bracket[2] and stack[-1] == open_bracket[2]:  
          stack.pop()
          continue
        return False
      
      return len(stack) == 0

