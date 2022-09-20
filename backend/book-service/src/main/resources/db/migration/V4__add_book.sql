insert into book (book_id, book_name, author_id, sub_topic_id, release_date, language, pages)
select * FROM (select 34, 'Harry Potter', 17, 27, '12th September 1998', 'English', 0) as tmp where not exists (
    select book_id from book where book_id = 34
) LIMIT 1;