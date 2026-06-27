SELECT title,
		LOWER(title) lo_title,
		UPPER(title) up_title,
		INITCAP(title) ic_title
FROM film

SELECT * FROM film
where upper(title) like '%TRIP%'

