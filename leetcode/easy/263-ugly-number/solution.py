class Solution:
    def is_ugly_recursive(self, n: int) -> bool:
        # escape condition
        if n <= 0:
            return False

        if n == 1:
            return True

        if n % 5 == 0:
            return self.is_ugly_recursive(n / 5)
        if n % 3 == 0:
            return self.is_ugly_recursive(n / 3)
        if n % 2 == 0:
            return self.is_ugly_recursive(n / 2)

        return False

    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False

        return self.is_ugly_recursive(n)
