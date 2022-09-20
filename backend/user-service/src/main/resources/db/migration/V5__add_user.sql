insert into `user` (user_id, first_name, last_name)
select * FROM (select 6, 'Aliya', 'khan') as tmp where not exists (
    select user_id from `user` where user_id = 6
) LIMIT 1;