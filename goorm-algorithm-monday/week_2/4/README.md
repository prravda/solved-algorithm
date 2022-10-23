# Retrospect
## How did I solve?
- OOP 스럽게 코드를 짰다, 즉 행위 기반으로 추상화를 했다.
  - 폭탄은 5군데에 영향을 미친다.
    - 현좌표
    - 왼쪽
    - 오른쪽
    - 위
    - 아래
  - 이 5군데에 폭탄을 떨어뜨리는 method 를 작성하고, 그 method 들을 묶어서 계산해주는 facade method 를 만들어 주는 식이었다.
## Before refactoring
- 그런데 이런 2차원 배열을 순회하는 알고리즘을 작성하는 코드들을 보니, 증가분인 dx, dy 의 경우의 수를 배열로 만든 다음 그 배열을 순회하는 식으로 더 간단하게 만든다는 걸 알게 되었다.
- 그래서 이번엔 이런 식으로 좀 더 추상화를 해 보려고 한다.

---

# Code
```python
# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys


def convert_numstr_to_int_tuple(numstr: str) -> tuple[int, int]:
    x, y = tuple(map(int, numstr.split()))
    return x, y


length_of_a_side, num_of_bomb = map(int, sys.stdin.readline().split())
list_of_explosive_coordinates = list(map(convert_numstr_to_int_tuple, sys.stdin.read().splitlines()))

dx = [0, 0, 0, 1, -1]
dy = [0, 1, -1, 0, 0]

accm = 0

while list_of_explosive_coordinates:
    x, y = list_of_explosive_coordinates.pop()

    for i in range(5):
        nx = x - 1 + dx[i]
        ny = y - 1 + dy[i]

        if 0 <= nx < length_of_a_side and 0 <= ny < length_of_a_side:
            accm += 1

print(accm)
```
- 해설에서는 2차원 matrix 를 만들고, 폭탄이 터지는 부분의 좌표(`(x, y)`)에 +1 을 해 주고 해당 matrix 의 모든 element 의 합을 더하는 식으로 문제를 해결하였다. 
- 하지만 나는 그냥 폭탄이 터진 총 갯수만 확인하는 식으로 처리하였다.