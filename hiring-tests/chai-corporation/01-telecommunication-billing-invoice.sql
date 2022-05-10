SELECT *
FROM customer_detail AS customer
FULL JOIN call_record AS call
    ON customer.phone_number=call.   
WHERE YEAR(dialed_on)=2018 AND MONTH(dialed_on)=5