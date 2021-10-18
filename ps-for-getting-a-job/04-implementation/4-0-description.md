# Implementation

# Description

- 구현은 말 그대로이다. 요구사항에 맞는 code 를 만들어 case 별로 valid 한 output 을 내는 것.
- 별도의 알고리즘 유형이 필요하지 않은 문제이기 때문에, 상대적으로
    - 코드 피지컬 (코드로 옮겨낼 수 있는 능력 정도라고 하면 될 듯, 쉽게 말해서 해당 언어의 숙련도)
    - 정확한 독해 (문제가 상당히 길고 복잡한 경우가 많기 때문에 문제와 요구조건을 정확히 이해해야 함)
    - Edge case handling (복잡한 문제와 요구사항만큼 다양한 경우로 testing 이 들어가기 때문에 각 case 에 대한 handling 이 필요하다, 하드코딩 말고!)

  와 같은 역량이 다른 알고리즘 유형보다 더욱 중요하다.


## Constraints

- 비단 구현 문제에서뿐만이 아니라, 알고리즘 테스트에서 정말 중요하게 보아야 하는 것에 대해서도 설명하는데
    - 코딩테스트 실행환경 (메모리 제한)
    - input 의 갯수
        - 이를 기반으로 한 time complexity

  를 강조했다. (다시 한 번 말하지만 이는 구현 문제에만 해당되는 중요한 점이 아니다. computational thinking 을 위해선 전부 다 중요한 과정들이다)

- 특히, 자신이 주력으로 사용하는 언어에서 기초적인 자료형(primitive type)들의 크기가 얼마나 되는지를 확인해야 할 필요가 있다.
    - javascript 기준으로 확인했을 때
        - number: 64 bit → 8 byte
        - string: 16 bit → 2 byte

      의 크기라는 걸 [MDN 에서 확인할 수 있었다.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

    - 그래서 이를 기반으로 memory constraint 를 확인하고, 그를 계산할 수 있어야 한다.
    - 예를 들어, 128MB 의 메모리로 실행환경이 제한된다면,
        - number[] 기준 128 * 1024 * 1024 / 8 개의 element
        - string[] 기준 128 * 1024 * 1024 / 2 개의 element

      가 들어있는 array 를 만들 수 있다고 보면 된다 (실제로는 memory 에 load 된 함수 등을 고려하였을 때 더 빡빡하게 잡아야겠지만)