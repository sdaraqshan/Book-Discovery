package com.bookdiscovery.authorservice.repository;

import com.bookdiscovery.authorservice.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Integer> {
}
