package com.bookdiscovery.categoryservice.repository;

import com.bookdiscovery.categoryservice.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicRepository extends JpaRepository<Topic, Integer> {
}
