# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

num_of_elements = input()
nums = list(map(int, sys.stdin.readline().split()))

def is_prime(num: int) -> bool:
	if num < 2:
		return False
	
	limit = int(num ** 0.5) + 1
	
	for n in range(2, limit):
		if num % n == 0:
			return False
	
	return True


accm = 0

for i, n in enumerate(nums):
	if is_prime(i + 1):
		accm += n

print(accm)
	