from typing import List


class HashSet:
    def __init__(self):
        self.set = set()

    def add(self, element):
        if element in self.set:
            return False

        if element not in self.set:
            self.set.add(element)
            return True


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        hashset = HashSet()

        for i in range(9):
            for j in range(9):
                current_element = board[i][j]
                # if this number already exists in row, col, and box
                # return False
                if (current_element != ".") and not (
                    hashset.add(f"{current_element}-in-row-{i}")
                    and hashset.add(f"{current_element}-in-col-{j}")
                    and hashset.add(f"{current_element}-in-box-{i//3}-{j//3}")
                ):
                    return False

        return True


board = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
]

print(Solution().isValidSudoku(board))
