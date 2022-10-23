# Retrospect
## How did I solve?
- 여러 개의 key 를 기준으로 정렬하는 역량을 보고자 한 문제였다
- 그런데 python 을 기준으로,
  이름과 소수 전부 문자열로 casting 을 하면, ASCII 로 비교연산을 해서
  문자열 구간이 같으면 소수 구간에서 ASCII 비교연산이 들어갈거고,
  그렇게 해서 이름이 다른 경우는 사전순 정렬, 이름이 같은 경우는 키순 정렬이 되는 것과 같은 결과를 만들어내니
  sort() 를 써도 무방하겠다는 생각에 sort() 를 사용,
  어떻게 보면 cheating 수준에 가까운 기행을 저질렀었다.
## Before refactoring
- 그래서, 정석적으로 해당 문제를 풀기 위해 거쳐야 하는 과정들을 적자면
  1. define compare function
  2. preprocess the input as a formatted structure of dataset
  3. compare the 2's result using 1
  순일 것이다.

---

# Processes
## defining the dataset and convert the input
- 일단 상정하는 상황은, 두 개의 정보가 담겨있는 dataset 들을 비교한다는 것이다.
- 상상해 볼 수 있는 dataset 을 type hint 로 나타낸다면 `tuple(str, float)` 이다. 왜냐면, 사람의 이름과 사람의 신장이 들어가기 때문이다.
  - 그리고 자연스레 그 dataset 들을 담은 list 는 `list(tuple(str, float)` 이 될 것이다.
```python
import sys


num_of_people, rank_to_find = map(int, sys.stdin.readline().split())
name_and_height_str = list(map(str, sys.stdin.read().splitlines()))

```
- 이렇게 입력을 받은 뒤에
```python
def convert_to_structured_information_from_str(info_str: str) -> tuple(str, float) :
    name, height = info_str.split(' ')
    return (name, float(height))

name_and_height = list(map(convert_structured_information_from_str, name_and_height_str))
```
- 이런 식으로 변환처리를 먼저 해 주어 문자열로 들어오는 데이터들을 정형화 시킨다.

## defining the compare function
```python
def comparer(a, b) -> bool:
    if a[0] == b[0]:
        return a[1] < b[1]
    return a[0] < b[0]
```
- 0번째 property 의 대소를 비교한다.
  - 0번째가 같다면, 1번째 property 를 비교한다.
- 해당 문제에서 '이름과 키가 모두 같은 사람은 없다' 라는 조건을 주었기 때문에, 비교 연산은 1번째 property 비교에서만 마무리해도 무방하다.

## sort with compare function
```python
sorted_dataset = sorted(name_and_height, cmp_to_key(comparer))
```
- 이렇게 `functools` 에 있는 [cmp_to_key](https://docs.python.org/3/library/functools.html#functools.cmp_to_key)를 통해서 old-style function 을 key function 으로 바꾸어 sorted 혹은 list 의 sort method 의 `key` 라는 parameter 에 넣을 수 있다.
```python
sorted_dataset = sorted(name_and_height, key=lambda person: (person[0], person[1]))
```
- key function 은 tuple 로 여러 개의 key 를 받는 것도 가능하다보니, lambda function 으로 key property 안에 저렇게 tuple 을 반환하게 처리하는 식으로도 간단하게 정렬할 수 있다
  - 자세한 설명은 [python 의 key function 단락을 참조](https://docs.python.org/3/howto/sorting.html#key-functions)
## print the float type variable to 2 digits
- 이제 소수점 2자리까지 출력을 하는 일만 남았다.
- `format(float_num, '.2f')` 와 같이 '소수점 2번째 자리까지 표기한다' 라는 식으로 문자열 출력이 가능하다.
  - 관련 문서는 [해당 링크](https://docs.python.org/3/tutorial/floatingpoint.html) 참조

# code
```python
# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean

import sys

num_of_people, rank_to_find = map(int, sys.stdin.readline().split())
name_and_height_in_str = list(map(str, sys.stdin.read().splitlines()))


def convert_to_structured_information_from_str(info_str: str) -> tuple[str, float]:
    name, height = info_str.split(' ')
    return name, float(height)


name_and_height = list(map(convert_to_structured_information_from_str, name_and_height_in_str))
sorted_dataset = sorted(name_and_height, key=lambda person: (person[0], person[1]))

data_to_find = sorted_dataset[rank_to_find - 1]

print(f"{data_to_find[0]} {format(data_to_find[1], '.2f')}")

```
