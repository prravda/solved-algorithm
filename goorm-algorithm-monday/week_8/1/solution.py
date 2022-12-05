# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
goorm_code_table = {
    # single cases
    'qw': '1',
    'as': '2',
    'zx': '3',
    'we': '4',
    'sd': '5',
    'xc': '6',
    'er': '7',
    'df': '8',
    'cv': '9',
    'ze': '0',
}

goorm_number_length = int(input())
goorm_number_character = input()

not_assigned_yet = '*'
first = not_assigned_yet
second = not_assigned_yet

result = []

for c in goorm_number_character:
    # init
    if first is not_assigned_yet:
        first = c
        continue
    if second is not_assigned_yet:
        second = c
        continue

    # converting after first and second are assigned to characters
    converted_into_int = not_assigned_yet

    # single case
    if first+second in goorm_code_table:
        converted_into_int = goorm_code_table[first+second]
        # joint case
        if second+c in goorm_code_table:
            converted_into_int += goorm_code_table[second+c]

    # put converted result if the result is valid
    if converted_into_int is not not_assigned_yet:
        result.append(converted_into_int)

    # variable swapping for next loop
    first = second
    second = c

print(result)

