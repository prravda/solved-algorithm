# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys
from itertools import permutations

goorm_life_count, counterpart_life_count, num_of_total_game = list(map(int, sys.stdin.readline().split()))

case_of_goorm_dead = permutations(num_of_total_game, goorm_life_count)
case_of_counterpart_dead = permutations(num_of_total_game, counterpart_life_count)

print(case_of_goorm_dead + case_of_counterpart_dead)