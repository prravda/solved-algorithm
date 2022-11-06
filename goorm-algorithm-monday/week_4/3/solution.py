# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys
import heapq

first_input = input()
num_of_islands, num_of_bridges, limit_of_bridge = list(map(int, first_input.split(' ')))

input_as_graph = {}
islands_to_islands = list(map(str, sys.stdin.read().splitlines()))

for c in islands_to_islands:
    start_point, end_point = c.split(' ')

    if start_point not in input_as_graph:
        input_as_graph[start_point] = {}

        if end_point not in input_as_graph[start_point]:
            input_as_graph[start_point][end_point] = {}

    input_as_graph[start_point][end_point] = 1


def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    queue = []
    heapq.heappush(queue, [distances[start], start])

    while queue:
        current_distance, current_destination = heapq.heappop(queue)

        if current_destination in distances and distances[current_destination] < current_distance:
            continue

        for new_destination, new_distance in graph[current_destination].items():
            distance = current_distance + new_distance
            if new_destination in distances and distance < distances[new_destination]:
                distances[new_destination] = distance
                heapq.heappush(queue, [distance, new_destination])

    return distances


shortest_distances = dijkstra(input_as_graph, '1')
print(shortest_distances)



