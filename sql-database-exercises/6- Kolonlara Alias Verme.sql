SELECT first_name || ' ' || last_name
AS Full_Name
FROM customer

-----------------------------------------------------

SELECT title AS film_title ,
length AS length_minute ,
round (length :: decimal /60,2) as length_hour,
		(2025 - release_year) as pass_year
FROM Film;
-- As : colona başlık eklemek için kullanılır