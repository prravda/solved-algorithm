# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

len_of_square, required_distance = list(map(int, sys.stdin.readline().split()))
region: list[list[int]] = [list(map(int, input().split())) for _ in range(len_of_square)]


def supply_point_exist(x: int, y: int, distance: int, space: list[list[int]]) -> bool:
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    flag = False

    for w in range(1, distance + 1):
        for i in range(len(space)):
            moved_x = x + w * dx[i]
            moved_y = y + w * dy[i]

            if 0 <= moved_x < len(space) and 0 <= moved_y < len(space):
                if space[moved_x][moved_y] == 2:
                    flag = True

    return flag


num_of_remained_ant_house = 0

for row in range(len_of_square):
    for col in range(len_of_square):
        if region[row][col] == 1:
            if supply_point_exist(row, col, required_distance, region):
                num_of_remained_ant_house += 1

print(num_of_remained_ant_house)
