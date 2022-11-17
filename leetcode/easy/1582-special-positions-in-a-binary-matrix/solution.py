from typing import List


class Solution:
    def is_special_point(self, row: int, col: int, mat: List[List[int]]) -> bool:
        flag = True

        row_limit = len(mat)
        col_limit = len(mat[0])

        # check row
        for r in range(row_limit):
            if r == row:
                continue
            if mat[r][col] == 1:
                flag = False

        # check col
        for c in range(col_limit):
            if c == col:
                continue
            if mat[row][c] == 1:
                flag = False

        return flag

    def numSpecial(self, mat: List[List[int]]) -> int:
        row_limit = len(mat)
        col_limit = len(mat[0])

        num_of_special_position = 0

        for row in range(row_limit):
            for col in range(col_limit):
                if mat[row][col] == 1 and self.is_special_point(row, col, mat):
                    num_of_special_position += 1

        return num_of_special_position
