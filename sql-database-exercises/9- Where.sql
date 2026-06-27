SELECT * FROM film
WHERE length < 100
AND rental_duration < 5;
------------------------------------------------------
SELECT * FROM address
WHERE district = 'Adana'
		AND city_id =5;
------------------------------------------------------
SELECT * FROM payment
WHERE staff_id =2
OR amount< 5;
			