SELECT first_name , last_name,
		CONCAT (first_name, ' ' ,last_name) as f1,
		CONCAT (',' ,first_name,last_name) as f2,
		left (first_name,2) as f3,
		right (first_name,3) as f4,
		phone_number,
		LPAD (phone_number,14,'00') as f6,
		RPAD (phone_number,14,'00') as f7
FROM employees