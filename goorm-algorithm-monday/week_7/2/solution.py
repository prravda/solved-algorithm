# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
from queue import Queue

# input and preprocessing
num_of_friends = int(input())
num_of_relations = int(input())

graph_between_friends = [[False for _ in range(num_of_friends)] for _ in range(num_of_friends)]
is_visited = [False for _ in range(num_of_friends)]

for _ in range(num_of_relations):
    from_friend, to_friend = tuple(map(int, input().split(' ')))
    graph_between_friends[from_friend - 1][to_friend - 1] = True
    graph_between_friends[to_friend - 1][from_friend - 1] = True

# traverse the graph
q: Queue[int] = Queue()

# init the queue
for i in range(num_of_friends):
    if graph_between_friends[0][i] == 1:
        q.put(i)

is_visited[0] = True

# traversing
while not q.empty():
    next_edge = q.get()

    if not is_visited[next_edge]:
        is_visited[next_edge] = True

        for i in range(num_of_friends):
            if graph_between_friends[next_edge][i] == 1:
                q.put(i)

num_of_friends_heard_about = 0

for v in is_visited:
    if v:
        num_of_friends_heard_about += 1

print(num_of_friends_heard_about)
