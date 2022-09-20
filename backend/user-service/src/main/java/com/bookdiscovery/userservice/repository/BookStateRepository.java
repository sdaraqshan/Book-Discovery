package com.bookdiscovery.userservice.repository;

import com.bookdiscovery.userservice.entity.BookState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookStateRepository extends JpaRepository<BookState,Integer> {

    BookState findByStateName(String stateName);

}
