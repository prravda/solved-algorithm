# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

# up / down / left / right
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

# get input
# len_of_axis = int(input())
# region: list[list[int]] = []
#
# for _ in range(len_of_axis):
#     region.append(list(map(int, input().split(' '))))


# get input
len_of_axis = 3
region = [
    [0, 0, 1],
    [2, 2, 0],
    [2, 2, 0],
]


def get_number_trees_which_turned_into_maple(x: int, y: int, vec: list[list[int]]) -> tuple[int, int, int]:
    num_of_turned_into_maple = 0

    for i in range(len(dx)):
        updated_x = x + dx[i]
        updated_y = y + dy[i]

        if 0 < updated_x < len_of_axis and 0 < updated_y < len_of_axis:
            if vec[updated_x][updated_y] == 0:
                num_of_turned_into_maple += 1

    return x, y, num_of_turned_into_maple


def does_all_trees_are_turned_into_red(vec: list[list[int]]) -> bool:
    flag = True

    for row in vec:
        for coord in row:
            if coord != 0:
                flag = False
                break

    return flag


def update_the_region_with_list_of_input(coords: list[tuple[int, int, int]], vec: list[list[int]]) -> list[list[int]]:
    for c in coords:
        x, y, n = c
        e = vec[x][y]

        if e <= n:
            e = 0
        e -= n

    return vec


def solution(vec: list[list[int]]) -> int:
    vec_copied = vec
    required_date = 0

    while not does_all_trees_are_turned_into_red(vec_copied):
        list_of_coords_to_update: list[tuple[int, int, int]] = []

        for i in range(len_of_axis):
            for j in range(len_of_axis):
                list_of_coords_to_update.append(get_number_trees_which_turned_into_maple(i, j, vec_copied))

        vec_copied = update_the_region_with_list_of_input(list_of_coords_to_update, vec_copied)

        print(vec_copied)

        required_date += 1

    return required_date


print(solution(region))
