insert into topic(topic_id, topic_name)
select * FROM (select 16, 'Thriller') as tmp where not exists (
    select topic_id from topic where topic_id = 16
) LIMIT 1;