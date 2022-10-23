# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

length_of_str = input()
target_str = input()

out_of_case_char = "*"
before = out_of_case_char

num_of_subsets = 0

for c in target_str:
    if before is out_of_case_char:
        before = c
        continue

    if before != c:
        num_of_subsets += 1

    before = c

print(num_of_subsets + 1)
