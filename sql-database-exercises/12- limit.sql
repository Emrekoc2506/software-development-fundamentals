SELECT * FROM actor
ORDER BY First_name ,last_name
limit 5;
-----------------------------------
SELECT film_id, title FROM film
ORDER BY film_id
limit 5 offset 4;
-- LIMIT  : kaç satır getirileceğini 
-- OFFSET : ise kaç satır atlayıp başlayacağını belirler.