SELECT first_name, last_name, first_name || '.' || last_name || '@roketsan.net',
		salary ,
		salary * 1.35
FROM employees