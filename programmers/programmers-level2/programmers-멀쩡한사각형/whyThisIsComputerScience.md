# 이것이 왜 "컴퓨터" 공학인가를 알게되었다

오늘 도전했던 문제는 프로그래머스의 "[멀쩡한 사각형](https://programmers.co.kr/learn/courses/30/lessons/62048)" 문제. 논리적으로는 맞는 답을 도출하였으나, 테스트 케이스 중에서 딱 하나를 통과하지 못 했다. 아무리 계산해 봐도 왜 이런지를 잘 모르겠어서 문제의 그 케이스를 구글에 검색했더니, 약간의 오차가 존재하기에 논리적으로는 맞는 답이지만 컴퓨터를 통해서는 그 방법으로 완전히 똑같은 답을 도출할 수 있다는 보장이 없다는 사실을 알게 되었다. 

이 오차가 왜 나오는지 조금 더 찾아보기 위해 [MDN의 Number 자료형 문서](https://developer.mozilla.org/en-US/docs/Glossary/Number)에 들어가 보았다. 

> In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754).

자바스크립트는 IEEE 754 규격의 double-precision floating point format 을 통해 number datatype 을 표현한다고 한다. 저 format 과 관련된 위키 문서가 embed 되어있어서, [그 문서](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)도 타고 들어가 봤다. 그리고 error 라는 키워드가 속해있는 단락을 찾아보았고, 상세한 설명을 들을 수 있었다. 

> Between 252=4,503,599,627,370,496 and 253=9,007,199,254,740,992 the representable numbers are exactly the integers. For the next range, from 253 to 254, everything is multiplied by 2, so the representable numbers are the even ones, etc. Conversely, for the previous range from 251 to 252, the spacing is 0.5, etc.
The spacing as a fraction of the numbers in the range from 2n to 2n+1 is 2n−52. The maximum relative rounding error when rounding a number to the nearest representable one (the machine epsilon) is therefore 2−53.
The 11 bit width of the exponent allows the representation of numbers between 10−308 and 10308, with full 15–17 decimal digits precision. By compromising precision, the subnormal representation allows even smaller values up to about 5 × 10−324.

제곱과 관련한 수식이 약간 깨지지만, 나중에 이 글을 혹시라도 참조할 사람은 이 인용구의 키워드를 뽑아 해당 위키 문서에서 검색한 뒤 그렇게 검색된 단락을 참조하면 될 듯 하다. 

요약하자면, 해당 자료형 규격에서 $2^n$ 부터 $2^{n+1}$ 를 표현할 때 사용하는 숫자의 파편(fraction) 의 크기가 $2^{n-52}$ 이고, "가장 가까운 값" 을 반환하는 특성 상 저 단위로 표현할 수 있는 범위 이상의 상세한 값을 표현하는 경우 오류가 발생할 수 있다는 이야기이다. 

다시 말 해, 내가 떠올린 방식이 논리적으로는 맞는 방식이더라도 공학/과학적인 한계 때문에 컴퓨터를 통해서 똑같은 방법으로 똑같은 값을 도출하는 게 "극히 예외적인 경우" 는 불가능하다는 이야기이다. 

지금 보면 제목이 쓸데없이 거창한 감이 있는데, 사실 저 제목 그대로 생각했다. 논리적으로는 맞는 말이더라도 공학적으로 틀리다면 공학의 기준으로 봤을 땐 틀린 것이 자명하다는 사실을 알게 되었다. 동시에,컴퓨터에 대해서 조금 더 깊이있게 공부하는 시간이 필요하다는 것 또한 느꼈다.