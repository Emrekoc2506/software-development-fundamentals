SELECT * FROM actor
WHERE first_name = 'Penelope' ;
---------------------------------------
SELECT * FROM customer
WHERE store_id = 1;
---------------------------------------
SELECT * FROM payment
WHERE staff_id <> 2;
---------------------------------------
SELECT * FROM film
WHERE length >= 100
ORDER BY length