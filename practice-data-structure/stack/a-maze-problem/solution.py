"""
reference: https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-using-stack/
"""

DIRECTION = {
  'UP': 0,
  'LEFT': 1,
  'DOWN': 2,
  'RIGHT': 3,
}

class Node:
  def __init__(self, row: int, col: int) -> None:
    self.row = row
    self.col = col
    self.direction = DIRECTION['UP'] 

# maze = [ 
#   [1, 0, 0, 0],
#   [1, 1, 0, 1],
#   [0, 1, 0, 0],
#   [1, 1, 1, 1],
# ]

maze = [
  [ 1, 0, 1, 1, 0 ],
  [ 1, 1, 1, 0, 1 ],
  [ 0, 1, 0, 1, 1 ],
  [ 1, 1, 1, 1, 1 ],
  # [ 1, 1, 1, 1, 1 ],
]


# maze = [
#   [ 1, 0, 0 ],
#   [ 1, 1, 0 ],
#   [ 0, 1, 1 ],
# ]

SIZE_MAZE_ROW = len(maze)
SIZE_MAZE_COL = len(maze[0])

is_visited = [[False for i in range(SIZE_MAZE_COL)] for j in range(SIZE_MAZE_ROW)]

def escapeMaze(maze: list[list[int]], fx: int, fy: int) -> bool:
  # Create a strating point
  # And put it into the stack
  start = Node(0, 0)
  stack: list[Node] = []
  stack.append(start)

  # While the stack is not empty, do this processes
  while stack:
    # pop the last index from stack 
    current = stack.pop()
    
    # set variable (not constant) 
    # for manipulating row and column
    row = current.row
    col = current.col
    direction = current.direction

    # change the direction of current node
    current.direction += 1
    # and put into the stack again
    stack.append(current)

    # Escape condition
    # If current location is the destination,
    # return True
    if row == fx and col == fy:
      return True

    # Check each direction cases
    if direction == DIRECTION['UP']:
      # Check index validity,
      # whether visited before or not,
      # and whether available to visit or not
      if row - 1 >= 0 and \
        maze[row -1][col] == 1 and \
        is_visited[row - 1][col] == False:
        # If all conditions are fulfilled
        # create the nexe_route node with row and col
        next_route = Node(row - 1, col)
        # And mark this location as visited to is_visited
        is_visited[row - 1][col] = True
        # Append the next route into the stack
        stack.append(next_route)
        continue
      continue

    if direction == DIRECTION['LEFT']:
      if col - 1 >= 0 and \
        maze[row][col - 1] == 1 and \
        is_visited[row][col - 1] == False:  
        next_route = Node(row, col - 1)
        is_visited[row][col - 1] = True
        stack.append(next_route)
        continue
      continue

    if direction == DIRECTION['DOWN']:
      if row + 1 < SIZE_MAZE_ROW and \
        maze[row + 1][col] == 1 and \
        is_visited[row + 1][col] == False:  
        next_route = Node(row + 1, col)
        is_visited[row + 1][col] = True
        stack.append(next_route)
        continue
      continue

    if direction == DIRECTION['RIGHT']:
      if col + 1 < SIZE_MAZE_ROW and \
        maze[row][col + 1] == 1 and \
        is_visited[row][col + 1] == False:  
        next_route = Node(row, col + 1)
        is_visited[row][col + 1] = True
        stack.append(next_route)
        continue
      continue

    # If there is no available path from current location,
    # go back to the location just before
    # and mark the location in is_visited from True to False
    is_visited[row][col] = False
    stack.pop()
  
  return False


    
          
    
    

print(escapeMaze(maze))
    

    
