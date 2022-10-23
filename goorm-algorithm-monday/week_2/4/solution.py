# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys


def convert_numstr_to_int_tuple(numstr: str) -> tuple[int, int]:
    x, y = tuple(map(int, numstr.split()))
    return x, y


length_of_a_side, num_of_bomb = map(int, sys.stdin.readline().split())
list_of_explosive_coordinates = list(map(convert_numstr_to_int_tuple, sys.stdin.read().splitlines()))


class ExplosiveManager:
    def __init__(self, length: int):
        self.__length = length

    def current(self, x: int, y: int) -> int:
        return 1 if 0 <= x < self.__length and 0 <= y < self.__length else 0

    def up(self, x: int, y: int) -> int:
        return 1 if 0 <= x < self.__length and 0 <= y - 1 < self.__length else 0

    def down(self, x: int, y: int) -> int:
        return 1 if 0 <= x < self.__length and 0 <= y + 1 < self.__length else 0

    def left(self, x: int, y: int) -> int:
        return 1 if 0 <= x - 1 < self.__length and 0 <= y < self.__length else 0

    def right(self, x: int, y: int) -> int:
        return 1 if 0 <= x + 1 < self.__length and 0 <= y < self.__length else 0

    def count(self, x: int, y: int) -> int:
        x -= 1
        y -= 1

        return self.current(x, y) + \
               self.up(x, y) + \
               self.down(x, y) + \
               self.left(x, y) + \
               self.right(x, y)


explosive_region_accm = 0
manager = ExplosiveManager(length_of_a_side)

for c in list_of_explosive_coordinates:
    explosive_region_accm += manager.count(c[0], c[1])

print(explosive_region_accm)
