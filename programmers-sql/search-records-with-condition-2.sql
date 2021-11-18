-- 모든 records 중에서 
-- INTAKE_CONDITION 이 Sick 이 아닌 records 의 
-- ANIMAL_ID, NAME 을 출력한다.
-- 결과는 ANIMAL_ID 순으로 정렬한다. 
-- ANIMAL_ID 를 기준으로, ascendence (내림차순)으로 정렬한다 -> ORDER BY ANIMAL_ID
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE NOT INTAKE_CONDITION='Sick'
ORDER BY ANIMAL_ID ASC;