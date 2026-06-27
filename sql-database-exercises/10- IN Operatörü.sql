SELECT first_name,last_name
FROM customer
WHERE first_name IN ('Leslie','Kelly','Tracy');
------------------------------------------------------
SELECT * FROM film
WHERE rating IN ('R','G')
------------------------------------------------------
SELECT * FROM address
WHERE district IN ('Texas','Nantou','Moskova');
------------------------------------------------------
SELECT * FROM address
WHERE address_id IN (10,20,30)