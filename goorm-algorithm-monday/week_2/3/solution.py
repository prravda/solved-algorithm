# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean

import sys

num_of_people, rank_to_find = map(int, sys.stdin.readline().split())
name_and_height = list(map(str, sys.stdin.read().splitlines()))

name_and_height.sort()

print(name_and_height[rank_to_find - 1])
