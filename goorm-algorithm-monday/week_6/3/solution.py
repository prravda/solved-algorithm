# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys
from itertools import permutations


total_num = int(input())
nums = list(map(int, sys.stdin.readline().split()))

cases = permutations(nums)
preprocessed_cases: list[int] = []

for each_case in cases:
    before_one_digit = 999
    current_ten_digit = 999

    num_str_each_case = ''

    for num in each_case:
        # first loop
        if before_one_digit == 999:
            before_one_digit = num % 10
            num_str_each_case = num_str_each_case + str(num)
            continue

        # after second loop
        current_ten_digit = num // 10

        if before_one_digit == current_ten_digit:
            num_str_each_case = num_str_each_case + str(num % 10)
        else:
            num_str_each_case = num_str_each_case + str(num)

        before_one_digit = num % 10

    preprocessed_cases.append(int(num_str_each_case))

preprocessed_cases.sort()

print(preprocessed_cases[0])

