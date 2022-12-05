class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False

        divs = [2, 3, 5]

        for d in divs:
            while n % d == 0:
                n /= d

        return True if n == 1 else False
