# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean

import sys

num_of_people, rank_to_find = map(int, sys.stdin.readline().split())
name_and_height_in_str = list(map(str, sys.stdin.read().splitlines()))


def convert_to_structured_information_from_str(info_str: str) -> tuple[str, float]:
    name, height = info_str.split(' ')
    return name, float(height)


name_and_height = list(map(convert_to_structured_information_from_str, name_and_height_in_str))
sorted_dataset = sorted(name_and_height, key=lambda person: (person[0], person[1]))

data_to_find = sorted_dataset[rank_to_find - 1]

print(f"{data_to_find[0]} {format(data_to_find[1], '.2f')}")
