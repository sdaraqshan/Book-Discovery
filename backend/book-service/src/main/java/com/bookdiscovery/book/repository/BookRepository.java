package com.bookdiscovery.book.repository;

import com.bookdiscovery.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer>{
}
