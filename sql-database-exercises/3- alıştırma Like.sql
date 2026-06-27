SELECT first_name ,last_name FROM customer
WHERE first_name  like '_her%'

SELECT first_name ,last_name FROM customer
WHERE first_name  Ilike '_her%'

--Ilike: büyük küçük harfe duyarlı degildir

SELECT first_name ,last_name FROM customer
WHERE first_name not Ilike '_her%'
-- Not : tersi