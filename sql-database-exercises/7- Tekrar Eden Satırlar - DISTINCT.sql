 --DISTINCT sorgu sonucunda tüm satırları benzersiz yapar,
 SELECT distinct special_features
 FROM film 
 -----------------------------------
 SELECT distinct district 
 FROM address
 -----------------------------------
 SELECT distinct film_id, store_id
 FROM inventory
 ORDER BY 1,2

 --////////////////////////////////////////////////////////--

 SELECT distinct on (film_id) film_id, store_id
 FROM inventory
 ORDER BY film_id, store_id
 
 --DISTINCT ON ise belirli bir sütuna göre ilk benzersiz satırı getirir.