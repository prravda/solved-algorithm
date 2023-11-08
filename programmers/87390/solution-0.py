"""
from 2-dimension to 1-dimension
processes
- create n*n matrix 
- from 1 to n, do these processes
  - from (0, 0) to (i, i) fill i
- slice each row and join them
- pick them from joined list (called joined) 
  - pick[left]
  - pick[left+1]
  - pick[right]
- merge these three elements into 1-dimension matrix (list)
"""

from typing import List, Tuple


def manipulator(matrix: List[List[int]], from_coord: Tuple[int, int], to_coord: Tuple[int, int], fill_with: int) -> List[List[int]]:
  from_x, from_y = from_coord
  to_x, to_y = to_coord

  for i in range(from_x, to_x):
    for j in range(from_y, to_y):
      if (matrix[i][j] == 0):
        matrix[i][j] = fill_with
  
  return matrix


def pick_rows(matrix: List[List[int]]) -> List[int]:
  merged: List[int] = []

  for i in range(len(matrix)):
    merged.extend(matrix[i])

  return merged


def solution(n: int, left: int, right: int) -> List[int]:
  # 0. create 2-dimension for init
  init_matrix = [[0 for _ in range(n)] for _ in range(n)]
  
  # 1. fill the matrix
  from_coord = (0, 0)
  modified_matrix = init_matrix 

  for i in range(1, n+1):
    modified_matrix = manipulator(init_matrix, from_coord, (i, i), i)

  # 2. then pick each row and merge them into a singluar list
  merged_list = pick_rows(modified_matrix)

  # 3. return by indices(left, left+1, right) into a singular list
  return merged_list[left:right+1]

"""
testing
"""
# mock_list_size = 5
# mock_init_matrix = [[0 for _ in range(mock_list_size)] for _ in range(mock_list_size)]

# mock_result = []

# for i in range(1, mock_list_size):
#   mock_init_matrix = manipulator(mock_init_matrix, (1, 1), (i, i))

solution(5, 1, 3)