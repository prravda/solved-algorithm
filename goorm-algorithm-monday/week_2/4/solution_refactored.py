# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys


def convert_numstr_to_int_tuple(numstr: str) -> tuple[int, int]:
    x, y = tuple(map(int, numstr.split()))
    return x, y


length_of_a_side, num_of_bomb = map(int, sys.stdin.readline().split())
list_of_explosive_coordinates = list(map(convert_numstr_to_int_tuple, sys.stdin.read().splitlines()))

dx = [0, 0, 0, 1, -1]
dy = [0, 1, -1, 0, 0]

accm = 0

while list_of_explosive_coordinates:
    x, y = list_of_explosive_coordinates.pop()

    for i in range(5):
        nx = x - 1 + dx[i]
        ny = y - 1 + dy[i]

        if 0 <= nx < length_of_a_side and 0 <= ny < length_of_a_side:
            accm += 1

print(accm)
