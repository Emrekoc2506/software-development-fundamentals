SELECT UPPER(title) AS up_title, 
       LOWER(description) AS lw_description
FROM film
WHERE description ILIKE '%australia%'
  AND description ILIKE '%drama%';
