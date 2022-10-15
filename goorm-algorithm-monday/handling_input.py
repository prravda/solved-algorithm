# handle the input several value by lines like
"""
1
2
3
"""
import sys 
nums = list(map(int, sys.stdin.read().splitlines()))

# handle the input which the values are separated by empty space like
"""
1 2 3
"""
# import sys
nums = list(map(int, sys.stdin.readline().split()))
