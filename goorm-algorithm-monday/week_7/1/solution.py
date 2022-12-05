# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
case_of_events, num_of_users = tuple(map(int, input().split(' ')))

frequency_of_event = {}

max_freq = -1

for _ in range(num_of_users):
    info = list(map(int, input().split(' ')))
    events = info[1:]

    for e in events:
        if frequency_of_event.get(e) is None:
            frequency_of_event[e] = 1
        else:
            frequency_of_event[e] += 1

        if frequency_of_event[e] >= max_freq:
            max_freq = frequency_of_event[e]

most_frequent_events = []

for e in frequency_of_event:
    if frequency_of_event[e] == max_freq:
        most_frequent_events.append(e)

result_in_list = list(map(str, sorted(most_frequent_events, reverse=True)))
print(' '.join(result_in_list))
