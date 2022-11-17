# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

[first, last] = list(map(int, sys.stdin.readline().split()))

if first == last:
    print(0)
    print(' ')

else:
    print(last - first - 1)
    print(" ".join([str(i) for i in range(first + 1, last)]))
