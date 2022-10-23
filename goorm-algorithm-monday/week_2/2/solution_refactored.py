# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
"""
point
- 굳이 subset 의 갯수를 담는 변수를 만들지 않아도 됨
- 현재, 그리고 다음 index 를 확인하는 상황이라 out of index가 걱정된다면,
  index 탐색을 마지막 직전까지만 하면 됨
- 제일 마지막 문자의 연속 여부는 loop 에서 판단 불가하니, 그냥 count + 1 해서 반환
"""
count = 0

length_of_str = int(input())
target_str = input()

for i in range(length_of_str - 1):
    if target_str[i] == target_str[i + 1]:
        continue
    else:
        count += 1

print(count + 1)
