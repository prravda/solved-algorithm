# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
nth = int(input())
# nth = 100

fib_one = 1
fib_two = 1

fib_list = []

for i in range(nth):
    if i == 0:
        fib_list.append(fib_one)
        continue

    if i == 1:
        fib_list.append(fib_two)
        continue

    fib_list.append(fib_one + fib_two)

    temp = fib_two
    fib_two = fib_one + fib_two
    fib_one = temp

print(fib_list[-1])
