import sys

num_of_exam = int(input())

for e in range(num_of_exam):
    num_of_takers = int(input())
    scores = list(map(int, sys.stdin.readline().split()))

    accm = 0

    for s in scores:
        accm += s

    mean = accm / num_of_takers

    num_of_score_over_mean = 0

    for s in scores:
        if s >= mean:
            num_of_score_over_mean += 1

    print(f"{num_of_score_over_mean}/{num_of_takers}")
