package com.bookdiscovery.userservice.repository;

import com.bookdiscovery.userservice.dto.PrimaryKeyForUserBooks;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.UserBooks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserBooksRepository extends JpaRepository<UserBooks, PrimaryKeyForUserBooks> {
    long countByBookState(BookState bookState);
}
