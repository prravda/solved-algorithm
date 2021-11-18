-- 모든 records 중에서 
-- ANIMAL_ID 를 기준으로, ascendence (내림차순)으로 정렬한다 -> ORDER BY ANIMAL_ID
SELECT NAME, DATETIME FROM ANIMAL_INS 
ORDER BY ANIMAL_ID DESC;