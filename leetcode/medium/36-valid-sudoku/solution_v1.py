from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        return (
            self.rowChecker(board) and self.colChecker(board) and self.boxChecker(board)
        )

    def rowChecker(self, board: List[List[str]]) -> bool:
        # iterate rows and check there are no duplicate between 1 to 9
        is_valid_sudoku = True

        for i in range(len(board)):
            # list for checking duplicates
            elements: List[str] = []

            # for early return
            if is_valid_sudoku is False:
                break

            for j in range(len(board)):
                current_element = board[i][j]
                # case 0. .
                if current_element == ".":
                    continue

                # case 1. fresh case
                if current_element in elements:
                    is_valid_sudoku = False
                    break

                # case 2. duplicated case
                if current_element not in elements:
                    elements.append(current_element)
                    continue

        # return the result
        return is_valid_sudoku

    def colChecker(self, board: List[List[str]]) -> bool:
        # iterate cols and check there are no duplicate between 1 to 9
        is_valid_sudoku = True

        for i in range(len(board)):
            # list for checking duplicates
            elements: List[str] = []

            # for early return
            if is_valid_sudoku is False:
                break

            for j in range(len(board)):
                current_element = board[j][i]
                # case 0. .
                if current_element == ".":
                    continue

                # case 1. fresh case
                if current_element in elements:
                    is_valid_sudoku = False
                    break

                # case 2. duplicated case
                if current_element not in elements:
                    elements.append(current_element)
                    continue

        # return the result
        return is_valid_sudoku

    def boxChecker(self, board: List[List[str]]) -> bool:
        # iterate 3*3 box and check there are no duplicate between 1 to 9
        is_valid_sudoku = True

        # split board to 3*3 boxes
        boxes = []
        for i in range(0, len(board), 3):
            current_rows = board[i : i + 3 if i + 3 < len(board) else len(board)]
            for j in range(0, len(board), 3):
                current_box = []
                for row in current_rows:
                    current_box.append(
                        row[j : j + 3 if j + 3 < len(board) else len(board)]
                    )
                boxes.append(current_box)

        # iterate each sub-boxes
        for box in boxes:
            # list for checking duplicates
            elements: List[str] = []

            # for early return
            if is_valid_sudoku is False:
                break

            for row in box:
                for e in row:
                    # case 0. .
                    if e == ".":
                        continue

                    # case 1. fresh case
                    if e in elements:
                        is_valid_sudoku = False
                        break

                    # case 2. duplicated case
                    if e not in elements:
                        elements.append(e)
                        continue

        # return the result
        return is_valid_sudoku


board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

result = Solution().isValidSudoku(board)

print(result)

# print(board[0:3])
