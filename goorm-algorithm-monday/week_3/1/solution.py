# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

num_of_people = input()
scores = list(map(int, sys.stdin.readline().split()))

print(sum(scores))
