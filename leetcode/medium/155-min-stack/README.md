# Design MinStack

## Requirements

> Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

> You must implement a solution with O(1) time complexity for each function.

## Keypoints of requirements

- retrieving the minimum element
- in constant time

## Brainstorming

- for accomplishng `O(1)` time complexity, manage minimum element value and index when pushing and poping element.

## Strategies

### properties

- elements: storing elements
- mins: storing minimum values

### push(int val)

- get the most minimum value by `mins[-1]`
  - if `mins[-1]` is None
    - append val to element
    - append val to mins
  - else
    - check val < mins[-1]
      - if val < mins[-1], append val to mins
    - append val to elements
