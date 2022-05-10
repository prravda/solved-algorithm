-- 모든 records 중에서 
-- ANIMAL_ID, NAME, DATETIME 을
-- 결과는 NAME 순으로 Ascendence 정렬하고,
-- NAME 이 같다면, DATETIME 을 Descendence 순으로 정렬하여 보여준다

-- ORDER BY CONDITION_1, CONDITION_2 를 통해서
-- 첫 번째 조건, 그리고 두 번째 조건 순으로 정렬할 수 있다. 
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC;