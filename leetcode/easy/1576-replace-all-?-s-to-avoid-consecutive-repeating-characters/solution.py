from typing import List
import random


class Solution:

    def __init__(self) -> None:
        self.__letters = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '*', '?')
    
    def modifyString(self, s: str) -> str:
      prev = '*'
      next = '*'

      for i, c in enumerate(s):
        if c == '?':
          if i - 1 >= 0:
            prev = s[i - 1]
          if i + 1 < len(s):
            next = s[i + 1]
          available_char = self.__letters[self.get_random_integer([self.__letters.index(prev), self.__letters.index(next), self.__letters.index('*'), self.__letters.index('?')])]
          s = s.replace(c, available_char, 1)

      return s

    def get_random_integer(self, except_number: List[int]) -> int:
      random_integer = except_number[0]

      while random_integer in except_number:
        random_integer = random.randrange(0, len(self.__letters))
      
      return random_integer